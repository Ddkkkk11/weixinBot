const { WechatyBuilder } = require('wechaty');
const { basicService } = require("./basicService");
const axios = require("axios");
const { sendGpt } = require("./sendMsg");
const wechaty = WechatyBuilder.build();
wechaty
    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
    .on('login', user => console.log(`User ${user} logged in`))
    .on('message', async (msg) => {
       if (msg.self()) return;
       //消息判断
        switch (msg.type()) {
            case 7:
                const room = msg.room();
                const text = msg.text();
                const sender = await msg.talker().alias;
                const isMentionSelf = await msg.mentionSelf();
                if (room && isMentionSelf) {
                    console.log('群聊');
                    msg.say('收到老板请稍等下');
                    const sendText = text.replace('@铲车司机bot', '');
                    // const res = await sendGpt(sendText);
                    const res = await sendGpt(sendText);
                    if (res.code === 200) {
                        room.say(res.answer);
                    }
                }

        }
    })
wechaty.start()
