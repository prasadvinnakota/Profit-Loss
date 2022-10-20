var initialValue = document.querySelector("#initial-value");
var quantity = document.querySelector("#quantity");
var currentValue = document.querySelector("#current-value");
var buttonProfitLoss = document.querySelector("#profit-loss-btn")
var output = document.querySelector("#output")


function calculateProfitOrLoss()
{
   
    if(Number(Number(currentValue.value).toFixed(2)) > Number(Number(initialValue.value).toFixed(2)))
    {
    var profit = (Number(currentValue.value).toFixed(2)*quantity.value)-(Number(initialValue.value).toFixed(2)*quantity.value)
    var profitPercentage = (profit/Number(initialValue.value).toFixed(2))*100
    showMessage(`Yahoooo! You Gained ${profit} which is ${profitPercentage}%`)
    }
    else if(Number(Number(currentValue.value).toFixed(2)) < Number(Number(initialValue.value).toFixed(2)))
    {
        var loss = (Number(initialValue.value).toFixed(2)*quantity.value)-(Number(currentValue.value).toFixed(2)*quantity.value)
        var lossPercentage = (loss/Number(initialValue.value).toFixed(2))*100
        showMessage(`You Lost ${loss} which is ${lossPercentage}%`)


    }
    else
    {
        showMessage("No Gain And No Loss")

    }



}


function showMessage(message)
{
    output.innerText = message

}


buttonProfitLoss.addEventListener("click", calculateProfitOrLoss)