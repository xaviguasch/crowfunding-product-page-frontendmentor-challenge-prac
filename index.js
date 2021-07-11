const closeModalBtn = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')
const overlay2 = document.querySelector('#overlay--2')
const progressFill = document.querySelector('.progress-fill')
const checkboxes = document.querySelectorAll('.checkbox__input')
const noRewardCheckbox = document.querySelector('#no-reward-checkbox')
const bambooStandCheckbox = document.querySelector('#bamboo-stand-checkbox')
const blackEditionStandCheckbox = document.querySelector('#black-edition-stand-checkbox')
const outOfStockCheckbox = document.querySelector('#out-of-stock-checkbox')

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
const btnContinueAll = document.querySelectorAll('.btn--continue')
const thankYouBtn = document.querySelector('#thank-you-btn')
const bookmarkBtn = document.querySelector('.bookmark-btn')

// Starting numbers and $USD
let backers = 5007
let currMoney = 89914
let goalMoney = 100000
let bambooLeft = 101
let BEdStandLeft = 64
let MSEdStandLeft = 0

// FUNCTIONS

const showModal = () => {
  overlay.style.display = 'block'
}

const closeModal = () => {
  overlay.style.display = 'none'
}

// Progress bar
const fillProgressBar = () => {
  const progressBarPercentage = (currMoney / goalMoney) * 100
  progressFill.style.width = `${progressBarPercentage}%`
}

const updateBackers = () => {
  backers++
  numBackersSel.textContent = backers
}

const updateMoney = (pledgedMoney) => {
  currMoney += Number(pledgedMoney)
  currMoneySel.textContent = currMoney.toLocaleString('en-US')
}

const updateOptionQty = (option) => {
  if (option === 'bamboo-option') {
    bambooLeft--
    bambooUnitsLeftSel.textContent = bambooLeft
  } else if (option === 'black-edition-option') {
    BEdStandLeft--
    blEdUnitsLeftSel.textContent = BEdStandLeft
  } else {
    console.log('do nothing!')
  }
}

const initialize = () => {
  numBackersSel.textContent = backers.toLocaleString('en-US')
  currMoneySel.textContent = currMoney.toLocaleString('en-US')
  goalMoneySel.textContent = goalMoney.toLocaleString('en-US')
  bambooUnitsLeftSel.textContent = bambooLeft
  blEdUnitsLeftSel.textContent = BEdStandLeft
  mahoganySEdSel.textContent = MSEdStandLeft
  numBackersSel.textContent = backers
}

const selectReward = (e) => {
  if (e.target.checked) {
    checkboxes.forEach((cb) => {
      cb.parentElement.parentElement.classList.remove('selected')
      cb.checked = false
      cb.parentElement.parentElement.querySelector(
        '.option__enter-pledge'
      ).style.display = 'none'
    })
    e.target.parentElement.parentElement.classList.add('selected')
    e.target.checked = true
    e.target.parentElement.parentElement.querySelector(
      '.option__enter-pledge'
    ).style.display = 'block'
  } else {
    e.target.parentElement.parentElement.classList.remove('selected')
  }
}

const openThankYouModal = () => {
  overlay2.style.display = 'block'
}
const closeThankYouModal = () => {
  overlay2.style.display = 'none'
}

const confirmAndContinue = (e) => {
  const pledgedDollars =
    e.target.parentElement.querySelector('input[type="number"]').value

  if (pledgedDollars > 0) {
    const optionSelected = e.target.parentElement.parentElement.parentElement.id
    updateOptionQty(optionSelected)
    updateBackers()
    updateMoney(pledgedDollars)
    fillProgressBar()
    // Resets pledge input
    e.target.parentElement.querySelector('input[type="number"]').value = 0
    openThankYouModal()
  }

  closeModal()
}

const bookmark = () => {
  bookmarkBtn.classList.toggle('bookmarked')
}

// Fire functions at page-load
fillProgressBar()
initialize()

// Event listeners
backBtn.addEventListener('click', showModal)
bambooRewardBtn.addEventListener('click', showModal)
blackEdRewardBtn.addEventListener('click', showModal)

closeModalBtn.addEventListener('click', closeModal)

noRewardCheckbox.addEventListener('change', selectReward)
bambooStandCheckbox.addEventListener('change', selectReward)
blackEditionStandCheckbox.addEventListener('change', selectReward)
outOfStockCheckbox.addEventListener('change', selectReward)

btnContinueAll.forEach((btnCont) => {
  btnCont.addEventListener('click', confirmAndContinue)
})

thankYouBtn.addEventListener('click', closeThankYouModal)

bookmarkBtn.addEventListener('click', bookmark)
