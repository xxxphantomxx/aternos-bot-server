const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running online 24/7\n');
}).listen(process.env.PORT || 3000);


const mineflayer = require('mineflayer');
const mineflayer = require('mineflayer');

const botOptions = {
    host: 'phantom_ms.aternos.me', 
    port: 25565,                  
    username: 'bot_servera_phantom_ms' 

function createBot() {
    console.log('Попытка подключения бота к серверу...');
    const bot = mineflayer.createBot(botOptions);

    bot.on('spawn', () => {
        console.log(`Бот ${bot.username} успешно зашел на сервер!`);
        setInterval(() => {
            if (bot && bot.entity) {
                bot.setControlState('jump', true);
                setTimeout(() => bot.setControlState('jump', false), 500);
            }
        }, 10000);
    });


    bot.on('chat', (username, message) => {
        if (message.includes('/register')) {
            bot.chat('/register Phantom_Bot77 Phantom_Bot77'); 
        }
        if (message.includes('/login')) {
            bot.chat('/login Phantom_Bot77'); 
        }
    });


    bot.on('kick', (reason) => {
        console.log(`Бота кикнули: ${reason}`);
    });

    bot.on('error', (err) => {
        console.log(`Ошибка: ${err.message}`);
    });

    bot.on('end', () => {
        console.log('Соединение разорвано. Повторное подключение через 15 секунд...');
        setTimeout(createBot, 15000);
    });
}

createBot();
