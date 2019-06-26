const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{})
   const embed= new Discord.RichEmbed()
   .setTitle('ʙɪᴛᴄʀᴀғᴛ ɪᴘ')
   .addField(`**Nosso ip é**`,`**BITCRAFT.REIS.HOST - 1.12.2**`)
   .setColor(`#000099`)
   message.author.send(embed)
 }
 module.exports.help = {
    name: "ip"
    }
    