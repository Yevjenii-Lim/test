let mobileMenu = document.querySelector('.mobile__nav')
let gamburger = document.querySelector('.gamburger')
let close = document.querySelector('.close')
let overlay = document.querySelector('.overlay')
gamburger.addEventListener('click', openMenu)

function openMenu() {
    mobileMenu.style.transform = 'translateY(0%)'
    overlay.style.display = "block"
    document.body.style.overflow = 'hidden'
}


close.addEventListener('click', closeMenu)

function closeMenu() {
    mobileMenu.style.transform = 'translateY(-120%)'
    overlay.style.display = "none"
    document.body.style.overflow = ''
}


overlay.addEventListener('click', closeMenu)