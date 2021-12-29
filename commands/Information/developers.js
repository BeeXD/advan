const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "developers",
    aliases: ["dev", "creator"],
    description: "Shows The Developers Of Economy Bot",
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
        .setAuthor(`Economy Bot Developers`)
        .setDescription(
`
\u200b
<:BadgeEarlyVerifiedBotDeveloper:925657704645660703>  [\`Bee\`](https://discord.com/users/745199026021859338)
\u200b
`
)
.setFooter(`Thanks For Using ${client.user.username}.`, client.user.displayAvatarURL())
.setColor(`#303037`)
message.channel.send({ embeds: [embed] })

    }
}