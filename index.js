const { WAConnection, MessageType } = require('@adiwajshing/baileys').default
const makeWASocket = require("@adiwajshing/baileys").default
const { exec, spawn, execSync } = require("child_process")
const pino = require('pino')
let qrcodee = require('qrcode')
const fs = require('fs')
const aes256 = require('aes256');
const qrcode = require("qrcode-terminal")
const { delay, useSingleFileAuthState } = require("@adiwajshing/baileys")
exec('rm -rf session.json')
exec('rm -rf qr.png')
const { state, saveState } = useSingleFileAuthState('./session.json')
var PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI({
      'api_dev_key' : 'u_53edsqmFGKd02RMyQPwONVG0bIPi-R',});
var express = require('express');
const path = require('path')
var router = express.Router();
const port = process.env.PORT || 3000;
/* GET home page. */
router.get('/', function(req, res, next) {
var options = {

        root: path.join()

};
  function inrlmd() {
    let inrl = makeWASocket({
      logger: pino({ level: 'silent' }),
      auth: state,
      printQRInTerminal: false,
      browser: ["ᴀᴍᴀʀᴏᴋ-ᴍᴅ", "Microsoft", "3.0.0"]
    })
    inrl.ev.on("connection.update", async (s) => {
    
    if(s.qr) {
                  qrcodee.toFile('./qr.png', s.qr, {
                      color: {
                          dark: '#000',
                      }
                  })
              }
              
      const { connection, lastDisconnect } = s
      if (connection == "open") {
        await delay(1000 * 10)
        const session = fs.readFileSync('./session.json') 
      
          pastebin .createPasteFromFile( './session.json')
            .then((data) => {
          // we have successfully pasted it. Data contains the id
              st = (data);
  
  let mdmm =st. replaceAll("https://pastebin.com/", "");
              
          var st = (mdmm);
  var encodedString = btoa(st);
  var key = 'my passphrase';
  var plaintext =(encodedString);
  var encryptedPlainText = aes256.encrypt(key, plaintext);
  let mdmmm = encryptedPlainText. replaceAll("==", "");
  
  const templateButtons = [
      {index: 1, urlButton: {displayText:'ᴄᴏᴘʏ sᴇssɪᴏɴ', url: 'https://www.whatsapp.com/otp/copy/'+("AMAROK~"+mdmmm)}},
      {index: 2, urlButton: {displayText: 'ɢɪᴛ ʟɪɴᴋ', url: 'https://github.com/Diegoson/AMAROK-MD'}},
      {index: 3, urlButton: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ', url: 'https://wa.me/2768688109'}},
  ]    
   const templateMessage = {
      text: "☯︎ᴛʜᴀɴᴋs ғᴏʀ ᴄʜᴏᴏsɪɴɢ☯︎\n             ✰ ᴀᴍᴀʀᴏᴋ-ᴍᴅ✰\n\n        ☯︎ғᴏʀᴋ ᴀᴍᴀʀᴏᴋ ᴍᴅ ʀᴇᴘᴏ☯︎\n\n ⍟ᴄᴏᴘᴘʏ ᴛʜᴇ sᴇssɪᴏɴ_ɪᴅ⍟\n\n            ☯︎ᴛʜᴀɴᴋs☯︎",
    
      footer: 'ᴀᴍᴀʀᴏᴋ-ᴍᴅ,
      templateButtons: templateButtons
  }
  const reply = (take) => { 
     inrl.sendMessage(inrl.user.id, templateMessage)
  }
  reply(templateMessage);
     //console.log("AMAROK~"+mdmmm);
      })
      }
      if (
        connection === "close" &&
        lastDisconnect &&
        lastDisconnect.error &&
        lastDisconnect.error.output.statusCode != 401
      ) {
        inrlmd()
      }
    })
    inrl.ev.on('creds.update', saveState)
    inrl.ev.on('messages.upsert', () => { })
  }
  inrlmd()

  res.sendFile('./qr.png', options)
});



module.exports = router;
