const axios = require('axios');

const sendGpt = (msg) => {
    return axios({
        method: 'get',
        url: `https://www.heblogs.cn/caonm/ai/o.php?msg=${msg}&type=`,
        timeout: 100000, // 设置超时时间为100秒
    })
        .then((res) => {
            return Promise.resolve(res.data);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};
module.exports.sendGpt = sendGpt;
