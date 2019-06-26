const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{})
    const perm = new Discord.RichEmbed()
    .setTitle("**Staff**")
    .setDescription('Para usar este comando é necessário ser membro da STAFF!')
    .setColor(`#FF0000`)
    .setFooter('BitBot - Permissão')
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply(perm);

    message.delete().catch(O_o=>{})
    let embed = new Discord.RichEmbed()
    .setTitle('Comandos - Staff')
    .setDescription('Olá :) Seja bem-vindo(a) ao novo menu de ajuda do BitBot para Staffs')
    .addField('Categorias:','**Diversos** e **Punições**')
    .addField('Para ver os comandos reaja com:','🗝')
    .setColor(`#FF0000`)  
    message.author.send(embed).then(msg =>{
        msg.react("🗝")
        
    let filtro = (reaction, user) => reaction.emoji.name === "🗝" && user.id === message.author.id; 
    
    const coletor = msg.createReactionCollector(filtro, {max: 1, time: 60000});

    coletor.on("collect", () => {
let embed = new Discord.RichEmbed()
.setTitle(' 🔒 Comandos Diversos 🔒')
.addField(' $anuncio','**Faça um anuncio usando a conta do BitBot**')
.addField(' $fake','**Simule uma mensagem de um player**')
.addField(' $limparchat','**Limpe o chat**')
.addField(' $divulgador','**Veja quantas vezes o convite de um membro foi usado**')
.addField(' $servidores','**Veja minha lista de servidores**')
.setFooter(`BitBot - Comandos Diversos - Staff`)
.setColor(`#FF0000`)  
message.author.send(embed).then(msg =>{
    msg.react("👉")

        let filtro = (reaction, user) => reaction.emoji.name === "👉" && user.id === message.author.id; //COLE O EMOJI DA REACTION AK 
    
        const coletor = msg.createReactionCollector(filtro, {max: 1, time: 60000}); //MÁXIMO DE REACTIONS PRA POR | TEMPO EM MILESEGUNDOS QUE O BOT RESPONDERÁ AO CLICAR
   
        coletor.on("collect", () => {
        let embed = new Discord.RichEmbed()
        .setTitle('🔒 Comandos de punição 🔒')
        .addField(' Atenção!','**Estes comandos estão em manutenção, tente novamente mais tarde :)**')
        .setFooter(`BitBot - Comandos de punição`)
        .setColor(`#FF0000`)  
        message.author.send(embed)
        

        })
    })
    });

 });        
}

exports.help = {
    name: "staff"
}
