const Discord = require('discord.js');
const config = require('./configfiles/config.json');
const client = new Discord.Client();

function botStatus(statusText, type) { // PLAYING, STREAMING, LISTENING
    client.once('ready', () => {
        client.user.setActivity(statusText,{type: type});
    });    
} 

module.exports = {botStatus};
