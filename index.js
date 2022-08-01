let DiceOne = document.getElementById("DiceOneImgId");
let DiceTwo = document.getElementById("DiceTwoImgId");
let DiceThree = document.getElementById("DiceThreeImgId");
let DiceFour = document.getElementById("DiceFourImgId");
let DiceFive = document.getElementById("DiceFiveImgId");
let DiceSix = document.getElementById("DiceSixImgId");

let OneDice = "OneRolledDice.png";
let TwoDice = "TwoRolledDice.png";
let ThreeDice = "ThreeRolledDice.png";
let FourDice = "FourRolledDice.png";
let FiveDice = "FiveRolledDice.png";
let SixDice = "SixRolledDice.png";

let DiceValues = [];

let DiceImgs = [];

DiceImgs.push(OneDice);
DiceImgs.push(TwoDice);
DiceImgs.push(ThreeDice);
DiceImgs.push(FourDice);
DiceImgs.push(FiveDice);
DiceImgs.push(SixDice);

function RollDice(){

    let RandomDice = 0;

    DiceValues = [];

    for(let i = 0; i < 6; i++){

        RandomDice = Math.floor((Math.random() * 5) + 1);

        
        console.log(RandomDice);

        
        DiceValues.push(RandomDice);

    }

    DiceOne.src = DiceImgs[DiceValues[0] - 1];
    DiceTwo.src = DiceImgs[DiceValues[1] - 1];
    DiceThree.src = DiceImgs[DiceValues[2] - 1];
    DiceFour.src = DiceImgs[DiceValues[3] - 1];
    DiceFive.src = DiceImgs[DiceValues[4] - 1];
    DiceSix.src = DiceImgs[DiceValues[5] - 1];



}