function compile(beatMap, custom) {
	console.log("Beginning compile");
	// Add Points
	beatMap._customData._pointDefinitions = custom._pointDefinitions;

	// Add events
	beatMap._customData._customEvents = [];

	// For each event entry in Noodle
	custom._customEvents.forEach(eventEntry => {
		// For each event in an entery
		eventEntry._time.forEach(function(time, index) {
			event = this;

			// compile event
			eventCompiled = {
				_time: event._time[index],
				_type: event._type,
				_data: event._data
			}

			beatMap._customData._customEvents.push(eventCompiled)
		}, eventEntry)


		eventEntry._applyToStart.forEach(function(time, index) {
			// assign event to notes
			beatMap._notes.forEach(note => {
				if(note._time >= event._applyToStart[index] && note._time < event._applyToEnd[index]) {
					if(event._lineIndex) {
						if(note._lineIndex != event._lineIndex[index])
							return
					}

					if(event._lineLayer) {
						if(note._lineLayer != event._lineLayer[index])
							return
					}

					console.log(`Adding ${this._data._track} to ${event._time[index]}`);
					note._customData = {};
					note._customData._track = this._data._track;
				}

			})
		}, eventEntry)
	});

	// Add custom notes
	custom._customNotes.forEach(noteEntry => {
		noteEntry._applyToStart.forEach((startTime, index) => {
			beatMap._notes.forEach(function(note) {
				if(note._time >= noteEntry._applyToStart[index] && note._time < noteEntry._applyToEnd[index]) {
					if(noteEntry._lineIndex)
						if(note._lineIndex[index] != noteEntry._lineIndex[index])
							return

					if(noteEntry._lineLayer)
						if(note._lineLayer[index] != noteEntry._lineLayer[index])
							return

					if(!note._customData)
						note._customData = {};

					for(var [key, value] of Object.entries(noteEntry._data)) {
						note._customData[key] = value
					}
					// console.log(note);
				}
			})
		});
	});

	console.log("Finsihed Compiling");
	return beatMap;
}

exports.compile = compile;