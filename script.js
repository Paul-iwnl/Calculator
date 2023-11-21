function updateCurrentDigit(num) 
{
    if(num >= 0 && num <=9)
    {
        currentDigit = currentDigit * 10 + num;
        currentDigitUpdate();
    }
    if(num == 'AC')
    {
        currentDigit = null;
        previousDigit = null;
        currentDigitUpdate();
        previousDigitUpdate();
    }
    if(num =='C')
    {
        currentDigit = Math.floor(currentDigit/10);
        if(currentDigit == 0)
        {
            currentDigit = null;
        }
        currentDigitUpdate();
    }
}

function updateOperand(operand)
{
    previousDigitUpdate();
    if (operand == '+')
    {
        addition(previousDigit,currentDigit);
    }
    if(operand == '-')
    {
        substraction(previousDigit,currentDigit);
    }
    if(operand == 'x')
    {
        multiplication(previousDigit,currentDigit);
    }
    if(operand == '÷')
    {
        division(previousDigit,currentDigit);
    }
    if(operand == '%')
    {
        mod(previousDigit,currentDigit);
    }
}


function currentDigitUpdate() 
{
    var currentDigitElement = document.getElementsByClassName("screen-bottom")[0];
    currentDigitElement.textContent = currentDigit;
}

function previousDigitUpdate()
{
    var previousDigitElement = document.getElementsByClassName("screen-top")[0];
    previousDigit = currentDigit;
    previousDigitElement.textContent = previousDigit;
    currentDigit = null;
    currentDigitUpdate();
}

function addition(previousDigit,currentDigit)
{

}
function substraction(previousDigit,currentDigit)
{

}
function multiplication(previousDigit,currentDigit)
{

}
function division(previousDigit,currentDigit)
{

}
function mod(previousDigit,currentDigit)
{

}

var currentDigit = 0;
var previousDigit = 0;