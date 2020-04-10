
var timerValue = 60;
var opacity = 0.1;


setInterval(function () {

  if(timerValue > 0){
    timerValue--;
  }

  if(timerValue <= 30){

    opacity = opacity + 0.02;

  } else {
    opacity = opacity + 0.005;

  }

  $('#timer').css("opacity", opacity);

  if(timerValue === 0){
    location.reload();
  }






  $('#timer').html(timerValue);

}, 1000);
