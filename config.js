const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID||"vFZh2ZxQ#EdqnzFjBLiAMYZShYF56IRZHUISlcFKWejnu1qvaW8A",
ALIVE_IMG: process .env.ALIVE_IMG ||"https://pomf2.lain.la/f/2ad8ap67.jpg",
ALIVE_MSG: process .env.ALIVE_MSG ||"HELLOW,QUEEN MINUKI MD IS ALIVE NOW",
};
