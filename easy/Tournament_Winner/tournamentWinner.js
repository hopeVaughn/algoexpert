/*
There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.

Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named 'competitions' and 'results', respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won.

It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams.
*/

// sample input
const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
]
const results = [0, 0, 1]

/*
sample output:
"Python"
C# beats HTML, Python Beats C#, and Python Beats HTML.
HTML - 0 points
C# - 3 points
Python - 6 points
*/

// by initializing the two below variables as constants outside our main function we are able to reduce the amount of arguments we will need to pass to our helper function and reduce the need for internal variables inside our main function.
const HOME_TEAM_WON = 1;
const POINTS = 3;

function tournamentWinner(competitions, results) {
  // place holder for output
  let currentBestTeam = "";
  // initialize obj for optimization and storage of currentBestTeam
  let scores = {
    [currentBestTeam]: 0,
  }

  for (let i = 0; i < competitions.length; i++) {
    // initialize input into two variables
    const [homeTeam, awayTeam] = competitions[i];
    const result = results[i]

    // checks the result of the comparison of the results array to the competitions result and initializes winningTeam as the name of the team that won
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    // pass in storage object and winning team result to our helper function in order to update the currentBestTeam
    updateScores(scores, winningTeam);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam
    }
  }
  return currentBestTeam;
}

function updateScores(scores, team) {
  const prevScore = scores[team] || 0;
  scores[team] = prevScore + POINTS;
}

console.log(tournamentWinner(competitions, results))

// time: O(n) where n is the number of competitions we have (or the number of results)
// space: O(k) where k is the number of teams competing in the tournament
