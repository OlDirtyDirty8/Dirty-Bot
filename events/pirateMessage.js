module.exports = {
  name: "messageCreate",
  once: false,
  execute: (message) => {
    const messages = [
      "ARGH! It's a pirate's life for me!",
      "Arr, matey! What's the plan?",
      "Avast, ye swab!",
      "Ahoy there, me hearty!",
      "We live each day like there's nothing to lose, but a man has needs, and that need is booze!",
      "They say all the best things in life are free, so give all your beer and your rrrrrum to me!",
      "We are here to drink your beer and steal your rum at the point of a gun!",
      "I've been trying to reach you about your ships extended warranty",
      "I've got a jar of dirt!",
      "GET CRACKIN YE BLOOMIN COCKROACHES!",
      "Your loot or your life!",
      "Prepare for battle! Dying is the day worth living for",
    ];

    if (
      message.content === "argh" ||
      message.content === "ARGH" ||
      message.content === "Argh" ||
      message.content === "ARGH!" ||
      message.content === "Arghhh" ||
      message.content === "Arghhh!" ||
      message.content === "ARGHHH" ||
      message.content === "ARGHHH!" ||
      message.content === "arghhh" ||
      message.content === "Argh!"
    ) {
      const randomIndex = Math.floor(Math.random() * messages.length);
      message.channel.send(messages[randomIndex]);
    }
  },
};
