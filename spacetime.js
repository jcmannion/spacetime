$(document).ready(function () {

//======= Main Menu =======//

//======= Initial Hiding Of Gameboard And High Score
$('#newScore').hide()
$('#highScore').hide()
$('.game').hide()

//======= Initial Hiding Of Word Scrolls For Story Mode Levels
$('#scroll1').hide()
$('#scroll2').hide()
$('#scroll3').hide()
$('#scroll4').hide()
$('#scroll5').hide()
$('#scroll6').hide()

//======= Initial Hiding Of Ships For Story Mode Levels
$('#ship').hide()
$('#ship2').hide()
$('#ship3').hide()
$('#ship4').hide()
$('#ship5').hide()
$('#ship6').hide()

//======= Initial Hiding For Destroyer 
$('#destroyer').hide()

//======= Initial Hiding Of Continue To Next Level For Story Mode Levels
$('.nextLevel').hide()

//======= Initial Hiding Of Laser
$('.laser').hide()

//======= Intial Hide For Instructions For Pause/Play, Move, And Fire
$('#pause').hide()
$('#move').hide()
$('#fire').hide()

//======= Level Count For The Game To Register Level Change For Weapon Fire Function
let levelCount = 0

//======= Story Mode Button Actions
$('#story').on('click', function() {
  levelCount++
  $('#logo1').hide()
  $('#button').hide()
  $('#logo').addClass('firstSpacetime')
  $('#logo').on('animationend', function() {
    $('.game').show()
    $('#scroll1').show()
    $('#background').hide()
    $('#home').hide()
    $('#firstScroll').addClass('opening')
    $('#firstScroll').on('animationend', function() {
      $('#scroll1').hide()
      $('#firstScroll').hide()
      $('#background').show().css({
        background: "url('images/backgrounds/space.png')",
        backgroundSize: '900px 460px',
        width: '900px',
        height: '460px',
        marginTop: '90px',
        overflow: 'hidden',
      })
      $('#ship').show().css({
        top: '395px'
      })
      $('#scoreKeep, #asteroidCounter').hide()
      $('#pause').show()
      $('#move').show()
      $('#weapon').hide()
      story1Asteroid1();
      story1Asteroid2();
      story1Asteroid3();
      story1Asteroid4(); 
      story1Asteroid5();
      story1Asteroid6();
      story1Asteroid7();
      story1Asteroid8();
      story1Asteroid9();
      story1Asteroid10();
      story1Asteroid11();
      story1Asteroid12();
      story1Asteroid13();
      story1Asteroid14();
      story1Asteroid15();
      story1Asteroid16();
      livesCount = 0
    });
  })
})

//======= Endless Run Button Actions
$('#endless').on('click', function() {
  $('.game').show()
  $('#home').hide()
  $('#pause').show()
  $('#move').show()
  $('#fire').show()
  $('#ship').show()
  blackHole1.play();
  endlessAsteroid1();
  endlessAsteroid2();
  endlessAsteroid3();
  endlessAsteroid4(); 
  endlessAsteroid5();
  endlessAsteroid6();
  endlessAsteroid7();
  endlessAsteroid8();
  endlessAsteroid9();
  endlessAsteroid10();
  endlessAsteroid11();
  endlessAsteroid12();
  endlessAsteroid13();
  endlessAsteroid14();
  endlessAsteroid15();
  endlessAsteroid16();
})

//======= Alert Menu (Pops Up When You Get Hit By An Asteroid) =======//

//======= Initial Hiding Of Alert Menus
$('.alert').hide()

//======= Counter Function For How Many Lives You Have
var livesCount = 3;
var lives = document.getElementById("lives");

function count(){  
  lives.textContent = livesCount;
}

//======= Timer To Limit How Long Player Can Make A Decision To Continue Or Quit
var time;
function startTimer(duration, display) {
  var timer = duration, seconds;
  time = setInterval(function () {
    seconds = parseInt(timer % 11);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.text(seconds);
    if (--timer < 0) {
      timer = duration;
    }
    if(seconds == 00){
      window.location.href  = 'spacetime.html'
    } 
  }, 1000);
}

//======= Hide Restart Level Buttons
$('#restart2').hide()
$('#restart3').hide()
$('#restart4').hide()
$('#restart5').hide()

//======= Restart Level Button Actions

//======= Restart Level 1
$('#restart1').on('click', function() {
  $('.blackhole').removeClass('spacetime')
  $('#ship').show()
  setTimeout(function(){
    $('#alert2').hide()
    $('.asteroid').remove()
    story1Asteroid1();
    story1Asteroid2();
    story1Asteroid3();
    story1Asteroid4(); 
    story1Asteroid5();
    story1Asteroid6();
    story1Asteroid7();
    story1Asteroid8();
    story1Asteroid9();
    story1Asteroid10();
    story1Asteroid11();
    story1Asteroid12();
    story1Asteroid13();
    story1Asteroid14();
    story1Asteroid15();
    story1Asteroid16();
  }, 100)
  livesCount = 0
  updates = 0
})

//======= Restart Level 2
$('#restart2').on('click', function() {
  $('.blackhole').removeClass('spacetime2')
  $('#ship2').show()
  $('#weapon').css({
    opacity: 1,
    transition: 'opacity .1s'
  })
  setTimeout(function(){
    $('#alert2').hide()
    $('.asteroid').remove()
    story2Asteroid1();
    story2Asteroid2();
    story2Asteroid3();
    story2Asteroid4(); 
    story2Asteroid5();
    story2Asteroid6();
    story2Asteroid7();
    story2Asteroid8();
    story2Asteroid9();
    story2Asteroid10();
    story2Asteroid11();
    story2Asteroid12();
    story2Asteroid13();
    story2Asteroid14();
    story2Asteroid15();
    story2Asteroid16();
    story2Asteroid17();
    story2Asteroid18();
    story2Asteroid19();
    story2Asteroid20();
    story2Asteroid21();
  }, 100)
  countShot = 20
  livesCount = 1
  updates2 = 0
})

//======= Restart Level 3
$('#restart3').on('click', function() {
  $('.blackhole').removeClass('spacetime2')
  $('#ship3').show()
  $('#weapon').css({
    opacity: 1,
    transition: 'opacity .1s'
  })
  setTimeout(function(){
    $('#alert2').hide()
    $('.asteroid').remove()
    story3Asteroid1();
    story3Asteroid2();
    story3Asteroid3();
    story3Asteroid4(); 
    story3Asteroid5();
    story3Asteroid6();
    story3Asteroid7();
    story3Asteroid8();
    story3Asteroid9();
    story3Asteroid10();
    story3Asteroid11();
    story3Asteroid12();
    story3Asteroid13();
    story3Asteroid14();
    story3Asteroid15();
    story3Asteroid16();
  }, 100)
  countShot = 30
  livesCount = 3
  updates3 = 0
})

//======= Restart Level 4
$('#restart4').on('click', function() {
  $('.blackhole').removeClass('spacetime2')
  $('#ship4').show()
  $('#weapon').css({
    opacity: 1,
    transition: 'opacity .1s'
  })
  setTimeout(function(){
    $('#alert2').hide()
    $('.asteroid').remove()
    story4Asteroid1();
    story4Asteroid2();
    story4Asteroid3();
    story4Asteroid4(); 
    story4Asteroid5();
    story4Asteroid6();
    story4Asteroid7();
    story4Asteroid8();
    story4Asteroid9();
    story4Asteroid10();
    story4Asteroid11();
    story4Asteroid12();
    story4Asteroid13();
    story4Asteroid14();
    story4Asteroid15();
    story4Asteroid16();
    story4Asteroid17();
    story4Asteroid18();
    story4Asteroid19();
    story4Asteroid20();
    story4Asteroid21();
    story4Asteroid22();
    story4Asteroid23();
    story4Asteroid24();
    story4Asteroid25();
    story4Asteroid26();
    story4Asteroid27();
    story4Asteroid28();
    story4Asteroid29();
    story4Asteroid30();
    story4Asteroid31();
    story4Asteroid32();
    story4Asteroid33();
    story4Asteroid34();
    story4Asteroid35();
    story4Asteroid36();
  }, 100)
  livesCount = 3
  updates4 = 0
})

//======= Restart Level 5
$('#restart5').on('click', function() {
  $('#ship5').show().css({
    top: '380px'
  })
  $('#weapon').css({
    opacity: 1,
    transition: 'opacity .1s'
  })
  $('#alert2').hide()
  $('#destroyer').show()
  fire = setInterval(function(){storyDestroyerWeapon()}, 2000) 
  livesCount = 3
})

//======= Continue Button Actions
$('#continueNext1').hide()
$('#continueNext2').hide()
$('#continueNext3').hide()
$('#continueNext4').hide()
$('#continue').hide()
$('#continue2').hide()
$('#continue3').hide()
$('#continue4').hide()
$('#continue5').hide()

class Alert {
  continue = function(num, func){
    $('#continue' +num).on('click', function() {
      setTimeout(function(){
        $('.alert').hide()
        clearInterval(time)
      }, 100)
      var currentY = 4;
      for(let i=0; i < 1; i++){
        var y = currentY - 4
        currentY = y;
        var x = 'rotate(' + y + 'turn)';
        $("#ship" +num).css({
          transform: x,
          opacity: 1,
          transition: 'transform .5s, opacity .5s',
        });
      }
      $('#weapon').css({
        opacity: 1,
        transition: 'opacity 2s',
      })
      func()
      livesCount--
    })
  }
}

function asteroidsLevel2(){
  if(updates2 > 198000){
    $('.asteroid').hide()
  }else if(updates2 < 198000){
  $('.asteroid').remove()
  story2Asteroid1();
  story2Asteroid2();
  story2Asteroid3();
  story2Asteroid4();
  story2Asteroid5();
  story2Asteroid6();
  story2Asteroid7();
  story2Asteroid8();
  story2Asteroid9();   
  story2Asteroid10();
  story2Asteroid11();
  story2Asteroid12();
  story2Asteroid13();   
  story2Asteroid14();
  story2Asteroid15();
  story2Asteroid16();
  story2Asteroid17();
  story2Asteroid18();
  story2Asteroid19();
  story2Asteroid20();
  story2Asteroid21();
  }
};

function asteroidsLevel3(){
  if(updates3 > 147000){
    $('.asteroid').hide()
  }else if(updates3 < 147000){
  $('.asteroid').remove()
  story3Asteroid1();
  story3Asteroid2();
  story3Asteroid3();
  story3Asteroid4();
  story3Asteroid5();
  story3Asteroid6();
  story3Asteroid7();
  story3Asteroid8();
  story3Asteroid9();   
  story3Asteroid10();
  story3Asteroid11();
  story3Asteroid12();
  story3Asteroid13();   
  story3Asteroid14();
  story3Asteroid15();
  story3Asteroid16();
  }
};

function asteroidsLevel4(){
  if(updates4 > 398000){
    $('.asteroid').hide()
  }else if(updates4 < 398000){
  $('.asteroid').remove()
  story4Asteroid1();
  story4Asteroid2();
  story4Asteroid3();
  story4Asteroid4();
  story4Asteroid5();
  story4Asteroid6();
  story4Asteroid7();
  story4Asteroid8();
  story4Asteroid9();   
  story4Asteroid10();
  story4Asteroid11();
  story4Asteroid12();
  story4Asteroid13();   
  story4Asteroid14();
  story4Asteroid15();
  story4Asteroid16();
  story4Asteroid17();
  story4Asteroid18();
  story4Asteroid19();
  story4Asteroid20();
  story4Asteroid21();
  story4Asteroid22();
  story4Asteroid23();
  story4Asteroid24();
  story4Asteroid25();   
  story4Asteroid26();
  story4Asteroid27();
  story4Asteroid28();
  story4Asteroid29();   
  story4Asteroid30();
  story4Asteroid31();
  story4Asteroid32();
  story4Asteroid33();   
  story4Asteroid34();
  story4Asteroid35();
  story4Asteroid36();
  }
};

function asteroidsLevel5(){
  $('#destroyer').show()
  fire = setInterval(function(){storyDestroyerWeapon()}, 2000) 
};

function asteroidEndless(){
  blackHole1.restart();  
  $('.asteroid').remove()
  endlessAsteroid1();
  endlessAsteroid2();
  endlessAsteroid3();
  endlessAsteroid4();
  endlessAsteroid5();
  endlessAsteroid6();
  endlessAsteroid7();
  endlessAsteroid8();
  endlessAsteroid9();   
  endlessAsteroid10();
  endlessAsteroid11();
  endlessAsteroid12();
  endlessAsteroid13();   
  endlessAsteroid14();
  endlessAsteroid15();
  endlessAsteroid16();
}

let con = new Alert();
con.continue('', asteroidEndless);

let con2 = new Alert();
con2.continue(2, asteroidsLevel2);

let con3 = new Alert();
con3.continue(3, asteroidsLevel3);

let con4 = new Alert();
con4.continue(4, asteroidsLevel4);

let con5 = new Alert();
con5.continue(5, asteroidsLevel5);

//======= Quit Buttons Action
$('.quit').on('click', function() {
  setTimeout(function(){
    window.location.href  = 'spacetime.html'
    clearInterval(time)
  }, 100)
})

//======= Quiting With Q
$(document).keydown(function (e) {
  switch (e.which) {
    case 81:
    window.location.href  = 'spacetime.html'
  }
});

//======= Endless Quit Button Hide
$('.quitToScore').hide()

//======= Menu Button Returns To Main Screen
$('#menu').on('click', function() {
  window.location.href  = 'spacetime.html'
})

//=======Collision Detection To Show Different Alert Menus
function collision() {
  $('.quit').hide()
  $('.quitToScore').show()
  if(livesCount > 0){
    $('#weapon').css({
      opacity: 0,
      transition: 'opacity .1s'
    })
    var currentY = 0;
    for(let i=0; i < 1; i++){
      var y = currentY - 4
      currentY = y;
      var x = 'rotate(' + y + 'turn)';
      $("#ship").css({
        transform: x,
        opacity: 0,
        transition: 'transform 1s, opacity 1s',
      });
    }
    $('#continue').show()
    $('#alert').delay(500).fadeIn()
    blackHole1.pause();  
    jQuery(function ($) {
      var timer = 10, 
      display = $('.countdown');
      startTimer(timer, display);
    });
  }else{
    $('#alert2').delay(500).fadeIn()
    $('#ship').toggle('explode');
    $('#restart1').hide()
    $('#weapon').css({
      opacity: 0,
      transition: 'opacity .1s'
    })
    blackHole1.pause();      
  }
}

//======= High Scores =======//

//======= Local Storage Function

function scoreKeep(){
  const clear = document.getElementById('clear')
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []  //======= Time Scores
  let itemsArray2 = localStorage.getItem('items2') ? JSON.parse(localStorage.getItem('items2')) : []  //======= Asteroids Destroyed Scores

//======= Allowing Name Input Only If Top 5
  $('.quitToScore').on('click', function() {
    if(itemsArray.length < 5){
      setTimeout(function(){
        $('.alert').hide()
        clearInterval(time)
        $('#newScore').show()
        $('.ship').hide()
      }, 100)
    }else if(parseInt(updates + "......." + name) > parseInt(itemsArray[4])){
      setTimeout(function(){
        $('.alert').hide()
        clearInterval(time)
        $('#newScore').show()
        $('.ship').hide()
      }, 100)
    }else{
      window.location.href  = 'spacetime.html'
    }
  })

//======= Compare Function To List Scores Highest To Lowest  
  function compareNumbers(a, b){
    return parseInt(a) - parseInt(b);
  }

//======= Ok Button To Add Score And Name to Local Storage
  $('#ok').on('click', function(e){
    if($('#scoreInput').val() !== ''){
      $('#newScore').hide()
      $('#highScore').show() 
      itemsArray.push(updates + "......." + $('#scoreInput').val())  //======= Time Scores
      if(asteroidCount !== 0){
        itemsArray2.push(asteroidCount + "......." + $('#scoreInput').val())  //======= Asteroids Destroyed Scores
      }
    }

//======= Sorting Time Scores
    itemsArray.join()
    itemsArray.sort(compareNumbers).reverse()

//======= Limiting Amount Of Time Scores In Local Storage Array
    if(itemsArray.length > 5){
      itemsArray.length = 5;
    }

//======= Sorting Asteroid Destroyed Scores
    itemsArray2.join()
    itemsArray2.sort(compareNumbers).reverse()
  
//======= Limiting Amount Of Asteroid Destroyed Scores In Local Storage Array
    if(itemsArray2.length > 5){
      itemsArray2.length = 5;
    }
     
    localStorage.setItem('items', JSON.stringify(itemsArray))  //======= Time Scores
    localStorage.setItem('items2', JSON.stringify(itemsArray2))  //======= Asteroids Destroyed Scores
    scoreShow()
    scoreShow2()
  }) 

//======= Enter/Return Button To Add Score And Name to Local Storage
  $(document).keydown(function (e) {
  switch (e.which) {
    case 13:
    e.preventDefault()
    if($('#scoreInput').val() !== ''){
      $('#newScore').hide()
      $('#highScore').show() 
      itemsArray.push(updates + "......." + $('#scoreInput').val())  //======= Time Scores
      if(asteroidCount !== 0){
        itemsArray2.push(asteroidCount + "......." + $('#scoreInput').val())  //======= Asteroids Destroyed Scores
      }
    }

//======= Sorting Time Scores   
    itemsArray.join()
    itemsArray.sort(compareNumbers).reverse()
          
//======= Limiting Amount Of Time Scores In Local Storage Array
    if(itemsArray.length > 5){
      itemsArray.length = 5;
    }
//======= Sorting Asteroid Destroyed Scores
    itemsArray2.join()
    itemsArray2.sort(compareNumbers).reverse()

//======= Limiting Amount Of Asteroid Destroyed Scores In Local Storage Array
    if(itemsArray2.length > 5){
      itemsArray2.length = 5;
    }
        
    localStorage.setItem('items', JSON.stringify(itemsArray))  //======= Time Scores
    localStorage.setItem('items2', JSON.stringify(itemsArray2))  //======= Asteroids Destroyed Scores
    scoreShow()
    scoreShow2()
  }
})

//=======Clear Button To Clear High Scores
  clear.addEventListener('click', function() {
    localStorage.clear()
  })
}

//======= Function To Show Time Scores On High Score
function scoreShow() {
  var store = localStorage.items;
  var s2 = JSON.parse(store)
  var roundNumber = 0;
  var msg = '';
  var i;
  for(i=0; i<s2.length; i++){
    roundNumber = (i + 1);
    msg += roundNumber + ': ';
    msg += comma(s2[i]) + '<br />';
  }
  document.getElementById('list').innerHTML = msg;
}

//======= Function To Show Asteroid Destroyed Scores On High Score
function scoreShow2() {
  var store = localStorage.items2;
  var s2 = JSON.parse(store)
  var roundNumber = 0;
  var msg = '';
  var i;
  for(i=0; i<s2.length; i++){
    roundNumber = (i + 1);
    msg += roundNumber + ': ';
    msg += comma(s2[i]) + '<br />';
  }
  document.getElementById('list2').innerHTML = msg;
}


//======= High Score Button On Main Page To Show High Scores
$('#scores').on('click', function() {
  $('#highScore').show()
  $('.game').show()
  $('#home').hide()
  scoreShow()
  scoreShow2()
  clear.addEventListener('click', function() {
    localStorage.clear()
  })
})

//======= Update To Increase High Score
var updateLog = document.querySelector('#scoreKeep')
var updates = 0
var updates2 = 0
var updates3 = 0
var updates4 = 0

//======= Function To Add Commas In The High Score Numbers On High Score Page
function comma(num) {
  let name = num.split('.')[7]
  num = num.split('.')[0]
  let answer = num.toString();
  let result = [], n = 0, x = 3;
  answer = answer.split('');
  for(let i  = answer.length-1; i>=0; i--){
    if(n == x){
      result.unshift(answer[i].replace(answer[i], answer[i]+','));
      x += 3
    }else{
      result.unshift(answer[i])
    }
    n++
  }
  return result.join('') + "......." + name;
}

//=======Function To Add Commas In The Score Numbers On Game Page
function comma2(num) {
  let answer = num.toString();
  let result = [], n = 0, x = 3;
  answer = answer.split('');
  for(let i  = answer.length-1; i>=0; i--){
    if(n == x){
      result.unshift(answer[i].replace(answer[i], answer[i]+','));
        x += 3
    }else{
      result.unshift(answer[i])
    }
    n++
  }
  return result.join('');
}

//======= Keyboard Buttons And Their Functions =======//

//======= Keyboard Left
$(document).keydown(function (e) {
  if(parseInt($('#ship, #ship2, #ship3, #ship4, #ship5').css('left')) > 0) { 
  switch (e.which) {
    case 37:
      $('#ship, #ship2, #ship3, #ship4, #ship5').animate({
        left: '-=40px' 
      })
      .css({
        transform: 'rotate(-45deg)',
        transition: 'transform .2s'
      });
      $('#weapon').animate({
        left: '-=40px', 
    })
  }
  }else{
    switch (e.which) {
      case 37:
        $('#ship, #ship2, #ship3, #ship4, #ship5')
        .stop()
        .stop()
        .stop()
        .css({
          transform: 'rotate(0deg)',
          transition: 'transform .2s'
        });
        $('#weapon')
        .stop()
        .stop()
        .stop()
    }
  }
});

$(document).keyup(function (e) {
  switch (e.which) {
    case 37:
      $('#ship, #ship2, #ship3, #ship4, #ship5')
      .css({
        transform: 'rotate(0deg)',
        transition: 'transform .7s'
      })
      .stop(true, true)
          $('#weapon').stop(true, true)
  }
});

//======= Keyboard Right 
$(document).keydown(function (e) {
  if(parseInt($('#ship, #ship2, #ship3, #ship4, #ship5').css('left')) < 800) {
  switch (e.which) {
    case 39:
      $('#ship, #ship2, #ship3, #ship4, #ship5').animate({
        left: '+=40px',
      }, 'normal')
      .css({
        transform: 'rotate(45deg)',
        transition: 'transform .2s',
      });
      $('#weapon').animate({
        left: '+=40px', 
    })
  }
  }else{
    switch (e.which) {
      case 39:
        $('#ship, #ship2, #ship3, #ship4, #ship5')
        .stop()
        .stop()
        .stop()
        .css({
          transform: 'rotate(0deg)',
          transition: 'transform .2s'
        });
        $('#weapon')
        .stop()
        .stop()
        .stop()
    }
  }
});

$(document).keyup(function (e) {
  switch (e.which) {
    case 39:
      $('#ship, #ship2, #ship3, #ship4, #ship5')
      .css({
        transform: 'rotate(0deg)',
        transition: 'transform .7s'
      })
      .stop(true, true)
      $('#weapon').stop(true, true)
  }
});

//======= Black Hole =======//

//======= Random Number Function to Change Background When Ship Goes Through Black Hole 

function number(){
  var one = Math.random();
  var two = (one * 6) + 1;
  return Math.floor(two);
}

//======= Random Number Function to Randomly Place BlackHole On Screen Through Margin Left
function mLeft(){
  var one = Math.random();
  var two = (one * 740) + 1;
  return Math.floor(two);
}

//======= Black Hole 
var progressLog1 = document.querySelector('.progress1');
var bh1 = document.querySelector('.blackhole')
const blackHole1 = anime({
  targets: '.blackhole',
  easing: 'linear',
  delay: function() { return anime.random(2000, 8000); },
  loop: true,
  autoplay: false,
  duration: function() { return anime.random(5000, 10000); },
  translateY: 620,
  update: function() {
    progressLog1.value = parseInt(anime.get(bh1, 'translateY'))
    if(progressLog1.value == 0){
      $('.blackhole').css('margin-left', mLeft() + 'px')
    }
    var shipY = Math.round($('#ship').offset().top)
    var shipX = Math.round($('#ship').offset().left)
    var blackholeY = Math.round($('.blackhole').offset().top)
    var blackholeX = Math.round($('.blackhole').offset().left)
    var rect1 = {x: shipX, y: shipY, width: 90, height: 40}
    var rect2 = {x: blackholeX, y: blackholeY, width: 140, height: 100}
    if (rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y) { // collision detected!
        $('#weapon').css({
          opacity: 0,
          transition: 'opacity .1s'
        })
        $('#ship').addClass('spin').css({
          opacity: 0,
          transition: 'opacity 2s'
        })
        function delay(){
          $('#background').css({
            background: 'url("images/backgrounds/space' + number() + '.png")',
            backgroundSize: '900px 460px',
            width: '900px',
            height: '460px',
            marginTop: '90px',
            overflow: 'hidden',
          })
        }
        setTimeout(delay, 1000)
        blackHole1.restart();
        $('.asteroid').remove()
        endlessAsteroid1();
        endlessAsteroid2();
        endlessAsteroid3();
        endlessAsteroid4();
        endlessAsteroid5();
        endlessAsteroid6();
        endlessAsteroid7();
        endlessAsteroid8();
        endlessAsteroid9();
        endlessAsteroid10();
        endlessAsteroid11();
        endlessAsteroid12();
        endlessAsteroid13();
        endlessAsteroid14();
        endlessAsteroid15();
        endlessAsteroid16();
        $('#ship').on("animationend", function () {
          $("#ship").removeClass('spin').css({
            left: '400px',
            opacity: 1,
            transition: 'opacity 1s'
          })
          $('#weapon').css({
            left: '447.5px',
            opacity: 1,
            transition: 'opacity 1s'
          })
        });
    }
//======= Pause/Play Button
    let pauseCount = 0
    $(document).keydown(function (e) {
      switch (e.which) {
        case 80:
        pauseCount++
        if(pauseCount % 2 != 0){
          blackHole1.pause()
        }else{
          blackHole1.play()
        }
      }
    });
  }
});

//======= Asteroids =======//

//======= Random Number Function to Randomly Place Asteroids On Screen Through Margin Left
function Left(){
  var one = Math.random();
  var two = (one * 800) + 1;
  return Math.floor(two);
}

//======= Story Mode =======//

//======= Level 1

//======= Asteroid Level 1 Class Animation
class story1Asteroid {
  animation(cls, d1, d2) {
    const story1 = anime({
      targets: cls,
      easing: 'linear',
      delay: function() { 
        if(updates > 145000){
          return 0
        }else if(updates < 145000){
          return anime.random(d1, d2);
        }
      },
      autoplay: true,
      duration: function() { 
        if(updates > 145000){
          return 3000
        }else if(updates < 145000){
          return anime.random(5000, 12000);
        }
      },
      function(){  },
      translateY: 570,
      rotate: { 
        value:function() { return anime.random(-360, 360); },
        duration: function() { return anime.random(3000, 4000); },
      },
      update: function() {
        updates++;
        updateLog.value ='Score: ' +updates;
        if(updates == 150000){
          $('.blackhole').addClass('spacetime')
          $('.blackhole').on('animationend', function() {
            $('#laser').hide()
            $('#ship').addClass('travel')
          })
          $('#ship').on('animationend', function() {
            $('#pause').hide()
            $('#move').hide()
            $('.blackhole').removeClass('spacetime')
            $('#ship').removeClass('travel')
            $('#scroll2').show()
            $('#background').hide()
            $('#secondScroll').addClass('scrollSecond')
          });
          $('#secondScroll').on('animationend', function() {
            $('#ship').hide()
            $('#scroll2').hide()
            $('#background').show().css({
              background: 'black',
              backgroundSize: '900px 460px',
              width: '900px',
              height: '460px',
              marginTop: '90px',
              overflow: 'hidden',
            })
            $('#next').show()
            $('#continueNext1').show()
            jQuery(function ($) {
              var timer = 10, 
              display = $('.countdown');
              startTimer(timer, display);
            });
          })
        }
//======= Collision Detection
        var shipY = Math.round($('#ship').offset().top)
        var shipX = Math.round($('#ship').offset().left)
        var asteroid1Y = Math.round($(cls).offset().top)
        var asteroid1X = Math.round($(cls).offset().left)
        var rect1 = {x: shipX, y: shipY, width: 90, height: 40}
        var rect2 = {x: asteroid1X, y: asteroid1Y, width: 40, height: 25}
        if (rect1.x < rect2.x + rect2.width && 
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) { // collision detected!
          $('#alert2').delay(500).fadeIn()
          $('#ship').toggle('explode');
          $('#restart1').show()
          $('#weapon').css({
            opacity: 0,
            transition: 'opacity .1s'
          })
          anime.remove('.story1Asteroid1')
          anime.remove('.story1Asteroid2')
          anime.remove('.story1Asteroid3')
          anime.remove('.story1Asteroid4')
          anime.remove('.story1Asteroid5')
          anime.remove('.story1Asteroid6')
          anime.remove('.story1Asteroid7')
          anime.remove('.story1Asteroid8')
          anime.remove('.story1Asteroid9')
          anime.remove('.story1Asteroid10')
          anime.remove('.story1Asteroid11')
          anime.remove('.story1Asteroid12')
          anime.remove('.story1Asteroid13')
          anime.remove('.story1Asteroid14')
          anime.remove('.story1Asteroid15')
          anime.remove('.story1Asteroid16')
        }else{
          if(updates < 150000){
            story1Restart()
          }
        }
      },
    });   
//======= Pause/Play Button
    let pauseCount = 0
    $(document).keydown(function (e) {
      switch (e.which) {
        case 80:
        pauseCount++
        if(pauseCount % 2 != 0){
          story1.pause()  
        }else{
          story1.play()  
        }
      }
    });
  }
}

//======= Level 1 Class Animation Functions
function story1Asteroid1() {  //======= Story Level 1 First Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid1" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid1', 0, 3000)
}
function story1Asteroid2() {  //======= Story Level 1 Second Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid2" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid2', 0, 3000)
}
function story1Asteroid3() {  //======= Story Level 1 Third Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid3" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid3', 0, 3000)
}
function story1Asteroid4() {  //======= Story Level 1 Fourth Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid4" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid4', 0, 3000)
}
function story1Asteroid5() {  //======= Story Level 1 Fifth Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid5" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid5', 3000, 6000)
}
function story1Asteroid6() {  //======= Story Level 1 Sixth Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid6" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid6', 3000, 6000)
}
function story1Asteroid7() {  //======= Story Level 1 Seventh Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid7" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid7', 3000, 6000)
}
function story1Asteroid8() {  //======= Story Level 1 Eighth Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid8" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid8', 3000, 6000)
}
function story1Asteroid9() {  //======= Story Level 1 Ninth Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid9" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid9', 6000, 9000)
}
function story1Asteroid10() {  //======= Story Level 1 Tenth Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid10" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid10', 6000, 9000)
}
function story1Asteroid11() {  //======= Story Level 1 Eleventh Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid11" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid11', 6000, 9000)
}
function story1Asteroid12() {  //======= Story Level 1 Twelfth Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid12" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid12', 6000, 9000)
}
function story1Asteroid13() {  //======= Story Level 1 Thirteenth Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid13" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid13', 9000, 12000)
}
function story1Asteroid14() {  //======= Story Level 1 Fourteenth Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid14" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid14', 9000, 12000)
}
function story1Asteroid15() {  //======= Story Level 1 Fifteenth Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid15" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid15', 9000, 12000)
}
function story1Asteroid16() {  //======= Story Level 1 Sixteenth Asteroid
  $('#asteroid').append('<div class="asteroid story1Asteroid16" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story1Asteroid();
  newObj.animation('.story1Asteroid16', 9000, 12000)
}

//======= Story Level 1 Restart Function To Recall Asteroid Function So That Duration If Statement In Anime Is Executed
function story1Restart(){
  if(Math.round($('.story1Asteroid1').offset().top) >= 580){
    $('.story1Asteroid1').remove()
    story1Asteroid1();
  }
  if(Math.round($('.story1Asteroid2').offset().top) >= 580){
    $('.story1Asteroid2').remove()
    story1Asteroid2();
  }
  if(Math.round($('.story1Asteroid3').offset().top) >= 580){
    $('.story1Asteroid3').remove()
    story1Asteroid3();
  }
  if(Math.round($('.story1Asteroid4').offset().top) >= 580){
    $('.story1Asteroid4').remove()
    story1Asteroid4();
  }
  if(Math.round($('.story1Asteroid5').offset().top) >= 580){
    $('.story1Asteroid5').remove()
    story1Asteroid5();
  }
  if(Math.round($('.story1Asteroid6').offset().top) >= 580){
    $('.story1Asteroid6').remove()
    story1Asteroid6();
  }
  if(Math.round($('.story1Asteroid7').offset().top) >= 580){
    $('.story1Asteroid7').remove()
    story1Asteroid7();
  }
  if(Math.round($('.story1Asteroid8').offset().top) >= 580){
    $('.story1Asteroid8').remove()
    story1Asteroid8();
  }
  if(Math.round($('.story1Asteroid9').offset().top) >= 580){
    $('.story1Asteroid9').remove()
    story1Asteroid9();
  }
  if(Math.round($('.story1Asteroid10').offset().top) >= 580){
    $('.story1Asteroid10').remove()
    story1Asteroid10();
  }
  if(Math.round($('.story1Asteroid11').offset().top) >= 580){
    $('.story1Asteroid11').remove()
    story1Asteroid11();
  }
  if(Math.round($('.story1Asteroid12').offset().top) >= 580){
    $('.story1Asteroid12').remove()
    story1Asteroid12();
  }
  if(Math.round($('.story1Asteroid13').offset().top) >= 580){
    $('.story1Asteroid13').remove()
    story1Asteroid13();
  }
  if(Math.round($('.story1Asteroid14').offset().top) >= 580){
    $('.story1Asteroid14').remove()
    story1Asteroid14();
  }
  if(Math.round($('.story1Asteroid15').offset().top) >= 580){
    $('.story1Asteroid15').remove()
    story1Asteroid15();
  }
  if(Math.round($('.story1Asteroid16').offset().top) >= 580){
    $('.story1Asteroid16').remove()
    story1Asteroid16();
  }
}

//======= Count To Record How Many Times Weapon Is Fired To Limit Firing On Level 2 and 3
let countShot;

//======= Continue To Start Level 2
$('#continueNext1').on('click', function() {
  levelCount++
  setTimeout(function(){
    $('.nextLevel').hide()
    clearInterval(time)
  }, 100)
  $('#ship2').show()
  $('#background').show().css({
    background: "url('images/backgrounds/space1.png')",
    backgroundSize: '900px 460px',
    width: '900px',
    height: '460px',
    marginTop: '90px',
    overflow: 'hidden',
  })
  $('#pause').show()
  $('#move').show()
  $('#fire').show()
  story2Asteroid1();
  story2Asteroid2();
  story2Asteroid3();
  story2Asteroid4(); 
  story2Asteroid5();
  story2Asteroid6();
  story2Asteroid7();
  story2Asteroid8();
  story2Asteroid9();
  story2Asteroid10();
  story2Asteroid11();
  story2Asteroid12();
  story2Asteroid13();
  story2Asteroid14();
  story2Asteroid15();
  story2Asteroid16();
  story2Asteroid17();
  story2Asteroid18();
  story2Asteroid19();
  story2Asteroid20();
  story2Asteroid21();
  $('#weapon').show().css({
    opacity: 1,
    transition: 'opacity .1s'
  })
  countShot = 20
  livesCount = 1
})

//======= Level 2

//======= Asteroid Level 2 Class Animation
class story2Asteroid {
  animation(cls, d1, d2) {
    const story2 = anime({
      targets: cls,
      easing: 'linear',
      delay: function() { 
        if(updates2 > 198000){
          return 0
        }else if(updates2 < 198000){
          return anime.random(d1, d2);
        }
      },
      autoplay: true,
      duration: function() { 
        if(updates2 > 198000){
          return 3000
        }else if(updates2 < 198000){
          return anime.random(3000, 6000);
        }
      },
      translateY: 570,
      rotate: { 
        value:function() { return anime.random(-360, 360); },
        duration: function() { return anime.random(3000, 4000); },
      },
      update: function() {
        updates2++;
        updateLog.value = 'Score: ' +updates2;
        if(updates2 == 200000){
          $('.blackhole').addClass('spacetime2')
          $('.blackhole').on('animationend', function() {
            $('#laser').hide()
            $('#ship2').addClass('travel')
          })
          $('#ship2').on('animationend', function() {
            $('#pause').hide()
            $('#move').hide()
            $('#fire').hide()
            $('.blackhole').removeClass('spacetime2')
            $('#ship2').removeClass('travel')
            $('#scroll3').show()
            $('#background').hide()
            $('#thirdScroll').addClass('scrollThird')
          });
          $('#thirdScroll').on('animationend', function() {
            $('#ship2').hide()
            $('#scroll3').hide()
            $('#background').show().css({
              background: 'black',
              backgroundSize: '900px 460px',
              width: '900px',
              height: '460px',
              marginTop: '90px',
              overflow: 'hidden',
            })
            $('#next').show()
            $('#continueNext1').hide()
            $('#continueNext2').show()
            $('#continueNext3').hide()
            $('#continueNext4').hide()
            jQuery(function ($) {
              var timer = 10, 
              display = $('.countdown');
              startTimer(timer, display);
            });
          })
        }
//======= Collision Detection
        var shipY = Math.round($('#ship2').offset().top)
        var shipX = Math.round($('#ship2').offset().left)
        var asteroid1Y = Math.round($(cls).offset().top)
        var asteroid1X = Math.round($(cls).offset().left)
        var rect1 = {x: shipX, y: shipY, width: 90, height: 40}
        var rect2 = {x: asteroid1X, y: asteroid1Y, width: 40, height: 25}
        if (rect1.x < rect2.x + rect2.width && 
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) { // collision detected!
          anime.remove('.story2Asteroid1')
          anime.remove('.story2Asteroid2')
          anime.remove('.story2Asteroid3')
          anime.remove('.story2Asteroid4')
          anime.remove('.story2Asteroid5')
          anime.remove('.story2Asteroid6')
          anime.remove('.story2Asteroid7')
          anime.remove('.story2Asteroid8')
          anime.remove('.story2Asteroid9')
          anime.remove('.story2Asteroid10')
          anime.remove('.story2Asteroid11')
          anime.remove('.story2Asteroid12')
          anime.remove('.story2Asteroid13')
          anime.remove('.story2Asteroid14')
          anime.remove('.story2Asteroid15')
          anime.remove('.story2Asteroid16')
          anime.remove('.story2Asteroid17')
          anime.remove('.story2Asteroid18')
          anime.remove('.story2Asteroid19')
          anime.remove('.story2Asteroid20')
          anime.remove('.story2Asteroid21')
          count()
          if(livesCount > 0){
            $('#weapon').css({
              opacity: 0,
              transition: 'opacity .1s'
            })
            var currentY = 0;
            for(let i=0; i < 1; i++){
              var y = currentY - 4
              currentY = y;
              var x = 'rotate(' + y + 'turn)';
              $("#ship2").css({
                transform: x,
                opacity: 0,
                transition: 'transform 1s, opacity 1s',
              });
            }
            $('#continue').hide()
            $('#continue2').show()
            $('#continue3').hide()
            $('#continue4').hide()
            $('#continue5').hide()
            $('#alert').delay(500).fadeIn()
            jQuery(function ($) {
              var timer = 10, 
              display = $('.countdown');
              startTimer(timer, display);
            });
          }else{
            $('#alert2').delay(500).fadeIn()
            $('#ship2').toggle('explode');
            $('#restart1').hide()
            $('#restart2').show()
            $('#restart3').hide()
            $('#restart4').hide()
            $('#restart5').hide()
            $('#weapon').css({
              opacity: 0,
              transition: 'opacity .1s'
            })
          }
          
        }else{
          if(updates2 < 200000){
            story2Restart()
          }
        }
      },
    });   
//======= Pause/Play Button
    let pauseCount = 0
    $(document).keydown(function (e) {
      switch (e.which) {
        case 80:
        pauseCount++
        if(pauseCount % 2 != 0){
          story2.pause()  
        }else{
          story2.play()  
        }
      }
    });
  }
}

//======= Level 2 Class Animation Functions
function story2Asteroid1() {  //======= Story Level 2 First Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid1" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid1', 0, 2000)
}
function story2Asteroid2() {  //======= Story Level 2 Second Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid2" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid2', 0, 2000)
}
function story2Asteroid3() {  //======= Story Level 2 Third Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid3" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid3', 0, 2000)
}
function story2Asteroid4() {  //======= Story Level 2 Fourth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid4" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid4', 0, 2000)
}
function story2Asteroid5() {  //======= Story Level 2 Fifth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid5" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid5', 0, 2000)
}
function story2Asteroid6() {  //======= Story Level 2 Sixth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid6" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid6', 0, 2000)
}
function story2Asteroid7() {  //======= Story Level 2 Seventh Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid7" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid7', 0, 2000)
}
function story2Asteroid8() {  //======= Story Level 2 Eighth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid8" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid8', 2000, 4000)
}
function story2Asteroid9() {  //======= Story Level 2 Ninth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid9" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid9', 2000, 4000)
}
function story2Asteroid10() {  //======= Story Level 2 Tenth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid10" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid10', 2000, 4000)
}
function story2Asteroid11() {  //======= Story Level 2 Eleventh Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid11" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid11', 2000, 4000)
}
function story2Asteroid12() {  //======= Story Level 2 Twelfth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid12" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid12', 2000, 4000)
}
function story2Asteroid13() {  //======= Story Level 2 Thirteenth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid13" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid13', 2000, 4000)
}
function story2Asteroid14() {  //======= Story Level 2 Fourteenth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid14" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid14', 2000, 4000)
}
function story2Asteroid15() {  //======= Story Level 2 Fifteenth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid15" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid15', 4000, 6000)
}
function story2Asteroid16() {  //======= Story Level 2 Sixteenth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid16" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid16', 4000, 6000)
}
function story2Asteroid17() {  //======= Story Seventeenth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid17" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid17', 4000, 6000)
}
function story2Asteroid18() {  //======= Story Eighteenth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid18" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid18', 4000, 6000)
}
function story2Asteroid19() {  //======= Story Nineteenth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid19" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid19', 4000, 6000)
}
function story2Asteroid20() {  //======= Story Twentieth Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid20" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid20', 4000, 6000)
}
function story2Asteroid21() {  //======= Story Twenty-First Asteroid
  $('#asteroid').append('<div class="asteroid story2Asteroid21" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story2Asteroid();
  newObj.animation('.story2Asteroid21', 4000, 6000)
}

//======= Story Level 2 Restart Function To Recall Asteroid Function So That Duration If Statement In Anime Is Executed
function story2Restart(){
  if(Math.round($('.story2Asteroid1').offset().top) >= 580){
    $('.story2Asteroid1').remove()
    story2Asteroid1();
  }
  if(Math.round($('.story2Asteroid2').offset().top) >= 580){
    $('.story2Asteroid2').remove()
    story2Asteroid2();
  }
  if(Math.round($('.story2Asteroid3').offset().top) >= 580){
    $('.story2Asteroid3').remove()
    story2Asteroid3();
  }
  if(Math.round($('.story2Asteroid4').offset().top) >= 580){
    $('.story2Asteroid4').remove()
    story2Asteroid4();
  }
  if(Math.round($('.story2Asteroid5').offset().top) >= 580){
    $('.story2Asteroid5').remove()
    story2Asteroid5();
  }
  if(Math.round($('.story2Asteroid6').offset().top) >= 580){
    $('.story2Asteroid6').remove()
    story2Asteroid6();
  }
  if(Math.round($('.story2Asteroid7').offset().top) >= 580){
    $('.story2Asteroid7').remove()
    story2Asteroid7();
  }
  if(Math.round($('.story2Asteroid8').offset().top) >= 580){
    $('.story2Asteroid8').remove()
    story2Asteroid8();
  }
  if(Math.round($('.story2Asteroid9').offset().top) >= 580){
    $('.story2Asteroid9').remove()
    story2Asteroid9();
  }
  if(Math.round($('.story2Asteroid10').offset().top) >= 580){
    $('.story2Asteroid10').remove()
    story2Asteroid10();
  }
  if(Math.round($('.story2Asteroid11').offset().top) >= 580){
    $('.story2Asteroid11').remove()
    story2Asteroid11();
  }
  if(Math.round($('.story2Asteroid12').offset().top) >= 580){
    $('.story2Asteroid12').remove()
    story2Asteroid12();
  }
  if(Math.round($('.story2Asteroid13').offset().top) >= 580){
    $('.story2Asteroid13').remove()
    story2Asteroid13();
  }
  if(Math.round($('.story2Asteroid14').offset().top) >= 580){
    $('.story2Asteroid14').remove()
    story2Asteroid14();
  }
  if(Math.round($('.story2Asteroid15').offset().top) >= 580){
    $('.story2Asteroid15').remove()
    story2Asteroid15();
  }
  if(Math.round($('.story2Asteroid16').offset().top) >= 580){
    $('.story2Asteroid16').remove()
    story2Asteroid16();
  }
  if(Math.round($('.story2Asteroid17').offset().top) >= 580){
    $('.story2Asteroid17').remove()
    story2Asteroid17();
  }
  if(Math.round($('.story2Asteroid18').offset().top) >= 580){
    $('.story2Asteroid18').remove()
    story2Asteroid18();
  }
  if(Math.round($('.story2Asteroid19').offset().top) >= 580){
    $('.story2Asteroid19').remove()
    story2Asteroid19();
  }
  if(Math.round($('.story2Asteroid20').offset().top) >= 580){
    $('.story2Asteroid20').remove()
    story2Asteroid20();
  }
  if(Math.round($('.story2Asteroid21').offset().top) >= 580){
    $('.story2Asteroid21').remove()
    story2Asteroid21();
  }
}

//======= Continue To Start Level 3
$('#continueNext2').on('click', function() {
  levelCount++
  setTimeout(function(){
    $('.nextLevel').hide()
    clearInterval(time)
  }, 100)
  $('#ship3').show()
  $('#background').show().css({
    background: "url('images/backgrounds/space2.png')",
    backgroundSize: '900px 460px',
    width: '900px',
    height: '460px',
    marginTop: '90px',
    overflow: 'hidden',
  })
  $('#pause').show()
  $('#move').show()
  $('#fire').show()
  story3Asteroid1();
  story3Asteroid2();
  story3Asteroid3();
  story3Asteroid4(); 
  story3Asteroid5();
  story3Asteroid6();
  story3Asteroid7();
  story3Asteroid8();
  story3Asteroid9();
  story3Asteroid10();
  story3Asteroid11();
  story3Asteroid12();
  story3Asteroid13();
  story3Asteroid14();
  story3Asteroid15();
  story3Asteroid16();
  $('#weapon').show().css({
    opacity: 1,
    transition: 'opacity .1s'
  })
  countShot = 30
  livesCount = 3
})

//======= Level 3

//======= Asteroid Level 3 Class Animation
class story3Asteroid {
  animation(cls, d1, d2) {
    const story3 = anime({
      targets: cls,
      easing: 'linear',
      delay: function() { return anime.random(d1, d2); },
      autoplay: true,
      duration: function(){ return anime.random(1500, 3000); },
      translateY: 570,
      rotate: { 
        value:function() { return anime.random(-360, 360); },
        duration: function() { return anime.random(3000, 4000); },
      },
      update: function() {
        updates3++;
        updateLog.value ='Score: ' +updates3;
        if(updates3 == 147000){
          $('.blackhole').addClass('spacetime2')
          $('.blackhole').on('animationend', function() {
            $('#laser').hide()
            $('#ship3').addClass('travel')
          })
          $('#ship3').on('animationend', function() {
            $('#pause').hide()
            $('#move').hide()
            $('#fire').hide()
            $('.blackhole').removeClass('spacetime2')
            $('#ship3').removeClass('travel')
            $('#scroll4').show()
            $('#background').hide()
            $('#fourthScroll').addClass('scrollFour')
          });
          $('#fourthScroll').on('animationend', function() {
            $('#ship3').hide()
            $('#scroll4').hide()
            $('#background').show().css({
              background: 'black',
              backgroundSize: '900px 460px',
              width: '900px',
              height: '460px',
              marginTop: '90px',
              overflow: 'hidden',
            })
            $('#next').show()
            $('#continueNext1').hide()
            $('#continueNext2').hide()
            $('#continueNext3').show()
            $('#continueNext4').hide()
            jQuery(function ($) {
              var timer = 10, 
              display = $('.countdown');
              startTimer(timer, display);
            });
          })
        }
    //======= Collision Detection
        var shipY = Math.round($('#ship3').offset().top)
        var shipX = Math.round($('#ship3').offset().left)
        var asteroid1Y = Math.round($(cls).offset().top)
        var asteroid1X = Math.round($(cls).offset().left)
        var rect1 = {x: shipX, y: shipY, width: 90, height: 40}
        var rect2 = {x: asteroid1X, y: asteroid1Y, width: 40, height: 25}
        if (rect1.x < rect2.x + rect2.width && 
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) { // collision detected!
          anime.remove('.story3Asteroid1')
          anime.remove('.story3Asteroid2')
          anime.remove('.story3Asteroid3')
          anime.remove('.story3Asteroid4')
          anime.remove('.story3Asteroid5')
          anime.remove('.story3Asteroid6')
          anime.remove('.story3Asteroid7')
          anime.remove('.story3Asteroid8')
          anime.remove('.story3Asteroid9')
          anime.remove('.story3Asteroid10')
          anime.remove('.story3Asteroid11')
          anime.remove('.story3Asteroid12')
          anime.remove('.story3Asteroid13')
          anime.remove('.story3Asteroid14')
          anime.remove('.story3Asteroid15')
          anime.remove('.story3Asteroid16')
          count()
          if(livesCount > 0){
            $('#weapon').css({
              opacity: 0,
              transition: 'opacity .1s'
            })
            var currentY = 0;
            for(let i=0; i < 1; i++){
              var y = currentY - 4
              currentY = y;
              var x = 'rotate(' + y + 'turn)';
              $("#ship3").css({
                transform: x,
                opacity: 0,
                transition: 'transform 1s, opacity 1s',
              });
            }
            $('#continue').hide()
            $('#continue2').hide()
            $('#continue3').show()
            $('#continue4').hide()
            $('#continue5').hide()
            $('#alert').delay(500).fadeIn()
            jQuery(function ($) {
              var timer = 10, 
              display = $('.countdown');
              startTimer(timer, display);
            });
          }else{
            $('#alert2').delay(500).fadeIn()
            $('#ship3').toggle('explode');
            $('#restart1').hide()
            $('#restart2').hide()
            $('#restart3').show()
            $('#restart4').hide()
            $('#restart5').hide()
            $('#weapon').css({
              opacity: 0,
              transition: 'opacity .1s'
            })
          }
        }else{
          if(updates3 < 150000){
            story3Restart()
          }
        }
      },
    });   
//======= Pause/Play Button
    let pauseCount = 0
    $(document).keydown(function (e) {
      switch (e.which) {
        case 80:
        pauseCount++
        if(pauseCount % 2 != 0){
          story3.pause()  
        }else{
          story3.play()  
        }
      }
    });
  }
}
  
//======= Level 3 Class Animation Functions
function story3Asteroid1() {  //======= Story Level 3 First Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid1" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid1', 0, 1000)
}
function story3Asteroid2() {  //======= Story Level 3 Second Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid2" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid2', 0, 1000)
}
function story3Asteroid3() {  //======= Story Level 3 Third Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid3" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid3', 0, 1000)
}
function story3Asteroid4() {  //======= Story Level 3 Fourth Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid4" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid4', 0, 1000)
}
function story3Asteroid5() {  //======= Story Level 3 Fifth Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid5" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid5', 1000, 1600)
}
function story3Asteroid6() {  //======= Story Level 3 Sixth Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid6" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid6', 1000, 1600)
}
function story3Asteroid7() {  //======= Story Level 3 Seventh Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid7" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid7', 1000, 1600)
}
function story3Asteroid8() {  //======= Story Level 3 Eighth Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid8" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid8', 1000, 1600)
}
function story3Asteroid9() {  //======= Story Level 3 Ninth Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid9" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid9', 1600, 2200)
}
function story3Asteroid10() {  //======= Story Level 3 Tenth Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid10" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid10', 1600, 2200)
}
function story3Asteroid11() {  //======= Story Level 3 Eleventh Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid11" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid11', 1600, 2200)
}
function story3Asteroid12() {  //======= Story Level 3 Twelfth Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid12" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid12', 1600, 2200)
}
function story3Asteroid13() {  //======= Story Level 3 Thirteenth Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid13" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid13', 2200, 3000)
}
function story3Asteroid14() {  //======= Story Level 3 Fourteenth Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid14" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid14', 2200, 3000)
}
function story3Asteroid15() {  //======= Story Level 3 Fifteenth Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid15" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid15', 2200, 3000)
}
function story3Asteroid16() {  //======= Story Level 3 Sixteenth Asteroid
  $('#asteroid').append('<div class="asteroid story3Asteroid16" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story3Asteroid();
  newObj.animation('.story3Asteroid16', 2200, 3000)
}
  
  //======= Story Level 3 Restart Function To Recall Asteroid Function So That Duration If Statement In Anime Is Executed
function story3Restart(){
  if(Math.round($('.story3Asteroid1').offset().top) >= 580){
    $('.story3Asteroid1').remove()
    story3Asteroid1();
  }
  if(Math.round($('.story3Asteroid2').offset().top) >= 580){
    $('.story3Asteroid2').remove()
    story3Asteroid2();
  }
  if(Math.round($('.story3Asteroid3').offset().top) >= 580){
    $('.story3Asteroid3').remove()
    story3Asteroid3();
  }
  if(Math.round($('.story3Asteroid4').offset().top) >= 580){
    $('.story3Asteroid4').remove()
    story3Asteroid4();
  }
  if(Math.round($('.story3Asteroid5').offset().top) >= 580){
    $('.story3Asteroid5').remove()
    story3Asteroid5();
  }
  if(Math.round($('.story3Asteroid6').offset().top) >= 580){
    $('.story3Asteroid6').remove()
    story3Asteroid6();
  }
  if(Math.round($('.story3Asteroid7').offset().top) >= 580){
    $('.story3Asteroid7').remove()
    story3Asteroid7();
  }
  if(Math.round($('.story3Asteroid8').offset().top) >= 580){
    $('.story3Asteroid8').remove()
    story3Asteroid8();
  }
  if(Math.round($('.story3Asteroid9').offset().top) >= 580){
    $('.story3Asteroid9').remove()
    story3Asteroid9();
  }
  if(Math.round($('.story3Asteroid10').offset().top) >= 580){
    $('.story3Asteroid10').remove()
    story3Asteroid10();
  }
  if(Math.round($('.story3Asteroid11').offset().top) >= 580){
    $('.story3Asteroid11').remove()
    story3Asteroid11();
  }
  if(Math.round($('.story3Asteroid12').offset().top) >= 580){
    $('.story3Asteroid12').remove()
    story3Asteroid12();
  }
  if(Math.round($('.story3Asteroid13').offset().top) >= 580){
    $('.story3Asteroid13').remove()
    story3Asteroid13();
  }
  if(Math.round($('.story3Asteroid14').offset().top) >= 580){
    $('.story3Asteroid14').remove()
    story3Asteroid14();
  }
  if(Math.round($('.story3Asteroid15').offset().top) >= 580){
    $('.story3Asteroid15').remove()
    story3Asteroid15();
  }
  if(Math.round($('.story3Asteroid16').offset().top) >= 580){
    $('.story3Asteroid16').remove()
    story3Asteroid16();
  }
}

//======= Continue To Start Level 4
$('#continueNext3').on('click', function() {
  levelCount++
  setTimeout(function(){
    $('.nextLevel').hide()
    clearInterval(time)
  }, 100)
  $('#ship4').show()
  $('#background').show().css({
    background: "url('images/backgrounds/space3.png')",
    backgroundSize: '900px 460px',
    width: '900px',
    height: '460px',
    marginTop: '90px',
    overflow: 'hidden',
  })
  $('#pause').show()
  $('#move').show()
  $('#fire').show()
  story4Asteroid1();
  story4Asteroid2();
  story4Asteroid3();
  story4Asteroid4(); 
  story4Asteroid5();
  story4Asteroid6();
  story4Asteroid7();
  story4Asteroid8();
  story4Asteroid9();
  story4Asteroid10();
  story4Asteroid11();
  story4Asteroid12();
  story4Asteroid13();
  story4Asteroid14();
  story4Asteroid15();
  story4Asteroid16();
  story4Asteroid17();
  story4Asteroid18();
  story4Asteroid19();
  story4Asteroid20();
  story4Asteroid21();
  story4Asteroid22();
  story4Asteroid23();
  story4Asteroid24();
  story4Asteroid25();
  story4Asteroid26();
  story4Asteroid27();
  story4Asteroid28();
  story4Asteroid29();
  story4Asteroid30();
  story4Asteroid31();
  story4Asteroid32();
  story4Asteroid33();
  story4Asteroid34();
  story4Asteroid35();
  story4Asteroid36();
  $('#weapon').show().css({
    opacity: 1,
    transition: 'opacity .1s'
  })
  livesCount = 3
})
  
//======= Level 4

//======= Asteroid Level 4 Class Animation
class story4Asteroid {
  animation(cls, d1, d2) {
    const story4 = anime({
      targets: cls,
      easing: 'linear',
      delay: function() { 
        if(updates4 > 398000){
          return 0
        }else if(updates4 < 398000){
          return anime.random(d1, d2);
        } 
      },
      autoplay: true,
      duration: function(){ 
        if(updates4 > 398000){
          return 3000
        }else if(updates4 < 398000){
        return anime.random(3000, 6000);
        } 
      },
      translateY: 570,
      rotate: { 
        value:function() { return anime.random(-360, 360); },
        duration: function() { return anime.random(3000, 4000); },
      },
      update: function() {
        updates4++;
        updateLog.value ='Score: ' +updates4;
        if(updates4 == 400000){
          $('.blackhole').addClass('spacetime2')
          $('.blackhole').on('animationend', function() {
            $('#laser').hide()
            $('#ship4').addClass('travel')
          })
          $('#ship4').on('animationend', function() {
            $('#pause').hide()
            $('#move').hide()
            $('#fire').hide()
            $('.blackhole').removeClass('spacetime2')
            $('#ship4').removeClass('travel')
            $('#scroll5').show()
            $('#background').hide()
            $('#fifthScroll').addClass('opening')
          });
          $('#fifthScroll').on('animationend', function() {
            $('#ship4').hide()
            $('#scroll5').hide()
            $('#background').show().css({
              background: 'black',
              backgroundSize: '900px 460px',
              width: '900px',
              height: '460px',
              marginTop: '90px',
              overflow: 'hidden',
            })
            $('#next').show()
            $('#continueNext1').hide()
            $('#continueNext2').hide()
            $('#continueNext3').hide()
            $('#continueNext4').show()
            jQuery(function ($) {
              var timer = 10, 
              display = $('.countdown');
              startTimer(timer, display);
            });
          })
        }
//======= Collision Detection
        var shipY = Math.round($('#ship4').offset().top)
        var shipX = Math.round($('#ship4').offset().left)
        var asteroid1Y = Math.round($(cls).offset().top)
        var asteroid1X = Math.round($(cls).offset().left)
        var rect1 = {x: shipX, y: shipY, width: 90, height: 40}
        var rect2 = {x: asteroid1X, y: asteroid1Y, width: 40, height: 25}
        if (rect1.x < rect2.x + rect2.width && 
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) { // collision detected!
          anime.remove('.story4Asteroid1')
          anime.remove('.story4Asteroid2')
          anime.remove('.story4Asteroid3')
          anime.remove('.story4Asteroid4')
          anime.remove('.story4Asteroid5')
          anime.remove('.story4Asteroid6')
          anime.remove('.story4Asteroid7')
          anime.remove('.story4Asteroid8')
          anime.remove('.story4Asteroid9')
          anime.remove('.story4Asteroid10')
          anime.remove('.story4Asteroid11')
          anime.remove('.story4Asteroid12')
          anime.remove('.story4Asteroid13')
          anime.remove('.story4Asteroid14')
          anime.remove('.story4Asteroid15')
          anime.remove('.story4Asteroid16')
          anime.remove('.story4Asteroid17')
          anime.remove('.story4Asteroid18')
          anime.remove('.story4Asteroid19')
          anime.remove('.story4Asteroid20')
          anime.remove('.story4Asteroid21')
          anime.remove('.story4Asteroid22')
          anime.remove('.story4Asteroid23')
          anime.remove('.story4Asteroid24')
          anime.remove('.story4Asteroid25')
          anime.remove('.story4Asteroid26')
          anime.remove('.story4Asteroid27')
          anime.remove('.story4Asteroid28')
          anime.remove('.story4Asteroid29')
          anime.remove('.story4Asteroid30')
          anime.remove('.story4Asteroid31')
          anime.remove('.story4Asteroid32')
          anime.remove('.story4Asteroid33')
          anime.remove('.story4Asteroid34')
          anime.remove('.story4Asteroid35')
          anime.remove('.story4Asteroid36')
          count()
          if(livesCount > 0){
            $('#weapon').css({
              opacity: 0,
              transition: 'opacity .1s'
            })
            var currentY = 0;
            for(let i=0; i < 1; i++){
              var y = currentY - 4
              currentY = y;
              var x = 'rotate(' + y + 'turn)';
              $("#ship4").css({
                transform: x,
                opacity: 0,
                transition: 'transform 1s, opacity 1s',
              });
            }
            $('#continue').hide()
            $('#continue2').hide()
            $('#continue3').hide()
            $('#continue4').show()
            $('#continue5').hide()
              $('#alert').delay(500).fadeIn()
              jQuery(function ($) {
                var timer = 10, 
                display = $('.countdown');
                startTimer(timer, display);
              });
          }else{
            $('#alert2').delay(500).fadeIn()
            $('#ship4').toggle('explode');
            $('#restart1').hide()
            $('#restart2').hide()
            $('#restart3').hide()
            $('#restart4').show()
            $('#restart5').hide()
            $('#weapon').css({
              opacity: 0,
              transition: 'opacity .1s'
            })
          }
        }else{
          if(updates4 < 400000){
            story4Restart()
          }
        }
      },
    });
//======= Pause/Play Button
    let pauseCount = 0
    $(document).keydown(function (e) {
      switch (e.which) {
        case 80:
        pauseCount++
        if(pauseCount % 2 != 0){
          story4.pause()  
        }else{
          story4.play()  
        }
      }
    });
  }
}
  
//======= Level 4 Class Animation Functions
function story4Asteroid1() {  //======= Story First Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid1" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid1', 0, 2000)
}
function story4Asteroid2() {  //======= Story Second Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid2" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid2', 0, 2000)
}
function story4Asteroid3() {  //======= Story Third Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid3" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid3', 0, 2000)
}
function story4Asteroid4() {  //======= Story Fourth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid4" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid4', 0, 2000)
}
function story4Asteroid5() {  //======= Story Fifth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid5" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid5', 0, 2000)
}
function story4Asteroid6() {  //======= Story Sixth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid6" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid6', 0, 2000)
}
function story4Asteroid7() {  //======= Story Seventh Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid7" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid7', 0, 2000)
}
function story4Asteroid8() {  //======= Story Eighth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid8" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid8', 0, 2000)
}
function story4Asteroid9() {  //======= Story Ninth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid9" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid9', 0, 2000)
}
function story4Asteroid10() {  //======= Story Tenth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid10" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid10', 2000, 4000)
}
function story4Asteroid11() {  //======= Story Eleventh Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid11" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid11', 2000, 4000)
}
function story4Asteroid12() {  //======= Story Twelfth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid12" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid12', 2000, 4000)
}
function story4Asteroid13() {  //======= Story Thirteenth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid13" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid13', 2000, 4000)
}
function story4Asteroid14() {  //======= Story Fourteenth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid14" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid14', 2000, 4000)
}
function story4Asteroid15() {  //======= Story Fifteenth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid15" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid15', 2000, 4000)
}
function story4Asteroid16() {  //======= Story Sixteenth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid16" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid16', 2000, 4000)
}
function story4Asteroid17() {  //======= Story Seventeenth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid17" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid17', 2000, 4000)
}
function story4Asteroid18() {  //======= Story Eighteenth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid18" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid18', 2000, 4000)
}
function story4Asteroid19() {  //======= Story Nineteenth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid19" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid19', 4000, 6000)
}
function story4Asteroid20() {  //======= Story Twentieth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid20" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid20', 4000, 6000)
}
function story4Asteroid21() {  //======= Story Twenty-First Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid21" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid21', 4000, 6000)
}
function story4Asteroid22() {  //======= Story Twenty-Second Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid22" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid22', 4000, 6000)
}
function story4Asteroid23() {  //======= Story Twenty-Third Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid23" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid23', 4000, 6000)
}
function story4Asteroid24() {  //======= Story Twenty-Fourth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid24" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid24', 4000, 6000)
}
function story4Asteroid25() {  //======= Story Twenty-Fifth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid25" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid25', 4000, 6000)
}
function story4Asteroid26() {  //======= Story Twenty-Sixth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid26" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid26', 4000, 6000)
}
function story4Asteroid27() {  //======= Story Twenty-Seventh Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid27" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid27', 4000, 6000)
}
function story4Asteroid28() {  //======= Story Twenty-Eighth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid28" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid28', 6000, 8000)
}
function story4Asteroid29() {  //======= Story Twenty-Ninth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid29" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid29', 6000, 8000)
}
function story4Asteroid30() {  //======= Story Thirtieth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid30" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid30', 6000, 8000)
}
function story4Asteroid31() {  //======= Story Thirty-First Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid31" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid31', 6000, 8000)
}
function story4Asteroid32() {  //======= Story Thirty-Second Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid32" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid32', 6000, 8000)
}
function story4Asteroid33() {  //======= Story Thirty-Third Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid33" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid33', 6000, 8000)
}
function story4Asteroid34() {  //======= Story Thirty-Fourth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid34" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid34', 6000, 8000)
}
function story4Asteroid35() {  //======= Story Thirty-Fifth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid35" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid35', 6000, 8000)
}
function story4Asteroid36() {  //======= Story Thirty-Sixth Asteroid
  $('#asteroid').append('<div class="asteroid story4Asteroid36" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new story4Asteroid();
  newObj.animation('.story4Asteroid36', 6000, 8000)
}
    
//======= Story Level 4 Restart Function To Recall Asteroid Function So That Duration If Statement In Anime Is Executed
function story4Restart(){
  if(Math.round($('.story4Asteroid1').offset().top) >= 580){
    $('.story4Asteroid1').remove()
    story4Asteroid1();
  }
  if(Math.round($('.story4Asteroid2').offset().top) >= 580){
    $('.story4Asteroid2').remove()
    story4Asteroid2();
  }
  if(Math.round($('.story4Asteroid3').offset().top) >= 580){
    $('.story4Asteroid3').remove()
    story4Asteroid3();
  }
  if(Math.round($('.story4Asteroid4').offset().top) >= 580){
    $('.story4Asteroid4').remove()
    story4Asteroid4();
  }
  if(Math.round($('.story4Asteroid5').offset().top) >= 580){
    $('.story4Asteroid5').remove()
    story4Asteroid5();
  }
  if(Math.round($('.story4Asteroid6').offset().top) >= 580){
    $('.story4Asteroid6').remove()
    story4Asteroid6();
  }
  if(Math.round($('.story4Asteroid7').offset().top) >= 580){
    $('.story4Asteroid7').remove()
    story4Asteroid7();
  }
  if(Math.round($('.story4Asteroid8').offset().top) >= 580){
    $('.story4Asteroid8').remove()
    story4Asteroid8();
  }
  if(Math.round($('.story4Asteroid9').offset().top) >= 580){
    $('.story4Asteroid9').remove()
    story4Asteroid9();
  }
  if(Math.round($('.story4Asteroid10').offset().top) >= 580){
    $('.story4Asteroid10').remove()
    story4Asteroid10();
  }
  if(Math.round($('.story4Asteroid11').offset().top) >= 580){
    $('.story4Asteroid11').remove()
    story4Asteroid11();
  }
  if(Math.round($('.story4Asteroid12').offset().top) >= 580){
    $('.story4Asteroid12').remove()
    story4Asteroid12();
  }
  if(Math.round($('.story4Asteroid13').offset().top) >= 580){
    $('.story4Asteroid13').remove()
    story4Asteroid13();
  }
  if(Math.round($('.story4Asteroid14').offset().top) >= 580){
    $('.story4Asteroid14').remove()
    story4Asteroid14();
  }
  if(Math.round($('.story4Asteroid15').offset().top) >= 580){
    $('.story4Asteroid15').remove()
    story4Asteroid15();
  }
  if(Math.round($('.story4Asteroid16').offset().top) >= 580){
    $('.story4Asteroid16').remove()
    story4Asteroid16();
  }
  if(Math.round($('.story4Asteroid17').offset().top) >= 580){
    $('.story4Asteroid17').remove()
    story4Asteroid17();
  }
  if(Math.round($('.story4Asteroid18').offset().top) >= 580){
    $('.story4Asteroid18').remove()
    story4Asteroid18();
  }
  if(Math.round($('.story4Asteroid19').offset().top) >= 580){
    $('.story4Asteroid19').remove()
    story4Asteroid19();
  }
  if(Math.round($('.story4Asteroid20').offset().top) >= 580){
    $('.story4Asteroid20').remove()
    story4Asteroid20();
  }
  if(Math.round($('.story4Asteroid21').offset().top) >= 580){
    $('.story4Asteroid21').remove()
    story4Asteroid21();
  }
  if(Math.round($('.story4Asteroid22').offset().top) >= 580){
    $('.story4Asteroid22').remove()
    story4Asteroid22();
  }
  if(Math.round($('.story4Asteroid23').offset().top) >= 580){
    $('.story4Asteroid23').remove()
    story4Asteroid23();
  }
  if(Math.round($('.story4Asteroid24').offset().top) >= 580){
    $('.story4Asteroid24').remove()
    story4Asteroid24();
  }
  if(Math.round($('.story4Asteroid25').offset().top) >= 580){
    $('.story4Asteroid25').remove()
    story4Asteroid25();
  }
  if(Math.round($('.story4Asteroid26').offset().top) >= 580){
    $('.story4Asteroid26').remove()
    story4Asteroid26();
  }
  if(Math.round($('.story4Asteroid27').offset().top) >= 580){
    $('.story4Asteroid27').remove()
    story4Asteroid27();
  }
  if(Math.round($('.story4Asteroid28').offset().top) >= 580){
    $('.story4Asteroid28').remove()
    story4Asteroid28();
  }
  if(Math.round($('.story4Asteroid29').offset().top) >= 580){
    $('.story4Asteroid29').remove()
    story4Asteroid29();
  }
  if(Math.round($('.story4Asteroid30').offset().top) >= 580){
    $('.story4Asteroid30').remove()
    story4Asteroid30();
  }
  if(Math.round($('.story4Asteroid31').offset().top) >= 580){
    $('.story4Asteroid31').remove()
    story4Asteroid31();
  }
  if(Math.round($('.story4Asteroid32').offset().top) >= 580){
    $('.story4Asteroid32').remove()
    story4Asteroid32();
  }
  if(Math.round($('.story4Asteroid33').offset().top) >= 580){
    $('.story4Asteroid33').remove()
    story4Asteroid33();
  }
  if(Math.round($('.story4Asteroid34').offset().top) >= 580){
    $('.story4Asteroid34').remove()
    story4Asteroid34();
  }
  if(Math.round($('.story4Asteroid35').offset().top) >= 580){
    $('.story4Asteroid35').remove()
    story4Asteroid35();
  }
  if(Math.round($('.story4Asteroid36').offset().top) >= 580){
    $('.story4Asteroid36').remove()
    story4Asteroid36();
  }
}

//======= Binding For Destoyer Weapon Fire
let fire;

//======= Continue To Start Level 5
$('#continueNext4').on('click', function() {
  levelCount++
  setTimeout(function(){
    $('.nextLevel').hide()
    clearInterval(time)
  }, 100)
  $('.asteroid').hide()
  $('#ship5').show().css({
    top: '380px'
  })
  $('#destroyer').show()
  $('#background').show().css({
    background: "url('images/backgrounds/space4.png')",
    backgroundSize: '900px 460px',
    maxWidth: '900px',
    height: '460px',
    marginTop: '90px',
    overflow: 'hidden',
  })
  $('#pause').show()
  $('#move').show()
  $('#fire').show()
  storyDestroyer()
  fire = setInterval(function(){storyDestroyerWeapon()}, 2000) 
  $('#weapon').show().css({
    top: '410px',
    opacity: 1,
    transition: 'opacity .1s'
  })
  livesCount = 3
})

//======= Count For How Many Times Destroyer Has Been Hit
let destroyerCount = 0

//======= Level 5

//======= Destroyer Level 5 Class Animation
class Destroyer {
  animation(cls) {
    const destroyer = anime({
      targets: cls,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true,
      duration: function(){
        if(destroyerCount >= 15){
          return 2000
        }else if(destroyerCount >= 10){
          return 4000
        }else if(destroyerCount >= 5){
          return 6000
        }else if(destroyerCount < 5){
          return 8000
        }
      },
      translateX: 800,
      update: function(anim) {
        destroyerPos = Math.round($('#destroyer').offset().left)
        if(anim.progress == 0){
          storyDestroyer()
        }
        if(destroyerCount >= 20){
          anime.remove('#destroyer')
          $('#destroyer').addClass('explode')
          $('.blackhole').addClass('spacetime2')
          $('.blackhole').on('animationend', function() {
            $('#laser').hide()
            $('#ship5').addClass('travel')
          })
          $('#ship5').on('animationend', function() {
            $('#pause').hide()
            $('#move').hide()
            $('#fire').hide()
            $('.blackhole').removeClass('spacetime2')
            $('#ship5').removeClass('travel')
            $('#scroll6').show()
            $('#background').hide()
            $('#sixthScroll').addClass('scrollSix')
          });
          $('#sixthScroll').on('animationend', function() {
            $('#scroll6').hide()
            $('#background').show().css({
              background: "url('images/backgrounds/space5.png')",
              backgroundSize: '900px 500px',
              width: '900px',
              height: '500px',
              marginTop: '90px',
              overflow: 'hidden',
            })
            $('#destroyer').hide()
            $('#ship5').hide()
            $('#ship6').show().css({
              top: '380px'
            }).addClass('goHome')
            $('#ship6').on('animationend', function() {
              setTimeout(function(){window.location.href  = 'spacetime.html'}, 2000)
            })
          })
        }
      },
    });   
//======= Pause/Play Button
    let pauseCount = 0
    $(document).keydown(function (e) {
      switch (e.which) {
        case 80:
        pauseCount++
        if(pauseCount % 2 != 0){
          destroyer.pause()
        }else{
          destroyer.play()
        }
      }
    });
  }
}   

//======= Level 5 Class Animation Functions
function storyDestroyer() {
  let newObj = new Destroyer();
  newObj.animation('#destroyer')
}

//======= Binding To Locate Destroyer Position Top Place Weapon Position
let destroyerPos;

//======= Destroyer's Weapons

//======= Destroyer Right Weapon Animation
const weapon = anime({
  targets: '#laser1',
  easing: 'linear',
  autoplay: false,
  duration: 1000, 
  translateY: 500,
  translateX: 300, 
  update: function() {
//======= Destroyer Weapon/Ship Collision
    var laserY = Math.round($('#laser1').offset().top)
    var laserX = Math.round($('#laser1').offset().left)
    var ship5Y = Math.round($('#ship5').offset().top)
    var ship5X = Math.round($('#ship5').offset().left)
    var rect1 = {x: laserX, y: laserY, width: 5, height: 15}
    var rect2 = {x: ship5X, y: ship5Y, width: 90, height: 40}
    if(laserX >= 1303){
      $('#laser1').hide()
    }
    if (rect1.x < rect2.x + rect2.width && 
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) { // collision detected!
      count()
      $('.laser').hide()
      $('#destroyer').hide()
      clearInterval(fire)
      if(livesCount > 0){
        $('#weapon').css({
          opacity: 0,
          transition: 'opacity .1s'
        })
        var currentY = 0;
        for(let i=0; i < 1; i++){
          var y = currentY - 4
          currentY = y;
          var x = 'rotate(' + y + 'turn)';
          $("#ship5").css({
            transform: x,
            opacity: 0,
            transition: 'transform 1s, opacity 1s',
          });
        }
        $('#continue').hide()
        $('#continue2').hide()
        $('#continue3').hide()
        $('#continue4').hide()
        $('#continue5').show()
        $('#alert').delay(500).fadeIn()
        jQuery(function ($) {
          var timer = 10, 
          display = $('.countdown');
          startTimer(timer, display);
        });
      }else{
        $('#alert2').delay(500).fadeIn()
        $('#ship5').toggle('explode');
        $('#restart1').hide()
        $('#restart2').hide()
        $('#restart3').hide()
        $('#restart4').hide()
        $('#restart5').show()
        $('#weapon').css({
          opacity: 0,
          transition: 'opacity .1s'
        })
      }
    }
//======= Pause/Play Button
    let pauseCount = 0
    $(document).keydown(function (e) {
      switch (e.which) {
        case 80:
        pauseCount++
        if(pauseCount % 2 != 0){
          weapon.pause()
          clearInterval(fire)  
        }else{
          weapon.play()
          fire = setInterval(function(){storyDestroyerWeapon()}, 2000) 
        }
      }
    });
  }
}); 

//======= Destroyer Center Weapon Animation
const weapon2 = anime({
  targets: '#laser2',
  easing: 'linear',
  autoplay: false,
  duration: 1000, 
  translateY: 500,
  update: function() {
//======= Destroyer Weapon/Ship Collision
    var laserY = Math.round($('#laser2').offset().top)
    var laserX = Math.round($('#laser2').offset().left)
    var ship5Y = Math.round($('#ship5').offset().top)
    var ship5X = Math.round($('#ship5').offset().left)
    var rect1 = {x: laserX, y: laserY, width: 5, height: 10}
    var rect2 = {x: ship5X, y: ship5Y, width: 90, height: 40}
    if (rect1.x < rect2.x + rect2.width && 
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) { // collision detected!
      count()
      $('.laser').hide()
      $('#destroyer').hide()
      clearInterval(fire)
      if(livesCount > 0){     
        $('#weapon').css({
          opacity: 0,
          transition: 'opacity .1s'
        })
        var currentY = 0;
        for(let i=0; i < 1; i++){
          var y = currentY - 4
          currentY = y;
          var x = 'rotate(' + y + 'turn)';
          $("#ship5").css({
            transform: x,
            opacity: 0,
            transition: 'transform 1s, opacity 1s',
          });
        }
        $('#continue').hide()
        $('#continue2').hide()
        $('#continue3').hide()
        $('#continue4').hide()
        $('#continue5').show()
        $('#alert').delay(500).fadeIn()
        jQuery(function ($) {
          var timer = 10, 
          display = $('.countdown');
          startTimer(timer, display);
        });
      }else{
        $('#alert2').delay(500).fadeIn()
        $('#ship5').toggle('explode');
        $('#restart1').hide()
        $('#restart2').hide()
        $('#restart3').hide()
        $('#restart4').hide()
        $('#restart5').show()
        $('#weapon').css({
          opacity: 0,
          transition: 'opacity .1s'
        })
      }
    }
//======= Pause/Play Button
    let pauseCount = 0
    $(document).keydown(function (e) {
      switch (e.which) {
        case 80:
        pauseCount++
        if(pauseCount % 2 != 0){
          weapon2.pause()
          clearInterval(fire)  
        }else{
          weapon2.play()
          fire = setInterval(function(){storyDestroyerWeapon()}, 2000) 
        }
      }
    });
  }
}); 

//======= Destroyer Right Weapon Animation
const weapon3 = anime({
  targets: '#laser3',
  easing: 'linear',
  autoplay: false,
  duration: 1000, 
  translateY: 500,
  translateX: -300,
  update: function() {
//======= Destroyer Weapon/Ship Collision
    var laserY = Math.round($('#laser3').offset().top)
    var laserX = Math.round($('#laser3').offset().left)
    var ship5Y = Math.round($('#ship5').offset().top)
    var ship5X = Math.round($('#ship5').offset().left)
    if(laserX <= 220){
      $('#laser3').hide()
    }
    var rect1 = {x: laserX, y: laserY, width: 5, height: 10}
    var rect2 = {x: ship5X, y: ship5Y, width: 90, height: 40}
    if (rect1.x < rect2.x + rect2.width && 
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) { // collision detected!
      count()
      $('.laser').hide()
      $('#destroyer').hide()
      clearInterval(fire)
      if(livesCount > 0){         
        $('#weapon').css({
          opacity: 0,
          transition: 'opacity .1s'
        })
        var currentY = 0;
        for(let i=0; i < 1; i++){
          var y = currentY - 4
          currentY = y;
          var x = 'rotate(' + y + 'turn)';
          $("#ship5").css({
            transform: x,
            opacity: 0,
            transition: 'transform 1s, opacity 1s',
          });
        }
        $('#continue').hide()
        $('#continue2').hide()
        $('#continue3').hide()
        $('#continue4').hide()
        $('#continue5').show()
        $('#alert').delay(500).fadeIn()
        jQuery(function ($) {
          var timer = 10, 
          display = $('.countdown');
          startTimer(timer, display);
        });
      }else{
        $('#alert2').delay(500).fadeIn()
        $('#ship5').toggle('explode');
        $('#restart1').hide()
        $('#restart2').hide()
        $('#restart3').hide()
        $('#restart4').hide()
        $('#restart5').show()
        $('#weapon').css({
          opacity: 0,
          transition: 'opacity .1s'
        })
      }
    }
//======= Pause/Play Button
    let pauseCount = 0
    $(document).keydown(function (e) {
      switch (e.which) {
        case 80:
        pauseCount++
        if(pauseCount % 2 != 0){
          weapon3.pause()
          clearInterval(fire)  
        }else{
          weapon3.play()
          fire = setInterval(function(){storyDestroyerWeapon()}, 2000) 
        }
      }
    });
  }
}); 

//======= Function To Play And Stop Animation For Destroyer's Weapons
function storyDestroyerWeapon() {  
  weapon.play()  
  weapon2.play()
  weapon3.play()
  $('.laser').show()
  $('.laser1').css({
    left: destroyerPos +'px'
  })
  if(destroyerCount == 20){
    clearInterval(fire)
    $('.laser').hide()
  }
}

//======= Endless Play Mode =======//

//======= Asteroid Level 4 Class Animation
class endlessAsteroid {
  animation(cls, d1, d2) {
    const endless = anime({
      targets: cls,
      easing: 'linear',
      delay: function() { return anime.random(d1, d2); },
      autoplay: true,
      duration: function(){
        if(updates > 875000){
          return anime.random(1500, 500);
        }else if(updates > 750000){
          return anime.random(3000, 2000);
        }else if(updates > 625000){
          return anime.random(4500, 3500);
        }else if(updates > 500000){
          return anime.random(6000, 5000);
        }else if(updates > 375000){
          return anime.random(7500, 6500);
        }else if(updates > 250000){
          return anime.random(9000, 8000);
        }else if(updates > 125000){
          return anime.random(10500, 9500);
        }else if(updates < 125000){
          return anime.random(12000, 11000);
        }
      },
      translateY: 570,
      rotate: { 
        value:function() { return anime.random(-360, 360); },
        duration: function() { return anime.random(3000, 4000); },
      },
      update: function() {
        updates++;
        updateLog.value = 'Score: ' +comma2(updates);
  //======= Collision Detection
        var shipY = Math.round($('#ship').offset().top)
        var shipX = Math.round($('#ship').offset().left)
        var asteroid1Y = Math.round($(cls).offset().top)
        var asteroid1X = Math.round($(cls).offset().left)
        var rect1 = {x: shipX, y: shipY, width: 90, height: 40}
        var rect2 = {x: asteroid1X, y: asteroid1Y, width: 40, height: 25}
        if (rect1.x < rect2.x + rect2.width && 
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) { // collision detected!
          anime.remove('.asteroid1')
          anime.remove('.asteroid2')
          anime.remove('.asteroid3')
          anime.remove('.asteroid4')
          anime.remove('.asteroid5')
          anime.remove('.asteroid6')
          anime.remove('.asteroid7')
          anime.remove('.asteroid8')
          anime.remove('.asteroid9')
          anime.remove('.asteroid10')
          anime.remove('.asteroid11')
          anime.remove('.asteroid12')
          anime.remove('.asteroid13')
          anime.remove('.asteroid14')
          anime.remove('.asteroid15')
          anime.remove('.asteroid16')
          scoreKeep()
          count()
          collision()
        }else{
          endlessRestart()
        }
//======= Pause/Play Button
        let pauseCount = 0
        $(document).keydown(function (e) {
          switch (e.which) {
          case 80:
          pauseCount++
            if(pauseCount % 2 != 0){
              endless.pause()
            }else{
              endless.play()
            }
          }
        });
      },
    });  
  }
}


//======= Level 4 Class Animation Functions
function endlessAsteroid1() {  //======= Endless First Asteroid
  $('#asteroid').append('<div class="asteroid asteroid1" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid1', 0, 3000)
}
function endlessAsteroid2() {  //======= Endless Second Asteroid
  $('#asteroid').append('<div class="asteroid asteroid2" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid2', 0, 3000)
}
function endlessAsteroid3() {  //======= Endless Third Asteroid
  $('#asteroid').append('<div class="asteroid asteroid3" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid3', 0, 3000)
}
function endlessAsteroid4() {  //======= Endless Fourth Asteroid
  $('#asteroid').append('<div class="asteroid asteroid4" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid4', 0, 3000)
}
function endlessAsteroid5() {  //======= Endless Fifth Asteroid
  $('#asteroid').append('<div class="asteroid asteroid5" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid5', 3000, 6000)
}
function endlessAsteroid6() {  //======= Endless Sixth Asteroid
  $('#asteroid').append('<div class="asteroid asteroid6" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid6', 3000, 6000)
}
function endlessAsteroid7() {  //======= Endless Seventh Asteroid
  $('#asteroid').append('<div class="asteroid asteroid7" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid7', 3000, 6000)
}
function endlessAsteroid8() {  //======= Endless Eighth Asteroid
  $('#asteroid').append('<div class="asteroid asteroid8" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid8', 3000, 6000)
}
function endlessAsteroid9() {  //======= Endless Ninth Asteroid
  $('#asteroid').append('<div class="asteroid asteroid9" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid9', 6000, 9000)
}
function endlessAsteroid10() {  //======= Endless Tenth Asteroid
  $('#asteroid').append('<div class="asteroid asteroid10" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid10', 6000, 9000)
}
function endlessAsteroid11() {  //======= Endless Eleventh Asteroid
  $('#asteroid').append('<div class="asteroid asteroid11" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid11', 6000, 9000)
}
function endlessAsteroid12() {  //======= Endless Twelfth Asteroid
  $('#asteroid').append('<div class="asteroid asteroid12" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid12', 6000, 9000)
}
function endlessAsteroid13() {  //======= Endless Thirteenth Asteroid
  $('#asteroid').append('<div class="asteroid asteroid13" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid13', 9000, 12000)
}
function endlessAsteroid14() {  //======= Endless Fourteenth Asteroid
  $('#asteroid').append('<div class="asteroid asteroid14" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid14', 9000, 12000)
}
function endlessAsteroid15() {  //======= Endless Fifteenth Asteroid
  $('#asteroid').append('<div class="asteroid asteroid15" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid15', 9000, 12000)
}
function endlessAsteroid16() {  //======= Endless Sixteenth Asteroid
  $('#asteroid').append('<div class="asteroid asteroid16" style="margin-left: ' + Left() + 'px"></div>')
  let newObj = new endlessAsteroid();
  newObj.animation('.asteroid16', 9000, 12000)
}

//======= Endless Restart Function To Recall Asteroid Function So That Duration If Statement In Anime Is Executed
function endlessRestart(){
  if(Math.round($('.asteroid1').offset().top) >= 580){
    $('.asteroid1').remove()
    endlessAsteroid1();
  }
  if(Math.round($('.asteroid2').offset().top) >= 580){
    $('.asteroid2').remove()
    endlessAsteroid2();
  }
  if(Math.round($('.asteroid3').offset().top) >= 580){
    $('.asteroid3').remove()
    endlessAsteroid3();
  }
  if(Math.round($('.asteroid4').offset().top) >= 580){
    $('.asteroid4').remove()
    endlessAsteroid4();
  }
  if(Math.round($('.asteroid5').offset().top) >= 580){
    $('.asteroid5').remove()
    endlessAsteroid5();
  }
  if(Math.round($('.asteroid6').offset().top) >= 580){
    $('.asteroid6').remove()
    endlessAsteroid6();
  }
  if(Math.round($('.asteroid7').offset().top) >= 580){
    $('.asteroid7').remove()
    endlessAsteroid7();
  }
  if(Math.round($('.asteroid8').offset().top) >= 580){
    $('.asteroid8').remove()
    endlessAsteroid8();
  }
  if(Math.round($('.asteroid9').offset().top) >= 580){
    $('.asteroid9').remove()
    endlessAsteroid9();
  }
  if(Math.round($('.asteroid10').offset().top) >= 580){
    $('.asteroid10').remove()
    endlessAsteroid10();
  }
  if(Math.round($('.asteroid11').offset().top) >= 580){
    $('.asteroid11').remove()
    endlessAsteroid11();
  }
  if(Math.round($('.asteroid12').offset().top) >= 580){
    $('.asteroid12').remove()
    endlessAsteroid12();
  }
  if(Math.round($('.asteroid13').offset().top) >= 580){
    $('.asteroid13').remove()
    endlessAsteroid13();
  }
  if(Math.round($('.asteroid14').offset().top) >= 580){
    $('.asteroid14').remove()
    endlessAsteroid14();
  }
  if(Math.round($('.asteroid15').offset().top) >= 580){
    $('.asteroid15').remove()
    endlessAsteroid15();
  }
  if(Math.round($('.asteroid16').offset().top) >= 580){
    $('.asteroid16').remove()
    endlessAsteroid16();
  }
}


//======= Spaceship Weapon =======//

//======= Counter To Record Asteroids Destroyed
var asteroidCounter = document.querySelector('#asteroidCounter')
var asteroidCount = 0

//=======  Endless Play Weapon
const laser = anime({
  targets: '#laser', 
  easing: 'linear',
  duration: 380,
  autoplay: false,
  translateY: -430,
  update: function() {
//======= First Asteroid/Weapon Collision
    var laserY = Math.round($('#laser').offset().top)
    var laserX = Math.round($('#laser').offset().left)
    var asteroid1Y = Math.round($('.asteroid1').offset().top)
    var asteroid1X = Math.round($('.asteroid1').offset().left)
    var circle = {radius: 7.5, x: laserX, y: laserY};
    var circle1 = {radius: 30, x: asteroid1X, y: asteroid1Y};
    var dx1 = circle.x - circle1.x;
    var dy1 = circle.y - circle1.y;
    var distance1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
    if (distance1 < circle.radius + circle1.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid1').addClass('explode2')
      $('.asteroid1').on('animationend', function(){
      $('.asteroid1').remove()
      endlessAsteroid1();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Second Asteroid/Weapon Collision
    var asteroid2Y = Math.round($('.asteroid2').offset().top)
    var asteroid2X = Math.round($('.asteroid2').offset().left)
    var circle2 = {radius: 30, x: asteroid2X, y: asteroid2Y};
    var dx2 = circle.x - circle2.x;
    var dy2 = circle.y - circle2.y;
    var distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
    if (distance2 < circle.radius + circle2.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid2').addClass('explode2')
      $('.asteroid2').on('animationend', function(){
      $('.asteroid2').remove()
      endlessAsteroid2();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Third Asteroid/Weapon Collision
    var asteroid3Y = Math.round($('.asteroid3').offset().top)
    var asteroid3X = Math.round($('.asteroid3').offset().left)
    var circle3 = {radius: 30, x: asteroid3X, y: asteroid3Y};
    var dx3 = circle.x - circle3.x;
    var dy3 = circle.y - circle3.y;
    var distance3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
    if (distance3 < circle.radius + circle3.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid3').addClass('explode2')
      $('.asteroid3').on('animationend', function(){
      $('.asteroid3').remove()
      endlessAsteroid3();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Fourth Asteroid/Weapon Collision
    var asteroid4Y = Math.round($('.asteroid4').offset().top)
    var asteroid4X = Math.round($('.asteroid4').offset().left)
    var circle4 = {radius: 30, x: asteroid4X, y: asteroid4Y};
    var dx4 = circle.x - circle4.x;
    var dy4 = circle.y - circle4.y;
    var distance4 = Math.sqrt(dx4 * dx4 + dy4 * dy4);
    if (distance4 < circle.radius + circle4.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid4').addClass('explode2')
      $('.asteroid4').on('animationend', function(){
      $('.asteroid4').remove()
      endlessAsteroid4();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Fifth Asteroid/Weapon Collision
    var asteroid5Y = Math.round($('.asteroid5').offset().top)
    var asteroid5X = Math.round($('.asteroid5').offset().left)
    var circle5 = {radius: 30, x: asteroid5X, y: asteroid5Y};
    var dx5 = circle.x - circle5.x;
    var dy5 = circle.y - circle5.y;
    var distance5 = Math.sqrt(dx5 * dx5 + dy5 * dy5);
    if (distance5 < circle.radius + circle5.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid5').addClass('explode2')
      $('.asteroid5').on('animationend', function(){
      $('.asteroid5').remove()
      endlessAsteroid5();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Sixth Asteroid/Weapon Collision
    var asteroid6Y = Math.round($('.asteroid6').offset().top)
    var asteroid6X = Math.round($('.asteroid6').offset().left)
    var circle6 = {radius: 30, x: asteroid6X, y: asteroid6Y};
    var dx6 = circle.x - circle6.x;
    var dy6 = circle.y - circle6.y;
    var distance6 = Math.sqrt(dx6 * dx6 + dy6 * dy6);
    if (distance6 < circle.radius + circle6.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid6').addClass('explode2')
      $('.asteroid6').on('animationend', function(){
      $('.asteroid6').remove()
      endlessAsteroid6();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Seventh Asteroid/Weapon Collision
    var asteroid7Y = Math.round($('.asteroid7').offset().top)
    var asteroid7X = Math.round($('.asteroid7').offset().left)
    var circle7 = {radius: 30, x: asteroid7X, y: asteroid7Y};
    var dx7 = circle.x - circle7.x;
    var dy7 = circle.y - circle7.y;
    var distance7 = Math.sqrt(dx7 * dx7 + dy7 * dy7);
    if (distance7 < circle.radius + circle7.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid7').addClass('explode2')
      $('.asteroid7').on('animationend', function(){
      $('.asteroid7').remove()
      endlessAsteroid7();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Eighth Asteroid/Weapon Collision
    var asteroid8Y = Math.round($('.asteroid8').offset().top)
    var asteroid8X = Math.round($('.asteroid8').offset().left)
    var circle8 = {radius: 30, x: asteroid8X, y: asteroid8Y};
    var dx8 = circle.x - circle8.x;
    var dy8 = circle.y - circle8.y;
    var distance8 = Math.sqrt(dx8 * dx8 + dy8 * dy8);
    if (distance8 < circle.radius + circle8.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid8').addClass('explode2')
      $('.asteroid8').on('animationend', function(){
      $('.asteroid8').remove()
      endlessAsteroid8();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Ninth Asteroid/Weapon Collision
    var asteroid9Y = Math.round($('.asteroid9').offset().top)
    var asteroid9X = Math.round($('.asteroid9').offset().left)
    var circle9 = {radius: 30, x: asteroid9X, y: asteroid9Y};
    var dx9 = circle.x - circle9.x;
    var dy9 = circle.y - circle9.y;
    var distance9 = Math.sqrt(dx9 * dx9 + dy9 * dy9);
    if (distance9 < circle.radius + circle9.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid9').addClass('explode2')
      $('.asteroid9').on('animationend', function(){
      $('.asteroid9').remove()
      endlessAsteroid9();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Tenth Asteroid/Weapon Collision
    var asteroid10Y = Math.round($('.asteroid10').offset().top)
    var asteroid10X = Math.round($('.asteroid10').offset().left)
    var circle10 = {radius: 30, x: asteroid10X, y: asteroid10Y};
    var dx10 = circle.x - circle10.x;
    var dy10 = circle.y - circle10.y;
    var distance10 = Math.sqrt(dx10 * dx10 + dy10 * dy10);
    if (distance10 < circle.radius + circle10.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid10').addClass('explode2')
      $('.asteroid10').on('animationend', function(){
      $('.asteroid10').remove()
      endlessAsteroid10();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Eleventh Asteroid/Weapon Collision
    var asteroid11Y = Math.round($('.asteroid11').offset().top)
    var asteroid11X = Math.round($('.asteroid11').offset().left)
    var circle11 = {radius: 30, x: asteroid11X, y: asteroid11Y};
    var dx11 = circle.x - circle11.x;
    var dy11 = circle.y - circle11.y;
    var distance11 = Math.sqrt(dx11 * dx11 + dy11 * dy11);
    if (distance11 < circle.radius + circle11.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid11').addClass('explode2')
      $('.asteroid11').on('animationend', function(){
      $('.asteroid11').remove()
      endlessAsteroid11();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Twelfth Asteroid/Weapon Collision
    var asteroid12Y = Math.round($('.asteroid12').offset().top)
    var asteroid12X = Math.round($('.asteroid12').offset().left)
    var circle12 = {radius: 30, x: asteroid12X, y: asteroid12Y};
    var dx12 = circle.x - circle12.x;
    var dy12 = circle.y - circle12.y;
    var distance12 = Math.sqrt(dx12 * dx12 + dy12 * dy12);
    if (distance12 < circle.radius + circle12.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid12').addClass('explode2')
      $('.asteroid12').on('animationend', function(){
      $('.asteroid12').remove()
      endlessAsteroid12();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Thirteenth Asteroid/Weapon Collision
    var asteroid13Y = Math.round($('.asteroid13').offset().top)
    var asteroid13X = Math.round($('.asteroid13').offset().left)
    var circle13 = {radius: 30, x: asteroid13X, y: asteroid13Y};
    var dx13 = circle.x - circle13.x;
    var dy13 = circle.y - circle13.y;
    var distance13 = Math.sqrt(dx13 * dx13 + dy13 * dy13);
    if (distance13 < circle.radius + circle13.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid13').addClass('explode2')
      $('.asteroid13').on('animationend', function(){
      $('.asteroid13').remove()
      endlessAsteroid13();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Fourteenth Asteroid/Weapon Collision
    var asteroid14Y = Math.round($('.asteroid14').offset().top)
    var asteroid14X = Math.round($('.asteroid14').offset().left)
    var circle14 = {radius: 30, x: asteroid14X, y: asteroid14Y};
    var dx14 = circle.x - circle14.x;
    var dy14 = circle.y - circle14.y;
    var distance14 = Math.sqrt(dx14 * dx14 + dy14 * dy14);
    if (distance14 < circle.radius + circle14.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid14').addClass('explode2')
      $('.asteroid14').on('animationend', function(){
      $('.asteroid14').remove()
      endlessAsteroid14();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Fifteenth Asteroid/Weapon Collision
    var asteroid15Y = Math.round($('.asteroid15').offset().top)
    var asteroid15X = Math.round($('.asteroid15').offset().left)
    var circle15 = {radius: 30, x: asteroid15X, y: asteroid15Y};
    var dx15 = circle.x - circle15.x;
    var dy15 = circle.y - circle15.y;
    var distance15 = Math.sqrt(dx15 * dx15 + dy15 * dy15);
    if (distance15 < circle.radius + circle15.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid15').addClass('explode2')
      $('.asteroid15').on('animationend', function(){
      $('.asteroid15').remove()
      endlessAsteroid15();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
//======= Sixteenth Asteroid/Weapon Collision
    var asteroid16Y = Math.round($('.asteroid16').offset().top)
    var asteroid16X = Math.round($('.asteroid16').offset().left)
    var circle16 = {radius: 30, x: asteroid16X, y: asteroid16Y};
    var dx16 = circle.x - circle16.x;
    var dy16 = circle.y - circle16.y;
    var distance16 = Math.sqrt(dx16 * dx16 + dy16 * dy16);
    if (distance16 < circle.radius + circle16.radius) { // collision detected!
      $('#laser').hide()
      $('.asteroid16').addClass('explode2')
      $('.asteroid16').on('animationend', function(){
      $('.asteroid16').remove()
      endlessAsteroid16();
      })
      asteroidCount++;
      asteroidCounter.value = 'Asteroids Destroyed: ' +asteroidCount;
    }
  }
})

//======= Story Level 2 Weapon
const story2Laser = anime({
  targets: '#laser', 
  easing: 'linear',
  duration: 380,
  autoplay: false,
  translateY: -430,
  update: function(anim) {
    if(anim.progress == 100){
      countShot--
    }
//======= Story 2 First Asteroid/Weapon Collision
    var laserY = Math.round($('#laser').offset().top)
    var laserX = Math.round($('#laser').offset().left)
    var story2Asteroid1Y = Math.round($('.story2Asteroid1').offset().top)
    var story2Asteroid1X = Math.round($('.story2Asteroid1').offset().left)
    var circle = {radius: 7.5, x: laserX, y: laserY};
    var s2circle1 = {radius: 30, x: story2Asteroid1X, y: story2Asteroid1Y};
    var s2dx1 = circle.x - s2circle1.x;
    var s2dy1 = circle.y - s2circle1.y;
    var s2distance1 = Math.sqrt(s2dx1 * s2dx1 + s2dy1 * s2dy1);
    if (s2distance1 < circle.radius + s2circle1.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid1').addClass('explode2')
      $('.story2Asteroid1').on('animationend', function(){
      $('.story2Asteroid1').remove()
      story2Asteroid1();
      })
    }
//======= Story 2 Second Asteroid/Weapon Collision
    var story2Asteroid2Y = Math.round($('.story2Asteroid2').offset().top)
    var story2Asteroid2X = Math.round($('.story2Asteroid2').offset().left)
    var s2circle2 = {radius: 30, x: story2Asteroid2X, y: story2Asteroid2Y};
    var s2dx2 = circle.x - s2circle2.x;
    var s2dy2 = circle.y - s2circle2.y;
    var s2distance2 = Math.sqrt(s2dx2 * s2dx2 + s2dy2 * s2dy2);
    if (s2distance2 < circle.radius + s2circle2.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid2').addClass('explode2')
      $('.story2Asteroid2').on('animationend', function(){
      $('.story2Asteroid2').remove()
      story2Asteroid2();
      })
    }
//======= Story 2 Third Asteroid/Weapon Collision
    var story2Asteroid3Y = Math.round($('.story2Asteroid3').offset().top)
    var story2Asteroid3X = Math.round($('.story2Asteroid3').offset().left)
    var s2circle3 = {radius: 30, x: story2Asteroid3X, y: story2Asteroid3Y};
    var s2dx3 = circle.x - s2circle3.x;
    var s2dy3 = circle.y - s2circle3.y;
    var s2distance3 = Math.sqrt(s2dx3 * s2dx3 + s2dy3 * s2dy3);
    if (s2distance3 < circle.radius + s2circle3.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid3').addClass('explode2')
      $('.story2Asteroid3').on('animationend', function(){
      $('.story2Asteroid3').remove()
      story2Asteroid3();
      })
    }
//======= Story 2 Fourth Asteroid/Weapon Collision
    var story2Asteroid4Y = Math.round($('.story2Asteroid4').offset().top)
    var story2Asteroid4X = Math.round($('.story2Asteroid4').offset().left)
    var s2circle4 = {radius: 30, x: story2Asteroid4X, y: story2Asteroid4Y};
    var s2dx4 = circle.x - s2circle4.x;
    var s2dy4 = circle.y - s2circle4.y;
    var s2distance4 = Math.sqrt(s2dx4 * s2dx4 + s2dy4 * s2dy4);
    if (s2distance4 < circle.radius + s2circle4.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid4').addClass('explode2')
      $('.story2Asteroid4').on('animationend', function(){
      $('.story2Asteroid4').remove()
      story2Asteroid4();
      })
    }
//======= Story 2 Fifth Asteroid/Weapon Collision
    var story2Asteroid5Y = Math.round($('.story2Asteroid5').offset().top)
    var story2Asteroid5X = Math.round($('.story2Asteroid5').offset().left)
    var s2circle5 = {radius: 30, x: story2Asteroid5X, y: story2Asteroid5Y};
    var s2dx5 = circle.x - s2circle5.x;
    var s2dy5 = circle.y - s2circle5.y;
    var s2distance5 = Math.sqrt(s2dx5 * s2dx5 + s2dy5 * s2dy5);
    if (s2distance5 < circle.radius + s2circle5.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid5').addClass('explode2')
      $('.story2Asteroid5').on('animationend', function(){
      $('.story2Asteroid5').remove()
      story2Asteroid5();
      })
    }
//======= Story 2 Sixth Asteroid/Weapon Collision
    var story2Asteroid6Y = Math.round($('.story2Asteroid6').offset().top)
    var story2Asteroid6X = Math.round($('.story2Asteroid6').offset().left)
    var s2circle6 = {radius: 30, x: story2Asteroid6X, y: story2Asteroid6Y};
    var s2dx6 = circle.x - s2circle6.x;
    var s2dy6 = circle.y - s2circle6.y;
    var s2distance6 = Math.sqrt(s2dx6 * s2dx6 + s2dy6 * s2dy6);
    if (s2distance6 < circle.radius + s2circle6.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid6').addClass('explode2')
      $('.story2Asteroid6').on('animationend', function(){
      $('.story2Asteroid6').remove()
      story2Asteroid6();
      })
    }
//======= Story 2 Seventh Asteroid/Weapon Collision
    var story2Asteroid7Y = Math.round($('.story2Asteroid7').offset().top)
    var story2Asteroid7X = Math.round($('.story2Asteroid7').offset().left)
    var s2circle7 = {radius: 30, x: story2Asteroid7X, y: story2Asteroid7Y};
    var s2dx7 = circle.x - s2circle7.x;
    var s2dy7 = circle.y - s2circle7.y;
    var s2distance7 = Math.sqrt(s2dx7 * s2dx7 + s2dy7 * s2dy7);
    if (s2distance7 < circle.radius + s2circle7.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid7').addClass('explode2')
      $('.story2Asteroid7').on('animationend', function(){
      $('.story2Asteroid7').remove()
      story2Asteroid7();
      })
    }
//======= Story 2 Eighth Asteroid/Weapon Collision
    var story2Asteroid8Y = Math.round($('.story2Asteroid8').offset().top)
    var story2Asteroid8X = Math.round($('.story2Asteroid8').offset().left)
    var s2circle8 = {radius: 30, x: story2Asteroid8X, y: story2Asteroid8Y};
    var s2dx8 = circle.x - s2circle8.x;
    var s2dy8 = circle.y - s2circle8.y;
    var s2distance8 = Math.sqrt(s2dx8 * s2dx8 + s2dy8 * s2dy8);
    if (s2distance8 < circle.radius + s2circle8.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid8').addClass('explode2')
      $('.story2Asteroid8').on('animationend', function(){
      $('.story2Asteroid8').remove()
      story2Asteroid8();
      })
    }
//======= Story 2 Ninth Asteroid/Weapon Collision
    var story2Asteroid9Y = Math.round($('.story2Asteroid9').offset().top)
    var story2Asteroid9X = Math.round($('.story2Asteroid9').offset().left)
    var s2circle9 = {radius: 30, x: story2Asteroid9X, y: story2Asteroid9Y};
    var s2dx9 = circle.x - s2circle9.x;
    var s2dy9 = circle.y - s2circle9.y;
    var s2distance9 = Math.sqrt(s2dx9 * s2dx9 + s2dy9 * s2dy9);
    if (s2distance9 < circle.radius + s2circle9.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid9').addClass('explode2')
      $('.story2Asteroid9').on('animationend', function(){
      $('.story2Asteroid9').remove()
      story2Asteroid9();
      })
    }
//======= Story 2 Tenth Asteroid/Weapon Collision
    var story2Asteroid10Y = Math.round($('.story2Asteroid10').offset().top)
    var story2Asteroid10X = Math.round($('.story2Asteroid10').offset().left)
    var s2circle10 = {radius: 30, x: story2Asteroid10X, y: story2Asteroid10Y};
    var s2dx10 = circle.x - s2circle10.x;
    var s2dy10 = circle.y - s2circle10.y;
    var s2distance10 = Math.sqrt(s2dx10 * s2dx10 + s2dy10 * s2dy10);
    if (s2distance10 < circle.radius + s2circle10.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid10').addClass('explode2')
      $('.story2Asteroid10').on('animationend', function(){
      $('.story2Asteroid10').remove()
      story2Asteroid10();
      })
    }
//======= Story 2 Eleventh Asteroid/Weapon Collision
    var story2Asteroid11Y = Math.round($('.story2Asteroid11').offset().top)
    var story2Asteroid11X = Math.round($('.story2Asteroid11').offset().left)
    var s2circle11 = {radius: 30, x: story2Asteroid11X, y: story2Asteroid11Y};
    var s2dx11 = circle.x - s2circle11.x;
    var s2dy11 = circle.y - s2circle11.y;
    var s2distance11 = Math.sqrt(s2dx11 * s2dx11 + s2dy11 * s2dy11);
    if (s2distance11 < circle.radius + s2circle11.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid11').addClass('explode2')
      $('.story2Asteroid11').on('animationend', function(){
      $('.story2Asteroid11').remove()
      story2Asteroid11();
      })
    }
//======= Story 2 Twelfth Asteroid/Weapon Collision
    var story2Asteroid12Y = Math.round($('.story2Asteroid12').offset().top)
    var story2Asteroid12X = Math.round($('.story2Asteroid12').offset().left)
    var s2circle12 = {radius: 30, x: story2Asteroid12X, y: story2Asteroid12Y};
    var s2dx12 = circle.x - s2circle12.x;
    var s2dy12 = circle.y - s2circle12.y;
    var s2distance12 = Math.sqrt(s2dx12 * s2dx12 + s2dy12 * s2dy12);
    if (s2distance12 < circle.radius + s2circle12.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid12').addClass('explode2')
      $('.story2Asteroid12').on('animationend', function(){
      $('.story2Asteroid12').remove()
      story2Asteroid12();
      })
    }
//======= Story 2 Thirteenth Asteroid/Weapon Collision
    var story2Asteroid13Y = Math.round($('.story2Asteroid13').offset().top)
    var story2Asteroid13X = Math.round($('.story2Asteroid13').offset().left)
    var s2circle13 = {radius: 30, x: story2Asteroid13X, y: story2Asteroid13Y};
    var s2dx13 = circle.x - s2circle13.x;
    var s2dy13 = circle.y - s2circle13.y;
    var s2distance13 = Math.sqrt(s2dx13 * s2dx13 + s2dy13 * s2dy13);
    if (s2distance13 < circle.radius + s2circle13.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid13').addClass('explode2')
      $('.story2Asteroid13').on('animationend', function(){
      $('.story2Asteroid13').remove()
      story2Asteroid13();
      })
    }
//======= Story 2 Fourteenth Asteroid/Weapon Collision
    var story2Asteroid14Y = Math.round($('.story2Asteroid14').offset().top)
    var story2Asteroid14X = Math.round($('.story2Asteroid14').offset().left)
    var s2circle14 = {radius: 30, x: story2Asteroid14X, y: story2Asteroid14Y};
    var s2dx14 = circle.x - s2circle14.x;
    var s2dy14 = circle.y - s2circle14.y;
    var s2distance14 = Math.sqrt(s2dx14 * s2dx14 + s2dy14 * s2dy14);
    if (s2distance14 < circle.radius + s2circle14.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid14').addClass('explode2')
      $('.story2Asteroid14').on('animationend', function(){
      $('.story2Asteroid14').remove()
      story2Asteroid14();
      })
    }
//======= Story 2 Fifteenth Asteroid/Weapon Collision
    var story2Asteroid15Y = Math.round($('.story2Asteroid15').offset().top)
    var story2Asteroid15X = Math.round($('.story2Asteroid15').offset().left)
    var s2circle15 = {radius: 30, x: story2Asteroid15X, y: story2Asteroid15Y};
    var s2dx15 = circle.x - s2circle15.x;
    var s2dy15 = circle.y - s2circle15.y;
    var s2distance15 = Math.sqrt(s2dx15 * s2dx15 + s2dy15 * s2dy15);
    if (s2distance15 < circle.radius + s2circle15.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid15').addClass('explode2')
      $('.story2Asteroid15').on('animationend', function(){
      $('.story2Asteroid15').remove()
      story2Asteroid15();
      })
    }
//======= Story 2 Sixteenth Asteroid/Weapon Collision
    var story2Asteroid16Y = Math.round($('.story2Asteroid16').offset().top)
    var story2Asteroid16X = Math.round($('.story2Asteroid16').offset().left)
    var s2circle16 = {radius: 30, x: story2Asteroid16X, y: story2Asteroid16Y};
    var s2dx16 = circle.x - s2circle16.x;
    var s2dy16 = circle.y - s2circle16.y;
    var s2distance16 = Math.sqrt(s2dx16 * s2dx16 + s2dy16 * s2dy16);
    if (s2distance16 < circle.radius + s2circle16.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid16').addClass('explode2')
      $('.story2Asteroid16').on('animationend', function(){
      $('.story2Asteroid16').remove()
      story2Asteroid16();
      })
    }
//======= Story 2 Seventeenth Asteroid/Weapon Collision
    var story2Asteroid17Y = Math.round($('.story2Asteroid17').offset().top)
    var story2Asteroid17X = Math.round($('.story2Asteroid17').offset().left)
    var s2circle17 = {radius: 30, x: story2Asteroid17X, y: story2Asteroid17Y};
    var s2dx17 = circle.x - s2circle17.x;
    var s2dy17 = circle.y - s2circle17.y;
    var s2distance17 = Math.sqrt(s2dx17 * s2dx17 + s2dy17 * s2dy17);
    if (s2distance17 < circle.radius + s2circle17.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid17').addClass('explode2')
      $('.story2Asteroid17').on('animationend', function(){
      $('.story2Asteroid17').remove()
      story2Asteroid17();
      })
    }
//======= Story 2 Eighteenth Asteroid/Weapon Collision
    var story2Asteroid18Y = Math.round($('.story2Asteroid18').offset().top)
    var story2Asteroid18X = Math.round($('.story2Asteroid18').offset().left)
    var s2circle18 = {radius: 30, x: story2Asteroid18X, y: story2Asteroid18Y};
    var s2dx18 = circle.x - s2circle18.x;
    var s2dy18 = circle.y - s2circle18.y;
    var s2distance18 = Math.sqrt(s2dx18 * s2dx18 + s2dy18 * s2dy18);
    if (s2distance18 < circle.radius + s2circle18.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid18').addClass('explode2')
      $('.story2Asteroid18').on('animationend', function(){
      $('.story2Asteroid18').remove()
      story2Asteroid18();
      })
    }
//======= Story 2 Nineteenth Asteroid/Weapon Collision
    var story2Asteroid19Y = Math.round($('.story2Asteroid19').offset().top)
    var story2Asteroid19X = Math.round($('.story2Asteroid19').offset().left)
    var s2circle19 = {radius: 30, x: story2Asteroid19X, y: story2Asteroid19Y};
    var s2dx19 = circle.x - s2circle19.x;
    var s2dy19 = circle.y - s2circle19.y;
    var s2distance19 = Math.sqrt(s2dx19 * s2dx19 + s2dy19 * s2dy19);
    if (s2distance19 < circle.radius + s2circle19.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid19').addClass('explode2')
      $('.story2Asteroid19').on('animationend', function(){
      $('.story2Asteroid19').remove()
      story2Asteroid19();
      })
    }
//======= Story 2 Twentieth Asteroid/Weapon Collision
    var story2Asteroid20Y = Math.round($('.story2Asteroid20').offset().top)
    var story2Asteroid20X = Math.round($('.story2Asteroid20').offset().left)
    var s2circle20 = {radius: 30, x: story2Asteroid20X, y: story2Asteroid20Y};
    var s2dx20 = circle.x - s2circle20.x;
    var s2dy20 = circle.y - s2circle20.y;
    var s2distance20 = Math.sqrt(s2dx20 * s2dx20 + s2dy20 * s2dy20);
    if (s2distance20 < circle.radius + s2circle20.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid20').addClass('explode2')
      $('.story2Asteroid20').on('animationend', function(){
      $('.story2Asteroid20').remove()
      story2Asteroid20();
      })
    }
//======= Story 2 Twenty-First Asteroid/Weapon Collision
    var story2Asteroid21Y = Math.round($('.story2Asteroid21').offset().top)
    var story2Asteroid21X = Math.round($('.story2Asteroid21').offset().left)
    var s2circle21 = {radius: 30, x: story2Asteroid21X, y: story2Asteroid21Y};
    var s2dx21 = circle.x - s2circle21.x;
    var s2dy21 = circle.y - s2circle21.y;
    var s2distance21 = Math.sqrt(s2dx21 * s2dx21 + s2dy21 * s2dy21);
    if (s2distance21 < circle.radius + s2circle21.radius) { // collision detected!
      $('#laser').hide()
      $('.story2Asteroid21').addClass('explode2')
      $('.story2Asteroid21').on('animationend', function(){
      $('.story2Asteroid21').remove()
      story2Asteroid21();
      })
    }
  }
})

//======= Story Level 3 Weapon
const story3Laser = anime({
  targets: '#laser', 
  easing: 'linear',
  duration: 380,
  autoplay: false,
  translateY: -430,
  update: function(anim) {
    if(anim.progress == 100){
      countShot--
    }
//======= Story 3 First Asteroid/Weapon Collision
    var laserY = Math.round($('#laser').offset().top)
    var laserX = Math.round($('#laser').offset().left)
    var story3Asteroid1Y = Math.round($('.story3Asteroid1').offset().top)
    var story3Asteroid1X = Math.round($('.story3Asteroid1').offset().left)
    var circle = {radius: 7.5, x: laserX, y: laserY};
    var s3circle1 = {radius: 30, x: story3Asteroid1X, y: story3Asteroid1Y};
    var s3dx1 = circle.x - s3circle1.x;
    var s3dy1 = circle.y - s3circle1.y;
    var s3distance1 = Math.sqrt(s3dx1 * s3dx1 + s3dy1 * s3dy1);
    if (s3distance1 < circle.radius + s3circle1.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid1').addClass('explode2')
      $('.story3Asteroid1').on('animationend', function(){
      $('.story3Asteroid1').remove()
      story3Asteroid1();
      })
    }
//======= Story 3 Second Asteroid/Weapon Collision
    var story3Asteroid2Y = Math.round($('.story3Asteroid2').offset().top)
    var story3Asteroid2X = Math.round($('.story3Asteroid2').offset().left)
    var s3circle2 = {radius: 30, x: story3Asteroid2X, y: story3Asteroid2Y};
    var s3dx2 = circle.x - s3circle2.x;
    var s3dy2 = circle.y - s3circle2.y;
    var s3distance2 = Math.sqrt(s3dx2 * s3dx2 + s3dy2 * s3dy2);
    if (s3distance2 < circle.radius + s3circle2.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid2').addClass('explode2')
      $('.story3Asteroid2').on('animationend', function(){
      $('.story3Asteroid2').remove()
      story3Asteroid2();
      })
    }
//======= Story 3 Third Asteroid/Weapon Collision
    var story3Asteroid3Y = Math.round($('.story3Asteroid3').offset().top)
    var story3Asteroid3X = Math.round($('.story3Asteroid3').offset().left)
    var s3circle3 = {radius: 30, x: story3Asteroid3X, y: story3Asteroid3Y};
    var s3dx3 = circle.x - s3circle3.x;
    var s3dy3 = circle.y - s3circle3.y;
    var s3distance3 = Math.sqrt(s3dx3 * s3dx3 + s3dy3 * s3dy3);
    if (s3distance3 < circle.radius + s3circle3.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid3').addClass('explode2')
      $('.story3Asteroid3').on('animationend', function(){
      $('.story3Asteroid3').remove()
      story3Asteroid3();
      })
    }
//======= Story 3 Fourth Asteroid/Weapon Collision
    var story3Asteroid4Y = Math.round($('.story3Asteroid4').offset().top)
    var story3Asteroid4X = Math.round($('.story3Asteroid4').offset().left)
    var s3circle4 = {radius: 30, x: story3Asteroid4X, y: story3Asteroid4Y};
    var s3dx4 = circle.x - s3circle4.x;
    var s3dy4 = circle.y - s3circle4.y;
    var s3distance4 = Math.sqrt(s3dx4 * s3dx4 + s3dy4 * s3dy4);
    if (s3distance4 < circle.radius + s3circle4.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid4').addClass('explode2')
      $('.story3Asteroid4').on('animationend', function(){
      $('.story3Asteroid4').remove()
      story3Asteroid4();
      })
    }
//======= Story 3 Fifth Asteroid/Weapon Collision
    var story3Asteroid5Y = Math.round($('.story3Asteroid5').offset().top)
    var story3Asteroid5X = Math.round($('.story3Asteroid5').offset().left)
    var s3circle5 = {radius: 30, x: story3Asteroid5X, y: story3Asteroid5Y};
    var s3dx5 = circle.x - s3circle5.x;
    var s3dy5 = circle.y - s3circle5.y;
    var s3distance5 = Math.sqrt(s3dx5 * s3dx5 + s3dy5 * s3dy5);
    if (s3distance5 < circle.radius + s3circle5.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid5').addClass('explode2')
      $('.story3Asteroid5').on('animationend', function(){
      $('.story3Asteroid5').remove()
      story3Asteroid5();
      })
    }
//======= Story 3 Sixth Asteroid/Weapon Collision
    var story3Asteroid6Y = Math.round($('.story3Asteroid6').offset().top)
    var story3Asteroid6X = Math.round($('.story3Asteroid6').offset().left)
    var s3circle6 = {radius: 30, x: story3Asteroid6X, y: story3Asteroid6Y};
    var s3dx6 = circle.x - s3circle6.x;
    var s3dy6 = circle.y - s3circle6.y;
    var s3distance6 = Math.sqrt(s3dx6 * s3dx6 + s3dy6 * s3dy6);
    if (s3distance6 < circle.radius + s3circle6.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid6').addClass('explode2')
      $('.story3Asteroid6').on('animationend', function(){
      $('.story3Asteroid6').remove()
      story3Asteroid6();
      })
    }
//======= Story 3 Seventh Asteroid/Weapon Collision
    var story3Asteroid7Y = Math.round($('.story3Asteroid7').offset().top)
    var story3Asteroid7X = Math.round($('.story3Asteroid7').offset().left)
    var s3circle7 = {radius: 30, x: story3Asteroid7X, y: story3Asteroid7Y};
    var s3dx7 = circle.x - s3circle7.x;
    var s3dy7 = circle.y - s3circle7.y;
    var s3distance7 = Math.sqrt(s3dx7 * s3dx7 + s3dy7 * s3dy7);
    if (s3distance7 < circle.radius + s3circle7.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid7').addClass('explode2')
      $('.story3Asteroid7').on('animationend', function(){
      $('.story3Asteroid7').remove()
      story3Asteroid7();
      })
    }
//======= Story 3 Eighth Asteroid/Weapon Collision
    var story3Asteroid8Y = Math.round($('.story3Asteroid8').offset().top)
    var story3Asteroid8X = Math.round($('.story3Asteroid8').offset().left)
    var s3circle8 = {radius: 30, x: story3Asteroid8X, y: story3Asteroid8Y};
    var s3dx8 = circle.x - s3circle8.x;
    var s3dy8 = circle.y - s3circle8.y;
    var s3distance8 = Math.sqrt(s3dx8 * s3dx8 + s3dy8 * s3dy8);
    if (s3distance8 < circle.radius + s3circle8.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid8').addClass('explode2')
      $('.story3Asteroid8').on('animationend', function(){
      $('.story3Asteroid8').remove()
      story3Asteroid8();
      })
    }
//======= Story 3 Ninth Asteroid/Weapon Collision
    var story3Asteroid9Y = Math.round($('.story3Asteroid9').offset().top)
    var story3Asteroid9X = Math.round($('.story3Asteroid9').offset().left)
    var s3circle9 = {radius: 30, x: story3Asteroid9X, y: story3Asteroid9Y};
    var s3dx9 = circle.x - s3circle9.x;
    var s3dy9 = circle.y - s3circle9.y;
    var s3distance9 = Math.sqrt(s3dx9 * s3dx9 + s3dy9 * s3dy9);
    if (s3distance9 < circle.radius + s3circle9.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid9').addClass('explode2')
      $('.story3Asteroid9').on('animationend', function(){
      $('.story3Asteroid9').remove()
      story3Asteroid9();
      })
    }
//======= Story 3 Tenth Asteroid/Weapon Collision
    var story3Asteroid10Y = Math.round($('.story3Asteroid10').offset().top)
    var story3Asteroid10X = Math.round($('.story3Asteroid10').offset().left)
    var s3circle10 = {radius: 30, x: story3Asteroid10X, y: story3Asteroid10Y};
    var s3dx10 = circle.x - s3circle10.x;
    var s3dy10 = circle.y - s3circle10.y;
    var s3distance10 = Math.sqrt(s3dx10 * s3dx10 + s3dy10 * s3dy10);
    if (s3distance10 < circle.radius + s3circle10.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid10').addClass('explode2')
      $('.story3Asteroid10').on('animationend', function(){
      $('.story3Asteroid10').remove()
      story3Asteroid10();
      })
    }
//======= Story 3 Eleventh Asteroid/Weapon Collision
    var story3Asteroid11Y = Math.round($('.story3Asteroid11').offset().top)
    var story3Asteroid11X = Math.round($('.story3Asteroid11').offset().left)
    var s3circle11 = {radius: 30, x: story3Asteroid11X, y: story3Asteroid11Y};
    var s3dx11 = circle.x - s3circle11.x;
    var s3dy11 = circle.y - s3circle11.y;
    var s3distance11 = Math.sqrt(s3dx11 * s3dx11 + s3dy11 * s3dy11);
    if (s3distance11 < circle.radius + s3circle11.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid11').addClass('explode2')
      $('.story3Asteroid11').on('animationend', function(){
      $('.story3Asteroid11').remove()
      story3Asteroid11();
      })
    }
//======= Story 3 Twelfth Asteroid/Weapon Collision
    var story3Asteroid12Y = Math.round($('.story3Asteroid12').offset().top)
    var story3Asteroid12X = Math.round($('.story3Asteroid12').offset().left)
    var s3circle12 = {radius: 30, x: story3Asteroid12X, y: story3Asteroid12Y};
    var s3dx12 = circle.x - s3circle12.x;
    var s3dy12 = circle.y - s3circle12.y;
    var s3distance12 = Math.sqrt(s3dx12 * s3dx12 + s3dy12 * s3dy12);
    if (s3distance12 < circle.radius + s3circle12.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid12').addClass('explode2')
      $('.story3Asteroid12').on('animationend', function(){
      $('.story3Asteroid12').remove()
      story3Asteroid12();
      })
    }
//======= Story 3 Thirteenth Asteroid/Weapon Collision
    var story3Asteroid13Y = Math.round($('.story3Asteroid13').offset().top)
    var story3Asteroid13X = Math.round($('.story3Asteroid13').offset().left)
    var s3circle13 = {radius: 30, x: story3Asteroid13X, y: story3Asteroid13Y};
    var s3dx13 = circle.x - s3circle13.x;
    var s3dy13 = circle.y - s3circle13.y;
    var s3distance13 = Math.sqrt(s3dx13 * s3dx13 + s3dy13 * s3dy13);
    if (s3distance13 < circle.radius + s3circle13.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid13').addClass('explode2')
      $('.story3Asteroid13').on('animationend', function(){
      $('.story3Asteroid13').remove()
      story3Asteroid13();
      })
    }
//======= Story 3 Fourteenth Asteroid/Weapon Collision
    var story3Asteroid14Y = Math.round($('.story3Asteroid14').offset().top)
    var story3Asteroid14X = Math.round($('.story3Asteroid14').offset().left)
    var s3circle14 = {radius: 30, x: story3Asteroid14X, y: story3Asteroid14Y};
    var s3dx14 = circle.x - s3circle14.x;
    var s3dy14 = circle.y - s3circle14.y;
    var s3distance14 = Math.sqrt(s3dx14 * s3dx14 + s3dy14 * s3dy14);
    if (s3distance14 < circle.radius + s3circle14.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid14').addClass('explode2')
      $('.story3Asteroid14').on('animationend', function(){
      $('.story3Asteroid14').remove()
      story3Asteroid14();
      })
    }
//======= Story 3 Fifteenth Asteroid/Weapon Collision
    var story3Asteroid15Y = Math.round($('.story3Asteroid15').offset().top)
    var story3Asteroid15X = Math.round($('.story3Asteroid15').offset().left)
    var s3circle15 = {radius: 30, x: story3Asteroid15X, y: story3Asteroid15Y};
    var s3dx15 = circle.x - s3circle15.x;
    var s3dy15 = circle.y - s3circle15.y;
    var s3distance15 = Math.sqrt(s3dx15 * s3dx15 + s3dy15 * s3dy15);
    if (s3distance15 < circle.radius + s3circle15.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid15').addClass('explode2')
      $('.story3Asteroid15').on('animationend', function(){
      $('.story3Asteroid15').remove()
      story3Asteroid15();
      })
    }
//======= Story 3 Sixteenth Asteroid/Weapon Collision
    var story3Asteroid16Y = Math.round($('.story3Asteroid16').offset().top)
    var story3Asteroid16X = Math.round($('.story3Asteroid16').offset().left)
    var s3circle16 = {radius: 30, x: story3Asteroid16X, y: story3Asteroid16Y};
    var s3dx16 = circle.x - s3circle16.x;
    var s3dy16 = circle.y - s3circle16.y;
    var s3distance16 = Math.sqrt(s3dx16 * s3dx16 + s3dy16 * s3dy16);
    if (s3distance16 < circle.radius + s3circle16.radius) { // collision detected!
      $('#laser').hide()
      $('.story3Asteroid16').addClass('explode2')
      $('.story3Asteroid16').on('animationend', function(){
      $('.story3Asteroid16').remove()
      story3Asteroid16();
      })
    }
  }
})

//======= Story Level 4 Weapon
const story4Laser = anime({
  targets: '#laser', 
  easing: 'linear',
  duration: 380,
  autoplay: false,
  translateY: -430,
  update: function() {
    //======= Story 4 First Asteroid/Weapon Collision
    var laserY = Math.round($('#laser').offset().top)
    var laserX = Math.round($('#laser').offset().left)
    var story4Asteroid1Y = Math.round($('.story4Asteroid1').offset().top)
    var story4Asteroid1X = Math.round($('.story4Asteroid1').offset().left)
    var circle = {radius: 7.5, x: laserX, y: laserY};
    var s4circle1 = {radius: 30, x: story4Asteroid1X, y: story4Asteroid1Y};
    var s4dx1 = circle.x - s4circle1.x;
    var s4dy1 = circle.y - s4circle1.y;
    var s4distance1 = Math.sqrt(s4dx1 * s4dx1 + s4dy1 * s4dy1);
    if (s4distance1 < circle.radius + s4circle1.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid1').addClass('explode2')
      $('.story4Asteroid1').on('animationend', function(){
      $('.story4Asteroid1').remove()
      story4Asteroid1();
      })
    }
//======= Story 4 Second Asteroid/Weapon Collision
    var story4Asteroid2Y = Math.round($('.story4Asteroid2').offset().top)
    var story4Asteroid2X = Math.round($('.story4Asteroid2').offset().left)
    var s4circle2 = {radius: 30, x: story4Asteroid2X, y: story4Asteroid2Y};
    var s4dx2 = circle.x - s4circle2.x;
    var s4dy2 = circle.y - s4circle2.y;
    var s4distance2 = Math.sqrt(s4dx2 * s4dx2 + s4dy2 * s4dy2);
    if (s4distance2 < circle.radius + s4circle2.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid2').addClass('explode2')
      $('.story4Asteroid2').on('animationend', function(){
      $('.story4Asteroid2').remove()
      story4Asteroid2();
      })
    }
//======= Story 4 Third Asteroid/Weapon Collision
    var story4Asteroid3Y = Math.round($('.story4Asteroid3').offset().top)
    var story4Asteroid3X = Math.round($('.story4Asteroid3').offset().left)
    var s4circle3 = {radius: 30, x: story4Asteroid3X, y: story4Asteroid3Y};
    var s4dx3 = circle.x - s4circle3.x;
    var s4dy3 = circle.y - s4circle3.y;
    var s4distance3 = Math.sqrt(s4dx3 * s4dx3 + s4dy3 * s4dy3);
    if (s4distance3 < circle.radius + s4circle3.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid3').addClass('explode2')
      $('.story4Asteroid3').on('animationend', function(){
      $('.story4Asteroid3').remove()
      story4Asteroid3();
      })
    }
//======= Story 4 Fourth Asteroid/Weapon Collision
    var story4Asteroid4Y = Math.round($('.story4Asteroid4').offset().top)
    var story4Asteroid4X = Math.round($('.story4Asteroid4').offset().left)
    var s4circle4 = {radius: 30, x: story4Asteroid4X, y: story4Asteroid4Y};
    var s4dx4 = circle.x - s4circle4.x;
    var s4dy4 = circle.y - s4circle4.y;
    var s4distance4 = Math.sqrt(s4dx4 * s4dx4 + s4dy4 * s4dy4);
    if (s4distance4 < circle.radius + s4circle4.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid4').addClass('explode2')
      $('.story4Asteroid4').on('animationend', function(){
      $('.story4Asteroid4').remove()
      story4Asteroid4();
      })
    }
//======= Story 4 Fifth Asteroid/Weapon Collision
    var story4Asteroid5Y = Math.round($('.story4Asteroid5').offset().top)
    var story4Asteroid5X = Math.round($('.story4Asteroid5').offset().left)
    var s4circle5 = {radius: 30, x: story4Asteroid5X, y: story4Asteroid5Y};
    var s4dx5 = circle.x - s4circle5.x;
    var s4dy5 = circle.y - s4circle5.y;
    var s4distance5 = Math.sqrt(s4dx5 * s4dx5 + s4dy5 * s4dy5);
    if (s4distance5 < circle.radius + s4circle5.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid5').addClass('explode2')
      $('.story4Asteroid5').on('animationend', function(){
      $('.story4Asteroid5').remove()
      story4Asteroid5();
      })
    }
//======= Story 4 Sixth Asteroid/Weapon Collision
    var story4Asteroid6Y = Math.round($('.story4Asteroid6').offset().top)
    var story4Asteroid6X = Math.round($('.story4Asteroid6').offset().left)
    var s4circle6 = {radius: 30, x: story4Asteroid6X, y: story4Asteroid6Y};
    var s4dx6 = circle.x - s4circle6.x;
    var s4dy6 = circle.y - s4circle6.y;
    var s4distance6 = Math.sqrt(s4dx6 * s4dx6 + s4dy6 * s4dy6);
    if (s4distance6 < circle.radius + s4circle6.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid6').addClass('explode2')
      $('.story4Asteroid6').on('animationend', function(){
      $('.story4Asteroid6').remove()
      story4Asteroid6();
      })
    }
//======= Story 4 Seventh Asteroid/Weapon Collision
    var story4Asteroid7Y = Math.round($('.story4Asteroid7').offset().top)
    var story4Asteroid7X = Math.round($('.story4Asteroid7').offset().left)
    var s4circle7 = {radius: 30, x: story4Asteroid7X, y: story4Asteroid7Y};
    var s4dx7 = circle.x - s4circle7.x;
    var s4dy7 = circle.y - s4circle7.y;
    var s4distance7 = Math.sqrt(s4dx7 * s4dx7 + s4dy7 * s4dy7);
    if (s4distance7 < circle.radius + s4circle7.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid7').addClass('explode2')
      $('.story4Asteroid7').on('animationend', function(){
      $('.story4Asteroid7').remove()
      story4Asteroid7();
      })
    }
//======= Story 4 Eighth Asteroid/Weapon Collision
    var story4Asteroid8Y = Math.round($('.story4Asteroid8').offset().top)
    var story4Asteroid8X = Math.round($('.story4Asteroid8').offset().left)
    var s4circle8 = {radius: 30, x: story4Asteroid8X, y: story4Asteroid8Y};
    var s4dx8 = circle.x - s4circle8.x;
    var s4dy8 = circle.y - s4circle8.y;
    var s4distance8 = Math.sqrt(s4dx8 * s4dx8 + s4dy8 * s4dy8);
    if (s4distance8 < circle.radius + s4circle8.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid8').addClass('explode2')
      $('.story4Asteroid8').on('animationend', function(){
      $('.story4Asteroid8').remove()
      story4Asteroid8();
      })
    }
//======= Story 4 Ninth Asteroid/Weapon Collision
    var story4Asteroid9Y = Math.round($('.story4Asteroid9').offset().top)
    var story4Asteroid9X = Math.round($('.story4Asteroid9').offset().left)
    var s4circle9 = {radius: 30, x: story4Asteroid9X, y: story4Asteroid9Y};
    var s4dx9 = circle.x - s4circle9.x;
    var s4dy9 = circle.y - s4circle9.y;
    var s4distance9 = Math.sqrt(s4dx9 * s4dx9 + s4dy9 * s4dy9);
    if (s4distance9 < circle.radius + s4circle9.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid9').addClass('explode2')
      $('.story4Asteroid9').on('animationend', function(){
      $('.story4Asteroid9').remove()
      story4Asteroid9();
      })
    }
//======= Story 4 Tenth Asteroid/Weapon Collision
    var story4Asteroid10Y = Math.round($('.story4Asteroid10').offset().top)
    var story4Asteroid10X = Math.round($('.story4Asteroid10').offset().left)
    var s4circle10 = {radius: 30, x: story4Asteroid10X, y: story4Asteroid10Y};
    var s4dx10 = circle.x - s4circle10.x;
    var s4dy10 = circle.y - s4circle10.y;
    var s4distance10 = Math.sqrt(s4dx10 * s4dx10 + s4dy10 * s4dy10);
    if (s4distance10 < circle.radius + s4circle10.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid10').addClass('explode2')
      $('.story4Asteroid10').on('animationend', function(){
      $('.story4Asteroid10').remove()
      story4Asteroid10();
      })
    }
//======= Story 4 Eleventh Asteroid/Weapon Collision
    var story4Asteroid11Y = Math.round($('.story4Asteroid11').offset().top)
    var story4Asteroid11X = Math.round($('.story4Asteroid11').offset().left)
    var s4circle11 = {radius: 30, x: story4Asteroid11X, y: story4Asteroid11Y};
    var s4dx11 = circle.x - s4circle11.x;
    var s4dy11 = circle.y - s4circle11.y;
    var s4distance11 = Math.sqrt(s4dx11 * s4dx11 + s4dy11 * s4dy11);
    if (s4distance11 < circle.radius + s4circle11.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid11').addClass('explode2')
      $('.story4Asteroid11').on('animationend', function(){
      $('.story4Asteroid11').remove()
      story4Asteroid11();
      })
    }
//======= Story 4 Twelfth Asteroid/Weapon Collision
    var story4Asteroid12Y = Math.round($('.story4Asteroid12').offset().top)
    var story4Asteroid12X = Math.round($('.story4Asteroid12').offset().left)
    var s4circle12 = {radius: 30, x: story4Asteroid12X, y: story4Asteroid12Y};
    var s4dx12 = circle.x - s4circle12.x;
    var s4dy12 = circle.y - s4circle12.y;
    var s4distance12 = Math.sqrt(s4dx12 * s4dx12 + s4dy12 * s4dy12);
    if (s4distance12 < circle.radius + s4circle12.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid12').addClass('explode2')
      $('.story4Asteroid12').on('animationend', function(){
      $('.story4Asteroid12').remove()
      story4Asteroid12();
      })
    }
//======= Story 4 Thirteenth Asteroid/Weapon Collision
    var story4Asteroid13Y = Math.round($('.story4Asteroid13').offset().top)
    var story4Asteroid13X = Math.round($('.story4Asteroid13').offset().left)
    var s4circle13 = {radius: 30, x: story4Asteroid13X, y: story4Asteroid13Y};
    var s4dx13 = circle.x - s4circle13.x;
    var s4dy13 = circle.y - s4circle13.y;
    var s4distance13 = Math.sqrt(s4dx13 * s4dx13 + s4dy13 * s4dy13);
    if (s4distance13 < circle.radius + s4circle13.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid13').addClass('explode2')
      $('.story4Asteroid13').on('animationend', function(){
      $('.story4Asteroid13').remove()
      story4Asteroid13();
      })
    }
//======= Story 4 Fourteenth Asteroid/Weapon Collision
    var story4Asteroid14Y = Math.round($('.story4Asteroid14').offset().top)
    var story4Asteroid14X = Math.round($('.story4Asteroid14').offset().left)
    var s4circle14 = {radius: 30, x: story4Asteroid14X, y: story4Asteroid14Y};
    var s4dx14 = circle.x - s4circle14.x;
    var s4dy14 = circle.y - s4circle14.y;
    var s4distance14 = Math.sqrt(s4dx14 * s4dx14 + s4dy14 * s4dy14);
    if (s4distance14 < circle.radius + s4circle14.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid14').addClass('explode2')
      $('.story4Asteroid14').on('animationend', function(){
      $('.story4Asteroid14').remove()
      story4Asteroid14();
      })
    }
//======= Story 4 Fifteenth Asteroid/Weapon Collision
    var story4Asteroid15Y = Math.round($('.story4Asteroid15').offset().top)
    var story4Asteroid15X = Math.round($('.story4Asteroid15').offset().left)
    var s4circle15 = {radius: 30, x: story4Asteroid15X, y: story4Asteroid15Y};
    var s4dx15 = circle.x - s4circle15.x;
    var s4dy15 = circle.y - s4circle15.y;
    var s4distance15 = Math.sqrt(s4dx15 * s4dx15 + s4dy15 * s4dy15);
    if (s4distance15 < circle.radius + s4circle15.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid15').addClass('explode2')
      $('.story4Asteroid15').on('animationend', function(){
      $('.story4Asteroid15').remove()
      story4Asteroid15();
      })
    }
//======= Story 4 Sixteenth Asteroid/Weapon Collision
    var story4Asteroid16Y = Math.round($('.story4Asteroid16').offset().top)
    var story4Asteroid16X = Math.round($('.story4Asteroid16').offset().left)
    var s4circle16 = {radius: 30, x: story4Asteroid16X, y: story4Asteroid16Y};
    var s4dx16 = circle.x - s4circle16.x;
    var s4dy16 = circle.y - s4circle16.y;
    var s4distance16 = Math.sqrt(s4dx16 * s4dx16 + s4dy16 * s4dy16);
    if (s4distance16 < circle.radius + s4circle16.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid16').addClass('explode2')
      $('.story4Asteroid16').on('animationend', function(){
      $('.story4Asteroid16').remove()
      story4Asteroid16();
      })
    }
//======= Story 4 Seventeenth Asteroid/Weapon Collision
    var story4Asteroid17Y = Math.round($('.story4Asteroid17').offset().top)
    var story4Asteroid17X = Math.round($('.story4Asteroid17').offset().left)
    var s4circle17 = {radius: 30, x: story4Asteroid17X, y: story4Asteroid17Y};
    var s4dx17 = circle.x - s4circle17.x;
    var s4dy17 = circle.y - s4circle17.y;
    var s4distance17 = Math.sqrt(s4dx17 * s4dx17 + s4dy17 * s4dy17);
    if (s4distance17 < circle.radius + s4circle17.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid17').addClass('explode2')
      $('.story4Asteroid17').on('animationend', function(){
      $('.story4Asteroid17').remove()
      story4Asteroid17();
      })
    }
//======= Story 4 Eighteenth Asteroid/Weapon Collision
    var story4Asteroid18Y = Math.round($('.story4Asteroid18').offset().top)
    var story4Asteroid18X = Math.round($('.story4Asteroid18').offset().left)
    var s4circle18 = {radius: 30, x: story4Asteroid18X, y: story4Asteroid18Y};
    var s4dx18 = circle.x - s4circle18.x;
    var s4dy18 = circle.y - s4circle18.y;
    var s4distance18 = Math.sqrt(s4dx18 * s4dx18 + s4dy18 * s4dy18);
    if (s4distance18 < circle.radius + s4circle18.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid18').addClass('explode2')
      $('.story4Asteroid18').on('animationend', function(){
      $('.story4Asteroid18').remove()
      story4Asteroid18();
      })
    }
//======= Story 4 Nineteenth Asteroid/Weapon Collision
    var story4Asteroid19Y = Math.round($('.story4Asteroid19').offset().top)
    var story4Asteroid19X = Math.round($('.story4Asteroid19').offset().left)
    var s4circle19 = {radius: 30, x: story4Asteroid19X, y: story4Asteroid19Y};
    var s4dx19 = circle.x - s4circle19.x;
    var s4dy19 = circle.y - s4circle19.y;
    var s4distance19 = Math.sqrt(s4dx19 * s4dx19 + s4dy19 * s4dy19);
    if (s4distance19 < circle.radius + s4circle19.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid19').addClass('explode2')
      $('.story4Asteroid19').on('animationend', function(){
      $('.story4Asteroid19').remove()
      story4Asteroid19();
      })
    }
//======= Story 4 Twentieth Asteroid/Weapon Collision
    var story4Asteroid20Y = Math.round($('.story4Asteroid20').offset().top)
    var story4Asteroid20X = Math.round($('.story4Asteroid20').offset().left)
    var s4circle20 = {radius: 30, x: story4Asteroid20X, y: story4Asteroid20Y};
    var s4dx20 = circle.x - s4circle20.x;
    var s4dy20 = circle.y - s4circle20.y;
    var s4distance20 = Math.sqrt(s4dx20 * s4dx20 + s4dy20 * s4dy20);
    if (s4distance20 < circle.radius + s4circle20.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid20').addClass('explode2')
      $('.story4Asteroid20').on('animationend', function(){
      $('.story4Asteroid20').remove()
      story4Asteroid20();
      })
    }
//======= Story 4 Twenty-First Asteroid/Weapon Collision
    var story4Asteroid21Y = Math.round($('.story4Asteroid21').offset().top)
    var story4Asteroid21X = Math.round($('.story4Asteroid21').offset().left)
    var s4circle21 = {radius: 30, x: story4Asteroid21X, y: story4Asteroid21Y};
    var s4dx21 = circle.x - s4circle21.x;
    var s4dy21 = circle.y - s4circle21.y;
    var s4distance21 = Math.sqrt(s4dx21 * s4dx21 + s4dy21 * s4dy21);
    if (s4distance21 < circle.radius + s4circle21.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid21').addClass('explode2')
      $('.story4Asteroid21').on('animationend', function(){
      $('.story4Asteroid21').remove()
      story4Asteroid21();
      })
    }
//======= Story 4 Twenty-Second Asteroid/Weapon Collision
    var story4Asteroid22Y = Math.round($('.story4Asteroid22').offset().top)
    var story4Asteroid22X = Math.round($('.story4Asteroid22').offset().left)
    var s4circle22 = {radius: 30, x: story4Asteroid22X, y: story4Asteroid22Y};
    var s4dx22 = circle.x - s4circle22.x;
    var s4dy22 = circle.y - s4circle22.y;
    var s4distance22 = Math.sqrt(s4dx22 * s4dx22 + s4dy22 * s4dy22);
    if (s4distance22 < circle.radius + s4circle22.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid22').addClass('explode2')
      $('.story4Asteroid22').on('animationend', function(){
      $('.story4Asteroid22').remove()
      story4Asteroid22();
      })
    }
//======= Story 4 Twenty-Third Asteroid/Weapon Collision
    var story4Asteroid23Y = Math.round($('.story4Asteroid23').offset().top)
    var story4Asteroid23X = Math.round($('.story4Asteroid23').offset().left)
    var s4circle23 = {radius: 30, x: story4Asteroid23X, y: story4Asteroid23Y};
    var s4dx23 = circle.x - s4circle23.x;
    var s4dy23 = circle.y - s4circle23.y;
    var s4distance23 = Math.sqrt(s4dx23 * s4dx23 + s4dy23 * s4dy23);
    if (s4distance23 < circle.radius + s4circle23.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid23').addClass('explode2')
      $('.story4Asteroid23').on('animationend', function(){
      $('.story4Asteroid23').remove()
      story4Asteroid23();
      })
    }
//======= Story 4 Twenty-Fourth Asteroid/Weapon Collision
    var story4Asteroid24Y = Math.round($('.story4Asteroid24').offset().top)
    var story4Asteroid24X = Math.round($('.story4Asteroid24').offset().left)
    var s4circle24 = {radius: 30, x: story4Asteroid24X, y: story4Asteroid24Y};
    var s4dx24 = circle.x - s4circle24.x;
    var s4dy24 = circle.y - s4circle24.y;
    var s4distance24 = Math.sqrt(s4dx24 * s4dx24 + s4dy24 * s4dy24);
    if (s4distance24 < circle.radius + s4circle24.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid24').addClass('explode2')
      $('.story4Asteroid24').on('animationend', function(){
      $('.story4Asteroid24').remove()
      story4Asteroid24();
      })
    }
//======= Story 4 Twenty-Fifth Asteroid/Weapon Collision
    var story4Asteroid25Y = Math.round($('.story4Asteroid25').offset().top)
    var story4Asteroid25X = Math.round($('.story4Asteroid25').offset().left)
    var s4circle25 = {radius: 30, x: story4Asteroid25X, y: story4Asteroid25Y};
    var s4dx25 = circle.x - s4circle25.x;
    var s4dy25 = circle.y - s4circle25.y;
    var s4distance25 = Math.sqrt(s4dx25 * s4dx25 + s4dy25 * s4dy25);
    if (s4distance25 < circle.radius + s4circle25.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid25').addClass('explode2')
      $('.story4Asteroid25').on('animationend', function(){
      $('.story4Asteroid25').remove()
      story4Asteroid25();
      })
    }
//======= Story 4 Twenty-Sixth Asteroid/Weapon Collision
    var story4Asteroid26Y = Math.round($('.story4Asteroid26').offset().top)
    var story4Asteroid26X = Math.round($('.story4Asteroid26').offset().left)
    var s4circle26 = {radius: 30, x: story4Asteroid26X, y: story4Asteroid26Y};
    var s4dx26 = circle.x - s4circle26.x;
    var s4dy26 = circle.y - s4circle26.y;
    var s4distance26 = Math.sqrt(s4dx26 * s4dx26 + s4dy26 * s4dy26);
    if (s4distance26 < circle.radius + s4circle26.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid26').addClass('explode2')
      $('.story4Asteroid26').on('animationend', function(){
      $('.story4Asteroid26').remove()
      story4Asteroid26();
      })
    }
//======= Story 4 Twenty-Seventh Asteroid/Weapon Collision
    var story4Asteroid27Y = Math.round($('.story4Asteroid27').offset().top)
    var story4Asteroid27X = Math.round($('.story4Asteroid27').offset().left)
    var s4circle27 = {radius: 30, x: story4Asteroid27X, y: story4Asteroid27Y};
    var s4dx27 = circle.x - s4circle27.x;
    var s4dy27 = circle.y - s4circle27.y;
    var s4distance27 = Math.sqrt(s4dx27 * s4dx27 + s4dy27 * s4dy27);
    if (s4distance27 < circle.radius + s4circle27.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid27').addClass('explode2')
      $('.story4Asteroid27').on('animationend', function(){
      $('.story4Asteroid27').remove()
      story4Asteroid27();
      })
    }
//======= Story 4 Twenty-Eighth Asteroid/Weapon Collision
    var story4Asteroid28Y = Math.round($('.story4Asteroid28').offset().top)
    var story4Asteroid28X = Math.round($('.story4Asteroid28').offset().left)
    var s4circle28 = {radius: 30, x: story4Asteroid28X, y: story4Asteroid28Y};
    var s4dx28 = circle.x - s4circle28.x;
    var s4dy28 = circle.y - s4circle28.y;
    var s4distance28 = Math.sqrt(s4dx28 * s4dx28 + s4dy28 * s4dy28);
    if (s4distance28 < circle.radius + s4circle28.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid28').addClass('explode2')
      $('.story4Asteroid28').on('animationend', function(){
      $('.story4Asteroid28').remove()
      story4Asteroid28();
      })
    }
//======= Story 4 Twenty-Nineth Asteroid/Weapon Collision
    var story4Asteroid29Y = Math.round($('.story4Asteroid29').offset().top)
    var story4Asteroid29X = Math.round($('.story4Asteroid29').offset().left)
    var s4circle29 = {radius: 30, x: story4Asteroid29X, y: story4Asteroid29Y};
    var s4dx29 = circle.x - s4circle29.x;
    var s4dy29 = circle.y - s4circle29.y;
    var s4distance29 = Math.sqrt(s4dx29 * s4dx29 + s4dy29 * s4dy29);
    if (s4distance29 < circle.radius + s4circle29.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid29').addClass('explode2')
      $('.story4Asteroid29').on('animationend', function(){
      $('.story4Asteroid29').remove()
      story4Asteroid29();
      })
    }
//======= Story 4 Thirtieth Asteroid/Weapon Collision
    var story4Asteroid30Y = Math.round($('.story4Asteroid30').offset().top)
    var story4Asteroid30X = Math.round($('.story4Asteroid30').offset().left)
    var s4circle30 = {radius: 30, x: story4Asteroid30X, y: story4Asteroid30Y};
    var s4dx30 = circle.x - s4circle30.x;
    var s4dy30 = circle.y - s4circle30.y;
    var s4distance30 = Math.sqrt(s4dx30 * s4dx30 + s4dy30 * s4dy30);
    if (s4distance30 < circle.radius + s4circle30.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid30').addClass('explode2')
      $('.story4Asteroid30').on('animationend', function(){
      $('.story4Asteroid30').remove()
      story4Asteroid30();
      })
    }
//======= Story 4 Thirty-First Asteroid/Weapon Collision
    var story4Asteroid31Y = Math.round($('.story4Asteroid31').offset().top)
    var story4Asteroid31X = Math.round($('.story4Asteroid31').offset().left)
    var s4circle31 = {radius: 30, x: story4Asteroid31X, y: story4Asteroid31Y};
    var s4dx31 = circle.x - s4circle31.x;
    var s4dy31 = circle.y - s4circle31.y;
    var s4distance31 = Math.sqrt(s4dx31 * s4dx31 + s4dy31 * s4dy31);
    if (s4distance31 < circle.radius + s4circle31.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid31').addClass('explode2')
      $('.story4Asteroid31').on('animationend', function(){
      $('.story4Asteroid31').remove()
      story4Asteroid31();
      })
    }
//======= Story 4 Thirty-Second Asteroid/Weapon Collision
    var story4Asteroid32Y = Math.round($('.story4Asteroid32').offset().top)
    var story4Asteroid32X = Math.round($('.story4Asteroid32').offset().left)
    var s4circle32 = {radius: 30, x: story4Asteroid32X, y: story4Asteroid32Y};
    var s4dx32 = circle.x - s4circle32.x;
    var s4dy32 = circle.y - s4circle32.y;
    var s4distance32 = Math.sqrt(s4dx32 * s4dx32 + s4dy32 * s4dy32);
    if (s4distance32 < circle.radius + s4circle32.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid32').addClass('explode2')
      $('.story4Asteroid32').on('animationend', function(){
      $('.story4Asteroid32').remove()
      story4Asteroid32();
      })
    }
//======= Story 4 Thirty-Third Asteroid/Weapon Collision
    var story4Asteroid33Y = Math.round($('.story4Asteroid33').offset().top)
    var story4Asteroid33X = Math.round($('.story4Asteroid33').offset().left)
    var s4circle33 = {radius: 30, x: story4Asteroid33X, y: story4Asteroid33Y};
    var s4dx33 = circle.x - s4circle33.x;
    var s4dy33 = circle.y - s4circle33.y;
    var s4distance33 = Math.sqrt(s4dx33 * s4dx33 + s4dy33 * s4dy33);
    if (s4distance33 < circle.radius + s4circle33.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid33').addClass('explode2')
      $('.story4Asteroid33').on('animationend', function(){
      $('.story4Asteroid33').remove()
      story4Asteroid33();
      })
    }
//======= Story 4 Thirty-Fourth Asteroid/Weapon Collision
    var story4Asteroid34Y = Math.round($('.story4Asteroid34').offset().top)
    var story4Asteroid34X = Math.round($('.story4Asteroid34').offset().left)
    var s4circle34 = {radius: 30, x: story4Asteroid34X, y: story4Asteroid34Y};
    var s4dx34 = circle.x - s4circle34.x;
    var s4dy34 = circle.y - s4circle34.y;
    var s4distance34 = Math.sqrt(s4dx34 * s4dx34 + s4dy34 * s4dy34);
    if (s4distance34 < circle.radius + s4circle34.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid34').addClass('explode2')
      $('.story4Asteroid34').on('animationend', function(){
      $('.story4Asteroid34').remove()
      story4Asteroid34();
      })
    }
//======= Story 4 Thirty-Fifth Asteroid/Weapon Collision
    var story4Asteroid35Y = Math.round($('.story4Asteroid35').offset().top)
    var story4Asteroid35X = Math.round($('.story4Asteroid35').offset().left)
    var s4circle35 = {radius: 30, x: story4Asteroid35X, y: story4Asteroid35Y};
    var s4dx35 = circle.x - s4circle35.x;
    var s4dy35 = circle.y - s4circle35.y;
    var s4distance35 = Math.sqrt(s4dx35 * s4dx35 + s4dy35 * s4dy35);
    if (s4distance35 < circle.radius + s4circle35.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid35').addClass('explode2')
      $('.story4Asteroid35').on('animationend', function(){
      $('.story4Asteroid35').remove()
      story4Asteroid35();
      })
    }
//======= Story 4 Thirty-Sixth Asteroid/Weapon Collision
    var story4Asteroid36Y = Math.round($('.story4Asteroid36').offset().top)
    var story4Asteroid36X = Math.round($('.story4Asteroid36').offset().left)
    var s4circle36 = {radius: 30, x: story4Asteroid36X, y: story4Asteroid36Y};
    var s4dx36 = circle.x - s4circle36.x;
    var s4dy36 = circle.y - s4circle36.y;
    var s4distance36 = Math.sqrt(s4dx36 * s4dx36 + s4dy36 * s4dy36);
    if (s4distance36 < circle.radius + s4circle36.radius) { // collision detected!
      $('#laser').hide()
      $('.story4Asteroid36').addClass('explode2')
      $('.story4Asteroid36').on('animationend', function(){
      $('.story4Asteroid36').remove()
      story4Asteroid36();
      })
    }
  }
})

//======= Story Level 5 Weapon
const story5Laser = anime({
  targets: '#laser', 
  easing: 'linear',
  duration: 380,
  autoplay: false,
  translateY: -430,
  update: function() {
//======= Destroyer/Weapon Collision
    var laserY = Math.round($('#laser').offset().top)
    var laserX = Math.round($('#laser').offset().left)
    var destroyerY = Math.round($('#destroyer').offset().top)
    var destroyerX = Math.round($('#destroyer').offset().left)
    var rect1 = {x: laserX, y: laserY, width: 5, height: 10}
    var rect2 = {x: destroyerX, y: destroyerY, width: 90, height: 40}
    if (rect1.x < rect2.x + rect2.width && 
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) { // collision detected!
      destroyerCount++
      $('#laser').hide()
      for(let i=0; i<=7; i++){
        $('#destroyer').fadeOut(50).fadeIn(50)
      }
    }
  }
})

//======= Up Arrow To Make Weapon Fire
$(document).keydown(function (e) {
  switch (e.which) {
    case 38:
    if(levelCount == 0){
      laser.play()
    }else if(levelCount == 2){
      if(countShot > 0){
        story2Laser.play()
      }
    }else if(levelCount == 3){
      if(countShot > 0){
        story3Laser.play()
      }
    }else if(levelCount == 4){
      story4Laser.play()
    }else if(levelCount == 5){
      story5Laser.play()
    }
    $('#laser').show() 
  }
});



});