const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Add as much if statements as you want. Placing an example.
  if (message.content === 'ping') {
    message.channel.send('pong')
  }
  //if (message.content === 'ding') {
  // message.channel.send('dong')
//  }
});

client.login('YOUR_BOT_TOKEN');
//            ^^^^^^^^^^^^^^
// Add your bot token up there
// Add these packages:
// discord.js, express
