var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Rodrigo', 'Amy Android', 'Robo Trumble', window.prompt("What is your rival robot's name?")];
console.log(enemyNames.length);
var enemyHealth = 50;
var enemyAttack = 12;

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toUpperCase();
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    } else if (promptFight === "FIGHT") {
        while (playerHealth > 0 && enemyHealth > 0) {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
            );

            // check enemy's health
            if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');
            // award player money for winning
            playerMoney = playerMoney + 20;
            
            } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
            }

            // remove players's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
            );
        
            // check player's health
            if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');
            // leave while() loop if player is dead
            break;
            } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
            }
        }
    } else {
        window.alert('You must enter a valid option! Please enter "FIGHT" or "SKIP"');
        startGame();
    }
  }
};

// Alert the player we are starting the round
window.alert("Welcome to Robot Gladiators!");

// Function to start a new game
var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        enemyHealth = 50;
        if (playerHealth > 0) {
            window.alert("Round " + (i + 1) + ", start!");
            fight(enemyNames[i]);
        } else {
            window.alert("You have lost " + playerName + " in your battle with " + enemyNames[i-1] + "! Game Over!");
        }
        endGame();
    }
};

// End game function
var endGame = function() {
    // If player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else ("You've lost your robot in battle.")

    // Ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        // reset the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// Start the game when the page loads
startGame();