function scaleContent() {
    let container = document.querySelector('body');
    let scaleX = window.innerWidth / 1280;  // Mevcut genişliği 1280'e oranla hesapla
    let scaleY = window.innerHeight / 1050;  // Mevcut yüksekliği 720'ye oranla hesapla
    let scale = Math.min(scaleX, scaleY);   // En küçük ölçeği seç (orantıyı bozmamak için)

    container.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', scaleContent);
scaleContent(); // Sayfa yüklendiğinde çağır