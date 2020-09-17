function main() {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
  // Query Selectors
  // Team 1 input querySelector
  const teamOneNameInput = document.querySelector('.team1 input')

  // Team 2 input querySelector
  const teamTwoNameInput = document.querySelector('.team2 input')

  // Team 1 plus icon querySelector
  const teamOnePlusIcon = document.querySelector('.team1 .add')

  // Team 2 plus icon querySelector
  const teamTwoPlusIcon = document.querySelector('.team2 .add')

  // Team 1 minus icon querySelector
  const teamOneMinusIcon = document.querySelector('.team1 .subtract')

  // Team 2 minus icon querySelector
  const teamTwoMinusIcon = document.querySelector('.team2 .subtract')

  // Reset button querySelector
  const resetButton = document.querySelector('.reset')

  // Winner display querySelector
  const winnerNotification = document.querySelector('h4')

  // variables
  let teamOneScore = 0
  let teamTwoScore = 0
  let teamOneName = 'Team One'
  let teamTwoName = 'Team Two'

  // Team 1 name change event handler
  const handleChangeTeamOneName = event => {
    const elementThatChanged = event.target
    const inputFieldOneValue = elementThatChanged.value
    const teamOneNameElement = document.querySelector('.team1 h2')
    teamOneNameElement.textContent = inputFieldOneValue
    teamOneName = teamOneNameElement.textContent
  }

  // Team 2 name change event handler
  const handleChangeTeamTwoName = event => {
    const elementThatChanged = event.target
    const inputFieldTwoValue = elementThatChanged.value
    const teamTwoNameElement = document.querySelector('.team2 h2')
    teamTwoNameElement.textContent = inputFieldTwoValue
    teamTwoName = teamTwoNameElement.textContent
  }

  // Team 1 Plus Icon click event handler
  const handleTeamOnePlusClick = event => {
    // const target = event.target
    const teamOneScoreString = document.querySelector('.team1 h3')
    if (teamOneScore < 21) {
      teamOneScore += 1
      teamOneScoreString.textContent = teamOneScore.toString()
    }
    if (teamOneScore === 21) {
      // console.log(`${teamOneName} Wins!!!`)
      winnerNotification.style.display = 'inline'
      winnerNotification.textContent = `${teamOneName} Wins!!!`
    }
  }

  // Team 2 Plus Icon click event handler
  const handleTeamTwoPlusClick = event => {
    // const target = event.target
    const teamTwoScoreString = document.querySelector('.team2 h3')
    if (teamTwoScore < 21) {
      teamTwoScore += 1
      teamTwoScoreString.textContent = teamTwoScore.toString()
    }
    if (teamTwoScore === 21) {
      // console.log(`${teamTwoName} Wins!!!`)
      winnerNotification.style.display = 'inline'
      winnerNotification.textContent = `${teamTwoName} Wins!!!`
    }
  }

  // Team 1 Minus Icon click event handler
  const handleTeamOneMinusClick = event => {
    // const target = event.target
    const teamOneScoreString = document.querySelector('.team1 h3')
    if (teamOneScore > 0) {
      teamOneScore -= 1
      teamOneScoreString.textContent = teamOneScore.toString()
    }
  }

  // Team 2 Minus Icon click event handler
  const handleTeamTwoMinusClick = event => {
    // const target = event.target
    const teamTwoScoreString = document.querySelector('.team2 h3')
    if (teamTwoScore > 0) {
      teamTwoScore -= 1
      teamTwoScoreString.textContent = teamTwoScore.toString()
    }
  }

  // Reset button click event handler
  const handleResetButtonClick = event => {
    const teamOneScoreString = document.querySelector('.team1 h3')
    const teamTwoScoreString = document.querySelector('.team2 h3')
    teamOneScore = 0
    teamTwoScore = 0
    teamOneScoreString.textContent = teamOneScore.toString()
    teamTwoScoreString.textContent = teamTwoScore.toString()
    winnerNotification.style.display = 'hidden'
    winnerNotification.textContent = ''
  }

  // Event Listeners
  teamOneNameInput.addEventListener('input', handleChangeTeamOneName)
  teamTwoNameInput.addEventListener('input', handleChangeTeamTwoName)
  teamOnePlusIcon.addEventListener('click', handleTeamOnePlusClick)
  teamTwoPlusIcon.addEventListener('click', handleTeamTwoPlusClick)
  teamOneMinusIcon.addEventListener('click', handleTeamOneMinusClick)
  teamTwoMinusIcon.addEventListener('click', handleTeamTwoMinusClick)
  resetButton.addEventListener('click', handleResetButtonClick)
}

document.addEventListener('DOMContentLoaded', main)
