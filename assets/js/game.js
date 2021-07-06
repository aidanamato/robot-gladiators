var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Rodrigo', 'Amy Android', 'Robo Trumble', window.prompt("What is your rival robot's name?")];
console.log(enemyNames.length);
var enemyHealth = Math.floor(Math.random() * 21) + 40;
var enemyAttack = 12;

// function to generate a random numeric value
var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

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
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    } else if (promptFight === "FIGHT") {
        while (playerHealth > 0 && enemyHealth > 0) {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            var damage = randomNumber(playerAttack - 3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);
            console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
            );

            // check enemy's health
            if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');
            // award player money for winning
            playerMoney = Math.max(0, playerMoney + 20);
            break;
            } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
            playerHealth = Math.max(0,playerHealth - damage);
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

    for (var i = 0; (i < enemyNames.length) && (playerHealth > 0); i++) {
        enemyHealth = randomNumber(40,60);
        if (playerHealth > 0) {
            window.alert("Round " + (i + 1) + ", start!");
            fight(enemyNames[i]);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // Ask if player wants to use the shop before next round
                var shopConfirm = window.confirm("The fight is over, visit the shop before the next round?");
                // if yes, take them to the shop() function
                if (shopConfirm){
                    shop();
                }
            }

        } else {
            window.alert("You have lost " + playerName + " in your battle with " + enemyNames[i-1] + "! Game Over!");
        }
        
        if (i < enemyNames.length && playerHealth > 0) {
            newRound();
        } else {
            endGame();
        }
    }
};

var newRound = function() {
    window.alert("Great job you've survived the game! You now have a score of " + playerMoney + ".");
    var keepPlayingConfirm = window.confirm("Would you like to keep playing?");
    if (keepPlayingConfirm) {}
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        playerHealth = 0;
    }
};
// End game function
var endGame = function() {
    var playAgain = function() {
        var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
            startGame();
        } else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
            playerHealth = 0;
        }
    };
    // If player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You have a final score of " + playerMoney + "!");
        playAgain();
    } else {
        window.alert("You've lost your robot in battle.");
        playAgain();
    }
};

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    shopOptionPrompt = shopOptionPrompt.toUpperCase();
    
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.")

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }

            break;
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "LEAVE":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    
    }
};
// Start the game when the page loads
startGame();