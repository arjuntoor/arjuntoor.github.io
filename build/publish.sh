#!/bin/bash

echo "About to serve resume..."
resume serve --theme elegant --port 4000 > /dev/null &
PID=$!

sleep 2

echo "Saving as html"
wget localhost:4000 -q -O out/resume.html

echo "Killing server"
kill ${PID}

echo "Copying resume to server"
scp out/resume.html arjuntoor@ssh.pythonanywhere.com:~/sites/templates/me/

echo "Done - visit arjuntoor.co.uk/me/resume to see the changes"
