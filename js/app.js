let box1 = document.querySelectorAll('.box1');
let box2 = document.querySelectorAll('.box2');
let box3 = document.querySelectorAll('.box3');

let imgbox1 = document.querySelector('.img1')
let imgbox2 = document.querySelector('.img2')
let imgbox3 = document.querySelector('.img3')

let quote = document.querySelector('.quote');
let landingPage = document.querySelector('.landingpage');
let landing = document.querySelector('.landing');


box1[0].addEventListener('mouseover', function () {
    imgbox1.style.transition = 'all 0.5s'
    imgbox1.style.scale = `1.2`
    imgbox1.style.opacity = '0%'
    quote.style.opacity = '100%'
    quote.style.zIndex = '100'
});
box1[0].addEventListener('mouseleave', function () {
    imgbox1.style.transition = 'all 0.5s'
    imgbox1.style.scale = `1`
    imgbox1.style.opacity = '100%'
    quote.style.opacity = '0%'
});
box2[0].addEventListener('mouseover', function () {
    imgbox2.style.transition = 'all 0.5s'
    imgbox2.style.scale = `1.2`
    imgbox2.style.opacity = '0%'
    landingPage.style.opacity = '100%'
    landingPage.style.zIndex = '100'
});
box2[0].addEventListener('mouseleave', function () {
    imgbox2.style.transition = 'all 0.5s'
    imgbox2.style.scale = `1`
    imgbox2.style.opacity = '100%'
    landingPage.style.opacity = '0%'
});
box3[0].addEventListener('mouseover', function () {
    imgbox3.style.transition = 'all 0.5s'
    imgbox3.style.scale = `1.2`
    imgbox3.style.opacity = '0%'
    landing.style.opacity = '100%'
    landing.style.zIndex = '100'
});
box3[0].addEventListener('mouseleave', function () {
    imgbox3.style.transition = 'all 0.5s'
    imgbox3.style.scale = `1`
    imgbox3.style.opacity = '100%'
    landing.style.opacity = '0%'
});
