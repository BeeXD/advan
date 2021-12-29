const Discord = require("discord.js");
module.exports.run = client => {
	client.user.setActivity('Made by BEE');
// ----------------------------------------------------------------------------------
console.log(`Logged in as ${client.user.tag}!`.bgBlue.black)
console.log(`Discord.js Version: ${Discord.version}`.bgWhite.black)
console.log(`Node.js Version: ${process.version} `.bgYellow.black);
};
