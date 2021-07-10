const closeModalBtn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')

// Unit selectors
const currMoneySel = document.querySelector('#current-money-raised')
const goalMoneySel = document.querySelector('#goal-money')
const numBackersSel = document.querySelector('#num-backers')
const bambooUnitsLeftSel = document.querySelector('#bamboo-units-left')
const blEdUnitsLeftSel = document.querySelector('#black-edition-units-left')
const mahoganySEdSel = document.querySelector('#mahogany-special-edition-units-left')

// Button selectors
const backBtn = document.querySelector('#back-btn')
const bambooRewardBtn = document.querySelector('#bamboo-reward-btn')
const blackEdRewardBtn = document.querySelector('#black-ed-reward-btn')

const progressFill = document.querySelector('.progress-fill')

const noRewardCheckbox = document.querySelector('#no-reward-checkbox')

// Starting numbers and $USD
const backers = 5007
const currMoney = 89914
const goalMoney = 100000
const bambooLeft = 101
const BEdStandLeft = 64
const MSEdStandLeft = 0

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
  const progressBarPercentage = (currMoney / goalMoney) * 100
  progressFill.style.width = `${progressBarPercentage}%`
}

const updateBackers = () => {
  backers++
  numBackersSel.textContent = backers
}

const initialize = () => {
  numBackersSel.textContent = backers.toLocaleString('en-US')
  currMoneySel.textContent = currMoney.toLocaleString('en-US')
  goalMoneySel.textContent = goalMoney.toLocaleString('en-US')
  bambooUnitsLeftSel.textContent = bambooLeft
  blEdUnitsLeftSel.textContent = BEdStandLeft
  mahoganySEdSel.textContent = MSEdStandLeft
}

// Fire functions at page-load
fillProgressBar()
initialize()

// Event listeners

noRewardCheckbox.addEventListener('change', (e) => {
  if (noRewardCheckbox.checked) {
    e.target.parentElement.parentElement.classList.add('selected')
  } else {
    e.target.parentElement.parentElement.classList.remove('selected')
  }
})
