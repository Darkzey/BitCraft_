const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (client, message, args) => {
if(message.channel.id != '541660672719847441') 
return message.channel.send('**Este comando está bloqueado aqui! Use em <#541660672719847441>**')
message.delete().catch(O_o=>{})
const sayMessage = args.join(" ");
const embed = new Discord.RichEmbed()
.setTitle("sᴜɢᴇsᴛᴀᴏ")
.setDescription(sayMessage)
.setFooter(message.author.tag, message.author.displayAvatarURL)
.setColor(`#6699FF`)
message.channel.send(embed).then(msg => {
  msg.react("✅").then(r => msg.react("❌"))
 .then(reaction => console.log(typeof reaction));
})
};
module.exports.help = {
    name: "sugestao"
    }
    