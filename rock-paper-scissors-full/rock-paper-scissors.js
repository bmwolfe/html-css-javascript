let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
  };

  updateScore();

  /*
  if(!score){ //this is equal to "score === null"
    score={
      wins: 0,
      loses: 0,
      ties: 0
    };
  };*/

  function playGame(playerMove){
    const comMove = pickMove();

    if(playerMove === 'scissors'){
      if(comMove === 'rock'){
        outcome = 'You lose!';
      } else if(comMove === 'paper'){
        outcome = 'You win!';
      } else if(comMove === 'scissors'){
        outcome = 'Tie.';
      }
      
    } else if(playerMove === 'paper'){
      if(comMove === 'rock'){
        outcome = 'You win!';
      } else if(comMove === 'paper'){
        outcome = 'Tie.';
      } else if(comMove === 'scissors'){
        outcome = 'You lose!';
      }



    } else if(playerMove === 'rock'){
      if(comMove === 'rock'){
        outcome = 'Tie.';
      } else if(comMove === 'paper'){
        outcome = 'You lose!';
      } else if(comMove === 'scissors'){
        outcome = 'You win!';
      }
    }

    if(outcome === 'You win!'){
      score.wins += 1;
    } else if(outcome === 'You lose!'){
      score.losses += 1;
    } else if(outcome === 'Tie.'){
      score.ties += 1;
    }


    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-res').innerHTML = outcome;

    document.querySelector('.js-moves').innerHTML = `You
  <img src="rock-paper-scissors/${playerMove}-emoji.png" class="move-icon">
  <img src="rock-paper-scissors/${comMove}-emoji.png" class="move-icon">
  Computer`;

  }

  function updateScore(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickMove(){
    const randomNumber = Math.random();
    let comMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3){
      comMove = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
      comMove = 'paper';
    } else if(randomNumber >= 2/3 && randomNumber < 1){
      comMove = 'scissors';
    }

    return comMove;
  }