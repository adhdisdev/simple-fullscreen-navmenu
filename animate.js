// Get used elements
let menuPaper = document.querySelector('.menu-paper');
let menuItems = document.querySelectorAll('.menu-item');
let menuTitles = document.querySelectorAll('.link-title');
let menuDescs = document.querySelectorAll('.link-description');
let menuButton = document.getElementById('menu-button');

// Menu placement animation
let menuAnim = gsap.fromTo(menuPaper, 1, {
    translateX: "100%"
}, {
    translateX: "0%",
    ease: Power3.easeInOut
});

// Setting timeline and adding the animation above
const menu_tl = gsap.timeline({
    paused: true
});
menu_tl.add(menuAnim, 0);

// This plays when you 'click' the nav button
menuButton.addEventListener('click', () => {
    if (menuButton.classList.contains('closed')) { // if the menu contains "closed" class, it will change it to opened
        menuButton.classList.remove('closed');
        menuButton.classList.add('opened');
        menu_tl.play();
    } else { // if the menu contains "opened" class, it will change it to closed
        menuButton.classList.add('closed');
        menuButton.classList.remove('opened');
        menu_tl.reverse(); // plays the animation backwards
    }
});

// Menu links hover effect
menuTitles.forEach((menuTitle) => {

    //The animation
    let menuTitleBG = gsap.fromTo(menuTitle, .3, {
        backgroundColor: "white"
    }, {
        backgroundColor: "black",
        paused: true,
        ease: Power3.easeInOut
    });
    let menuTitleFG = gsap.fromTo(menuTitle, .3, {
        color: "black"
    }, {
        color: "white",
        paused: true,
        ease: Power3.easeInOut
    });

    // The hover events
    menuTitle.addEventListener('mouseenter', () => {
        menuTitleBG.play();
        menuTitleFG.play();
    });
    menuTitle.addEventListener('mouseleave', () => {
        menuTitleBG.reverse();
        menuTitleFG.reverse();
    });
});