// show the cash out section
document.getElementById('btnCashOut').addEventListener('click', function(){
    //show  the cash out form
    document.getElementById('cash-out-form').classList.remove('hidden');
    //hide the add money
    document.getElementById('add-money-form').classList.add('hidden');
})

//show add money form and hide cash ouy from
document.getElementById('btnAdd')
    .addEventListener('click',function(){
        document.getElementById('add-money-form').classList.remove('hidden');
        document.getElementById('cash-out-form').classList.add('hidden');
});