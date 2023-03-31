- Live: https://boilerplate.saeidmohadjer.com/
- GitHub: https://github.com/smohadjer/boilerplate

## Summary
The Website is a static HTML site hosted on GitHub Pages for free via a custom domain. On every commit to GitHub, GitHub actions builds and deploys the static site to GitHub Pages.

## Running Website locally
````
git clone https://github.com/smohadjer/boilerplate.git
cd boilerplate
npm install
npm start
vercel dev
````
Open Website at: http://localhost:3000

## Favicon and touch icons
Use https://redketchup.io/favicon-generator to generate and add favicons and shortcut icons for touch devices. Select `Generate the favicon from text`, use `Open Sans` as font, set font-size to 100 and bold and colors matching color scheme of website you are building. If you wish to use round corner note that Apple doesn't allow it in touch icons, so you need later to replace Apple touch icon with a one without a round courner. Download zip, unzip folder and copy/paste files to root of the website. These files will be copied to dist folder during build. You also need to add below snippet to heard of your pages:
````
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="manifest" href="site.webmanifest">
````

## Hosting your Website via GitHub Pages
By default a site hosted on GitHub Pages is available at `https://username.github.io/repository/`. If you wish to use a custom domain for your site you need to add `CNAME` and `A` records as described at:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain

In short you need two changes:
- Add an `A` record to your DNS so domain yourdomain.com points to following ip numbers:
````
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
````
- Add a `CNAME` record to your DNS so that the subdomain www.yourdomain.com or any other subdomain you wish to use directs to `yourusername.github.io`.

Instructions for updating DNS settings on hover.com:
https://dev.to/nickymarino/pointing-a-github-pages-repo-to-a-hover-domain-105e

Use dig command in terminal to find out if your DNS changes have propagated:
`dig myapexdomain.com +nostats +nocomments +nocmd`

## Updating Website on GitHub
### Editing an existing page
To edit an existing page, go to your repository, make sure `Code` tab is selected and that you are on `master` branch. In directory listing go to `app/content/pages` and select the page that you wish to edit, click <img width="37" style="vertical-align: middle;" alt="Screenshot 2023-01-27 at 11 37 48" src="https://user-images.githubusercontent.com/1375720/215066559-762c3335-a265-44e9-8845-fa468ab55bed.png">
 button and start editing the content of the file. When done, press <img width="110" alt="Screenshot 2023-01-27 at 11 32 20" src="https://user-images.githubusercontent.com/1375720/215065884-6a215381-cb73-40ad-a62e-44ef41072750.png"> button and your changes will be live in a few minutes.


### Adding a new page
To add a new page on Github an easy way is to copy content of an existing page and paste it in a new page and then edit the new page. To do this go to one of the pages in `app/content/pages` folder and then click on <img width="22" alt="Screenshot 2022-11-24 at 21 46 27" src="https://user-images.githubusercontent.com/1375720/203860858-2dcd304f-13b3-4f28-a353-9a68aa2b89de.png"> with label `Copy raw contents`. Then go to back to pages folder and click the `Add file` button and select `Create new file` and paste the content you had copied inside it and start editing the content. When done, press <img width="110" alt="Screenshot 2022-11-24 at 21 47 56" src="https://user-images.githubusercontent.com/1375720/203860961-14e97ea0-58c3-4844-ba3c-556657d33c34.png"> button and the new page will be live in a few minutes.
