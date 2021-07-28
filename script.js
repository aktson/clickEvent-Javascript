const closeModal = document.querySelector (".close-modal");
const showModal = document.querySelectorAll (".show-modal");
const modal  = document.querySelector (".modal");
const overlay = document.querySelector (".overlay");

const openModalBtn = function () {
    modal.classList.remove ("hidden");
    overlay.classList.remove ("hidden");
}
const closeModalBtn = function () {
    modal.classList.add ("hidden");
    overlay.classList.add ("hidden");
}

for (let i = 0; i < showModal.length; i++)

showModal[i].addEventListener ("click", openModalBtn);
closeModal.addEventListener ("click", closeModalBtn);
overlay.addEventListener ("click", closeModalBtn); 
 

document.addEventListener ("keydown", function (event) {

    if (event.keyCode === 27 && !closeModal.classList.contains("hidden")) {
        closeModalBtn();
   }


})