#Guid to setting up auto-deployment from github to live site

URL of live site: http://mysite.com/
Repo: https://github.com/username/mysite.com.git

Requirements:
Apache, PHP, and Git should be installed on server hosting live site.

##First time deployment to live server
- Add a domain in plesk with correct username for new Website
- $ gulp build and then copy built files from dist folder to Website's root folder via ftp
- ssh username@ipaddress
- cd /var/www/vhosts/mysite.com/
- mkdir .git && cd .git
- $ git init --bare
- if there is no .ssh folder in user's home directory run $ ssh-keygen to create ssh files
- Copy user's public ssh key and add it to github as deploy key under settings
- Add a web hook to repository with a payload like: http://mysite.com/deploy.php?sat=deploy9665!

##Updating live site
- Content resources (all files inside content folder) will be deployed automatically via webhook that triggers whenever repo receives a push. Deployment script taken from: https://github.com/markomarkovic/simple-php-git-deploy
- Development resources are updated manually via ftp from dist folder after every new build.
- - -

##Tips for developer
- To find out which user is running php, create a php file with content <?php echo exec('whoami'); ?> and open it in browser. You can create the fie in terminal using this command:
$ echo '<?php echo exec('whoami'); ?>' > whoami.php

##Troubleshooting
- If you can't access Website in browser, check site logs in Plesk. It can be that .htaccess is missing or the site folder doesn't have executive permission. Use $ chmod 755 folderName to set folder permission to drwxr-xr-x.
