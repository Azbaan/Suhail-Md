const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_08_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMSxcbiAgICAgICAgODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MixcbiAgICAgICAgODksXG4gICAgICAgIDk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYyLFxuICAgICAgICA5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICA0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjExLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDczLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlaNSt6ck5pb2FpWExZQW5wUTZNWFMxRHdPQkU2cjdWdFhDSVJEc3FyYnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjctV1duOFhfUnVXTXZ3NTA2bXNPZlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODg3MTQyNWYtMjczYS00ZGM3LWFjMjItOGI0MjNjYmQ0OWU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTY2LFxuICAgICAgMjM0LFxuICAgICAgMjAxLFxuICAgICAgMjM0LFxuICAgICAgMjM3LFxuICAgICAgNjIsXG4gICAgICAyMDcsXG4gICAgICAyNDIsXG4gICAgICAxMDQsXG4gICAgICAyNTQsXG4gICAgICAxODcsXG4gICAgICAxODksXG4gICAgICAxNSxcbiAgICAgIDE0MSxcbiAgICAgIDExMSxcbiAgICAgIDE2NixcbiAgICAgIDE1OSxcbiAgICAgIDYwLFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICA5MSxcbiAgICAgIDk2LFxuICAgICAgMjM2LFxuICAgICAgMTE2LFxuICAgICAgMjA0LFxuICAgICAgNzEsXG4gICAgICAxNjgsXG4gICAgICAyMTgsXG4gICAgICAyOSxcbiAgICAgIDIyMixcbiAgICAgIDE5MixcbiAgICAgIDIxNixcbiAgICAgIDI0LFxuICAgICAgMjQxLFxuICAgICAgMjUsXG4gICAgICAyLFxuICAgICAgMjA1LFxuICAgICAgMjIxLFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktCTUxOVDY5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxODEwNjA2Njc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MjY4OTMzNDY2NTMwNjoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQV3BtYk1FRUt6ZWpiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkwrSmoxblRxMmc4VHRrSVhVbUdMUHpxbGZrYXozVnA1YjUrQnVMQzVPR289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSXlqWmFhU25yZW9sS09CcVVkUkhBZ2ttSlJ0enoxcll6bVNuUUJQUnh0RUFGR3VJM2VHL0RvbVM1VXdrRW9sb3AvOGtCUU9XTzkrUEliekYwNjl4QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK2NYY0NMSGg3WWJ0ZFkrb3ZTQVl1bUw0SXY5VWlVWW8veGZrNjU1QTZhM3Z0dmFPdC80NklBQi9FV0dpY3pSdnY4SUc3cUpyRTNOSFMxdldodjh1Q2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTgxMDYwNjY3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4ODk3MTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQd3BcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB3cC5qc29uIjogIntcImtleURhdGFcIjpcIm1PQlUvZjRjT2doamtXOTlLNUJzYVMyMGl5amRkOFZreGp4MlRoMmhSOUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE4MTExMTU0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5ODg5NzE3NzU4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
