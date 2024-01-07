
btnEquity = document.querySelector('.equity-content-btn')
btnEarlyAccess = document.querySelector('.get-early-access-btn')
btnBlog = document.querySelector('.news-btn')
btnContact = document.querySelector('.contact-form-btn')

modalWindow = document.querySelector('.modal-window')
successModal = document.querySelector('.success-modal')
formModal = document.querySelector('.modal-signup')

modalWindow.addEventListener("click", () => {
    modalWindow.classList.remove('d-flex')
    modalWindow.classList.add('hidden')
    successModal.classList.remove('d-flex')
    successModal.classList.add('hidden')
    formModal.classList.remove('d-flex')
    formModal.classList.add('hidden')
})

btnEquity.addEventListener("click", () => {
    modalWindow.classList.remove('hidden')
    modalWindow.classList.add('d-flex')

    formModal.classList.remove('hidden')
    formModal.classList.add('d-block')
})

btnEarlyAccess.addEventListener("click", () => {
    modalWindow.classList.remove('hidden')
    modalWindow.classList.add('d-flex')

    successModal.classList.remove('hidden')
    successModal.classList.add('d-flex')
})

btnBlog.addEventListener("click", () => {
    modalWindow.classList.remove('hidden')
    modalWindow.classList.add('d-flex')

    successModal.classList.remove('hidden')
    successModal.classList.add('d-flex')
})

btnContact.addEventListener("click", () => {
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