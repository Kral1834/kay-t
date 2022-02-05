const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


        const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor("Cyrix Bot")
        .setDescription(`!kayıt`)
        
        message.reply({embeds: [embed]})


},

name: "",
description: "",
aliases: [],
kategori: "",
usage: "",
}