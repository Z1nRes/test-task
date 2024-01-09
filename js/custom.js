
btnEquity = document.querySelector('.equity-content-btn')
btnEarlyAccess = document.querySelector('.get-early-access-btn')
btnBlog = document.querySelector('.news-btn')

function handleFormSubmit(event) {
    event.preventDefault()
    
    modalWindow.classList.remove('hidden')
    modalWindow.classList.add('d-flex')

    formModal.classList.remove('d-block')
    formModal.classList.add('hidden')

    successModal.classList.remove('hidden')
    successModal.classList.add('d-flex')

    event.target.reset(); 
}

const applicantForm = Object.values(document.getElementsByClassName('form'))

for (let form in applicantForm){
    applicantForm[form].addEventListener('submit', handleFormSubmit)
}

modalWindow = document.querySelector('.modal-window')
successModal = document.querySelector('.success-modal')
formModal = document.querySelector('.modal-signup')

modalWindow.addEventListener("click", ({target}) => {
    if (target.classList.contains('modal-window')) {
        modalWindow.classList.remove('d-flex')
        modalWindow.classList.add('hidden')
        successModal.classList.remove('d-flex')
        successModal.classList.add('hidden')
        formModal.classList.remove('d-block')
        formModal.classList.add('hidden')
    }
})

btnEquity.addEventListener("click", () => {
    
    modalWindow.classList.remove('hidden')
    modalWindow.classList.add('d-flex')

    formModal.classList.remove('hidden')
    formModal.classList.add('d-block')
})

btnBlog.addEventListener("click", () => {
    modalWindow.classList.remove('hidden')
    modalWindow.classList.add('d-flex')

    successModal.classList.remove('hidden')
    successModal.classList.add('d-flex')
})

burgerBtn = document.querySelector('.burger-btn')
burgerMenu = document.querySelector('.burger-menu')

burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle('hidden')
})