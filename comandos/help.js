const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{})
    let embed = new Discord.RichEmbed()
    .setTitle('Ajuda')
    .setDescription('Olá :) Seja bem-vindo(a) ao novo menu de ajuda do BitBot')
    .addField('Categorias:','**Online**, **Servidor** e **Outros**')
    .addField('Para ver os comandos reaja com:','🔓')
    .setColor(`#33FF33`) 
    message.author.send(embed).then(msg =>{
        msg.react("🔓")
        
    let filtro = (reaction, user) => reaction.emoji.name === "🔓" && user.id === message.author.id; //COLE O EMOJI DA REACTION AK 
    
    const coletor = msg.createReactionCollector(filtro, {max: 1, time: 60000}); //MÁXIMO DE REACTIONS PRA POR | TEMPO EM MILESEGUNDOS QUE O BOT RESPONDERÁ AO CLICAR

    coletor.on("collect", () => {
let embed = new Discord.RichEmbed()
.setTitle(' 🌎 Comandos Online 🌎')
.addField(' $site','**Veja o site do servidor**')
.addField(' $shop','**Veja a loja de VIPS do servidor**')
.addField(' $regras','**Veja as regras do servidor**')
.addField(' $sobre','**Veja crafts e informações do servidor**')
.setFooter(`BitBot - Comandos Online`)
.setColor(`#33FF33`) 
message.author.send(embed).then(msg =>{
    msg.react("👉")

        let filtro = (reaction, user) => reaction.emoji.name === "👉" && user.id === message.author.id; //COLE O EMOJI DA REACTION AK 
    
        const coletor = msg.createReactionCollector(filtro, {max: 1, time: 60000}); //MÁXIMO DE REACTIONS PRA POR | TEMPO EM MILESEGUNDOS QUE O BOT RESPONDERÁ AO CLICAR
   
        coletor.on("collect", () => {
        let embed = new Discord.RichEmbed()
        .setTitle('🗃 Comandos do Servidor 🗃')
        .addField(' $textura','**Realize o download das texturas**')
        .addField(' $ip','**Veja o IP do servidor**')
        .addField(' $sugestao', '**De sua idéia para o servidor/discord**') 
        .addField(' $equipe','**Veja os membros da Equipe do BitCraft (Discord-Servidor)**')
        .addField(' $yt','**Veja os requisitos para virar YouTuber do Servidor**')
        .setFooter(`BitBot - Comandos do Servidor`)
        .setColor(`#33FF33`) 
        message.author.send(embed).then(msg =>{
            msg.react("👉")

            let filtro = (reaction, user) => reaction.emoji.name === "👉" && user.id === message.author.id; //COLE O EMOJI DA REACTION AK 
    
            const coletor = msg.createReactionCollector(filtro, {max: 1, time: 60000}); //MÁXIMO DE REACTIONS PRA POR | TEMPO EM MILESEGUNDOS QUE O BOT RESPONDERÁ AO CLICAR
   
            coletor.on("collect", () => {
                let embed = new Discord.RichEmbed()
                .setTitle(' ⚙️ Outros Comandos ⚙️ ')
                .addField(' $ping','**Pong!**')
                .addField(' $beijar','**De um beijo em alguem**')
                .addField(' $bater','**De um soco em alguem**')
                .addField(' $matar','**De um tiro em alguem**')
                .addField(' $avatar','**Veja o avatar de algum player**')
                .setFooter(`BitBot - Outros Comandos`)
                .setColor(`#33FF33`) 
                message.author.send(embed)
              
              
              
            
            })

        })
        })
    })
    });

 });        
}

exports.help = {
    name: "help"
}
