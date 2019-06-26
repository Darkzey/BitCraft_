const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (client, message, args) => {
message.delete().catch(O_o=>{})
const embed= new Discord.RichEmbed()
.setTitle(`**Para usar nossas texturas, realize o downloads delas: **`)
.addField(`🎇Textura do **BitCraft**`,`http://bit.ly/BitCraftv5-0`)
.addField(`🎇Magic **1.12**`,`http://bit.ly/Textura-Magias`)
.addField(`**Para usar a textura BitCraft, use OPTFINE**`,`Obs: Os links são seguros`)
.addField(`**É possivel jogar utilizando ambas juntas!**`,`**Para isso, use nessa ordem:**`)
.setImage('https://cdn.discordapp.com/attachments/544692788214628352/546752051930071052/unknown.png')
.setColor(`#33FF33`) 
message.author.send(embed)
}
module.exports.help = { 
name: "textura"
}