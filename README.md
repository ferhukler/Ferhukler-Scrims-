# Ferhukler-Scrims-

A simple Discord bot that can run continuously online.

## 1. Add your bot token

Create a .env file in the project root:

```bash
cp .env.example .env
```

Then edit .env and set your token:

```env
DISCORD_TOKEN=your_real_bot_token_here
```

## 2. Run locally

```bash
npm install
npm start
```

## 3. Keep it online 24/7

The easiest reliable option is a VPS or cloud server.

### Option A: VPS with PM2 (recommended)

```bash
npm install -g pm2
cd /path/to/your/project
npm install
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Option B: Railway / Render / Fly.io

- Connect this repository to the platform
- Set the environment variable DISCORD_TOKEN
- Start the app with the command: npm start

## 4. Invite the bot to your server

In Discord Developer Portal, enable the bot and invite it with these permissions:
- Send Messages
- Read Messages/View Channels
- Read Message History

If you want, I can also help you deploy this to a specific provider such as Railway or a Linux VPS step by step.
