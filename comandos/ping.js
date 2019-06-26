const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{})
    let botping = new Date() - message.createdAt;

    let Embed = new Discord.RichEmbed()
        .setTitle("🏓 Pong!")
        .addField('BOT: ', Math.floor(botping) + 'ms')
        .addField('API: ', Math.floor(bot.ping) + 'ms')
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM").setTimestamp()

        message.author.send(Embed);
}

module.exports.help = {
    name: "ping"
}