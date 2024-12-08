//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/TAGPcMC.jpeg,https://files.catbox.moe/59iafh.jpg,https://files.catbox.moe/jynitk.jpg,https://files.catbox.moe/dohubs.jpg,https://files.catbox.moe/nm85c3.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/243849962848";
global.sudo = process.env.SUDO || "242067274660";
global.owner = process.env.OWNER_NUMBER || "237692251610";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/xvYDAsD.jpeg,https://i.imgur.com/TAGPcMC.jpeg,https://endpoint.web.id/server/file/I8dkDXm1nJDtOI75.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhsUEloUHcwMlB4RjV6RGhFWmV2ZWVlclV0WldHc0pjVDhHODVZUE5VOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUIzeE9GSWhNWTB0MXFLR3lWU04raW1sVTVoZkxrUy9aVVNuTEE2aUhBQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTVQzZ2U3eCtEREJqdFZFeDZMRlNvRk03Zk1qM2hYTHNXbndFS2Rab1djPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvbloxd01RZUdxNDJFTFI4alUxNjVvRm1tTmxZQm5mbG1KYVdoYUlrUmlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdFaWNHeEpFVmZiS1Z3c1RjMGRCczFIWThqQ1FPOUlBcVBtZFJXYUx2MTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ0TkNmdUhIbXc0WUt5aVpsSUhKbG1icnJpa2hxOENaZWxkcWxHMVQwbXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0l2L1NWUWNGZDU5Qm1DVzFtOUo2MmR2c1RVcjUxSG4vN09PTEZLS0VWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEcvYlgzY0wxSVMxaGErSyt3L2RYc0dZSzFBVkVKdjZ3bGJjZ0VYVjRHOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZWU0p3T0h3TDhPbS9lTzZvTytkcXdBZTl4NzRQaE9sMXE3cVhKUzM5R2tlZk1Ncmc3N3Q2NHdoTTN2bHRXc21TM09OOFplcjNjRHFDd1BPNkdENGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJzS2gvSlJYeW5hRlNGelpIaUQ0RXM5NytqRmNrQTZlZXhUbXg0K1BURnIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkYzg2X0FzUVRCLU00NXlVNUVrZm9BIiwicGhvbmVJZCI6IjdmNWJhNWMyLWI1MzgtNGM2Yi1iZmQ1LTAxM2RkNjkzMWY4NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwZStXTS9rc3lpbXpacTBnb24xN1l1Y3owWFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEtqa3R0dGF3cGx1T292eWlkd2JDVDY1UG9rPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllFUlcyU0ZOIiwibWUiOnsiaWQiOiIyMzc2OTIyNTE2MTA6NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUQ0djVNQ0VJdkgxYm9HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWUVseXVCS1ZvQXpjQXpXcDRsdk9lSkhwUU1uaXpOb2NWRE9RMnFYTjFnST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSjkrd1RGcVI2VTk5MXlPYTZJSDgrbnpYYlNSZ2J6L3pSQkVweDd3NzhXN3QyVk5qbU5peXVESXVVaWxNZWtVV3BUUGIrZzNYSGZBUjBlWmxDWVNxQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjU0c3FFbmJUYXd5U1I1VlBocGkwNlJkcjh6a2ttb0Z5Y2d3bWtsY2Jra1dzb2U5bWQ1bDI0cEl6cmV6RU4rNjgyaWhyaU9vN2hTb2k5dDJ2R2VvVGhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjkyMjUxNjEwOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0JKY3JnU2xhQU0zQU0xcWVKYnpuaVI2VURKNHN6YUhGUXprTnFsemRZQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzY0OTMwNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJYW0ifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊",
  packname: process.env.PACK_NAME || "𝐉𝐈𝐍𝐇𝐘𝐔𝐊-𝐌𝐃",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "𝑃𝒂𝒚𝒆𝒓 𝑈𝒏𝒌𝒏𝒐𝒘𝒏",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
