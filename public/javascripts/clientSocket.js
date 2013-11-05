var socket = io.connect('/');
socket.on('players', function (data) {
  console.log(data);
  $("#numPlayers").text(data.number);
	});
	
