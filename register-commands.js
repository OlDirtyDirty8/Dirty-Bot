require("dotenv").config();
const {
  REST,
  Routes,
  Options,
  ApplicationCommandOptionType,
} = require("discord.js");

const commands = [
  {
    name: "add",
    description: "Add two numbers",
    options: [
      {
        name: "num1",
        description: "The first number",
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
      {
        name: "num2",
        description: "The second number",
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
  },
  {
    name: "mute",
    description: "Mute a member",
    options: [
      {
        name: "user",
        description: "The user to mute",
        type: ApplicationCommandOptionType.User,
        required: true,
      },
      {
        name: "time",
        description: "The number of minutes to mute them for",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "reason",
        description: "The reason for the mute",
        type: ApplicationCommandOptionType.String,
        required: false,
      },
    ],
  },
  {
    name: "msg",
    description: "Schedule a message",
    options: [
      {
        name: "channel",
        description: "The channel to send the message in",
        type: ApplicationCommandOptionType.Channel,
        required: true,
      },
      {
        name: "message",
        description: "The message to send",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "days",
        description: "How many days to send the message",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "hours",
        description: "How many hours to send the message",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "minutes",
        description: "How many minutes to send the message",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
  },
  {
    name: "unmute",
    description: "Unmute a member",
    options: [
      {
        name: "user",
        description: "The user to unmute",
        type: ApplicationCommandOptionType.User,
        required: true,
      },
    ],
  },
  {
    name: "poll",
    description: "Create a poll",
    options: [
      {
        name: "title",
        description: "The title for the poll",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "choice1",
        description: "The first answer choice for the poll",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "choice2",
        description: "The second answer choice for the poll",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "choice3",
        description: "The third answer choice for the poll",
        type: ApplicationCommandOptionType.String,
        required: false,
      },
      {
        name: "choice4",
        description: "The fourth answer choice for the poll",
        type: ApplicationCommandOptionType.String,
        required: false,
      },
      {
        name: "choice5",
        description: "The fifth answer choice for the poll",
        type: ApplicationCommandOptionType.String,
        required: false,
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.token);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.Client_ID,
        process.env.Guild_ID
      ),
      { body: commands }
    );
    console.log("Slash commands registered!");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
