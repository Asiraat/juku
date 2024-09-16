const boxes = document.querySelectorAll('.box');

function startAnimation(event) {
    const box = event.currentTarget;
    clearTimeout(box.animationTimeout);
    box.classList.add('animate');
    box.animationTimeout = setTimeout(() => {
        box.classList.remove('animate');
    }, 400);
}

boxes.forEach(box => {
    box.addEventListener('mouseenter', startAnimation);
    box.addEventListener('click', startAnimation);
});