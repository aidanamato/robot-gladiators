var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Rodrigo', 'Amy Android', 'Robo Trumble', window.prompt("What is your rival robot's name?")];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Alert the player we are starting the round
    window.alert("Welcome to Robot Gladiators!");
    // Fight or skip?
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    promptFight = promptFight.toUpperCase();
    // if player chooses FIGHT
    if (promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

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
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
       var confirmSkip = window.confirm("Are you sure you'd like to quit?");
       // if yes (true), leave fight
       if (confirmSkip) {
           window.alert(playerName + " has decided to skip this fight. Goodbye!");
           // subtract money from playerMoney for skipping
           playerMoney = playerMoney - 2;
       }
       // if no (false), ask question again by running fight() again
       else {
           fight();
       }
    } else {
        window.alert("You have to choose FIGHT or SKIP! Try again!")
    }
}

for (i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}