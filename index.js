const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.on("ready", () => console.log("Stand is Ready!"));

client.login(token);
