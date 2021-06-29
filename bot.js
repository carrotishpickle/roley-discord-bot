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
// <<< ON START

client.once('ready', () => {
    client.user.setActivity('with my human friends',{type: 'PLAYING'});
});

client.on('message', message => {
	if (message.content === config.prefix + 'help') {
		message.reply('Seznam příkazů: \n **=help**, vrátí všechny možné příkazy. \n **=ping**, vrátí odpověď "Pong!" \n **=time**, vrátí čas a datum \n **=uid** nebo **=id**, vrátí tvé uživatelské Discord ID \n **=pinvite**, vrátí stálý invite link do serveru \n **=killbot**, ukončí bota, **pouze pro majitele bota** \n *aktuální prefix je' + ' ' + config.prefix + '.')
	}
});


client.on('message', message => {
	if (message.content === config.prefix + 'github') {
		message.reply('GitHub Repo najdeš na\n' + config.repo + ' ' + 'a **BETA** branch najdeš na\n' + config.repobeta);
	}
});

client.on('message', message => {
	if (message.content === config.prefix + 'pinvite') {
		message.channel.send('Toto je stálý invite link, @<' + message.author.id + '>:\n' + config.permaInvite);
	};
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

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	var args = message.content.slice(config.prefix.length).trim().split(' ');
	var command = args.shift().toLowerCase();

	if (command === 'argumenty') {
		if (!args.length) {
			return message.channel.send (`Nepopsal jsi žádné argumenty!`);
		} else if (args[0] === 'bruh') {
			return message.channel.send('bruuh');
		}

		message.channel.send(`První argument: ${args[0]}`);
	}
});

/*
client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`First argument: ${args[0]}`);
	}
});

*/

/*
// WORD FILTER BETA
client.on('message', message => {
	var includeAnalyseVar;
	includeAnalyseVar = message.content;
	if (includeAnalyseVar.includes('frick')) {
		message.content.delete;
	}
});
*/

login();
// Start the bot with "node ." or "node bot.js"
