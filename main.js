let express = require("express");
let app = express();
let { toBuffer } = require("qrcode");
const CryptoJS = require("crypto-js");
const {
  default: makeWASocket,
  useSingleFileAuthState,
  Browsers,
  delay,
} = require("@adiwajshing/baileys");

const pino = require("pino");
let PORT = process.env.PORT || 3030;

const PastebinAPI = require("pastebin-js"),
  pastebin = new PastebinAPI("h4cO2gJEMwmgmBoteYufW6_weLvBYCqT");
app.use("/", (req, res) => {
  const authfile = `./tmp/${makeid()}.json`;
  const { state } = useSingleFileAuthState(authfile, pino({ level: "silent" }));
  function Amarok() {
    try {
      let session = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: pino({ level: "silent" }),
        browser: Browsers.macOS("Desktop"),
        downloadHistory: false,
        syncFullHistory: false,
      });

      session.ev.on("connection.update", async (s) => {
        if (s.qr) {
          res.end(await toBuffer(s.qr));
        }
        const { connection, lastDisconnect } = s;
        if (connection == "open") {
          await delay(500 * 10);
          let link = await pastebin.createPasteFromFile(
            authfile,
            "Amarok MD session",
            null,
            0,
            "N"
          );
          let data = link.replace("https://pastebin.com/", "");
          let code = btoa(data);
          var words = code.split("");
          var ress = words[Math.floor(words.length / 2)];
          let c = code.split(ress).join(ress + "_AMAROK_");

          const templateButtons = [
            {
              index: 1,
              urlButton: {
                displayText: "ᴄᴏᴘʏ ᴀᴍᴀʀᴏᴋ s ɪᴅ",
                url: `https://www.whatsapp.com/otp/copy/${c}`,
              },
            },
            {
              index: 2,
              urlButton: {
                displayText: "ᴀᴍᴀʀᴏᴋ ɢɪᴛʜᴜʙ",
                url: `github.com/Diegoson/AMAROK-MD',
              },
            },
          {
          index: 3
          urlButton: {
          displayText: "ᴏᴡɴᴇʀ ᴄʏʙᴇʀ",
          url: 'http://wa.me/27686881509?text=Hi+LOVE+YOUR+BOT🇿🇦',
          },
        },
        {
          index: 4
          urlButton: {
          displayText: "sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ",
          url: 'https://chat.whatsapp.com/I3aOiLY2Ydc258VkV7p0Md',
            },
            },
          ];  
          
          const templateMessage = {
            text: `\nᴅᴇᴀʀ ᴜsᴇʀ ᴛʜɪs ɪs ʏᴏᴜʀ sᴇssɪᴏɴ ɪᴅ
          
◕ ⭕ *ᴘʟᴇᴀsᴇ ᴅᴏ ɴᴏᴛ sʜᴀʀᴇ ᴛʜɪs ᴄᴏᴅᴇ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ ᴀs ɪᴛ ᴄᴏɴᴛᴀɪɴs ʀᴇǫᴜɪʀᴇᴅ ᴅᴀᴛᴀ ᴛᴏ ɢᴇᴛ ʏᴏᴜʀ ᴄᴏɴᴛᴀᴄᴛ ᴅᴇᴛᴀɪʟs ᴀɴᴅ ᴀᴄᴄᴇss ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ*`,
            footer: "sᴇssɪᴏɴ",
            templateButtons: templateButtons,
          };

          await session.sendMessage(session.user.id, templateMessage);
          await session.sendMessage(session.user.id, {
            document: { url: authfile },
            fileName: "session.json",
            mimetype: "application/json",
          });

          await delay(3000 * 10);
          process.send("reset");
        }
        if (
          connection === "close" &&
          lastDisconnect &&
          lastDisconnect.error &&
          lastDisconnect.error.output.statusCode != 401
        ) {
          Amarok();
        }
      });
    } catch (err) {
      console.log(
        err + "Unknown Error Occured Please report to Owner and Stay tuned"
      );
    }
  }

  Amarok();
});
app.listen(PORT, () => console.log("App listened on port", PORT));

const encrypt = (text) => {
  return CryptoJS.AES.encrypt(text, (passphrase = "123")).toString();
};

const decrypt = (text) => {
  return CryptoJS.AES.decrypt(text, passphrase).toString();
};

function makeid(num = 9) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var characters9 = characters.length;
  for (var i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters9));
  }
  return result;
}

let encode = (f) => {
  return f.replace("=", "");
};
