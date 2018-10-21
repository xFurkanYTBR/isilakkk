const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("__**Darq* **__**Eğlence ve Kullanıcı Komutları:**", `d!banned = Dene ve Gör! \n__**YENİ!!**__  d!havadurumu = Yazdıgınız Şehirin Hava Durumunu Gösterir! \nd!muzum = Muzun Kaç Cm Onu Gçsterir xD! \n__**YENİ!!**__  d!mcbasari = McBasari Tipinde YAZAR!! \nd!avatarım = Avatarınınızı Gösterir.\nd!ortaparmak = Orta Parmak GİF Atar.\n__**YENİ!!**__  d!emojiyazi = Yazdıgınız Herşeyi Emojili Atar! \nd!windows = Windows 10 GİF Atar. \nd!youtube = Bot Sahibinin Youtube Kanalını Atar. \nd!herkesebendençay = Herkese Çay Alırsınız. \nd!koş = Koşarsınız.\nd!çayiç = Çay İçersiniz. \n__**YENİ!!**__  d!yenilikler = Bota Gelen Yeni Komutları Vs Gösterir! (Yenilik Geçmişi) \nd!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nd!çayaşekerat = Çaya Şeker Atarsınız. \nd!yumruh-at = Yumruk Atarsınız. \nd!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nd!sunucuresmi = BOT Sunucunun Resmini Atar. \nd!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nd!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("__**Darq* **__**Sunucu Yetkilisi Komutları**", `d!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nd!uyar  = İstediniz Kişiyi uyarırsınız #mod-log kanalı oollması lazm \nd!kilit  = İstediniz Kanalı Kilitler! \nd!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nd!unban = İstediğiniz Kişinin Yasağını Açar. \nd!sustur = İstediğiniz Kişiyi Susturur. d!MUTEDd! \nd!oylama = Oylama Açar. \nd!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("__**Darq* **__**Botun Ana Komutları**", "d!yardım = BOT Komutlarını Atar. \nd!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nd!tavsiye = Botun sahibine verdiğiniz tavsiyeyi gönderir. \nd!ping = BOT Gecikme Süresini Söyler. \nd!davet = BOT Davet Linkini Atar. \nd!istatistik = BOT İstatistiklerini Atar.")
  .addField("**BOT Yapımcı Komutları:**", "-'-'-'--'-'-'--'-'-'--'-'-'--'-'-'--'-'-'-")
  .setFooter('**Bu Bot Furkan Işılak Tarafından Yapılmıştır.**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
