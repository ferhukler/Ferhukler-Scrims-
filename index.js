const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

if (!process.env.DISCORD_TOKEN) {
  console.error('Missing DISCORD_TOKEN in your environment or .env file.');
  process.exit(1);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

let loginAttempts = 0;

function startBot() {
  loginAttempts += 1;
  console.log(`Starting bot attempt ${loginAttempts}...`);

  client.once('ready', (c) => {
    console.log(`✅ Bot is online as ${c.user.tag}`);
  });

  client.on('error', (error) => {
    console.error('Discord client error:', error);
  });

  client.login(process.env.DISCORD_TOKEN).catch((error) => {
    console.error('Failed to log in to Discord:', error.message);
    setTimeout(() => {
      console.log('Retrying connection...');
      startBot();
    }, 10000);
  });
}

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason);
});

startBot();
