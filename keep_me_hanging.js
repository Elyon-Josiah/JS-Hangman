"use strict";

/**
 * Returns answer from user.
 * 
 * @param {String} question It is displayed to the user
 * @returns {String} answer from user.
 */
function getInput(question)
{
     let userAnswer = "";
     userAnswer = prompt(question, "");
     return userAnswer;
}


/**
 * Returns a masked version of the guess word.
 * 
 * @param {String} guessWord 
 * @returns {String} a masked version of the guess word.
 */
function maskWord(guessWord)
{
     let maskCharacter = "*";
     return maskCharacter.repeat(guessWord.length);
}


function main()
{
     let gameScreen = "Welcome to HANGMAN the game!";
     let numberOfTries = 0;
     let guessWord = "";
    
     alert(gameScreen);
     numberOfTries = Number(getInput("How many tries does player 2 have?"));
     guessWord = getInput("What is the word for player 2 to guess?");

     let toBeGuessWord = maskWord(guessWord);
     let guessCorrectly = false;
     let escapeLoop = false;
     let bufferWord = "";
     let userAnswer = "";
     let tries = 0;
     while (escapeLoop === false)
     {
          bufferWord = "";
          guessCorrectly = false;
          userAnswer = getInput(`${toBeGuessWord} Answer? [Tries: ${tries + 1} | Limit: ${numberOfTries}]`);
          for (let index = 0; index < guessWord.length; index++)
          {
               if (userAnswer === guessWord[index])
               {
                    bufferWord = bufferWord + userAnswer;
                    guessCorrectly = true;
               }
               else
               {
                    bufferWord = bufferWord + toBeGuessWord[index];
               }
          }
          
          toBeGuessWord = bufferWord;

          if (!guessCorrectly) tries++;

          if (tries === numberOfTries)
          {
               escapeLoop = true;
               alert("GAME OVER! You have reached the limit!");
          }
          else
          {
               if (toBeGuessWord === guessWord)
               {
                    escapeLoop = true;
                    alert(`GOOD JOB! The word is ${guessWord}`);
               }
               else
               {
                    escapeLoop = false;
               }
          }
     }
}


main();
