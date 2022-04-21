const { Client, Intents, Interaction } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.on("ready", () => console.log("Stand is Ready!"));

client.login(token);

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand) return;

  const { commandName } = interaction;

  if (commandName === "sayhi") {
    await interaction.reply("What up!");
  } else if (commandName === "serverinfo") {
    await interaction.reply(`ชื่อเซิร์ฟเวอร์ : ${interaction.guild.name}
    สมาชิกทั้งหมด: ${interaction.guild.memberCount}`);
  }
});
