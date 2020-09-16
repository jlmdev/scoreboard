function main() {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
  // Query Selectors
  // Team 1 input querySelctor
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

  // variables
  let teamOneScore = 0
  let teamTwoScore = 0

  // Team 1 name change event handler
  const handleChangeTeamOneName = event => {
    const elementThatChanged = event.target
    const inputFieldValue = elementThatChanged.value
    const teamNameElement = document.querySelector('.team1 h2')
    teamNameElement.textContent = inputFieldValue
  }

  // Team 2 name change event handler
  const handleChangeTeamTwoName = event => {
    const elementThatChanged = event.target
    const inputFieldValue = elementThatChanged.value
    const teamNameElement = document.querySelector('.team2 h2')
    teamNameElement.textContent = inputFieldValue
  }

  // Team 1 Plus Icon click event handler
  const handleTeamOnePlusClick = event => {
    const target = event.target
    const teamOneScoreString = document.querySelector('.team1 h3')
    teamOneScore += 1
    teamOneScoreString.textContent = teamOneScore.toString()
  }

  // Team 2 Plus Icon click event handler
  const handleTeamTwoPlusClick = event => {
    const target = event.target
    const teamTwoScoreString = document.querySelector('.team2 h3')
    teamTwoScore += 1
    teamTwoScoreString.textContent = teamTwoScore.toString()
  }

  // Team 1 Minus Icon click event handler
  const handleTeamOneMinusClick = event => {
    const target = event.target
    const teamOneScoreString = document.querySelector('.team1 h3')
    teamOneScore -= 1
    teamOneScoreString.textContent = teamOneScore.toString()
  }

  // Team 2 Minus Icon click event handler
  const handleTeamTwoMinusClick = event => {
    const target = event.target
    const teamTwoScoreString = document.querySelector('.team2 h3')
    teamTwoScore -= 1
    teamTwoScoreString.textContent = teamTwoScore.toString()
  }

  // Event Listeners
  teamOneNameInput.addEventListener('input', handleChangeTeamOneName)
  teamTwoNameInput.addEventListener('input', handleChangeTeamTwoName)
  teamOnePlusIcon.addEventListener('click', handleTeamOnePlusClick)
  teamTwoPlusIcon.addEventListener('click', handleTeamTwoPlusClick)
  teamOneMinusIcon.addEventListener('click', handleTeamOneMinusClick)
  teamTwoMinusIcon.addEventListener('click', handleTeamTwoMinusClick)
}

document.addEventListener('DOMContentLoaded', main)
