const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (client, message, args) => {
message.delete().catch(O_o=>{})
const embed = new Discord.RichEmbed()
.setTitle('**Sobre**')
.setDescription('https://bitcraft.buycraft.net/eventos')
.setColor(`#FF0000`)  
message.author.send(embed)
}
module.exports.help = {
    name: "eventos"
    }