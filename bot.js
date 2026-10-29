const mineflayer = require('mineflayer');

const botOptions = {
    host: 'phantom_ms.aternos.me', 
    port: 25565,                  
    username: 'bot',    
    version: '1.21.11'             
};

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
        // if (message.includes('/register')) bot.chat('/register пароль пароль');
        // if (message.includes('/login')) bot.chat('/login пароль');
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
