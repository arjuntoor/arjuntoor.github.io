
var objgen = require('objgen/objgen').ObjGen
var fs = require('fs');

fs.readFile('src/resume.txt', 'utf8', function(err, raw_file) {  
    if (err) console.log(err);
    
    var json = convertToJson(raw_file);
    saveFile(json, {name:'dist/resume.json', overwrite:true});
});


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