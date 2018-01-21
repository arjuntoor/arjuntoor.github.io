# My Resume

This is a package to make the creation of a modern, web-based resume (CV) much easier.  It is built using [JSON Resume](https://jsonresume.org) and [ObjGen](https://www.npmjs.com/package/objgen).

JSON Resume is an excellent initiative.  The main limitation is that it is time consuming end error-prone to write JSON by hand.

This package aims to fix that by allowing you to write your resume using the ObjGen format instead.  It then builds the JSON file required by `json-resume` resume using a single `npm` command.  There are also other options from previewing the resume locally, without using the JSON Resume website.

This package was created as a kind of experiment / exercise on using `npm` and `node`. It's not perfect!

## Future Improvements
I would like to develop something even more user-friendly than writing ObjGen.  Also, using `resume-cli` as part of the `npm` workflow doesn't seem to work too well.  


## Pre-requisites
1. Ensure you have NodeJS, npm and git installed 
1. Clone this repo
1. `cd` into the `my-resume` directory, then enter `npm install` to install dependencies


## Editing and publishing

#### 1. Edit the raw text resume
Edit `src/resume.txt` as required.  See the offical [schema](https://jsonresume.org/schema/) to see what you can include, and the ObjGen website for syntax of the text file.

Note that if you need an array of strings where the strings may contain commas, you must use a special syntax as follows.

```
#startStringArray <array-name>
    value = <value1>
    ...
    value = <valueN>
#endStringArray
```

This is due to a limitation with ObjGen where strings in an array cannot contain commas (as ObjGen uses commas to separate the elements).  _My Resume_ handles this special syntax at the time of conversion.

#### 2. Run conversions
1. Run `npm run convert`
This creates your resume in its final JSON format under dist/resume.json.

#### 3. Preview / export
1. Run `npm run preview`  
This will open a web browser displaying your resume in HTML.  You can save the page to keep a copy of your resume, however there appear to be some bugs with the JSON Resume cli.  Pictures do not always display properly.  If you need additional themes, download them with [npm](https://www.npmjs.com/search?q=json+resume+theme)

1. Use the [live editor](http://registry.jsonresume.org/)  
This is a more reliable way to explore all the themes.  Paste the contents of your resume.json into the JSON area then select the theme.  When you're happy, use your browser to 'Save Frame As...', to download a local copy of your resume.

#### 4. Deploy
1. Run `npm deploy`
This will ask you which version of the resume you want to deploy.