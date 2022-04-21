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

  switch (commandName) {
    case "sayhi":
      await interaction.reply("What up!");
      break;

    default:
      break;
  }
});
