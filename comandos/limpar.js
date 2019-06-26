module.exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{})
    const perm = new Discord.RichEmbed()
    .setTitle("**Limpar chat**")
    .setDescription('Para usar este comando é necessário ser membro da STAFF!')
    .setColor(`#FF0000`)
    .setFooter('BitBot - Permissão')
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply(perm);
    let mensagemDeletar = args.slice(0).join(" ");
    if(mensagemDeletar < 2 || mensagemDeletar > 100) message.reply('Você só pode limpar de 2 a 100 mensagens.');
    if(args.lengt === 0) return message.reply('Use $limpar (Número de mensages) para o comando funcionar corretamente!');
    if(isNaN(args[0])) return message.reply('Você deve colocar um número.');

    try {
        message.channel.bulkDelete(mensagemDeletar)
    } catch (e) {
        console.log(e);
    }
}

exports.help = {
    name: "limpar"
}