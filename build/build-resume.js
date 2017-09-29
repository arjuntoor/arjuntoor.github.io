
var objgen = require('objgen/objgen').ObjGen
var fs = require('fs');
const readline = require('readline');


function main() {
    fs.readFile('src/resume.txt', 'utf8', buildResume);
}

/**
 * 
 * @param {*} error 
 * @param {*} rawFileContents 
 */
function buildResume(error, rawFileContents) {  
    if (error) throw error;
    var intermediate = convertStringArray(rawFileContents);
    //var json = convertToJson(intermediate);
    //saveFile(json, {name:'dist/resume.json'});
}


function convertStringArray(contents) {
    const rl = readline.createInterface({
        input: fs.createReadStream('src/resume.txt')
    });
    
    rl.on('line', (line) => {
        if (line.indexOf("#startStringArray") > -1) {
            console.log(line);
        }
    });

    
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
    fs.writeFile(dest, content, 'utf8', (err) => {
        if (err) throw err;
        console.log('File saved to ' + dest);
    });
}

main()