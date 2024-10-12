/* 自动轮盘播放 */
var currentIndex = 0;
const slides = document.querySelectorAll('.carousel-inner img');
const totalSlides = slides.length;
function updateCarousel(){
    //document.querySelector('.carousel-inner').style.left = '-${currentIndex * 100}%';
    document.getElementById('carouselInner').style.left = `-${currentIndex * 100}%`
}
function nextSlide(){
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}
function prrvSlide(){
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}
setInterval(nextSlide,1000);