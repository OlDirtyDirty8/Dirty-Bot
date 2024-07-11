require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const path = require("node:path");
const fs = require("node:fs");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.DirectMessageReactions,
    IntentsBitField.Flags.GuildVoiceStates,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.GuildIntegrations,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.DirectMessageReactions,
    IntentsBitField.Flags.DirectMessageTyping,
  ],
});

client.on("ready", (c) => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(process.env.token);
