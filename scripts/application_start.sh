#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/auto-deploy-nodejs

#navigate into our working directory where we have all our github files
cd /home/ec2-user/auto-deploy-nodejs

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

# use node 16.19.0

nvm use 16

npm install -g pm2
#install node modules

# npm install


# run prisma

npx prisma generate

# npx prisma migrate deploy --schema=./src/prisma/schema.prisma

npm run deploy:test

# build 

# npm run build



pm2 delete wct_test
pm2 start app.js --name wct_test