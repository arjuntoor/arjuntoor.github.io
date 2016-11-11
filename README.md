# My Resume

This resume has been created using [JSON Resume](https://jsonresume.org) and [ObjGen](www.objgen.com/json).

After cloning this repo, type `npm install` from the base directory to install dependencies.  All of the following commands should also be done from the base directory.

## To edit the resume

Edit `resume.txt` as required.  The syntax of this file is easier to edit than pure JSON.

Once the edits are final in the text file, it needs to be translated into JSON format; to do so, follow these steps:

1. Run `python conversion/convert-string-arrays.py` if using the `#startStringArray` shortcut
1. Run the output through the ObjGen JSON generator
1. Save this output into `resume.json`

## To publish

1. `publish.sh` - this will generate the resume then upload it to pythonanywhere
