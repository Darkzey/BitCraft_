const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{})
    const perm = new Discord.RichEmbed()
    .setTitle("**Fake**")
    .setDescription('Para usar este comando é necessário ser membro da STAFF!')
    .setColor(`#FF0000`)
    .setFooter('BitBot - Permissão')
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply(perm);
    try {
let user;

if (message.mentions.users.first()) {
  user = message.mentions.users.first();
  
} else if(args[0]) {
    user = client.users.get(args[0]);

}
let botmessage = args.slice(1).join(' ')
if (args[0] == null) {return message.channel.send(`${message.author}, **qual usuário você quer usar?**`)}


if (args[1] == null) {return message.channel.send(`${message.author}, **oque você quer que eu diga?!**`)}
message.channel.createWebhook(user.username, user.avatarURL).then(w => {
    w.send(botmessage);
    w.delete();
})

} catch (err) {
message.reply('**O comando pode estar desativado neste servidor!**')
}
}