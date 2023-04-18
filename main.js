const toggleBtn = document.getElementById('toggle-mode');

const body = document.body;


toggleBtn.addEventListener('click', function(){ //função anonima que ira pegar uma classe css.

    body.classList.toggle('dark-mode')



})