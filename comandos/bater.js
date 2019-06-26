const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
message.delete().catch(O_o=>{})
let user = message.mentions.users.first();
  if(!user) return message.channel.send('Você precisa mencionar alguém para bater!');
  let embed = new Discord.RichEmbed()
  .setColor(`#FF0000`)
  .setTitle(`🤜 É TRETAAAA 🤛 `)
  .addField(`${message.author.username} **deu um soco em** ${user.username} **BRIGAAAAA**`,`** 👊 Até eu senti esse soco eim? 👊 **`)
  .setImage(`https://media1.tenor.com/images/571dca3203ceb49ec998da1b8dd31fe4/tenor.gif?itemid=10545347`)   
message.channel.send(embed)
}
module.exports.help = {
    name: "bater"
    }