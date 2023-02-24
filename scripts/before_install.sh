#!/bin/bash

#create our working directory if it doesnt exist
DIR="/home/ec2-user/auto-deploy-nodejs"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
  sudo rm -rf ${DIR}
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi