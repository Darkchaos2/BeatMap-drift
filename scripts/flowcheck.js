const fs = require('fs');
var map = JSON.parse(fs.readFileSync('../EasyStandard.dat', 'utf8'));

ignoreDirless = true;

function doesFlow(current, next) {
	switch(current._cutDirection) {
		case(0):
			if (next._cutDirection == 6 || next._cutDirection == 1 || next._cutDirection == 7)
				return;
			break;
		case(1):
			if (next._cutDirection == 4 || next._cutDirection == 0 || next._cutDirection == 5) {
				return;
			}
			break;
		case(2):
			if (next._cutDirection == 5 || next._cutDirection == 3 || next._cutDirection == 7)
				return;
			break;
		case(3):
			if (next._cutDirection == 4 || next._cutDirection == 2 || next._cutDirection == 6)
				return;
			break;
		case(4):
			if (next._cutDirection == 3 || next._cutDirection == 7 || next._cutDirection == 1 || next._cutDirection == 6)
				return;
			break;
		case(5):
			if (next._cutDirection == 2 || next._cutDirection == 6 || next._cutDirection == 1 || next._cutDirection == 7)
				return;
			break;
		case(6):
			if (next._cutDirection == 0 || next._cutDirection == 5 || next._cutDirection == 3 || next._cutDirection == 4)
				return;
			break;
		case(7):
			if (next._cutDirection == 0 || next._cutDirection == 4 || next._cutDirection == 2 || next._cutDirection == 5)
				return;
			break;
		case(8):
			if(!ignoreDirless)
				console.log(`Direction-less at ${next._time}. Require Manual check`);
			return;
		default:
			console.log(`Unknown at ${next._time}`);
			return;
	}

	if(next._cutDirection == 8) {
		if(!ignoreDirless)
			console.log(`Direction-less at ${next._time}. Require Manual check`);
	}
	else {
		console.log(`Error at ${current._time} -> ${next._time}: ${current._cutDirection} -> ${next._cutDirection}`);
	}
	// 1: 4, 0, 5
	// 2: 5, 3, 7
	// 3: 4, 2, 6
	// 4: 3, 7, 1
	// 5: 2, 6, 1
	// 6: 0, 5, 3
	// 7: 0, 4, 2
}

blue = red = null;

map._notes.forEach(note => {
	if(note._type == 0) {
		if(blue != null) {
			doesFlow(blue, note)
		}
		blue = note
	}
	if(note._type == 1) {
		if(red != null) {
			doesFlow(red, note)
		}
		red = note
	}
	else {}
})