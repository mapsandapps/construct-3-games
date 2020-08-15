// Put any global functions etc. here
this.invisiblePath = null
this.LENGTH_BETWEEN_POINTS = 15
this.POINT_RADIUS = 30

this.levelPaths = [
	{
		file: "crescent.svg",
		path: "M 688 416 A 32 32 0 0 0 704 80 A 50 50 0 1 1 672 656 A 50 50 0 1 1 640 80 A 50 50 0 1 0 656 416"
	},{
		file: "command-2.svg",
		path: "M 480 384 L 800 384 A 128 128 0 1 1 672 512 L 672 192 A 128 128 0 1 1 800 320 L 480 320 A 128 128 0 1 1 608 192 L 608 512 A 128 128 0 1 1 480 384"
	},{
		file: "swoopy.svg",
		path: "M 512,64 a 192,192 0 0,1 192,192 a 192,192 0 0,1 -192,192 a 256,256 0 0,0 256,-256 a 320,320 0 0,1 -320,320 a 192,192 0 0,1 -192,-192 a 128,128 0 0,0 128,128 a 64,64 0 0,0 64,-64 a 64,64 0 0,1 64,-64 a 64,64 0 0,0 64,-64 a 64,64 0 0,0 -64,-64 a 64,64 0 0,0 -64,64 a 64,64 0 0,1 -64,64 a 128,128 0 0,1 -128,-128"
	}
]

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Get the correct URL to fetch
// 	const svgURL = await runtime.assets.getProjectFileUrl("test.svg")

// 	// Now fetch that URL normally
// 	const response = await fetch(svgURL)
// 	const fetchedXML = await response.edit()

	// ... do something with fetchedText ...
}

function GetLevelFile(runtime) {
	return this.levelPaths[runtime.globalVars.LevelIndex].file
}

function GetPointPosition(i) {
	const l = i * this.LENGTH_BETWEEN_POINTS
	const point = invisiblePath.pointAt(l)
	return [point.x, point.y]
}

function GetNumberOfPoints(runtime) {
	var draw = SVG().addTo('body').size(1280, 720).viewbox(0, 0, 1280, 720)

	this.invisiblePath = draw.path(this.levelPaths[runtime.globalVars.LevelIndex].path)
	
	console.log(runtime.objects.LabyrinthSVG)
	
	return invisiblePath.length() / this.LENGTH_BETWEEN_POINTS + 1
}

// function GetAndCheckWord(runtime)
// {
// 	const wordArray = runtime.objects.ConstructingWord.getFirstInstance();
// 	const frameToLetterArray = runtime.objects.FrameToLetter.getFirstInstance();
// 	for (var i = 0; i < wordArray.width; i++) {
// 		runtime.globalVars.ConstructedWord += frameToLetterArray.getAt(wordArray.getAt(i));
// 	}
// 	runtime.globalVars.WordIsCorrect = CheckWord(runtime);
// 	if (runtime.globalVars.WordIsCorrect) {
// 		const frameToValueArray = runtime.objects.FrameToValue.getFirstInstance();
// 		runtime.globalVars.WordValue = GetWordValue(wordArray, frameToValueArray);
// 		console.log(runtime.globalVars.WordValue);
// 	}
// }

// function CheckWord(runtime)
// {
// 	const word = runtime.globalVars.ConstructedWord.toLowerCase();
// 	console.log(word);
	
// 	// if the word has already been found, it's not valid
// 	const foundWordsArray = runtime.objects.FoundWords.getFirstInstance();
// 	console.log(foundWordsArray);
// 	for (var i = 0; i < foundWordsArray.width; i++) {
// 		console.log(foundWordsArray.getAt(i));
// 		if (word === foundWordsArray.getAt(i).toLowerCase()) {
// 			return false;
// 		}
// 	}
	
// 	// check if the word is a word
// 	const wordlist = window['wordlist' + word[0].toUpperCase()];
// 	for (var i = 0; i < wordlist.length; i++) {
// 		if (wordlist[i] === word) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// function GetWordValue(wordArray, frameToValueArray)
// {
// 	console.log(frameToValueArray);
// 	var wordValue = 0;
// 	for (var i = 0; i < wordArray.width; i++) {
// 		wordValue += frameToValueArray.getAt(wordArray.getAt(i));
// 	}
// 	return wordValue;
// }
