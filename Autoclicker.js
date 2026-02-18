//randInt variable (used when a random integer is needed)
let randInt
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
        //Prevent script from buying occult obstruction (sets cookies per second to 0) or permanent upgrtade slots
        if (randInt != 398 && randInt != 264 && randInt != 265 && randInt != 266 && randInt != 267 && randInt != 268)
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