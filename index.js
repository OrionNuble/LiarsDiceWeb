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
let EmptyDice = "NoneRolledDice.png";

let DiceValues = [];

let DiceImgs = [];

let letDiceElements = [];
let letDiceElementsLabels = [];

let RemainingDice = 6;

letDiceElements.push(DiceOne);
letDiceElements.push(DiceTwo);
letDiceElements.push(DiceThree);
letDiceElements.push(DiceFour);
letDiceElements.push(DiceFive);
letDiceElements.push(DiceSix);

letDiceElementsLabels.push(DiceOneLabel);
letDiceElementsLabels.push(DiceTwoLabel);
letDiceElementsLabels.push(DiceThreeLabel);
letDiceElementsLabels.push(DiceFourLabel);
letDiceElementsLabels.push(DiceFiveLabel);
letDiceElementsLabels.push(DiceSixLabel);

DiceImgs.push(OneDice);
DiceImgs.push(TwoDice);
DiceImgs.push(ThreeDice);
DiceImgs.push(FourDice);
DiceImgs.push(FiveDice);
DiceImgs.push(SixDice);

function HowManyTimesRepeated(Value, Array){

    let Count = 0;


    for(let i = 0; i < Array.length; i++){

        if(Array[i] == Value){

            Count++;

        }

    }

    return Count;

}

function RollDice(){

    console.log(RemainingDice);

    let RandomDice = 0;

    DiceValues = [];

    for(let i = 0; i < 6; i++){

        let Min = Math.ceil(1);
        let Max = Math.floor(6);

        RandomDice = Math.floor((Math.random() * (Max - Min + 1)) + Min);
        
        DiceValues.push(RandomDice);

    }

    for(let j = 0; j < RemainingDice; j++){

        letDiceElements[j].src = DiceImgs[DiceValues[j] - 1];

    }

    for(let h = 0; h < 6 - RemainingDice; h++){

        letDiceElements[h + RemainingDice].src = EmptyDice;

    }

}

function LoseDice(){


    RemainingDice--;


}