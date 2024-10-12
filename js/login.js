document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button click')
    const donateNumber = document.getElementById('donate-number').value;
    console.log(donateNumber)
})