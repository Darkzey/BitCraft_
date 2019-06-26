const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{})
    const perm = new Discord.RichEmbed()
    .setTitle("**ServerInfo**")
    .setDescription('Para usar este comando é necessário ser membro da STAFF!')
    .setColor(`#FF0000`)
    .setFooter('BitBot - Permissão')
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply(perm);

    const moment = require("moment")
    moment.locale("pt-BR")
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    let bot = message.guild.members.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    let cargos = message.guild.roles.map(a => a).join(", ")
        const embed = new Discord.RichEmbed()
        .setTitle(`Informações do servidor **${message.guild.name}**`)
        .setColor("#0051FF")
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        .addField('👑 Dono:', ` <@${message.guild.owner.id}> `)
        .addField(`️💬 Canais [${canaistexto+canaisvoz}]`, ` 📝 Texto: ${canaistexto}\n  🗣 Voz: ${canaisvoz}`)
        .addField('️🗓 Criado em', moment(message.guild.createdAt).format('LLLL'))
        .addField('️☀️ Entrei em', moment(client.joinedAt).format('LLLL'))
        .addField("💻 ID:", message.guild.id)
        .addField(`️👥 Membros: [${totalmembros}]`, `💚 Online: ${online} | 💛 Ausente: ${ausente} | ❤️ Ocupado: ${ocupado} | 🖤 Offline: ${offline} | 🤖 Bots: ${bot}`)
        .addField(`️📋 Cargos`,`[${message.guild.roles.size}]`)
        .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
        message.channel.send(embed)
}

module.exports.help = {
    name: "serverinfo"
}