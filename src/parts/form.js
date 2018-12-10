//Form
function form() {
let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что то пошло не так...'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    inputs = document.querySelectorAll('input'),
    statusMessage = document.createElement('div'),
    downForm = document.querySelector('#form');

    statusMessage.classList.add('status');


    inputs.forEach(function (item) {
        if (item.type == "tel") {
            item.addEventListener("keydown", (e) => {
                
                if (!/\d|\+/gm.test(e.key) && e.keyCode != 8 || item.value.indexOf("+") != -1 && e.key == "+") {
                    e.preventDefault(); 
                }
            });
        }
    });
    
    function sandForm (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form);
                function postData(data) {


                    return new Promise(function(resolve, reject){
                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-Type', 'application/x-www-urlencoded');

                    request.addEventListener('readystatechange', () => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if(request.readyState === 4) {
                            if(request.status == 200) {
                                resolve();
                            }  
                            else {
                                reject();
                            }
                        }
                    });
                    request.send(data);
                }); 

            } //End postData
            
            function clearInput() {
                for(let i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';   
                }
                setTimeout(function() {
                    statusMessage.innerHTML = ''; 
                }, 5000);  
            }

            postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=> statusMessage.innerHTML = message.success)
            .catch(()=> statusMessage.innerHTML = message.failure)
            .then(clearInput);      
    });    

}
sandForm(form);

sandForm(downForm);


}
module.exports = form;