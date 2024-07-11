const { GuildMember, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  once: false,
  execute: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "unmute") {
      const user = interaction.options.get("user").user;
      const message = `You have been unmuted in ${interaction.guild.name}.`;
      const role = interaction.guild.roles.cache.find(
        (role) => role.name === "Muted"
      );

      if (!role) {
        interaction.reply({
          content: "This role does not exist.",
          ephemeral: true,
        });
        return;
      }

      // Check if the user has the required roles (insert desired role ids)
      if (
        !interaction.member.roles.cache.some(
          (role) =>
            role.name === "ElCapitain" ||
            role.name === "Franchise Manager" ||
            role.name === "General Manager" ||
            role.name === "Assistant GM" //role.id === "794000103383629864" //|| role.id === "806929126392201217"
        )
      ) {
        interaction.reply({
          content: "You do not have permission to use this command.",
          ephemeral: true,
        });
        return;
      }
      try {
        await interaction.guild.members.cache.get(user.id)?.roles.remove(role);
        await user.send(message);
        interaction.reply(`Successfully unmuted <@${user.id}>.`);
      } catch (error) {
        interaction.reply({
          content: `An error occurred while trying to unmute ${user.username}: ${error.message}`,
          ephemeral: true,
        });
      }
    }
  },
};
