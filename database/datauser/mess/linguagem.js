const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, emoji_bot, SeuNome, OwnerNumber, NomeDoBot} = infos

exports.wait = () => {
return`⏳Aguarde alguns instantes...⏳\n\nCaso não funcione, use o comando novamente.`
}

exports.registroB = () => {
return`
╭━━━━━━─ • ─━━━━━─
│*「️𝙲𝚘𝚖𝚊𝚗𝚍𝚘 𝙽𝚎𝚐𝚊𝚍𝚘」*
╰┯━━━━━─ • ─━━━━━─
╭┤𝖯𝖺𝗋𝖺 𝖿𝖺𝗓𝖾𝗋 𝖫𝗈𝗀𝗂𝗇:
││𝖴𝗌𝖾: 𝖫𝗈𝗀𝗂𝗇
│╰━━━━━─ • ─━━━━━─
╰━━━━━━─ • ─━━━━━─`
}

exports.menu2 = (pushname, hr, total_gp1, bateria) => {
return `
Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮ ⟨❗⟩️ 𝖨𝗇𝖿𝗈 𝖽𝗈 𝖡𝗈𝗍 ⟨❗⟩
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp1}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤⟨❗⟩️ 𝖦𝗋𝗎𝗉𝗈 𝖾 𝖺𝖽𝗆𝗌 ⟨❗⟩
┃╞━━━━── • ──━━━━
┃│ ⋟ ${p}Banir『@Tag』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Add『Numero』 
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Promover『@Tag』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Rebaixar『@Tag』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Setnome『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Setdesk『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Setppgc『Foto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Del『Msg do bot』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Notif『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Hidetag『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Welcome 『On/Off』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Leveling『On/Off』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Antilink『On/Off』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Antifake『On/Off』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Grup『Abrir/Fechar』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Info『Grupo/Perfil』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Link『Pv/Grupo』 
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Totag『Img/Gif』  
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Listadmin 
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.figurinhas = (pushname, hr, total_gp2, bateria) => {
return `
Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮ ⟨❗⟩️ 𝖨𝗇𝖿𝗈 𝖽𝗈 𝖡𝗈𝗍 ⟨❗⟩
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp2}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════⊷
└╦═════════════⊷
┌┤⟨❗⟩️ 𝖲𝗍𝗂𝖼𝗄𝖾𝗋𝗌 ⟨❗⟩
┃╞═════════════⊷
┃│⋟ ${p}F 『Foto/Gif』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}St 『Foto/Gif』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Stk『Foto/Gif』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ttp1『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ttp2『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ttp3『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ttp4『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ttp5『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Attp『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Attp1『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Attp2『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Attp3『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Attp4『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Attp5『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Attp6『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Attp6『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Togif『Sticker』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Figupet『Foto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Figuger『Foto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Toimg『Sticker』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Figulgbt『Foto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Figulgbt『Foto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Figuarma『Foto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Figuinvert『Foto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Figupreso『Foto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Figuwasted『Sticker』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Figuborrada『Sticker』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Figuprocurado『Sticker』
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.playrs = (pushname, hr, total_gp4, bateria) => {
return `
Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮ ⟨❗⟩️ 𝖨𝗇𝖿𝗈 𝖽𝗈 𝖡𝗈𝗍 ⟨❗⟩
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp4}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════⊷
└╦══════════════⊷
┌┤⟨❗⟩️ 𝖣𝗈𝗐𝗇 𝖠𝗎𝖽𝗂𝗈𝗓 ⟨❗⟩
┃╞═════════════⊷
┃│ ⋟ ${p}Play『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Play1『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Play2『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Baixo『Audio』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Rapid『Audio』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Tomp3『Video』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Rapido『Audio』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Esquilo『Audio』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Gigante『Audio』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Devagar『Audio』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Sombrio『Video』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Estourar『Audio』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ytsearch『Nome』
┃╰━━━━── • ──━━━━
└═══════════════⊷`
}

