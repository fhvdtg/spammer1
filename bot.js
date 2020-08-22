const Discord = require("discord.js");
const client = new Discord.Client();
var prefix ="!";
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

client.on("message", message => { if (message.content.startsWith(prefix + "test")) { message.channel.send("**EVERYTHING WORK** :white_check_mark:"); }});

client.on("ready", () => {
let BotOnline = client.channels.get("745991971973234729");// ايدي الروم
  
  let online = new Discord.RichEmbed()
    .setTitle('| ON')
    .setColor("GREEN")
  //.addField('Guilds Info', `Users: **${client.users.size}** \nChannels: **${client.channels.size}** \nGuilds **${client.guilds.size}** `)
 //  .addField('Some bot  Info', `Platform: **${process.platform}** \nAs.arch}** \nNode Version **${process.version}** \nPrefix **${prefix}**`) // process.platform
    .setTimestamp();
  BotOnline.send(online);

});

 
client.login(process.env.BOT_TOKEN);
