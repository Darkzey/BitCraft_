const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (client, message, args) => {
message.delete().catch(O_o=>{})
const perm = new Discord.RichEmbed()
.setTitle("📢 **|** Anúncio!")
.setDescription('Para usar este comando é necessário ser membro da STAFF!')
.setColor(`#FF0000`)
.setFooter('BitBot - Permissão')
if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply(perm);
const sayMessage = args.join(" ");
const embed = new Discord.RichEmbed()
.setTitle("📢 **|** Anúncio!")
.setDescription(sayMessage)
.setColor(`#FF0000`)
message.channel.send(embed); 
};
module.exports.help = {
name: "anuncio"
}