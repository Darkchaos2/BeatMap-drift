function squeeze() {
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


	force = 0.75;
	maxDisp = -0.5;
	center = [1.5, 1]
	polling = 25;

	start = 0;
	startMoveEnd = 0.25;
	endMoveStart = 0.75;
	end = 1;

	output = []

	input.forEach(note => {
		x = (center[0] - note._lineIndex) * maxDisp;
		y = (center[1] - note._lineLayer) * maxDisp;
		console.log(`[${note._lineIndex}, ${note._lineLayer}]`);
		console.log(`[${x}, ${y}]`);

		rumbleDisp = []

		for(i = 1/polling; i <= 1; i += 1/polling) {
			localRumble = Math.random(-1, 1) * force;

			rumbleDisp.push([(x * localRumble) + x, (y * localRumble) + y, 0, startMoveEnd + i * (endMoveStart - startMoveEnd)])
			// console.log(rumbleDisp[rumbleDisp.length - 1]);
		}

		output.push({
			"_applyToStart": [note._time],
			"_applyToEnd": [note._time + 1],
			"_time": [568],
			"_lineIndex": [note._lineIndex],
			"_lineLayer": [note._lineLayer],
			"_type": "AnimateTrack",
			"_data": {
				"_duration": 1,
				"_track" : `squeeze${note._time}${note._lineIndex}${note._lineLayer}`,
				// "_noteJumpStartBeatOffset": 2,
				"_position": [
				[0, 0, 0, start],
				[x, y, 0, startMoveEnd, "easeOutQuart"],
				...rumbleDisp,
				[x, y, 0, endMoveStart, "easeOutQuart"],
				[0, 0, 0, end]
				]
			}
		})
	})

	// const fs = require('fs');
	// fs.writeFile('squeeze.dat', JSON.stringify(output), 'utf8', smt => console.log(smt));
	return output;
}

test = "hi"

exports.test = test

exports.squeeze = squeeze