var scores, roundScore, activePlayer;

init();




//annonymous function is a function without a name that cannot be reused
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2.display result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //3. Update round score IF rolled number isn't 1
    if(dice !== 1){
        //score will be added
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //next player
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    //add score 
    scores[activePlayer] += roundScore;
    
    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //check who won
    if(scores[activePlayer] >=100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }else{
        nextPlayer();
    }
});

function nextPlayer(){
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);
    

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

    /***use Math.floor function to return 
    * integer and not decimal since Math.Random 
     *returns a number between 0 and 1 but times by 6 to
    do from 0 and 5 then add 1 to get 1 to 6
    */

    document.querySelector('.dice').style.display = 'none';  
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
