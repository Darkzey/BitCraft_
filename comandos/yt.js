const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (client, message, args) => {
message.delete().catch(O_o=>{})
const embed = new Discord.RichEmbed()
.setTitle('Tag YT')
.setDescription('Gostaria de ser YT do nosso servidor?')
.addField('**Requisitos**','★ Tag @YT  500 Incritos e 1 video semanal e um FeedBack Bom')
.addField('★ Tag @YTJ  100 Inscritos e 1 video semanal e um FeedBack Bom','★ Ganha a Tag apos postar o primeiro video')
.addField('➣ Possui estes requisitos?','Entre em contato com <@312352313694093312>!')
.setColor(`#FF0000`)  
message.author.send(embed)
}
module.exports.help = {
    name: "yt"
    }