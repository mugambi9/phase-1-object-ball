function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
 
  console.log(gameObject());


  function homeTeamName(){
    let gameRecords = gameObject();
    return gameRecords.home.teamName;

  }
  
console.log (homeTeamName());


function numPointsScored(playerName) {
    
    let gameRecords = gameObject();
  
   
    if (gameRecords.home.players.hasOwnProperty(playerName)) {
      return gameRecords.home.players[playerName].points;
    }
  
    
    if (gameRecords.away.players.hasOwnProperty(playerName)) {
      return gameRecords.away.players[playerName].points;
    }
  
   
    return "Player not found";
  }
  
  
  function shoeSize(playerName) {
   
    let gameRecords = gameObject();
  
    if (gameRecords.home.players.hasOwnProperty(playerName)) {
      return gameData.home.players[playerName].shoe;
    }
  
    
    if (gameRecords.away.players.hasOwnProperty(playerName)) {
      return gameRecords.away.players[playerName].shoe;
    }

    return "Player not found";
  }
  
 
  function teamColors(teamName) {
    
    let gameRecords = gameObject();
  
  
    if (gameRecords.home.teamName === teamName) {
      return gameRecords.home.colors;
    } else if (gameRecords.away.teamName === teamName) {
      return gameRecords.away.colors;
    }
  

    return "Team not found";
  }
  
 
  function teamNames() {
  
    let gameRecords = gameObject();
  
    
    return [gameRecords.home.teamName, gameRecords.away.teamName];
  }
  
  
  function playerNumbers(teamName) {
    
    let gameRecords = gameObject();
  
    
    if (gameRecords.home.teamName === teamName) {
      return Object.values(gameRecords.home.players).map((player) => player.number);
    } else if (gameRecords.away.teamName === teamName) {
      return Object.values(gameRecords.away.players).map((player) => player.number);
    }
  
    
    return "Team not found";
  }
  
  
  function playerStats(playerName) {
   
   let gameRecords = gameObject();
  
   
    if (gameRecords.home.players.hasOwnProperty(playerName)) {
      return gameRecords.home.players[playerName];
    }
  
    
    if (gameRecords.away.players.hasOwnProperty(playerName)) {
      return gameRecords.away.players[playerName];
    }
  
    
    return "Player not found";
  }
  
  
  console.log(numPointsScored("Alan Anderson")); 
  console.log(shoeSize("Ben Gordon"));
  console.log(teamColors("Brooklyn Nets")); 
  console.log(teamNames()); 
  console.log(playerNumbers("Charlotte Hornets")); 
  console.log(playerStats("Bismak Biyombo")); 


  function bigShoeRebounds() {
   
    const gameRecords = gameObject();
  
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
  
    
    Object.keys(gameRecords.home.players).forEach((playerName) => {
      const player = gameRecords.home.players[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        playerWithLargestShoe = playerName;
      }
    });
  

    Object.keys(gameRecords.away.players).forEach((playerName) => {
      const player = gameRecords.away.players[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        playerWithLargestShoe = playerName;
      }
    });
  
    if (playerWithLargestShoe) {
      return gameRecords.home.players[playerWithLargestShoe].rebounds ||
        gameRecords.away.players[playerWithLargestShoe].rebounds;
    }
  
    return "Player not found";
  }


function mostPointsScored() {
    
    const gameRecords = gameObject();
  
    let maxPoints = 0;
    let playerWithMostPoints = null;
  
    
    Object.keys(gameRecords.home.players).forEach((playerName) => {
      const player = gameRecords.home.players[playerName];
      if (player.points > maxPoints) {
        maxPoints = player.points;
        playerWithMostPoints = playerName;
      }
    });
  
    
    Object.keys(gameRecords.away.players).forEach((playerName) => {
      const player = gameRecords.away.players[playerName];
      if (player.points > maxPoints) {
        maxPoints = player.points;
        playerWithMostPoints = playerName;
      }
    });
  
    return playerWithMostPoints || "Player not found";
  }
  

  function winningTeam() {
    
    const gameRecords = gameObject();
  
    const homePoints = Object.values(gameRecords.home.players).reduce((total, player) => total + player.points, 0);
    const awayPoints = Object.values(gameRecords.away.players).reduce((total, player) => total + player.points, 0);
  
    return homePoints > awayPoints ? gameRecords.home.teamName : gameRecords.away.teamName;
  }
  
  
  function playerWithLongestName() {
  
    const gameRecords = gameObject();
  
    let longestNameLength = 0;
    let playerWithLongestName = null;
  
   
    Object.keys(gameRecords.home.players).forEach((playerName) => {
      if (playerName.length > longestNameLength) {
        longestNameLength = playerName.length;
        playerWithLongestName = playerName;
      }
    });
  
    
    Object.keys(gameRecords.away.players).forEach((playerName) => {
      if (playerName.length > longestNameLength) {
        longestNameLength = playerName.length;
        playerWithLongestName = playerName;
      }
    });
  
    return playerWithLongestName || "Player not found";
  }
  
  
  console.log(mostPointsScored()); 
  console.log(winningTeam()); 
  console.log(playerWithLongestName()); 
  
  

  console.log(bigShoeRebounds()); 
  