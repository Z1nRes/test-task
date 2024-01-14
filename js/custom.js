const body = document.body

const btnEquity = document.querySelector('.equity-content-btn')
const btnEarlyAccess = document.querySelector('.get-early-access-btn')
const btnBlog = document.querySelector('.news-btn')

function handleFormSubmit(event) {
    event.preventDefault()
    
    modalWindow.classList.remove('hidden')
    modalWindow.classList.add('d-flex')

    formModal.classList.remove('d-block')
    formModal.classList.add('hidden')

    successModal.classList.remove('hidden')
    successModal.classList.add('d-flex')

    body.classList.add('scroll-none')
    event.target.reset(); 
}

const applicantForm = Object.values(document.getElementsByClassName('form'))

for (let form in applicantForm){
    applicantForm[form].addEventListener('submit', handleFormSubmit)
}

const modalWindow = document.querySelector('.modal-window')
const successModal = document.querySelector('.success-modal')
const formModal = document.querySelector('.modal-signup')

modalWindow.addEventListener("click", ({target}) => {
    if (target.classList.contains('modal-window')) {
        modalWindow.classList.remove('d-flex')
        modalWindow.classList.add('hidden')
        successModal.classList.remove('d-flex')
        successModal.classList.add('hidden')
        formModal.classList.remove('d-block')
        formModal.classList.add('hidden')
        body.classList.toggle('scroll-none')
    }
})

btnEquity.addEventListener("click", () => {
    modalWindow.classList.remove('hidden')
    modalWindow.classList.add('d-flex')

    formModal.classList.remove('hidden')
    formModal.classList.add('d-block')

    body.classList.toggle('scroll-none')
})

btnBlog.addEventListener("click", () => {
    modalWindow.classList.remove('hidden')
    modalWindow.classList.add('d-flex')

    successModal.classList.remove('hidden')
    successModal.classList.add('d-flex')

    body.classList.toggle('scroll-none')
})

const burgerBtn = document.querySelector('.burger-btn')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuWrapper = document.querySelector('.burger-menu-wrapper')

function burgerFunction() {
    burgerMenu.classList.toggle('hidden')
    burgerMenuWrapper.classList.toggle('hidden')
    body.classList.toggle('scroll-none')
}

const burgerMenuLinks = Object.values(document.querySelectorAll('.header-nav-link-mobile'))

for (let link in burgerMenuLinks){
    burgerMenuLinks[link].addEventListener("click", burgerFunction)
}

burgerBtn.addEventListener("click", () => {
    burgerFunction()
})

burgerMenuWrapper.addEventListener("click", ({target}) => {
    if (target.classList.contains('burger-menu-wrapper')) {
        burgerFunction()
    }
})