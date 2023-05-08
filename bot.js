const { WechatyBuilder } = require('wechaty');
const { basicService } = require("./basicService");
const axios = require("axios");
const wechaty = WechatyBuilder.build();
wechaty
    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
    .on('login', user => console.log(`User ${user} logged in`))
    .on('message', (message) => {
        if (message.text() === '西安天气' && message.mentionSelf()) {
            message.say('西安天气还可以');
        }
    })
wechaty.start()
