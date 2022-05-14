const hamburgerMenuBtn = document.querySelector('#hamburger-menu-btn')
const navList = document.querySelector('.nav-list')
const nav = document.querySelector('.nav')
const scrollUpBtn = document.querySelector('#scroll-up-btn')

hamburgerMenuBtn.addEventListener('click', () => {
    hamburgerMenuBtn.classList.toggle('active-hamburger-menu-btn')
    navList.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    nav.classList.toggle('active-nav', scrollY > 0)
    scrollUpBtn.classList.toggle('scroll-up-btn-active', scrollY > 500)
})


document.querySelectorAll('.nav-list').forEach(n => n.addEventListener('click', () => {
    hamburgerMenuBtn.classList.remove('active-hamburger-menu-btn')
    navList.classList.remove('active')
}))

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburgerMenuBtn.classList.remove('active-hamburger-menu-btn')
        navList.classList.remove('active')
    }
})


scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    })
})


