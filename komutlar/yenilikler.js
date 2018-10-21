const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('özєℓ мєѕαנℓαяıηı кσηтяσℓ єт. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('ι̇şтє уєηℓιкℓєяιм!: \n..нανα∂υяυмυ = уαz∂ıgıηız şєнιяιη нανα ∂υяυмυηυ göѕтєяιя! \n..мcвαѕαяι = мcвαѕαяι тιριη∂є уαzαя!! \n..ємσנιуαzι = уαz∂ıgıηız нєяşєуι ємσנιℓι αтαя! ');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni', 'yenilik', 'yenilikler', 'news'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Botun yenilik geçmişini gönderir.',
  usage: 'yenilikler'
};
