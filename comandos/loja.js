const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (client, message, args) => {
message.delete().catch(O_o=>{})
const embed = new Discord.RichEmbed()
.setTitle('**Loja**')
.setDescription('https://bitcraft.buycraft.net/category/1347881')
.setColor(`#FF0000`)  
message.author.send(embed)
}
module.exports.help = {
    name: "loja"
    }