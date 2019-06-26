const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = (client, message, args) => {
message.delete().catch(O_o=>{})
let user = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let avatar = user.displayAvatarURL
    if (avatar.endsWith(".gif")) {
      avatar = `${user.displayAvatarURL}?size=3096`
    }
    message.channel.send({embed: {
      title: `🖼 Avatar`,
      description: `[Avatar de ${user.tag}] ${avatar}`,
      image: {url: `${avatar}`},
      color: 0X660066
    }})
}
    module.exports.help = {
        name: "avatar"
        }