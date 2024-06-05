/*####################################
                 F E N I X - V 15
             MADE BY F E N I X ID SERVER
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/Fenix-server
👥 Github: https://github.com/Botdevillozan
🤖 Youtube https://youtube.com/@fenix_programmer
#####################################*/


const fs = require('fs')
const chalk = require('chalk')

global.ownernomer = "94773010580"
global.ownername = "Fenix"
global.ytname = "YT: Fenix_Programmer "
global.socialm = "GitHub: Fenix-server"
global.location = "srilanka, colombo, colombo"

global.ownernumber = '94773010580'  //creator number
global.ownername = 'FENIX' //owner name
global.botname = 'FENIX ID V17' //name of the bot

global.packname = 'V17'
global.author = 'ꜰᴇɴɪx ɪᴅ ꜱᴇʀᴠᴇʀ : 🌍'

global.themeemoji = '🪀'
global.wm = "Its Fuck.inc."

global.link = 'https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w'


global.prefa = ['','!','.','#','&']

global.autoRecording = false 
global.autoTyping = false 
global.autorecordtype = true
global.autoread = false 
global.autobio = false 
global.anti92 = false 
global.autoswview = true

global.typemenu = 'v2'

global.mess = {
    done: 'ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟ…!',
    prem: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴘʀᴇᴍɪᴜᴍ',
    admin: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴀᴅᴍɪɴ…!',
    botAdmin: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴍʏ ᴏᴡɴᴇʀ…!',
    owner: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴍʏ ᴏᴡɴᴇʀ…!',
    group: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ɢʀᴏᴜᴘ…!',
    private: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴘʀɪᴠᴀᴛᴇ…!',
    wait: 'ᴀᴄᴄᴇꜱꜱ ᴠᴇʀɪꜰʏᴇᴅ ᴡᴀɪᴛ… ',    
    error: 'ʏᴇʜ ɪ ɢᴇᴛ ᴇʀʀᴏʀ',
}

global.thumb = fs.readFileSync('./www-fucking/Fenix9991/dexDump/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})