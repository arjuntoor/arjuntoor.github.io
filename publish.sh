#!/bin/bash

echo "About to serve resume..."
resume serve --theme elegant --port 4000 > /dev/null &
PID=$!

sleep 2

echo "Saving as html"
wget localhost:4000 -O out/resume.html

echo "Done"
