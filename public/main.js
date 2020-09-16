function main() {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
  // Query Selectors
  // Team 1 input querySelctor
  const teamOneNameInput = document.querySelector('.team1 input')
  // console.log(teamOneNameInput)
  // Team 2 input querySelector
  const teamTwoNameInput = document.querySelector('.team2 input')
  // console.log(teamTwoNameInput)
  // Team 1 plus icon querySelector
  const teamOnePlusIcon = document.querySelector('.team1 .add')
  // console.log(teamOnePlusIcon)
  // teamOneNameInput.value = 'Anything Else I Want'
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

  // Event Listeners
  teamOneNameInput.addEventListener('input', handleChangeTeamOneName)
  teamTwoNameInput.addEventListener('input', handleChangeTeamTwoName)
  teamOnePlusIcon.addEventListener('click', handleTeamOnePlusClick)
}

document.addEventListener('DOMContentLoaded', main)
