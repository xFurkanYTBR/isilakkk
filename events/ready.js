const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const api = 'sadasdasd';


module.exports = client => {
    snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
    client.user.setStatus("online");
    var Games = [

        "》〖 уєηι кσ∂ ∂!мcвαѕαяι νє ∂!ємσנιуαzι !! 〗《",
        `》〖  ≪ ∂!уαя∂ιм ≫ ${client.users.size} кυℓℓαηıcı, ${client.guilds.size} ѕυηυcυ ≪ ∂!уαя∂ιм ≫  〗《`,
        "》〖 уєηι кσ∂! ∂üєℓℓσ. кυℓℓαηıмı ∂!∂üєℓℓσ [@кυℓℓαηıcı] 〗《",
        "》〖 ∂!уαя∂ιм | " + client.guilds.size + " ѕυηυcυ " + client.users.size + " кυℓℓαηıcı'уα нιzмєт νєяιуσяυz! 〗《",

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/xfurkanytb");
        }, 2 * 2500);

};