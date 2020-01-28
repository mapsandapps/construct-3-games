
// Put any global functions etc. here

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}

function GetAndCheckWord(runtime)
{
	const wordArray = runtime.objects.ConstructingWord.getFirstInstance();
	const frameToLetterArray = runtime.objects.FrameToLetter.getFirstInstance();
	for (var i = 0; i < wordArray.width; i++) {
		runtime.globalVars.ConstructedWord += frameToLetterArray.getAt(wordArray.getAt(i));
	}
	runtime.globalVars.WordIsCorrect = CheckWord(runtime);
	if (runtime.globalVars.WordIsCorrect) {
		const frameToValueArray = runtime.objects.FrameToValue.getFirstInstance();
		runtime.globalVars.WordValue = GetWordValue(wordArray, frameToValueArray);
		console.log(runtime.globalVars.WordValue);
	}
}

function CheckWord(runtime)
{
	const word = runtime.globalVars.ConstructedWord.toLowerCase();
	console.log(word);
	
	// if the word has already been found, it's not valid
	const foundWordsArray = runtime.objects.FoundWords.getFirstInstance();
	console.log(foundWordsArray);
	for (var i = 0; i < foundWordsArray.width; i++) {
		console.log(foundWordsArray.getAt(i));
		if (word === foundWordsArray.getAt(i).toLowerCase()) {
			return false;
		}
	}
	
	// check if the word is a word
	const wordlist = window['wordlist' + word[0].toUpperCase()];
	for (var i = 0; i < wordlist.length; i++) {
		if (wordlist[i] === word) {
			return true;
		}
	}
	return false;
}

function GetWordValue(wordArray, frameToValueArray)
{
	console.log(frameToValueArray);
	var wordValue = 0;
	for (var i = 0; i < wordArray.width; i++) {
		wordValue += frameToValueArray.getAt(wordArray.getAt(i));
	}
	return wordValue;
}
