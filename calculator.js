function TurnMobilePhone(){

    const turnBtn = document.querySelector(".turn-mobile-btn");
    const mobileContainer = document.getElementById("mobileContainer");
    const resultText = document.getElementById("resultText");
    const keySection = mobileContainer.children[1];
    const advancedKeySection = document.getElementById("advancedKeySection");
    const normalKeySection = document.getElementById("normalKeySection");

    const isVertical = mobileContainer.getAttribute("data-vertical") === "1";
    const rotationClass = isVertical ? "right" : "left";

    mobileContainer.classList.add(`${rotationClass}-rotate-animation`);

    const timeout = setTimeout(() => {

        mobileContainer.classList.remove(`${rotationClass}-rotate-animation`);
        turnBtn.classList.remove(`${rotationClass}-rotate-animation`);

        mobileContainer.className = isVertical ? "rotate-mobile-container" : "mobile-container";
        resultText.className = isVertical ? "rotate-result-text" : "result-text";
        keySection.className = isVertical ? "rotate-key-section" : "keys-section";
        advancedKeySection.classList.toggle("hide", !isVertical);
        normalKeySection.className = isVertical ? "rotate-normal-key-section" : "normal-keys-section";

        clearTimeout(timeout);
    }, 970);

    mobileContainer.setAttribute("data-vertical", isVertical ? "0" : "1");
}



let displayValue = '';
let currentOperation=null;
let firstOperand=null;

function UpdateDisplay(){
      document.getElementById("resultText").value = displayValue;
}

function AppendValue(digit){
    displayValue+=digit;
    UpdateDisplay();
}

function AppendDecimal(){
    if(!displayValue.includes('.'))
       {
        displayValue+='.';
        UpdateDisplay();
       }
}

function ClearDisplay(){
    displayValue="";
    currentOperation=null;
    firstOperand=null;
    UpdateDisplay();
}

function SetOperation(operator){
    if(currentOperation!=null)
    {
        CalculateResult();
    }

    firstOperand=parseFloat(displayValue);
    currentOperation=operator;
    displayValue="";
}


function CalculateResult(){
    if(currentOperation == null ||firstOperand == null){
        return;
    }

    const secondOperand=parseFloat(displayValue);
    let result;

    switch(currentOperation){
        case '+':
            result = firstOperand+secondOperand;
            break;

        case '-':
            result = firstOperand-secondOperand;
            break;

        case '*':
            result=firstOperand*secondOperand;
            break;

        case '/':
            result = firstOperand / secondOperand;
            break;

        default:
            return;
    }

    displayValue= result.toString();
    currentOperation=null;
    firstOperand=null;
    UpdateDisplay();
}

UpdateDisplay();