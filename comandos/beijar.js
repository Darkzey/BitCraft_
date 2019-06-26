const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
message.delete().catch(O_o=>{})
let user = message.mentions.users.first();
  if(!user) return message.channel.send('Você precisa mencionar alguém para beijar!');
  let embed = new Discord.RichEmbed()
  .setColor(`#FF0000`)
  .setTitle(`💖 Amor no ar 💖 `)
  .addField(`${message.author.username} **deu um beijo em** ${user.username}`,`** ❤️  Que casal fofo! ❤️  **`)
  .setImage(`https://media1.tenor.com/images/731cb4f70f11da4af5b6c39bdcf7f1ca/tenor.gif?itemid=5115277`)   
message.channel.send(embed)
}
module.exports.help = {
    name: "beijar"
    }