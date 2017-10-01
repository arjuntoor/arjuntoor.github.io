# My Resume

This is a package to make the creation of a modern, web-based resume (CV) much easier.  It is built using [JSON Resume](https://jsonresume.org) and [ObjGen](https://www.npmjs.com/package/objgen).

JSON Resume is an excellent initiative.  The main limitation is that I find it is time consuming end error-prone to write JSON by hand.  Also the end-to-end process  is not quite fully automated.

This package aims to fix that by allowing you to write your resume using the ObjGen format instead.  It then builds the final resume using a single `npm` command, and stores a copy of it locally.



# Workflow

## Pre-requisites
1. Ensure you have NodeJS, npm and git installed 
1. Clone this repo
1. `cd` into the `my-resume` directory, then enter `npm install` to install dependencies


## Editing and publishing

#### Edit the raw text resume
Edit `src/resume.txt` as required.  See the offical [schema](https://jsonresume.org/schema/) to see what you can include, and the ObjGen website for syntax of the text file.

#### Run conversions
1. Run `npm run convert`
This creates your resume in final JSON format in dist/resume.json.

#### Preview / export
1. Run `npm run preview`  
This will open a web browser displaying your resume in HTML.  You can save the page to keep a copy of your resume, however there appear to be some bugs with the JSON Resume cli.  Pictures do not always display properly.  If you need additional themes, download them with [npm](https://www.npmjs.com/search?q=json+resume+theme)

1. Use the [live editor](http://registry.jsonresume.org/)  
This is a more reliable way to explore all the themes.  Paste the contents of your resume.json into the JSON area then select the theme.  When you're happy, use your browser to 'Save Frame As...', to download a local copy of your resume.
