var exports = module.exports = {}

exports.clearConsole = function() {
    if (console.clear) {
        console.clear();
    } else {
        console.log('\033[2J');
    }
}

