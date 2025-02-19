function scaleContent() {
    let container = document.querySelector('body');
    let scaleX = window.innerWidth / 1280;
    let scaleY = window.innerHeight / 1050;
    let scale = Math.min(scaleX, scaleY);

    container.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', scaleContent);
scaleContent();