var fs = require('fs');
var path = require('path');
// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");

var imagesDirectory = path.join(__dirname, '..', 'images');
const json = [];

// Loop through all the files in the temp directory
fs.readdir(imagesDirectory, function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach(function (file, index) {
        const filePath = path.join(imagesDirectory, file);
        const statsObj = fs.statSync(filePath);
        const name = file.split(".")[0];

        const obj = {
            name: name,
            src: camelCase(name),
            tags: [],
            date: new Date(statsObj.birthtime).getTime(),
        };

        json.push(obj);
    });

    const sorted = json.sort((a, b) =>  b.date - a.date);

    fs.writeFile('wallpapers.json', JSON.stringify(sorted), () => {
        console.log("done");
    });

});


function camelCase(str) {
    return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}