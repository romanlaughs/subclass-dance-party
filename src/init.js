$(document).ready(function() {
  window.dancers = [];
  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });



  $('.lineUpButton').on('click', function(event) {
    if ($('.lineUpButton').text() === 'line up dancers') {
      $('.popDancer').css('animation', 'null');
      window.dancers.forEach(function(dancer) {
        dancer.lineup();
      });
      $('.lineUpButton').text('recess lined up dancers');
    } else {
      $('.popDancer').css('animation', 'move 2s linear infinite');
      window.dancers.forEach(function(dancer) {
        dancer.unlineup();
      });
      $('.lineUpButton').text('line up dancers');
    }
  });



});