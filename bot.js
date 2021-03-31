const Discord = require('discord.js');
const config = require('./configfiles/config.json');
const client = new Discord.Client();
const fs = require('fs').promises;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === config.prefix + 'ping') {
		message.channel.send('Pong!');
		commandConfirm();
	}
});

client.on('message', message => {
	if (message.content === config.prefix + 'time') {
		var currentTime;
		currentTime = Date();
		message.channel.send('The current time is' + ' ' + currentTime);
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
})
login();
// Start the bot with "node ." or "node bot.js"
