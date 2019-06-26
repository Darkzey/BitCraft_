const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (client, message, args) => {
message.delete().catch(O_o=>{})
const embed= new Discord.RichEmbed()
.setTitle ('Equipe do BitCraft')
.addField ('Slipstriker','👑 **D**ono 👑')
.addField ('Lobodosgames','👮‍ **M**oderador 👮‍')
.addField ('0Stop','👮‍ **M**oderador 👮‍')
.setColor(`#FF0000`)
message.author.send(embed)
};
module.exports.help = {
name: "equipe"
}