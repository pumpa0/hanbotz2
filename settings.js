
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}

global.xteam = 'RiyGanz'

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = true //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./media/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6285731855426'] //ur owner number
global.ownername = "Han" //ur owner name
global.ytname = "hanbotz.xyz" //ur yt chanel name
global.socialm = "@terserah_bomat" //ur github or insta name
global.location = "Mars" //ur location

//bot bomdy 
global.owner = ['6285731855426']
global.coowner = ['628812412514']
global.ownertag = '6285731855426' //ur tag number
global.botname = 'HanBotz' //ur bot name
global.linkz = "https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ" //your theme url which will be displayed on whatsapp
global.websitex = "https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ" //ur website to be displayed
global.botscript = '🐦' //script link
global.reactmoji = "🤖" //ur menu react emoji
global.themeemoji = "✨" //ur theme emoji
global.packname = "WhatsApp Bot" //ur sticker watermark packname
global.author = "IG: @terserah_bomat" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./media/theme/hanbotz.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./media/theme/hanbotz.jpg") //ur logo pic
global.err4r = fs.readFileSync("./media/theme/hanbotz.jpg") //ur error pic
global.thumb = fs.readFileSync("./media/theme/hanbotz.jpg") //ur thumb pic

//damtabase
global.premium = ['6285731855426'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','#']
global.sp = '•'
global.mess = {
    success: 'Done',
    admin: 'Fitur Ini Hanya Untuk Admin!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Ini Hanya Untuk Owner!',
    group: 'Fitur Hanya Digunakan Untuk Grup!',
    privatee: 'Fitur Hanya Digunakan Untuk Obrolan Pribadi!',
    bot: 'Fitur Ini Hanya Untuk Bot',
    wait: 'proses...',
    linkm: 'Mana linknya?',
    error: 'Error!!',
    endLimit: 'Limit harian kamu telah habis',
    ban: 'Anda telah diban oleh owner!',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'Bot telah diban di grup ini',
    premm: 'Fitur Ini Hanya Untuk Premium'
}
    global.limitawal = {
    free: 15,
    premium: 1000,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./media/theme/hanbotz.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
