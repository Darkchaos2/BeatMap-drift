import json

from scripts.compile import compile
from scripts.squeeze import squeeze

with open('EasyStandard.dat') as json_file:
	mapTemplate = json.load(json_file)
with open('noodle.json') as json_file:
	customEvents = json.load(json_file)

customEvents["_customEvents"] += squeeze()

with open('ExpertPlusStandard.dat', 'w') as outfile:
	json.dump(compile(mapTemplate, customEvents), outfile)

