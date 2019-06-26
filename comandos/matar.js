const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
message.delete().catch(O_o=>{})
let user = message.mentions.users.first();
  if(!user) return message.channel.send('Você precisa mencionar alguém para matar1!');
  let embed = new Discord.RichEmbed()
  .setColor(`#FF0000`)
  .setTitle(` 👮‍ E morreu 👮‍ `)
  .addField(`${message.author.username} **deu um tiro em** ${user.username}`,`** 🤔 Acho que morreu! 🤔 **`)
  .setImage(`https://media1.tenor.com/images/57057bb47b554837751f01b4999e04a8/tenor.gif?itemid=7621383`)   
message.channel.send(embed)
}
module.exports.help = {
    name: "matar"
    }