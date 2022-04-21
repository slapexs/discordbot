const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { token, clientId, guildId } = require("./config.json");

const commands = [
  new SlashCommandBuilder()
    .setName("sayhi")
    .setDescription("Say hi with me free WiFi"),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), {
    body: commands,
  })
  .then(() => {
    console.log("Deploy command successful!");
  })
  .catch(console.error);
