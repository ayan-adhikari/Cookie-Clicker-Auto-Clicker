//Arrays for storing buildings
const buildings = [`Cursor`, `Grandma`, `Farm`, `Mine`, `Factory`, `Bank`, `Temple`, `Wizard Tower`, `Shipment`, `Alchemy Lab
`, `Portal`, `Time Machine`, `Antimatter Condenser`, `Prism`, `Chancemaker`, `Fractal Engine`, 
`Javascript Console`, `Idleverse`, `Cortex Baker`, `You`]
//Other variables
let randInt
//Random number function
function generateRandomNumber(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Filler function
function a()
{
    console.log()
}
//Function to click cookie/building/upgrades
function click()
{
    //Click cookie
    Game.ClickCookie()
    //Buy a random building
    randInt = generateRandomNumber(0, 19)
    Game.ObjectsById[randInt].buy();
    //Buy a random upgrade
    randInt = generateRandomNumber(0, 800)
    //Prevent script from buying occult obstruction (sets cookies per second to 0)
    if (randInt != 398)
    {
        Game.UpgradesById[randInt].buy();   
    }
    else
    {
        randInt = generateRandomNumber(0, 800)
        if (randInt != 398)
        {
            Game.UpgradesById[randInt].buy();   
        }
        else
        {
            console.log("No available upgrades")
        }
    }
    //Set a random pause
    randInt = generateRandomNumber(1, 25)
    //Rerun the function after the random pause
    setTimeout(click, randInt)
}
