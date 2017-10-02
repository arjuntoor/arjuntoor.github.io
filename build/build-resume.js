// Imports
const objgen = require('objgen/objgen').ObjGen
const fs = require('fs');
const readline = require('readline');

// Other constants
const resumeRaw = 'src/resume.txt';
const resumeJson = 'dist/resume.json';
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
    var content = convertStringArrays(rawFileContents);
    content = convertToJson(content);
    content = convertCommaCodes(content);

    saveFile(content, {name:resumeJson});
}

/**
 * Converts any 'stringArray' in the given contents to an ObjGen-compatible format.
 * @param {*} contents 
 */
function convertStringArrays(contents) {  
    var lines = contents.split('\n');
    var resultLines = [];
    var line;
    
    for (var i=0; i<lines.length; i++) {
        line = lines[i];
        
        if (line.indexOf(stringArrayStartTag) > -1) {
            var arrayName = line.split(' ')[1];
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
 * Replaces all of the encoded commas back into an actual comma.  
 * This is done after the ObjGen conversion
 * @param {*} contents 
 */
function convertCommaCodes(contents) {
    return contents.replace(/&#44;/g, ',');
}

/**
 * Cleans up the given line.  
 * This is done before the ObjGen conversion
 * @param {*} line 
 */
function normalise(line) {
    return line.replace(/,/g, '&#44;').replace('value = ', '').trim();
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

main();