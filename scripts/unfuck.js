const fs = require('fs');

var mapTemplate = JSON.parse(fs.readFileSync('../EasyStandard.dat', 'utf8'));



mapTemplate._notes.forEach(note => {
	note._time = (Math.round(note._time * 8) / 8)
})


fs.writeFile('test.dat', JSON.stringify(mapTemplate), 'utf8', smt => console.log(smt));