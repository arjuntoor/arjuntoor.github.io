# My Resume

This resume has been created using [JSON Resume](https://jsonresume.org) and [ObjGen](www.objgen.com/json).



## Workflow

### One-off 
1. Ensure you have NodeJS, git and Python installed 
1. Clone this repo
1. `cd my-resume` then type `npm install` to install dependencies

### Editing and publishing
1. Edit the raw text resume
1. Run conversions
1. Choose how you want to publish the resume

## Edit the raw text resume

Edit `src/resume.txt` as required.  The syntax of this file is easier to edit than pure JSON.  See src/README.md for more details.

## Run conversions

1. Run `python conversion/convert-string-arrays.py` if using the `#startStringArray` shortcut.  This overcomes a slight limitation in the ObjGen format
1. Run `npm run jsonify` to generate the resume in JSON Resume format

## Choose how you want to publish the resume

1. `publish.sh` - this will generate the resume then upload it to pythonanywhere
