// require modules
var fs = require('fs');
var prompt = require('prompt');
var package = require('../package.json');

var schema = {
    properties: {
        name: {
            description: 'Projektname',
            pattern: /^[a-zA-Z0-9_\-]+$/,
            message: 'Bitte gib einen Projektnamen bestehend aus Buchstaben, Zahlen, _ und - ein.',
            default: package.name,
            required: true
        },
        description: {
            description: 'kurze Projektbeschreibung',
            default: package.description
        }
    }
};

prompt.start();

prompt.get(schema, function (err, result) {
    prompt.stop();
    package.name = result.name;
    package.description = result.description;

    var packageData = JSON.stringify(package, null, 2)+"\n";

    // edit package.json
    fs.writeFile(__dirname+'/../package.json', packageData, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('editing package.json');
    });

    // Edit index.html
    fs.readFile(__dirname+'/../index.html', 'utf8', function (err, indexData) {
        if (err) {
            return console.log(err);
        }

        indexData = indexData.replace(/{Projektname}/g, result.name);
        indexData = indexData.replace(/{Projektbeschreibung}/g, result.description);

        fs.writeFile(__dirname+'/../index.html', indexData, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }

            console.log('editing index.html');
        });
    });
});
