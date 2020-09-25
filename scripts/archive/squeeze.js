input = [
	{
		"_time": 569,
		"_lineIndex": 1,
		"_lineLayer": 0,
		"_type": 0,
		"_cutDirection": 1
	},
	{
		"_time": 569,
		"_lineIndex": 2,
		"_lineLayer": 0,
		"_type": 1,
		"_cutDirection": 1
	},
	{
		"_time": 569.75,
		"_lineIndex": 1,
		"_lineLayer": 2,
		"_type": 0,
		"_cutDirection": 0
	},
	{
		"_time": 569.75,
		"_lineIndex": 3,
		"_lineLayer": 2,
		"_type": 1,
		"_cutDirection": 0
	},
	{
		"_time": 570.25,
		"_lineIndex": 1,
		"_lineLayer": 0,
		"_type": 0,
		"_cutDirection": 1
	},
	{
		"_time": 570.25,
		"_lineIndex": 2,
		"_lineLayer": 0,
		"_type": 1,
		"_cutDirection": 1
	},
	{
		"_time": 571,
		"_lineIndex": 0,
		"_lineLayer": 2,
		"_type": 0,
		"_cutDirection": 0
	},
	{
		"_time": 571,
		"_lineIndex": 2,
		"_lineLayer": 2,
		"_type": 1,
		"_cutDirection": 0
	},
	{
		"_time": 571.75,
		"_lineIndex": 0,
		"_lineLayer": 1,
		"_type": 0,
		"_cutDirection": 6
	},
	{
		"_time": 571.75,
		"_lineIndex": 1,
		"_lineLayer": 0,
		"_type": 1,
		"_cutDirection": 6
	},
	{
		"_time": 572.25,
		"_lineIndex": 2,
		"_lineLayer": 2,
		"_type": 0,
		"_cutDirection": 5
	},
	{
		"_time": 572.25,
		"_lineIndex": 3,
		"_lineLayer": 1,
		"_type": 1,
		"_cutDirection": 5
	},
	{
		"_time": 573,
		"_lineIndex": 2,
		"_lineLayer": 0,
		"_type": 0,
		"_cutDirection": 7
	},
	{
		"_time": 573,
		"_lineIndex": 3,
		"_lineLayer": 1,
		"_type": 1,
		"_cutDirection": 7
	},
	{
		"_time": 573.75,
		"_lineIndex": 0,
		"_lineLayer": 1,
		"_type": 0,
		"_cutDirection": 4
	},
	{
		"_time": 573.75,
		"_lineIndex": 1,
		"_lineLayer": 2,
		"_type": 1,
		"_cutDirection": 4
	},
	{
		"_time": 574.25,
		"_lineIndex": 0,
		"_lineLayer": 0,
		"_type": 0,
		"_cutDirection": 1
	},
	{
		"_time": 574.25,
		"_lineIndex": 3,
		"_lineLayer": 0,
		"_type": 1,
		"_cutDirection": 1
	}
]


strength = 0.25;
center = [1.5, 1]
polling = 25;

localDuration = [0, 0.1, 0.9, 1]
globalDurationScale = 0.1;
globalDurationOffset = 0.4;

start = localDuration[0] * globalDurationScale + globalDurationOffset;
startMoveEnd = localDuration[1] * globalDurationScale + globalDurationOffset;
endMoveStart = localDuration[2] * globalDurationScale + globalDurationOffset;
end = localDuration[3] * globalDurationScale + globalDurationOffset;

output = []

input.forEach(note => {
	x = (center[0] - note._lineIndex)  * strength;
	y = (center[1] - note._lineLayer)  * strength;
	console.log(x);
	console.log(y);

	var angleDeg = Math.atan2(y, x) * 180 / Math.PI;

	rumbleDisp = []

	// for(i = 1/polling; i <= 1; i += 1/polling) {
	// 	localRumble = Math.random(-strength, strength);

	// 	xRumb = Math.cos(localRumble);
	// 	yRumb = Math.sin(localRumble);

	// 	rumbleDisp.push([x + xRumb, y + yRumb, 0, startMoveEnd + i * (endMoveStart - startMoveEnd)])
	// }



	output.push({
		"_applyToStart": [note._time],
		"_applyToEnd": [note._time + 1],
		"_lineIndex": [note._lineIndex],
		"_lineLayer": [note._lineLayer],
		"_data": {
			// "_noteJumpStartBeatOffset": 2,
			"_animation": {
				"_position": [
				[0, 0, 0, 0],
				[0, 0, 0, start],
				[x, y, 0, startMoveEnd],
				...rumbleDisp,
				[x, y, 0, endMoveStart],
				[0, 0, 0, end]
				]
			}
		}
	})
})

const fs = require('fs');
fs.writeFile('squeeze.dat', JSON.stringify(output), 'utf8', smt => console.log(smt));