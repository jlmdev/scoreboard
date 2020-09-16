function main() {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
  // Query Selectors
  // Team 1 input querySelctor
  const teamOneNameInput = document.querySelector('.team1 input')
  console.log(teamOneNameInput)
  // Team 2 input querySelector
  const teamTwoNameInput = document.querySelector('.team2 input')
  console.log(teamTwoNameInput)

  // teamOneNameInput.value = 'Anything Else I Want'

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

  // Event Listeners
  teamOneNameInput.addEventListener('input', handleChangeTeamOneName)
  teamTwoNameInput.addEventListener('input', handleChangeTeamTwoName)
}

document.addEventListener('DOMContentLoaded', main)
