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

 client.on("message", message => {
  if (message.channel.type == "dm") {
    
    let embed = new Discord.RichEmbed()
    .setColor("#8A0808")
    .setTitle('New message !')
    .setDescription(`> **Message BY** : **${message.author.tag}**`)
    (`> **ID** : **${message.author.id}**`)
    (`> **Message** : ${message.content}`)
    .setFooter(`MrBloods Bot`)
    client.channels.get('745973221823610920').send(embed);
   
}});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
