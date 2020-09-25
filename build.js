const fs = require('fs');
var c = require("./compile.js")
var s = require("./scripts/squeeze.js")

console.log(test);

var mapTemplate = JSON.parse(fs.readFileSync('EasyStandard.dat', 'utf8'));
var customEvents = require('./noodle.js').noodle;

customEvents._customEvents.push(...s.squeeze())

fs.writeFile('ExpertPlusStandard.dat', JSON.stringify(c.compile(mapTemplate, customEvents)), 'utf8', smt => console.log(smt));
