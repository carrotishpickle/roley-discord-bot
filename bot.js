const Discord = require('discord.js');
const config = require('./configfiles/config.json');
const stats = require('./configfiles/KARLSON/STATS/ondrodrak.json');
const client = new Discord.Client();
const fs = require('fs').promises;

// Function defining =>
function login() {
  client.login(config.token);
};

function commandConfirm() {
  console.log('Command operation completed succesfully');
};
// <= Function defining
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === config.prefix + 'ping') {
		message.channel.send('Pong!');
		commandConfirm();
	}
});

// KARLSON STATS >>>>>
/* client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  if (command === )
*/
client.on('message', message => {
	if (message.content === config.prefix + 'time') {
		var currentTime;
		currentTime = Date();
		message.channel.send('The current time is' + ' ' + currentTime);
		commandConfirm();
	}
});

client.on('message', message => {
	if (message.content === config.prefix + 'id') {
		var authorID;
		authorID = message.author.id;
		message.channel.send('Your UID is' + ' ' + authorID);
		commandConfirm();
	}
});

client.on('message', message => {
  if (message.content === config.prefix + 'permainvite') {
    message.channel.send(config.permaInvite);
    commandConfirm();
  }
});

client.on('message', message => {
  if (message.content === config.prefix + 'uid') {
    message.channel.send(message.author.id);
    commandConfirm();
  }
});

function ondraAuthorCheck() {
	
};

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
	};
};
});

login();

// Start the bot with "node ." or "node bot.js"