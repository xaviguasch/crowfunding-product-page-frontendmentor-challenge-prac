const backBtn = document.querySelector('#back-btn')
const closeModalBtn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')

const currMoneySel = document.querySelector('#current-money-raised')
const goalMoneySel = document.querySelector('#goal-money')
const numBackersSel = document.querySelector('#num-backers')
const bambooUnitsLeftSel = document.querySelector('#bamboo-units-left')
const blEdUnitsLeftSel = document.querySelector('#black-edition-units-left')

const bambooRewardBtn = document.querySelector('#bamboo-reward-btn')
const blackEdRewardBtn = document.querySelector('#black-ed-reward-btn')

const progressFill = document.querySelector('.progress-fill')

const noRewardCheckbox = document.querySelector('#no-reward-checkbox')

// Starting numbers and $usd
const backers = 5007
const currMoney = 89914

const showModal = () => {
  overlay.style.display = 'block'
}

backBtn.addEventListener('click', showModal)
bambooRewardBtn.addEventListener('click', showModal)
blackEdRewardBtn.addEventListener('click', showModal)

closeModalBtn.addEventListener('click', () => {
  overlay.style.display = 'none'
})

// Progress bar
const fillProgressBar = () => {
  const currMoneyNum = parseFloat(currMoneySel.textContent.replace(',', ''))
  const goalMoneyNum = parseFloat(goalMoneySel.textContent.replace(',', ''))
  const progressBarPercentage = (currMoneyNum / goalMoneyNum) * 100

  progressFill.style.width = `${progressBarPercentage}%`
}

fillProgressBar()

noRewardCheckbox.addEventListener('change', (e) => {
  if (noRewardCheckbox.checked) {
    e.target.parentElement.parentElement.classList.add('selected')
  } else {
    e.target.parentElement.parentElement.classList.remove('selected')
  }
})

const updateBackers = () => {
  backers++
  numBackersSel.textContent = backers
}

const initialize = () => {
  numBackersSel.textContent = backers.toLocaleString('en-US')
}

initialize()
