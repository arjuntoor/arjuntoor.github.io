# My Resume

This is a package to make the creation of a modern, web-based resume (CV) much easier.  It is built using [JSON Resume](https://jsonresume.org) and [ObjGen](https://www.npmjs.com/package/objgen).

JSON Resume is an excellent initiative.  The main limitation is that I find it is time consuming end error-prone to write JSON by hand.  Also the end-to-end process  is not quite fully automated.

This package aims to fix that by allowing you to write your resume using the ObjGen format instead.  It then builds the final resume using a single `npm` command, and stores a copy of it locally.



# Workflow

## Pre-requisites
1. Ensure you have NodeJS, git and Python installed 
1. Clone this repo
1. `cd` into the `my-resume` directory, then enter `npm install` to install dependencies

## Editing and publishing
1. Edit the raw text resume
1. Run conversions
1. Choose how you want to publish the resume

#### Edit the raw text resume
Edit `src/resume.txt` as required.  The syntax of this file is easier to edit than pure JSON.  See src/README.md for more details.

#### Run conversions
1. Run `npm run convert` to generate the resume in JSON Resume format

#### Choose how you want to publish the resume
1. `publish.sh` - this will generate the resume then upload it to pythonanywhere
