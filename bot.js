const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log('hello');
    client.user.setGame('Spammare Yoshi');
});

client.on("guildCreate", guild => {
    console.log('santa maria')
    client.user.setActivity('bocchin a mammt')
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    const args = message.content.slice(config.prefix.lenght).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if(comando === "ping") {
        const m = await message.channel.send("ping?");
        m.edit('pong!');
    }
});
client.login(config.token)