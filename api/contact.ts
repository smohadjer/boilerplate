import nodemailer from 'nodemailer';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  company_website?: unknown;
  first_name?: unknown;
  birthday?: unknown;
  email?: unknown;
  comments?: unknown;
  privacy?: unknown;
};

type Request = {
  method?: string;
  body?: ContactPayload | string;
};

type Response = {
  setHeader(name: string, value: string | string[]): void;
  status(code: number): Response;
  json(payload: Record<string, unknown>): void;
};

function getBody(body: Request['body']): ContactPayload {
  if (typeof body === 'string') {
    return Object.fromEntries(new URLSearchParams(body));
  }

  return body ?? {};
}

function getString(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export default async function handler(req: Request, res: Response) {
  res.setHeader('Allow', 'POST');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const payload = getBody(req.body);
  const honeypot = getString(payload.company_website, 200);

  if (honeypot) {
    return res.status(200).json({ message: 'Your message was sent successfully.' });
  }

  const firstName = getString(payload.first_name, 100);
  const birthday = getString(payload.birthday, 10);
  const email = getString(payload.email, 254).toLowerCase();
  const comments = getString(payload.comments, 5000);
  const privacyAccepted = payload.privacy === true || payload.privacy === 'true';

  if (!firstName || !EMAIL_PATTERN.test(email) || !comments || !privacyAccepted) {
    return res.status(400).json({
      error: 'Please complete all required fields correctly.'
    });
  }

  const user = process.env.email_username;
  const pass = process.env.email_password;
  const recipient = process.env.email_to;

  if (!user || !pass || !recipient) {
    console.error('Missing email_username, email_password, or email_to environment variable.');
    return res.status(500).json({ error: 'Your message could not be sent.' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.fastmail.com',
    port: 465,
    secure: true,
    auth: { user, pass }
  });

  const text = [
    `Name: ${firstName}`,
    `Date of birth: ${birthday || 'Not provided'}`,
    `Email: ${email}`,
    '',
    'Comment:',
    comments
  ].join('\n');

  try {
    await transporter.sendMail({
      from: user,
      to: recipient,
      replyTo: email,
      subject: `Contact request from ${firstName}`,
      text
    });

    return res.status(200).json({ message: 'Your message was sent successfully.' });
  } catch (error) {
    console.error('Contact email failed:', error);
    return res.status(500).json({ error: 'Your message could not be sent.' });
  }
}
