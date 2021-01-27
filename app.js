// lo

const login = document.getElementById("login");
login.addEventListener('click', function(){
   const loginArea = document.getElementById("login-area");
   loginArea.style.display = 'none';

const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block";
})

//deposit btn event handler

const deposit =  document.getElementById('deposit-btn');
deposit.addEventListener('click', function(){
    const addedNumber = getInputNumber("depositAmount");
    UpdateSpanText("currentDeposit", addedNumber);
    UpdateSpanText("currentBalance", addedNumber);

   
})

function UpdateSpanText(id, addedAmount){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedAmount + currentNumber;
    document.getElementById(id).innerText = totalAmount;
    
}

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    document.getElementById(id).value = "";
    return number;
}

//withdraw btn event handler

const withdraw = document.getElementById("withdraw-btn");

withdraw.addEventListener("click", function(){
    const withdrawAmount = getInputNumber("withdrawAmount");
    console.log(withdrawAmount);
    UpdateWithdraw("currentWithdraw", withdrawAmount);
})

function UpdateWithdraw(id, debitedNumber){
    const currentWith = document.getElementById(id).innerText;
    const currentWithNumber = parseFloat(currentWith);
    const totalWithdraw = debitedNumber + currentWithNumber;
    document.getElementById(id).innerText = totalWithdraw;
}
