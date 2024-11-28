const money = document.querySelector('.money')
const iconEye = document.querySelector('i.bi-eye-slash-fill')
const buttonHiddenBalance = document.querySelector('.hiddenBalance')
const buttonShowBalance = document.querySelector('.showBalance')

buttonHiddenBalance.addEventListener('click', () => {
  money.style.display = 'none'
  iconEye.style.display = 'block'
  buttonShowBalance.style.display = "block"
  buttonHiddenBalance.style.display = "none"
})

buttonShowBalance.addEventListener('click', () => {
  money.style.display = 'block'
  iconEye.style.display = 'none'
  buttonShowBalance.style.display = "none"
  buttonHiddenBalance.style.display = "block"
})