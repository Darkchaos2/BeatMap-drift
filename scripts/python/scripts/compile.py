def compile(beatMap, custom):
	print("Beginning compile")

	# Add points
	beatMap["_customData"]["_pointDefinitions"] = custom["_pointDefinitions"]

	# Add events
	beatMap["_customData"]["_customEvents"] = []

	# For each event entry in Noodle
	for eventEntry in custom["_customEvents"]:
		# For each event in an entry
		for index, time in enumerate(eventEntry["_time"]):
			eventCompiled = {
				"_time": eventEntry["_time"][index],
				"_type": eventEntry["_type"],
				"_data": eventEntry["_data"]
			}

			beatMap["_customData"]["_customEvents"].append(eventCompiled)

		# Write which note this event applies to
		for index, time in enumerate(eventEntry["_applyToStart"]):
			for note in beatMap["_notes"]:
				if note["_time"] >= eventEntry["_applyToStart"][index] and note["_time"] < eventEntry["_applyToEnd"][index]:
					if "_lineIndex" in eventEntry:
						if note["_lineIndex"] != eventEntry["_lineIndex"][index]:
							continue

					if "_lineLayer" in eventEntry:					
						if note["_lineLayer"] != eventEntry["_lineLayer"][index]:
							continue

					print("Adding {} to {}".format(eventEntry["_data"]["_track"], eventEntry["_time"][index]))
					note["_customData"] = {}
					note["_customData"]["_track"] = eventEntry["_data"]["_track"]


	# Add custom notes
	for noteEntry in custom["_customNotes"]:
		for index, startTime in enumerate(noteEntry["_applyToStart"]):
			for note in beatMap["_notes"]:
				if note["_time"] >= noteEntry["_applyToStart"][index] and note["_time"] < noteEntry["_applyToEnd"][index]:
					if "_lineIndex" in noteEntry:
						if note["_lineIndex"][index] != noteEntry["_lineIndex"][index]:
							return

					if "_lineLayer" in noteEntry:
						if note["_lineLayer"][index] != noteEntry["_lineLayer"][index]:
							return

					if "_customData" not in note:
						note["_customData"] = {};

					for [key, value] in noteEntry["_data"].items():
						note["_customData"][key] = value

	print("Finised Compiling")
	return beatMap