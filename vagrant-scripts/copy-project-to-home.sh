#!/bin/bash

# This copies the project to the home directory in the vagrant box so that we are able to 'npm install'.  
# You can't do that in a vagrant mounted folder.

# Currently this should be run from inside vagrant

cp -rf /vagrant/* /home/vagrant/my-resume/