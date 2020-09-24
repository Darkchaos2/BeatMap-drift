input = {
	"_time": 584.29498291015625,
	"_type": "AnimateTrack",
	"_data": {
		"_position": [
			[
				0.3089,
				0.9232,
				-0.6869,
				0,
				"easeLinear"
			],
			[
				0.9161,
				-0.3026,
				0.1171,
				0.05,
				"easeLinear"
			],
			[
				0.2859,
				-0.3354,
				0.3127,
				0.1,
				"easeLinear"
			],
			[
				-0.5821,
				0.916,
				-0.8125,
				0.15,
				"easeLinear"
			],
			[
				0.8863,
				0.3466,
				-0.6135,
				0.2,
				"easeLinear"
			],
			[
				0.859,
				-0.9719,
				-0.9362,
				0.25,
				"easeLinear"
			],
			[
				0.3748,
				-0.9983,
				-0.7097,
				0.3,
				"easeLinear"
			],
			[
				0.1335,
				0.1159,
				0.9501,
				0.35,
				"easeLinear"
			],
			[
				0.997,
				-0.3973,
				0.3512,
				0.4,
				"easeLinear"
			],
			[
				0.9656,
				-0.435,
				-0.0598,
				0.45,
				"easeLinear"
			],
			[
				0.93,
				-0.5641,
				-0.3227,
				0.5,
				"easeLinear"
			],
			[
				-0.4585,
				0.6914,
				-0.2089,
				0.55,
				"easeLinear"
			],
			[
				0.5023,
				-0.929,
				-0.2183,
				0.6,
				"easeLinear"
			],
			[
				-0.6227,
				-0.1633,
				0.891,
				0.65,
				"easeLinear"
			],
			[
				-0.5049,
				-0.7348,
				-0.5044,
				0.7,
				"easeLinear"
			],
			[
				0.7127,
				-0.6773,
				-0.6686,
				0.75,
				"easeLinear"
			],
			[
				0.3459,
				-0.5395,
				0.7907,
				0.8,
				"easeLinear"
			],
			[
				-0.5144,
				0.2891,
				-0.5932,
				0.85,
				"easeLinear"
			],
			[
				0.8438,
				0.5215,
				-0.1573,
				0.9,
				"easeLinear"
			],
			[
				-0.0867,
				-0.4341,
				-0.0546,
				0.95,
				"easeLinear"
			],
			[
				0,
				0,
				0,
				1,
				"easeLinear"
			]
		],
		"_duration": 0.5,
		"_track": "zoomWobble"
	}
}

input._data._position.forEach(pos => {
	console.log(pos);
	pos[0] /= 2
	pos[1] /= 2
	pos[2] /= 2
})


var fs = require('fs');
fs.writeFile('myjsonfile.json', JSON.stringify(input), 'utf8', smt => console.log(smt));