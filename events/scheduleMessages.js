module.exports = {
  name: "interactionCreate",
  once: false,
  execute: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === "msg") {
      const channel = interaction.options.get("channel").channel;
      const message = interaction.options.get("message").value;
      const days = interaction.options.get("days").value;
      const hours = interaction.options.get("hours").value;
      const minutes = interaction.options.get("minutes").value;

      if (!message || !channel || !days || !hours || !minutes) {
        interaction.reply({
          content: "Fields not filled out correctly.",
          ephemeral: true,
        });
        return;
      }
      try {
        setTimeout(async () => {
          await Promise.resolve(channel.send(message));
        }, minutes * 60000 + hours * 1000 * 60 * 60 + days * 1000 * 60 * 60 * 24);
      } catch (error) {
        interaction.reply({
          content: `An error occurred while trying to send message: ${error.message}`,
          ephemeral: true,
        });
      } finally {
        interaction.reply({
          content: `Message scheduled to send in ${channel}`,
          ephemeral: true,
        });
      }
    }
  },
};
