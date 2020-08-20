const Discord = require("discord.js");
const client = new Discord.Client();
var prefix ="-";
var adminprefix = '-'
const developers = ["436918120184021012"]

 client.on('ready', function(){
    var ms = 10000 ;
    var setGame = ['Dev: MrBloods','MrBloods'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/MrBloods`);
    }, ms);
console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> MrBloodsBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
});

client.on ("message" , message => {
  if(message.content === prefix + "count"){
  const embed = new Discord.RichEmbed()
  .setTitle(" Bot Server Count ")
  .setDescription(`im in [${client.guilds.size}] servers`)
  .setColor("#8A0808")
  message.channel.send(embed)
  }
});

dmBot.on("message", (message) => {
    
    
    if (message.channel.type === "dm") { 
        var args = message.content.split(" ").slice(0)
        var args = args.slice(0).join(" ")
        var BOT_ID = dmBot.user.id
        var userID = message.author.id
        if (message.content.startsWith(config.PREFIX)) return message.channel.send(":x: Please use commands in real server! :x:") 
        if (message.author.bot) return;
        message.channel.send("This message has been send to the staff! :incoming_envelope:").then(msg => msg.delete(3000))
        if (message.content.startsWith(config.PREFIX)) return
        if (args.length > 1024) return message.reply("Your message content too many characters (1024 Limit) :/") 
        var embed = new Discord.RichEmbed()
            .setColor(config.ORANGE)
            .setAuthor("New Message", "https://cdn.discordapp.com/attachments/502649544622735362/520740243133956138/receive.png")
            .addBlankField(true)
            .addField(`Sent by: ${message.author.username}`, 
            args)
            .addBlankField(true)
            .setTitle("*Message**:")
            .setFooter("This Message Was Sent By: " + message.author.username + " ", message.author.avatarURL)
            .setTimestamp()
        dmBot.guilds.get(config.SERVER_ID).channels.get(config.CHANNEL_ID).send(embed).catch(console.log(`Message recieved from ${userID}!(${message.author.username})`))
        dmBot.guilds.get(config.SERVER_ID).channels.get(config.CHANNEL_ID).send({embed: {
            "description": `${config.PREFIX}reply ${message.author.id} <message>`,
        }
    })
    }else
    
    
    if (message.content.startsWith(config.PREFIX + "reply")) {
        if (message.author.id !== config.YOUR_ID) return message.reply('You cannot use that!')
        var args = message.content.split(" ").slice(0)
        var Rargs = message.content.split(" ").slice(2).join(" ")
        var userID = args[1]
        if (isNaN(args[1])) return message.reply("This is not an ID! Make sure to you the user's ID!")
        var embed = new Discord.RichEmbed()
            .setColor(config.ORANGE)
            .setAuthor("New Message", "https://cdn.discordapp.com/attachments/502649544622735362/520740243133956138/receive.png")
            .addBlankField(true)
            .setDescription(Rargs)
            .addBlankField(true)
            .setTitle("**Message**:")
            .setFooter("This Message Was Sent By: " + message.author.username + " ", message.author.avatarURL)
        dmBot.users.get(userID).send(embed).catch(console.log(`Message was sent to ${userID}!`))
        if (message.author.bot) return;
        message.channel.send("Your Message was Sent!").then(msg => msg.delete(3000)).catch(console.error)

    }

});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
