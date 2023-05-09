const { axios } = require('axios');
const sendGpt = ( msg ) => {
    return axios.get(`https://www.heblogs.cn/caonm/ai/o.php?msg=${msg}&type=`)
        .then(res => {
            return Promise.resolve(res.data);
        }).catch(err => {
            return Promise.reject(err);
        })

}
module.exports.sendGpt = sendGpt;
