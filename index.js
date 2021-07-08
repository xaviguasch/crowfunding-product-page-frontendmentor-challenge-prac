const backBtn = document.querySelector('#back-btn')
const closeModalBtn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')
const currMoney = document.querySelector('#current-money-raised')
const goalMoney = document.querySelector('#goal-money')
const numBackers = document.querySelector('#num-backers')
const bambooUnitsLeft = document.querySelector('#bamboo-units-left')
const blEdUnitsLeft = document.querySelector('#black-edition-units-left')

const progressFill = document.querySelector('.progress-fill')

backBtn.addEventListener('click', () => {
  overlay.style.display = 'block'
})

closeModalBtn.addEventListener('click', () => {
  overlay.style.display = 'none'
})

// Progress bar
const currMoneyNum = parseFloat(currMoney.textContent.replace(',', ''))
const goalMoneyNum = parseFloat(goalMoney.textContent.replace(',', ''))
const progressBarPercentage = (currMoneyNum / goalMoneyNum) * 100

progressFill.style.width = `${progressBarPercentage}%`
