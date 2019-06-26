const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
message.delete().catch(O_o=>{})
const perm = new Discord.RichEmbed()
.setTitle("**Divulgador**")
.setDescription('Para usar este comando é necessário ser membro da STAFF!')
.setColor(`#FF0000`)
.setFooter('BitBot - Permissão')
if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply(perm);
    
    var user = message.mentions.users.first();

    if (!user) user = message.author;

    var targetInvites = await message.guild.fetchInvites();

    var invitesUses = 0;

    targetInvites.forEach(invite => {
        if (invite.inviter.id === user.id) {
            invitesUses += invite.uses;
          }
    });

    var embed = new Discord.RichEmbed()
    .setThumbnail(user.displayAvatarURL)
    .setTitle('📢 Divulgador')
    .addField(`Usuário >`,`**<@${user.id}>**`)
    .addField(`Convidados > `, `${invitesUses} **Membros**`)
    .setColor(`#FF0000`)
    .setFooter(`ID : ${user.id}`)
    .setTimestamp();

    message.channel.send(embed).then(msg => msg.delete(250000));
};
module.exports.help = {
    name: "divulgador"
}