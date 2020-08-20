const Discord = require("discord.js");
const client = new Discord.Client();
var prefix ="-";
var adminprefix = '-'
const developers = ["436918120184021012"]
const config = require("./config.json");

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

client.on("message", message => {
 
let time = message.content.split(" ").slice(1);

if(message.content.startsWith(prefix + `timer`))
{
message.channel.send("Alright Wait");

setTimeout(function() {
  return message.reply(`Time Up`);
  
}, time * 1000);
  
}});
client.on("message", message => {
  if (message.channel.type == "dm") {
    
    let embed = new Discord.RichEmbed()
    .setThumbnail(h.avatarURL)
    .setColor("#8A0808")
    .setTitle('New message !')
    .addField(`> **Message BY** : **${message.author.tag}**`)
    .addField(`> **ID** : **${message.author.id}**`)
    .addField('> **Message** :' ,'${message.content}')
    .setFooter(`**MrBloods System,**`)
    client.channels.get('745973221823610920').send(embed);
   
}});

client.on("ready", () => {
let BotOnline = client.channels.get("745991971973234729");// ايدي الروم
  
  let online = new Discord.RichEmbed()
    .setTitle('| ON')
    .setColor("GREEN")
  //.addField('Guilds Info', `Users: **${client.users.size}** \nChannels: **${client.channels.size}** \nGuilds **${client.guilds.size}** `)
 //  .addField('Some bot  Info', `Platform: **${process.platform}** \nArch **${process.arch}** \nNode Version **${process.version}** \nPrefix **${prefix}**`) // process.platform
    .setTimestamp();
  BotOnline.send(online);

});

client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .send(
                " " +
                  "
fix\n" +
                  messagesDeleted +
                  " " +
                  "Number of messages that I cleared: " +
                  "
"
              )
              .then(m => m.delete(5000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .send(
              " " +
                "
fix\n" +
                args[1] +
                " " +
                "Number of messages that I cleared: " +
                "
"
            )
            .then(m => m.delete(5000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES :(")
          .setColor("#8A0808");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
