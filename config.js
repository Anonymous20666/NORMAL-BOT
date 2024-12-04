const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOiOBT9L3nVHhAExKquWkABW/EDBcWteQgQICAfQkCxy/++hXbX9MPObC9PqYSce3LOufcdZDmu0By1YPwOihI3kKBuSdoCgTGQ6yBAJegDHxIIxqDW9TI+botZAoXVaNtb926waWJzoraUU5zXy8jGi5jW0unmFdz7oKjdE/b+AOheb+QQITIoXG+qG3KgySo7MndNaSWNsyJsK7KnM/SbKHwF9w4R4hJn4bSIUIpKeJqjdg1x+T36IyUlzG17ojRHySe16MtbNlfzC2LkbS6e1gHWuVsyrOLM+x59BdZ+1DS5CPUVVXiTqT0IhV4UsYOQcMr0VLLm8bJThJE8fdKvcJghf+ajjGDSflt3S9d7t8V2zixpPctkD/GcNdUvpaHNl7NV6IYzXX87984FM/wecVPx5/iYo5DV2pnLiWvzcqgD2ULkCLHovBGUlPObBlPd+Up8XX5mJfk/uvPzOPJnezSQtkKtMjOe4m3xtj9cbzDzCoHOsX2mN/oiYq3v0Q+PskL8+Drl/akiiceLk4QHudovqPLEsq6fBeme37SKF3/RHZK6/BNL0bSMdvAW+mxpLibpSnMloadlo5u7OHOZZNjnLZ5xqVPI+Cyfkv1QPbsXqgyK6bwXwnVWb+P9wKI4TmHs3lwWxAlMws3r40UJamc+GA/ufVCiEFekhATnWbfHsFwfQL/ZIq9E5CEvcLUDa1QBmiys8zHDzt6WcG4dq9YT1xFqDtk8EYpqRe+o8BX0QVHmHqoq5Ou4InnZGqiqYIgqMP77Zx9k6EqexnXl2EEfBLisiJXVxSmH/qern4fQ8/I6I9s285RugUowpn9tI0JwFladjnUGSy/CDVIiSCowDuCpQvc+8FGDPdThgQAbIms6xmZzrl4uByPY22oddpSjPHv+wnBo4IssenGHAvcyRAP0IrLD4Qs/YodcMGIHI3YI+gB/9Ex35/cNrhKz3Mlpom/MCNWxzLHLYT0ji4x+2PDUHpXIB2NS1qgPXOgldbHLE5T9AZfKieNTVIyqmHL4wPTKUkiZZMPW+Rfcp6dg/P5rTim53+Exi5G8Y+Yq6IP0EUH8eDk7FGhO4IThcCCOh39VPy6dkLAofmSIdLgfonc3fEQgPlXd0DEQ6dWSPl0KRiPkmiZZoaSEEvhl0mfan2k6Ym1daERiND/yFEOf1OvrflnRCafeYkaNOcbO6AFWseK8/gsIGANVvyGbT801NTvveZtP56lhtcxkn9p0vDXkdBHu3+R8Yrtbvkn5g0zf2B1iJitlIbbWGzNDu02g7Nw2rq+Xcz27SroiS69dtWdYvhZjebGnstaFOk6Qab6la5+3KP7csIeej2mfndGNXhv25BCf1JrBpWpU4pW1blGl6tNeyuypWqOTLGtcYk3OSJvmNsHhsw8fc+D0MX/xo0PeP6IVYPQYZxlM0X+b8zXl9L3/BeNjQP4mSfLeiWLeLDfLKHMOUixfhHhkx+7ybWV6QzFyev7pKC6dyAlTcL//7IPiBEmQlykYA5j5ZY590AcnWBHpV6PucIoqAtMCjAcCyzIjkRPEPkhbqSi2BJLP/gZS980nCbj/A/6VfPf7BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "shadow",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "shadow",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '2' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

