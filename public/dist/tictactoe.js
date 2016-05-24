$(document).ready(function() {
  // Get started, choose a mark
  function startTheGame() {
    $('.btn').on('click', function() {
    var player1 = new Object();
    var player2 = new Object();
    // assign player1
    player1.mark = $(this).attr('value');
    // assign player2
    if(player1.mark === 'X') {
      player2.mark = 'O';
    } else {
      player2.mark = 'X';
    }
    // hide the choice
    $('#start').addClass('hide');

    console.log(player1.mark, player2.mark);
  });
  }

  // mark the board
  function mark(player) {

  }

  startTheGame();
});
