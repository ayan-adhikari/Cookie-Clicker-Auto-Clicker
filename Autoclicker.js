//Assigning elements to variables
const cookie = document.getElementById(`bigCookie`)
//Other variables
let randInt
let clicks = 500
let cookieInterval
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
    Game.ClickCookie()
    for (let i = 0; i++; i>=20)
    {
        document.getElementById(`product${i}`).click()
    }
    randInt = generateRandomNumber()
    setTimeout(click, randInt)
}

//Function to buy buildings
/*
function buyBuilding(x)
{
    let i = 0
    while (i <= x)
    {
        const building = document.getElementById(`product${}`)
        setTimeout(a, 10)
        console.log(`${button} clicked: ${i} times.`)
        i += 1
    }
}
//Function to buy upgrades

function buyUpgrade(x)
{
    let i = 0
    while (i <= x)
    {

        setTimeout(a, 10)
        console.log(`${building} clicked: ${i} times.`)
        i += 1
    }
}
    */