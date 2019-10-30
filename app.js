const navButton = document.querySelector('.nav-button')
const navOpen = document.querySelector('.nav-open')

// timeline for animations.
const tl = new TimelineLite({ paused: true, reversed: true })

tl.to('.cover', 1, {
    width: '60%',
    ease: Power2.easeOut
})
.to('nav', 1, {
    height: '100%',
    ease: Power2.easeOut
}, '-= 0.5')
.fromTo('.nav-open', 0.5, {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
},{
    opacity: 1,
    x: 0,
    onComplete: function() {
        navOpen.getElementsByClassName.pointerEvents = 'auto';
    }
})

navButton.addEventListener('click', () => {
    toggleTween(tl)
})

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse()
}

function activateMushroom(mushroom) {
    $('.mushroom').addClass('active-mushroom')
}

function addClassByClick(button){   
    $(button).addClass("active")
  }
// failed flight


// keyboard controls

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
        console.log('right')
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
        console.log('right n left')
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
        console.log('idk')
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
        console.log('yolo')
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);