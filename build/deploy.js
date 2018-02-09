// Imports
const fs = require('fs');
const fsextra = require('fs-extra');
const sleep = require('system-sleep');
const prompt = require('prompt');
const chalk = require('chalk');
const util = require('./util.js');

// Other vars
const log = console.log;
const path = "dist/";
var files = [];


function loadFiles() {
    util.clearConsole();
    console.log(chalk.green("Just getting stuff ready..."));
    fs.readdir(path, function(err, items) {
        for (var i=0; i<items.length; i++) {
            files[i] = {'id': i, 'file': items[i]};
        }
    });
}

function askWhichFile() {
    var choice = -1;
    util.clearConsole();
    log(chalk.green("Please pick which file you want to deploy"));

    for (var i=0; i<files.length; i++) {
        log(`${files[i].id}.  ${files[i].file}`);
    }
    
    prompt.start();
    prompt.get('choice', function(err, result) {
        if (err) {
            log(err); return;
        }
        
        try {
            choice = parseInt(result.choice);
            if (isNaN(choice) || choice >= files.length || choice < 0) {
                log(chalk.red('Bad choice...'));  return; 
            }
            deploy(choice);
        } catch (error) {
            log(error);
        }
    });
}

function deploy(choice) {
    var file = files.find(function(e) {
        return e.id == choice;
    });
    fsextra.copySync(path + file['file'], "index.html");
    log(chalk.green('Done.\nNow, "git commit && git push", then go to https://<username>.github.io to see the live CV.'));

    log('\n\n');    
}

function main() {
    loadFiles();
    sleep(1500);
    askWhichFile();
}

main();