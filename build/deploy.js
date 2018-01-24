var fs = require('fs');
var fsextra = require('fs-extra');
var sleep = require('system-sleep');
var prompt = require('prompt');
var chalk = require('chalk');

const log = console.log;

var path = "dist/";
var files = [];


function loadFiles() {
    console.log(chalk.green("Just getting stuff ready..."));
    fs.readdir(path, function(err, items) {
        for (var i=0; i<items.length; i++) {
            files[i] = {'id': i, 'file': items[i]};
        }
    });
}

function askWhichFile() {
    var choice = -1;
    console.clear();
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
    console.clear();
    loadFiles();
    sleep(1500);
    askWhichFile();
}

main();