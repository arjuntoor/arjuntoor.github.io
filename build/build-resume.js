// Imports
const objgen = require('objgen/objgen').ObjGen
const fs = require('fs');
const readline = require('readline');

// Other constants
const resumeRaw = 'src/resume.txt';
const resumeOut = 'build/resume.json';
const resumeEncoding = 'utf8';
const stringArrayStartTag = '#startStringArray';
const stringArrayEndTag = '#endStringArray';


function main() {
    fs.readFile(resumeRaw, resumeEncoding, buildResume);
}

/**
 * 
 * @param {*} error 
 * @param {*} rawFileContents 
 */
function buildResume(error, rawFileContents) {  
    if (error) throw error;
    var intermediate = convertStringArrays(rawFileContents);
    //console.log(intermediate);
    var json = convertToJson(intermediate);
    saveFile(json, {name:resumeOut});
}


function convertStringArrays(contents) {  
    var lines = contents.split('\n');
    var resultLines = [];
    var line;
    
    for (var i=0; i<lines.length; i++) {
        line = lines[i];
        
        if (line.indexOf(stringArrayStartTag) > -1) {
            var arrayName = line.split(' ')[1];
            
            i++; //advance to first line after start tag
            
            var linesToMerge = [];
            
            while (lines[i].indexOf(stringArrayEndTag) == -1) {
                linesToMerge.push(normalise(lines[i]));
                i++;
            }
            i++; // move past end array tag
            line = `  highlights [] s = ${linesToMerge.join(',')}`;
        }
        
        resultLines.push(line);
    }
    
    return resultLines.join('\n');
}


/**
 * Converts the given line into the required format. 
 * @param {*} line 
 */
function normalise(line) {
    return line.replace(/,/g, '&#44;').replace('desc = ', '').trim();
}


/**
 * Converts input to json using ObjGen. 
 * Input must be in ObjGen format
 * @param {*} input 
 */
function convertToJson(input) {
    console.log("Converting the resume to json");
    return objgen.xJson(input, {numSpaces: 2});
}


/**
 * Saves the given content to a file
 * @param {*} json 
 * @param {*} options 
 */
function saveFile(content, options) {
    var dest = options.name;
    fs.writeFile(dest, content, resumeEncoding, (err) => {
        if (err) throw err;
        console.log(`File saved to ${dest}`);
    });
}

main()