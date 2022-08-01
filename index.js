let DiceOne = document.getElementById("DiceOneImgId");
let DiceTwo = document.getElementById("DiceTwoImgId");
let DiceThree = document.getElementById("DiceThreeImgId");
let DiceFour = document.getElementById("DiceFourImgId");
let DiceFive = document.getElementById("DiceFiveImgId");
let DiceSix = document.getElementById("DiceSixImgId");

let THE_BID = document.getElementById("BID_HOLDER");

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

let TotalCount = 15;
const TotalDice = 6;

let PreviousBid = "";
let SuggestedBid = "";

let IsBidValid = false;

let RemainingDice = 6;

letDiceElements.push(DiceOne);
letDiceElements.push(DiceTwo);
letDiceElements.push(DiceThree);
letDiceElements.push(DiceFour);
letDiceElements.push(DiceFive);
letDiceElements.push(DiceSix);

DiceImgs.push(OneDice);
DiceImgs.push(TwoDice);
DiceImgs.push(ThreeDice);
DiceImgs.push(FourDice);
DiceImgs.push(FiveDice);
DiceImgs.push(SixDice);

function SetBidOptions(){

    let HowMany = document.getElementById("HowMany");

    console.log(TotalCount);

    for (let i = 0; i < TotalCount; i++){

        let newOpt = document.createElement("option");
        newOpt.value = (i + 1).toString();
        newOpt.innerHTML = (i + 1).toString();
        HowMany.options.add(newOpt);

    }

}

function CheckValidity(){

    let HowMany = document.getElementById("HowMany");
    let Which = document.getElementById("WhichDice");

    



}

function Load(){

    SetBidOptions();
    RollDice();

}

function HowManyTimesRepeated(Value, Array){

    let Count = 0;


    for(let i = 0; i < Array.length; i++){

        if(Array[i] == Value){

            Count++;

        }

    }

    return Count;

}

function UpdateDices(){

    for(let j = 0; j < RemainingDice; j++){

        letDiceElements[j].src = DiceImgs[DiceValues[j] - 1];

    }

    for(let h = 0; h < 6 - RemainingDice; h++){

        letDiceElements[h + RemainingDice].src = EmptyDice;

    }

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

    UpdateDices();

}

function LoseDice(){


    RemainingDice--;

    UpdateDices();


}

function BID(){

    let CountSelect = document.getElementById("HowMany");
    let DiceValueSelect = document.getElementById("WhichDice");

    IsBidValid = CheckValidity(CountSelect.value, DiceValueSelect.value);

    if(IsBidValid){

        

    }
    else{

        document.getElementById("BID_Validity").innerHTML = "Kural Dişi Iddia";

    }

}