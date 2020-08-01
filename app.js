var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0
activePlayer = 0;

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


//annonymous function is a function without a name that cannot be reused
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2.display result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //3. Update round score IF rolled number isn't 1
});

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
