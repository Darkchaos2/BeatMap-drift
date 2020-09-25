def squeeze():
	import random

	print("Generating Squeze")

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


	force = 0.75
	maxDisp = -0.5
	center = [1.5, 1]
	polling = 25

	start = 0
	startMoveEnd = 0.25
	endMoveStart = 0.75
	end = 1

	output = []

	for note in input:
		x = (center[0] - note["_lineLayer"] * maxDisp)
		y = (center[1] - note["_lineIndex"] * maxDisp)

		rumbleDisp = []

		for j in range(0, polling):
			i = j / polling
			localRumble = random.randrange(-1, 1) * force

			rumbleDisp.append([(x * localRumble) + x, (y * localRumble) + y, 0, startMoveEnd + i * (endMoveStart - startMoveEnd)])

		output.append({
			"_applyToStart": [note["_time"]],
			"_applyToEnd": [note["_time"] + 1],
			"_time": [568],
			"_lineIndex": [note["_lineIndex"]],
			"_lineLayer": [note["_lineLayer"]],
			"_type": "AnimateTrack",
			"_data": {
				"_duration": 1,
				"_track" : "squeeze{}{}{}".format(note["_time"], note["_lineIndex"], note["_lineLayer"]),
				"_position": [
				[0, 0, 0, start],
				[x, y, 0, startMoveEnd, "easeOutQuart"],
				*rumbleDisp,
				[x, y, 0, endMoveStart, "easeOutQuart"],
				[0, 0, 0, end]
				]
			}
		})

	print("Squeeze.py completed.py")
	return output
