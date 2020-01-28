
// Put any global functions etc. here
const equations = [
	"2-1=11"
]

runOnStartup(async runtime =>
{
	// Code to run on the loading screen
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout'
	// on the first layout. Initial instances are created
	// and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}

function EvaluateEquation(globalVars)
{
	console.log('Evaluating', globalVars.Equation);
	
	const equationHalves = globalVars.Equation.split('=');
	const equationFirstHalfTotal = EvaluateEquationHalf(equationHalves[0]);
	const equationSecondHalfTotal = EvaluateEquationHalf(equationHalves[1]);
	
	console.log(equationFirstHalfTotal === equationSecondHalfTotal);
	
	globalVars.ValueOfFirstHalf = equationFirstHalfTotal;
	globalVars.ValueOfSecondHalf = equationSecondHalfTotal;
	globalVars.HalvesAreEqual = equationFirstHalfTotal === equationSecondHalfTotal;
	// TODO: display not equal symbol if wrong ≠
}

function EvaluateEquationHalf(half)
{	
	var Obj = new globalThis.BigEval();
	return Obj.exec(half);
}