exports.jogos = (pushname, hr, total_gp5, bateria) => {
return `
Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮ ⟨❗⟩️ 𝖨𝗇𝖿𝗈 𝖽𝗈 𝖡𝗈𝗍 ⟨❗⟩
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp5}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════⊷
└╦═════════════⊷
┌┤ ⟨🎮⟩️ 𝖩𝗈𝗀𝗈𝗌 ⟨🎮⟩
┃╞═════════════⊷
┃│ ⋟ ${p}Ddd『ddd?』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Sn『Pergunta』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Lolizita『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ttt『Dificuldade』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Getname『@Tag』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Amongus『@Tag』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ppt『Pedra/Papel』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Level 
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ranklevel
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Dado
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Tagme
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Pau
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Gado
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Slot
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Roleta
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Caracoroa
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.animes = (pushname, hr, total_gp6, bateria) => {
return `
 Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮ ⟨❗⟩️ 𝖨𝗇𝖿𝗈 𝖽𝗈 𝖡𝗈𝗍 ⟨❗⟩
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp6}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════⊷
└╦═════════════⊷
┌┤ ⟨🔞⟩️ 𝖧𝖾𝗇𝗍𝖺𝗂𝗌 ⟨🔞⟩
┃╞═════════════⊷
┃│ ⋟ ${p}Ero
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Les
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ass
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Solo
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Holo
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Feet
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Anal
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Eron
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Trap
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Erok
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Cum
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Feed
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Neko
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Lewd
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Solog
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Bdsm
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Feetg
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Spank
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Lewdk
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Boobs
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Hentai
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Eroyuri
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Classic
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Erofeet
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Hentain
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Kitsune
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Holoero
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Blowjob
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Pwankg
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Futanari
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Nsfwloli
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Femdom
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Nsfwneko
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Erokemo
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Trapnime
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Hololewd
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Lewdkemo
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤ ⟨🍙⟩️ 𝖠𝗇𝗂𝗆𝖾𝗌 ⟨🍙⟩
┃╞═════════════⊷
┃│ ⋟ ${p}Ace
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Loli
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Luffy
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Zoro
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Nami
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Bully
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Obito
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Shota
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Waifu
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Buggy
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Carrot
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Nekoa
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Asuma
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Naruto
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Shanks
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Sakura
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Hinata
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Shikaku
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Madara
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Sasuke
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Abraço
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Shinobu
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ahegao
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Lolizinha
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Shikadai
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Megumin
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Shikamaru
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Pinterest『Texto』
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.dono = (pushname, hr, total_gp7, bateria) => {
return `
 Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮ ⟨❗⟩️ 𝖨𝗇𝖿𝗈 𝖽𝗈 𝖡𝗈𝗍 ⟨❗⟩
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp7}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════⊷
└╦═════════════⊷
┌┤ ⟨👮🏻⟩️ 𝖣𝗈𝗇𝗈 ⟨👮🏻⟩
┃╞═════════════⊷
┃│ ⋟ ${p}Bc『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ban『@Tag』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Clone『@Tag』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Unban『@Tag』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Bcstik『Sticker』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Tagimg『Sticker』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Setprefix『Prefix』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Addprem『@Tag』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Dellprem『@Tag』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Tagstick『Sticker』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Delpalavra『Palavra』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Addpalavra『Palavra』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Antipalavras『On/Off』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Setname『Nome do bot』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Ping
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Mystat
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Bateria
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Clearall
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Desligar
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Reiniciar
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Visuchat
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Listname
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Bloqueados
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.nuvem = (pushname, hr, total_gp4, bateria) => {
return `
 Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮ ⟨❗⟩️ 𝖨𝗇𝖿𝗈 𝖽𝗈 𝖡𝗈𝗍 ⟨❗⟩
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp4}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════⊷
└╦═════════════⊷
┌┤ ⟨📥⟩️ 𝖭𝗎𝗏𝖾𝗆 ⟨📥⟩
┃╞═════════════⊷
┃│ ⋟ ${p}Liststik
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Getstik『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Addstik『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Listvn
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Getvn『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Addvn『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Listimg
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Addimg『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Getimg『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Listvid
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Addvid『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Getvif『Nome』
┃╰━━━─── • ──━━━━
└══════════════⊷`
}

exports.premium = (pushname, hr, totalchat, bateria) => {
return `
 Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮ ⟨❗⟩️ 𝖨𝗇𝖿𝗈 𝖽𝗈 𝖡𝗈𝗍 ⟨❗⟩
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${totalchat}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════⊷
└╦═════════════⊷
┌┤ ⟨🔰⟩️ 𝖯𝗋𝖾𝗆𝗂𝗎𝗆 ⟨🔰⟩
┃╞═════════════⊷
┃│ ⋟ ${p}Sticknime
┃╰━━━━── • ──━━━━
┃╭ ⋟ Ddd『DDD?』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Pinapi『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Covidst『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Xsearch『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Amazon『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Rename『Sticker』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Playstore『Nome』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Covidmundo『Nome』
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.logos = (pushname, hr, total_gp8, bateria) => {
return `
 Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮ ⟨❗⟩️ 𝖨𝗇𝖿𝗈 𝖽𝗈 𝖡𝗈𝗍 ⟨❗⟩
┌┤⋟ Pʀᴇғɪx:『${p}』
┃│⋟ Hᴏʀᴀ: ${hr}
┃│⋟ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${total_gp8}
┃│⋟ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃│⋟ ${p}Report『Erros?』
┃╰═════════════⊷
└╦═════════════⊷
┌┤⟨🏝️⟩️ 𝖤𝖽𝗂𝗍 𝖫𝗈𝗀𝗈𝗌 ⟨🏝️⟩
┃╞═════════════⊷
┃│ ⋟ ${p}Lava『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Berry『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}1917『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Toxic『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Snow『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Cloud『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Blood『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Matrix『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}3dglue『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}3dstone『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Steeltext『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Steeltext『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Artpaper『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}3dglossy『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Blackpink『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Thunder2『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Neonlight『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Chocolate『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Christmas『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Dropwater『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Embossed『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Embossed『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Magmahot『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}3dgradient『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Luxurygold『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Harrypotter『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}3dneonlight『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Greenhorror『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Sandwriting『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Horrorblood『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Transformer『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Bearmascot『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Brokenglass『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Sandsummer『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Naturalleaves『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Halloweenfire『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Metaldarkgold『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Sciencefiction『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}3dunderwater『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Futuristicneon『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Sandengraved『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Xmascards3d『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Summerysand『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Captainamerica『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Neondevilwings『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Wonderfulgraffiti『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Impressiveglitch『Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Silver『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Stone『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Glitch『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}3dsteal『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Glitchtk『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}America『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Lionlogo『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Pornhub『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Wolflogo『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Space3d『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Lightbulb『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Silvergalax『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Videogame『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Marvelstudios『Texto/Texto』
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${p}Wolflogogalaxy『Texto/Texto』
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.speed = (latensi) => {
return `*Ping de : ${latensi.toFixed(4)} Segundos*`
}

exports.erroB = (comando, q) => {
return `[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`
}

exports.bateria = (baterai, porcentagem) => {
return `
╭ ⋟ 🔋вαтɛяια 
┃╭━━━━── • ──━━━━
┃┃⋟ 𝚋𝚊𝚝𝚎𝚛𝚒𝚊: ${baterai}%
┃┃⋟ ${porcentagem}
┃╰━━━─「🔋」─━━━━
└═════════════━•••`
}

exports.errorB = (comando) => {
return `
[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*
[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* 
*『Ƭ𝖾𝗇𝗍𝖾 Ʋ𝗌𝖺𝗋 Ɖ𝖾 ክ𝗈𝗏𝗈』*`  
}

exports.tterro = () => {
return `Você deve digitar ${p}ppt pedra, ${p}ppt papel ou ${p}ppt tesoura`
}

exports.leveloff = () => {
return`${emoji_bot} leveling foi desativada`
}

exports.levelnoton = () => {
return`${emoji_bot} A função leveling está desativada`
}

exports.levelnol = () => {
return`${emoji_bot} Você está level 0... \njá se registrou para começar ganhar XP?`
}

exports.ban = (NomeDoBot) => {
return`${emoji_bot} Você está banido do bot`
}

exports.ownerB = () => {
return`${emoji_bot} Comando só pode ser usado pelo meu dono`
}

exports.stick = () => {
return`${emoji_bot} Ocorreu um erro na criação de sticker\n\nMotivo: ${SeuNome}/${NomeDoBot} Não pode conter letras modificadas`
}

exports.Lv = () => {
return`${emoji_bot} Link inválido`
}

exports.group = () => {
return`${emoji_bot} O comando só pode ser usado em grupos`
}

exports.admin = () => {
return`${emoji_bot} O comando só pode ser usado por administradores do grupo`
}

exports.Badmin = () => {
return`${emoji_bot} O comando só pode ser usado quando o bot é um administrador do grupo`
}

exports.AdmDoBot = () => {
return`${emoji_bot} Cadê o meu adm?? Só pode usar esse comando quando eu me torno administrador`
}

exports.erro = () => {
return`❌ocorreu um erro❌\n\nTente novamente.`
}


