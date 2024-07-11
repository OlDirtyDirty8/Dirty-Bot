const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  once: false,
  execute: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === "poll") {
      const title = interaction.options.get("title").value;
      const choice1 = interaction.options.get("choice1").value;
      const choice2 = interaction.options.get("choice2").value;
      const choice3 = interaction.options.get("choice3")?.value;
      const choice4 = interaction.options.get("choice4")?.value;
      const choice5 = interaction.options.get("choice5")?.value;

      if (!title || !choice1 || !choice2) {
        interaction.reply({
          content: "Fields not filled out correctly.",
          ephemeral: true,
        });
        return;
      }

      try {
        const channel = interaction.channel;
        const options = [choice1, choice2, choice3, choice4, choice5].filter(
          Boolean
        );
        const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];

        let embed = new EmbedBuilder().setTitle(title).setColor("Random");

        for (let i = 0; i < options.length; i++) {
          let option = options[i];
          embed.addFields({
            name: `${emojis[i]} ${option}`,
            value: " ",
          });
        }

        const message = await channel.send({ embeds: [embed] });

        for (let i = 0; i < options.length; i++) {
          let emoji = emojis[i];
          await message.react(emoji);
        }
      } catch (error) {
        console.error("Error creating poll:", error);
        interaction.reply({
          content: "An error occurred while creating the poll.",
          ephemeral: true,
        });
      }
    }
  },
};
