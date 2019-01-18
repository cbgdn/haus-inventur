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
    package.name = result.name;
    package.description = result.description;

    var data = JSON.stringify(package, null, 2)+"\n";

    fs.writeFile(__dirname+'/../package.json', data, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('editing package.json');
        // process.exit();
    });
});
