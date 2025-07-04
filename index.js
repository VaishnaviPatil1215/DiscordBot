import { Client, Events, GatewayIntentBits } from 'discord.js';
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent],
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    if (content.includes("hello")) {
        message.reply("Hey there! 👋");
    } else if (content.includes("bye")) {
        message.reply("Goodbye! Take care 😊");
    } else if (content.includes("help")) {
        message.reply("I’m just a simple bot. Try saying 'hello', 'bye', or 'joke'.");
    }
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply("Pong!!");
});

client.login(
    process.env.DISCORD_BOT_TOKEN
);