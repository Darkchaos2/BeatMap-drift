const fs = require('fs');

var mapTemplate = JSON.parse(fs.readFileSync('EasyStandard.dat', 'utf8'));
var customEvents = require('./noodle.js').noodle;


function compile(beatMap, custom) {
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
				if(note._time > event._applyToStart[index] && note._time < event._applyToEnd[index]) {
					console.log(this._data._track);
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
				if(note._time > noteEntry._applyToStart[index] && note._time < noteEntry._applyToEnd[index]) {
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

	return beatMap;
}

output = compile(mapTemplate, customEvents)

fs.writeFile('ExpertPlusStandard.dat', JSON.stringify(output), 'utf8', smt => console.log(smt));