// function to generate a random numeric value
var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toUpperCase();
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    } else if (promptFight === "FIGHT") {
        while (playerInfo.health > 0 && enemy.health > 0) {
            // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
            );

            // check enemy's health
            if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');
            // award player money for winning
            playerInfo.money = Math.max(0, playerInfo.money + 20);
            break;
            } else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
            }

            // remove player's health by subtracting the amount set in the enemy.attack variable
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0,playerInfo.health - damage);
            console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
            );
        
            // check player's health
            if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
            // leave while() loop if player is dead
            break;
            } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
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
    playerInfo.reset();

    for (var i = 0; (i < enemyInfo.length) && (playerInfo.health > 0); i++) {
        if (playerInfo.health > 0) {
            window.alert("Round " + (i + 1) + ", start!");
            
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40,60);
            
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // Ask if player wants to use the shop before next round
                var shopConfirm = window.confirm("The fight is over, visit the shop before the next round?");
                // if yes, take them to the shop() function
                if (shopConfirm){
                    shop();
                }
            }

        } else {
            window.alert("You have lost " + playerInfo.name + " in your battle with " + enemyInfo[i-1] + "! Game Over!");
        }
        
        if (i < enemyInfo.length && playerInfo.health > 0) {
            newRound();
        } else {
            endGame();
        }
    }
};

var newRound = function() {
    window.alert("Great job you've survived the game! You now have a score of " + playerInfo.money + ".");
    var keepPlayingConfirm = window.confirm("Would you like to keep playing?");
    if (keepPlayingConfirm) {}
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        playerInfo.health = 0;
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
            playerInfo.health = 0;
        }
    };
    // If player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You have a final score of " + playerInfo.money + "!");
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
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
            playerInfo.upgradeAttack();
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

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (playerInfo.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10,12)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,13)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(11,14)
    },
    {
        name: window.prompt("What is your rival robot's name?"),
        attack: randomNumber(15,17)
    }
];

// Start the game when the page loads
startGame();