const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Временное хранилище для кодов подтверждения
const verificationCodes = {};

// Симуляция отправки SMS
const sendSMS = (telephone, code) => {
    console.log(
        `Отправка SMS на ${telephone}: Ваш код подтверждения - ${code}`,
    );
};

// Эндпоинт для отправки кода подтверждения
server.post('/send-code', (req, res) => {
    const { telephone } = req.body;
    const db = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
    );
    const { users = [] } = db;
    const userFromBd = users.find((user) => user.telephone === telephone);

    if (userFromBd) {
        const code = Math.floor(1000 + Math.random() * 9000);
        verificationCodes[telephone] = code;
        sendSMS(telephone, code);
        return res.json({ message: 'Код подтверждения отправлен' });
    }
    return res.status(403).json({ message: 'Пользователь не найден' });
});

// Эндпоинт для проверки кода подтверждения
server.post('/verify-code', (req, res) => {
    const { telephone, code } = req.body;

    if (verificationCodes[telephone] && verificationCodes[telephone] === code) {
        delete verificationCodes[telephone];
        const db = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
        );
        const { users = [] } = db;
        const userFromBd = users.find((user) => user.telephone === telephone);
        return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'Неверный код' });
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    if (req.path !== '/users') {
        return next();
    }

    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
