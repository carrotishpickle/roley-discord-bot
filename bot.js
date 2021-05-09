const Discord = require('discord.js');
const config = require('./configfiles/config.json');
const stats = require('./configfiles/KARLSON/STATS/ondrodrak.json');
const client = new Discord.Client();
const fs = require('fs').promises;

// Function defining =>
function killBot( error ) {
	throw new Error(error);
}

function login() {
  client.login(config.token);
};

function commandConfirm( command, auid ) {
  console.log('Command operation, specifically' + ' ' + command + ' ' + 'completed succesfully, ran by user' + ' ' + auid);
};

// <= Function defining

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === config.prefix + 'ping') {
		message.channel.send('Pong!');
		commandConfirm('Ping Pong', message.author.id);
	}
});

client.on('message', message => {
	if (message.content === config.prefix + 'time') {
		var currentTime;
		currentTime = Date();
		message.channel.send('The current time is' + ' ' + currentTime);
		commandConfirm('Date display', message.author.id);
	}
});

// 
client.on('message', message => {
	if (message.content === config.prefix + 'id') {
		message.channel.send('Your UID is' + ' ' + message.author.id);
		commandConfirm('UID display', message.author.id);
	}
	else if (message.content === config.prefix + 'uid') {
		message.channel.send('Your UID is' + ' ' + message.author.id);
		commandConfirm('UID display', message.author.id);
	};
});


// KILL COMMAND - DOESN'T WORK PROPERLY, UNSTABLE!
client.on('message', message => {
	if (message.content === config.prefix + 'killbot') {
		messageContents = message;

		var killcmdAuthorID;
		var ondraAuthor;
	
		killcmdAuthorID = message.author.id;

		ondraAuthor = killcmdAuthorID.includes(config.ondraID);
		
		if (ondraAuthor === true) {
			message.channel.send('Attempting to send kill PID to NodeJS...');
			console.log('Attempting to send kill PID to NodeJS...');
			commandConfirm('Bot kill command', message.author.id);
			killBot( 'Bot killed' );
	};
};
});

login();

// Start the bot with "node ." or "node bot.js"
