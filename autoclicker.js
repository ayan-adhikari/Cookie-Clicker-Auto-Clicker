//randInt variable (used when a random integer is needed)
let randInt
//Prevent script from buying occult obstruction (sets cookies per second to 0) or permanent upgrtade slots or milk/background upgrades
const dontBuy = [398, 264, 265, 266, 267, 268, 333, 414]
//Random number function
function generateRandomNumber(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Function to click cookie/building/upgrades
function click()
{
    //Click cookie
    Game.ClickCookie()
    //Buy a random building
    randInt = generateRandomNumber(0, 19)
    Game.ObjectsById[randInt].buy();
    //Loop for buying a random upgrade
    while (true)
    {
        //Buy a random upgrade
        randInt = generateRandomNumber(0, 800)
        
        if (!dontBuy.includes(randInt))
        {
            Game.UpgradesById[randInt].buy();
            break;
        }
    }
    //Set a random pause
    randInt = generateRandomNumber(1, 25)
    //Rerun the function after the random pause
    setTimeout(click, randInt)
}
