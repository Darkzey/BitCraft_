const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 
const cooldown = new Set();


function changing_status() {
  let status = ['Use $help','BitCraft BOT','BITCRAFT.REIS.HOST']
  let random = status[Math.floor(Math.random() * status.length)]
  client.user.setActivity(random)
}
client.on("ready", () => {
  console.log( '📣| A atividade foi alterada automaticamente!' );  
  setInterval(changing_status, 64000);
})

client.on("ready", () => {
  console.log(`📣| O BitBot acaba de ser iniciado!`); 
});

client.on("guildCreate", guild => {
  console.log(`📣| Acabo de ser adicionado ao servidor: ${guild.name} Com ${guild.memberCount} players!`);
});

client.on("guildDelete", guild => {
  console.log(`📣| Não estou mais no servidor: ${guild.name}`);
});

client.on("ready", () => {                                  
  console.log('Aviso enviado [Online]');
  const embed = new Discord.RichEmbed()
  .setTitle('Registro')
  .setDescription('📢>> **Estou Online novamente :) **')
  client.channels.get("553693285185748992").send(embed)
});

client.on("guildMemberAdd", member => {
  console.log(`👤 ++ @${member.id} entrou!`)
})

client.on("guildMemberRemove", member => {
  console.log(`👤 -- @${member.id} saiu!`)
})

client.on("guildMemberAdd", member => {
  console.log(`📣 Mensagem enviada> Bem-Vindo ${member.user.tag}`)
  const embed = new Discord.RichEmbed()
  .setAuthor(`${member.user.tag}`, member.user.avatarURL)
  .setTitle(`👋 Bem-vindo(a) ao BitCraft!!`)
  .setDescription(`:point_right: Olá <@${member.user.id}>, para jogar em nosso servidor, use o seguinte IP: **BITCRAFT.REIS.HOST** na versão **1.12.2!**`)
  .setFooter(`ID do Usuário: ${member.user.id}`)
  .setThumbnail(member.user.avatarURL)
  .setColor(`#3333CC`)
  client.channels.get("538509053438197762").send(embed)

})

client.on("guildMemberRemove", member => {
  console.log(`📣 Mensagem enviada> Adeus ${member.user.tag}`)
  const embed = new Discord.RichEmbed()
  .setAuthor(`${member.user.tag}`, member.user.avatarURL)
  .setTitle(`😭 Adeus :( Esperamos que volte logo!`)
  .setDescription(`👈 <@${member.user.id}> saiu do servidor! **Adeus**`)
  .setFooter(`ID do Usuário: ${member.user.id}`)
  .setThumbnail(member.user.avatarURL)
  .setColor(`#333333`)
  client.channels.get("538509053438197762").send(embed)

})

client.on("guildMemberBan", member => {
  console.log(`📣 Mensagem enviada> Adeus ${member.user.tag}`)
  const embed = new Discord.RichEmbed()
  .setAuthor(`${member.user.tag}`, member.user.avatarURL)
  .setTitle(`😭 Adeus :( Esperamos que volte logo!`)
  .setDescription(`👈 <@${member.user.id}> foi banido do servidor! **Adeus**`)
  .setFooter(`ID do Usuário: ${member.user.id}`)
  .setThumbnail(member.user.avatarURL)
  .setColor(`#333333`)
  client.channels.get("538509053438197762").send(embed)

})

var prefix = config.prefix || "$" 
client.on("message", message => {
  if (message.author.bot) return; 
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0]; 
  command = command.slice(prefix.length); 
 
  let args = message.content.split(" ").slice(1); 
  try { 
    let commandFile = require(`./comandos/${command}.js`); 
    commandFile.run(client, message, args, ); 
  } catch (err) { 
    console.error(`Erro ao abrir um comando!`); 
  
  }
});

client.login(config.token);


