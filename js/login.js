document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button click')
    const donateNumber = document.getElementById('donate-number').value;
    console.log(donateNumber);
    
    if(donateNumber === '100'){
        console.log('You are logged in')
        // window.location.href = '/home.html';

        const donate = document.getElementById('total-donate')
        .innerText;
        console.log(donate)

        const addDonate = parseFloat(donateNumber);
        const addBalance = parseFloat(donate);
        const newBalance = addDonate + addBalance;
        console.log(newBalance);

        document.getElementById('total-donate').innerText = newBalance;
        
    }else{
        alert('wrong your donate number');
    }
})