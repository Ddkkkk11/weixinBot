const { WechatyBuilder } = require('wechaty');
const { sendGpt } = require("./sendMsg");
const bot = WechatyBuilder.build();
bot
    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
    .on('login', user => console.log(`User ${user} logged in`))
    .on('message', async (msg) => {
        if (msg.self()) return;
        //消息判断
        switch (msg.type()) {
            case 7:
                const room = msg.room();
                const text = msg.text();
                const isMentionSelf = await msg.mentionSelf();
                if (room && isMentionSelf) {
                    msg.say('富哥等一哈');
                    const sendText = text.replace('@铲车司机bot', '');
                    const res = await sendGpt(sendText);
                    if (res.code === '200') {
                        msg.say(res.answer);
                    }
                }
        }
    })
bot.start();
