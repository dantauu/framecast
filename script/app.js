const button = document.querySelector('.more--button');

button.addEventListener('click', () =>{
    button.classList.toggle('active')
    button.setAttribute('aria-expanded', button.classList.contains('active') ? 'true' : 'false') 
});

/* МОДАЛЬНОЕ ОКНО  */

const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const myModal = document.getElementById('my-modal');

openModal.addEventListener('click', function(e){
    e.preventDefault();
    myModal.classList.add('active');
})

closeModal.addEventListener('click', () => {
    myModal.classList.remove('active');
} );

/* СЛАЙДЕР */

const carousel = document.querySelector(".carousel");
const arrowBtn = document.querySelectorAll(".wrapper img");
const firstCardWidth = document.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft +=
					btn.id === 'left' ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
 }

const dragStop = () => {
    isDragging = false;
	carousel.classList.remove('dragging');
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


