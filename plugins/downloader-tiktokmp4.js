import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let res = (await axios.get(API('males', '/tiktok', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
  }
   conn.sendButtonDoc(m.chat, `▰▰▰▱▱▱▱▱`, 'Wait', 'Owner', '.owner', m, { contextInfo: { externalAdReply: {
title: 'Hᴀʟᴏ' + name,
body: wm, 
thumbnail: fs.readFileSync("./thumbnail.jpg"),
mediaType:1,
mediaUrl: "https://telegra.ph/file/1216a636cb2add65a34ae.jpg",
sourceUrl: snh 
}}})
}
    
    let result = `⟐⟞⟚⟝⟮ *Title:* ⟯⟞⟚⟝⟐
┇⟣⟪ ${res.title} ⟫⟢
▥ ━┉┄┄┈┈ ▢

┇⟐⟞⟚⟝⟮ *Author* ⟯⟞⟚⟝⟐
▥ ━┉┄┄┈┈ ▢
${res.author}
◈ ━┉┈┄┈┈ ►`
    conn.sendButtonVid(m.chat, res.video, result, '_© 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 by fahri_', `Audio`, `.gettt ${args[0]}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tt|tiktokdl)$/i

export default handler
