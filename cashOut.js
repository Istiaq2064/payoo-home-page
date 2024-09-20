document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        const cashOutAmount = document.getElementById('input-cashOut').value;
        const cashOutAmountNumber = parseFloat(cashOutAmount)
        const cashOutPin = document.getElementById('cashOut-pin-number').value;
        if(cashOutPin === '12345'){
            const balance = document.getElementById('Account-balance').innerText;
        console.log(balance);
        const cashOutMoneyNumber =parseFloat(balance);
        const newCashOutBalance = cashOutMoneyNumber - cashOutAmountNumber;
        document.getElementById('Account-balance').innerText = newCashOutBalance;
        }
        else{
            alert('Wrong input.try again');
        };
    });