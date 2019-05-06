const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === '!spam') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`سباام يولد يلعن اومم الفله ${x}`)
              .then(m => {
                count++;
              })
              
            }
          }
    });

client.on('message', message => { 
    if(message.content.startsWith('!say')) { 
    let args = message.content.split(' ').slice(1); 
    let ar = args.join(' '); 

    message.channel.send(ar,{tts:true});
} 
});

client.login(process.env.TOKEN);// لا تغير فيها شيء