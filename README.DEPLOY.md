Deployment from Github to Live

The boilerplate offers automated updating of content on live Website. Every time a commit is pushed into master branch on github, a webhook is triggered which posts a request containing details of the commit to this payload url:

http://boilerplate.saeidmohadjer.com/deploy.php?sat=mySecretCode

The deploy.php on production server then runs a series of commands to fetch the changes from Github repository. For more info about how depoloy.php works see its own repository at: https://github.com/markomarkovic/simple-php-git-deploy/

For deploy.php to be able to fetch changes git should be install on production server. Also since deploy.php clones github repository on production server github needs to have public ssh key of server's user added to repository's deploy keys and github should also be added to known_hosts of producton server. Below are steps on how to do these:

- Login to Plesk on your server, find website that you are setting up deployment for, select "Webhosting-Zugang" and note username and password of system user. Make sure this user has ssh access to the server. If you don't see or have the password for the user, setup a new one for him. 
- Open your cli and login to server via ssh using username and password of the system user. Run pwd to make sure you are in home directory of your project. Then generate ssh keys for this user in your project folder by running: "ssh-keygen -t rsa" and without setting a pass phrase. This will create private and public ssh keys in .ssh folder. 
- Copy the public ssh key and add it to your repository's Settings > Deploy keys. 
- If github has not been added to your server's known_hosts then ssh to your server as root user and add github to ~/.ssh/known_hosts.
