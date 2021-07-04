var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Rodrigo', 'Amy Android', 'Robo Trumble', window.prompt("What is your rival robot's name?")];
console.log(enemyNames.length);
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Fight or skip?
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    promptFight = promptFight.toUpperCase();
    // if player chooses FIGHT
    if (promptFight === "FIGHT") {
        
        // Main fight loop
        while (playerHealth > 0 && enemyHealth > 0) {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            // check enemy health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;   
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left!");
            }
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }

        // if player chooses to skip
    } else if (promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log(playerMoney);
    }
    // if no (false), ask question again by running fight() again
    else {
        fight(enemyNames[i]);
    }
    } else {
        window.alert("You have to choose FIGHT or SKIP! Try again!");
        fight(enemyNames[i]);
    }
}

// Alert the player we are starting the round
window.alert("Welcome to Robot Gladiators!");

// Initiate Fight Sequence
for (var i = 0; i < enemyNames.length; i++) {
    enemyHealth = 50;
    if (playerHealth > 0) {
        window.alert("Round " + (i + 1) + ", start!");
        fight(enemyNames[i]);
    } else {
        window.alert("You have lost " + playerName + " in your battle with " + enemyNames[i-1] + "! Game Over!");
    }
}