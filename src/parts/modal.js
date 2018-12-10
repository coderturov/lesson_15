   //modal
function modal() {
   let more = document.querySelector('.more'),
   overlay = document.querySelector('.overlay'),
   close = document.querySelector('.popup-close'),
   descBtn = document.querySelectorAll('.description-btn');

   more.addEventListener('click', () => {
   overlay.style.display = 'block';
   more.classList.add('more-splash');
   document.body.style.overflow = 'hidden';
});



close.addEventListener('click', () => {
    overlay.style.display = 'none'; 
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});



descBtn.forEach((item) => {

    item.addEventListener('click', (event) => {
        let target = event.target;
        overlay.style.display = 'block';
    });
});

}

module.exports = modal;