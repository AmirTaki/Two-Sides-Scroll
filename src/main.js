const sliderContainer = document.querySelector('.slider-container')
const slidRight = document.querySelector('.right-slid')
const slidLeft = document.querySelector('.left-slid')

const upButton =  document.getElementById('up-btn')
const downButton =  document.getElementById('down-btn')

const sliderLenght =  slidRight.querySelectorAll('div').length

let activeSlideIndex = 0;
slidLeft.style.top = `-${(sliderLenght - 1) * 100}vh`


const nextSlide = (params) => {
    const sliderHeight =  sliderContainer.clientHeight;

    if(params === "up") {
        activeSlideIndex ++;
        if(activeSlideIndex > sliderLenght - 1){
            activeSlideIndex = 0
        }
    }
}

downButton.addEventListener("click", () => nextSlide ('up'))
upButton.addEventListener("click", () => nextSlide ('down'))


