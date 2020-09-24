polling = 200

output = []
maxScale = 0.6
scaleOffset = 0

for (i = 0; i <= 1; i+=1/polling) {
	scale = Math.pow(i * maxScale , 2)
	console.log(Math.random(0, 1)*scale);
	output.push([Math.random(0, 1)*scale, Math.random(0, 1)*scale, Math.random(0, 1)*scale, i, "easeLinear"])
}




var fs = require('fs');
fs.writeFile('myjsonfile.json', JSON.stringify(output), 'utf8', smt => console.log(smt));