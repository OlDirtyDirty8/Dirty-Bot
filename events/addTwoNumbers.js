module.exports = {
  name: "interactionCreate",
  once: false,
  execute: (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "add") {
      const num1 = interaction.options.get("num1").value;
      const num2 = interaction.options.get("num2").value;

      interaction.reply(`The sum is ${num1 + num2}.`);
    }
  },
};
