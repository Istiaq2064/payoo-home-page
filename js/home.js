document.getElementById('btn-add-money')
    .addEventListener('click',function(event){
        event.preventDefault();
    const addAmount = document.getElementById('input-amount').value;
    console.log(addAmount);
    const addPin = document.getElementById('input-pin-number').value;
    console.log(addPin);
    if(addPin === '12345'){
        const balance = document.getElementById('Account-balance').innerText;
        console.log(balance);
        const addMoneyNumber =parseFloat(addAmount);
        const balanceNumber= parseFloat(balance);
        const newBalance =  balanceNumber + addMoneyNumber;
        document.getElementById('Account-balance').innerText = newBalance;

    }
    else{
        alert('wrong pin.please try again')
    }
    });