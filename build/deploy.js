var fs = require('fs');
var fsextra = require('fs-extra');
var sleep = require('system-sleep');
var prompt = require('prompt');

var path = "dist/";
var files = [];


function loadFiles() {
    fs.readdir(path, function(err, items) {
        for (var i=0; i<items.length; i++) {
            files[i] = {'id': i, 'file': items[i]};
        }
    });
}

function askWhichFile() {
    var choice = -1;

    console.log("Please pick which file you want to deploy");

    for (var i=0; i<files.length; i++) {
        console.log(`${files[i].id}.  ${files[i].file}`);
    }
    
    prompt.start();
    prompt.get('choice', function(err, result) {
        if (err) {
            console.log(err); return;
        }
        
        try {
            choice = parseInt(result.choice);
            if (isNaN(choice) || choice >= files.length || choice < 0) {
                console.log('Bad choice...');  return; 
            }
            deploy(choice);
        } catch (error) {
            console.log(error);
        }
    });
}

function deploy(choice) {
    var file = files.find(function(e) {
        return e.id == choice;
    });
    fsextra.copySync(path + file['file'], "index.html");
    console.log('Done. Now push this repo and go to arjuntoor.github.io to see the live CV.');
}

function main() {
    loadFiles();
    sleep(1500);
    askWhichFile();
}

main();