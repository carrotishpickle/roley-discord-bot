function botStatus(statusText, type) { // PLAYING, STREAMING, LISTENING
    client.once('ready', () => {
        client.user.setActivity(statusText,{type: type});
    });    
} 

module.exports = {botStatus};
