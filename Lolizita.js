/* ------------------------------ AVISO  ------------------------------
*
* Bot feito por Tobi, agradecimentos para:
* Apis de fotos/animes Foi dada pelo: Thiago
* Resen/Tiringa-BOT me ajudou a montar as cases...
*
* Agradecimentos para quem ajudou:
* Pires
* yLukas
* Resen
* Italu pau de 21cm
*
* Reprodução, edição e outros estão autorizados MAS SEM REMOVER MEUS CRÉDITOS.
* Caso remova, resulta na quebra da licença do mesmo, o que é um crime federal.
*
* Plagiar meus comandos não te torna coder, vá estudar, não seja um ladrão miserável.
* Levei meses nesse projeto e não paro de me empenhar em deixar todos felizes.
*
* Obrigado a todos que me apoiam, que não roubam isso, que pegam e põem os créditos e...
*
* ------------------------------  Amo Vc  ------------------------------ */

/********** MÓDULOS NPM **********/
const fs = require('fs');
const imageToBase64 = require('image-to-base64');
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const request = require('request')
const fetc = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const http = require('http');
const util = require('util');
const yts = require('yt-search')
const fetch = require('node-fetch')
const encodeUrl = require('encodeurl')
const googleImage = require('g-i-s')
const os = require('os');

/********** ARQUIVOS **********/
const { addMetadata } = require('./lib/exif.js')
const { webp2gifFile } = require("./lib/gif.js")
const { fetchJson } = require('./lib/fetcher');
const { help } = require('./database/help/help')
const { linguagem } = require('./database/datauser/mess')

/********** DADOS SALVOS **********/
const uang = JSON.parse(fs.readFileSync('./database/datauser/uang.json'));
const ban = JSON.parse(fs.readFileSync('./database/datauser/banned.json'));
const _level = JSON.parse(fs.readFileSync('./database/datauser/level.json'));
const _registered = JSON.parse(fs.readFileSync('./database/datauser/registered.json'));

/********** ARQUIVOS NA NUVEM **********/
const setiker = JSON.parse(fs.readFileSync('./database/temp/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./database/temp/vid.json'))
const audionye = JSON.parse(fs.readFileSync('./database/temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./database/temp/image.json'))
const sotoy = JSON.parse(fs.readFileSync('./database/data/sotoy.json'))
const daily = JSON.parse(fs.readFileSync('./database/data/diario.json'))
const prem = JSON.parse(fs.readFileSync('./database/datauser/premium.json'));

/********** SEGURANÇA **********/
let welcome = JSON.parse(fs.readFileSync('./database/arquivos/welcome.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/arquivos/leveling.json'));
let antilink = JSON.parse(fs.readFileSync('./database/arquivos/antilink.json'));
let antifaker = JSON.parse(fs.readFileSync('./database/arquivos/antifaker.json'));
let palavrão = JSON.parse(fs.readFileSync('./database/arquivos/palavrão.json'));
let autconversa = JSON.parse(fs.readFileSync('./database/arquivos/autconversa.json'));
let palavra = JSON.parse(fs.readFileSync('./lib/palavras.json'))

/********** CONFIGURAÇÕES **********/
const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, emoji_bot, SeuNome, OwnerNumber, NomeDoBot} = infos

const arroz = JSON.parse(fs.readFileSync('./node_modules/@adiwajshing/baileys/quejo.js'))
var { macarrão } = arroz

/********** BLOQ && VERIFICADO **********/
const blocked = []; 
aaa = 'on'
cdd = "480000" 
crtt = "Jogo da velha" 
baterai = 'não detectado'
charging = 'não detectado'
//_NUMERO DO DONO DO BOT

/********** VCARD DO DONO **********/
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ 'FN:Tobi\n' //<~ NÃO MEXA AQUI
+ 'ORG:Lolizita-BOT;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=559481417512:+55 94 8141-7512\n' 
+ 'END:VCARD'                                       

/********** CONST TIC-TAC-TOE **********/
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

/********** WHATSAPP CONEXÃO **********/
const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid,
  processTime,
  ChatModification,
} = require('@adiwajshing/baileys');

/********** CORES **********/
const {
  color, 
  bgcolor
} = require('./lib/color');

/********** LIMIT TTT **********/
const { 
  addLimit, 
  getLimit 
} = require('./lib/limit.js')

/********** CONSTS **********/
const {
  getBuffer, 
  h2k, 
  generateMessageID, 
  getGroupAdmins, 
  getRandom, 
  banner, 
  start, 
  info,
  success, 
  close, 
  addKoinUser,
  addATM,
  checkATMuser,
  log
} = require('./lib/functions');

/********** FUCTION LEVEL **********/
const {
  getLevelingXp, 
  getLevelingId, 
  addLevelingXp, 
  addLevelingLevel, 
  addLevelingId, 
  getLevelingLevel, 
  getUserRank, 
  addCooldown, 
  leveltab,
  dellprem
 } = require('./lib/leveling.js')
 
/********** FUCTION TTT **********/
const { 
  addTTTId, 
  addTTTwin, 
  addTTTdefeat, 
  addTTTtie, 
  addTTTpoints, 
  getTTTId, 
  getTTTwins, 
  getTTTdefeats, 
  getTTTties, 
  getTTTpoints
} = require('./lib/tictactoe.js')

/********** FUCTION REGISTRO **********/
const { 
  getRegisterNo, 
  getRegisterName, 
  getRegisterSerial, 
  getRegisterAge, 
  getRegisterTime, 
  getRegisteredRandomId, 
  addRegisteredUser, 
  createSerial, 
  checkRegisteredUser
} = require('./lib/register.js')

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
if (
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
) {
return true
} else {
return false
}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
if (
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
) {
return true
} else {
return false
}
}

//TESTE PARA EMPATE
const Tie = () => {
if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
return true
} else {
return false
}
}

const IA = () => {
if (WinnerX() || WinnerO() || Tie()) {
tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
tttset.reActivate1 = "off"
IAmove1()
//JOGADAS PROGRAMADAS ABAIXO
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "??" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "??" && esp.a3 == "??" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
//PRIORIZAR CANTOS E CENTRO
tttset.reActivate1 = "off"
while (tttset.reActivate3 == "on") {
priorityC()
}
tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "HARD" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//HARD
tttset.reActivate1 = "off"
IAmove1()
} else if (tttset.tttdifficulty == "NORMAL" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//NORMAL
tttset.reActivate1 = "off"
let randomNORMAL = Math.floor(Math.random() * 3)
if (randomNORMAL == 0 || randomNORMAL == 1) {
IAmove1()
} else {
while (tttset.reActivate2 == "on") {
IAalter()
}
}
tttset.reActivate2 = "on"
} else {
//EASY / RANDOM
let randomALL = Math.floor(Math.random() * 9)
switch (randomALL) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
}
break
}
}
}

const IAmove1 = () => {
//JOGADA PARA VITÓRIA
if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
esp.a1 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
esp.b1 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
esp.a1 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
esp.a2 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
esp.a1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
esp.a3 = "⭕"
//JOGADA PARA BLOQUEIO
} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
esp.a1 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
esp.b1 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
esp.a1 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
esp.a2 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
esp.a1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
esp.a3 = "⭕"
}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
let randomALTER = Math.floor(Math.random() * 9)
switch (randomALTER) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate2 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate2 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate2 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate2 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate2 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate2 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate2 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate2 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate2 = "off"
esp.c3 = "⭕"
}
break
}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
let randomPriC = Math.floor(Math.random() * 5)
switch (randomPriC) {
case 0 :
if (esp.a1 == "🔲") {
tttset.reActivate3 = "off"
esp.a1 = "⭕"
}
break
case 1 :
if (esp.a3 == "🔲") {
tttset.reActivate3 = "off"
esp.a3 = "⭕"
}
break
case 2 :
if (esp.b2 == "🔲") {
tttset.reActivate3 = "off"
esp.b2 = "⭕"
}
break
case 3 :
if (esp.c1 == "🔲") {
tttset.reActivate3 = "off"
esp.c1 = "⭕"
}
break
case 4 :
if (esp.c3 == "🔲") {
tttset.reActivate3 = "off"
esp.c3 = "⭕"
}
break
}
}

/********** FUCTION TEMPORIZADO **********/ 
function temporizado(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} minutos ${pad(seconds)} Segundos`
}

/********** CONEXÃO DO QR CODE **********/
async function starts() {
  const tobi = new WAConnection()
  tobi.logger.level = 'warn'
  tobi.on('qr', () => {
  console.log(color('[','white'), color('!','red'), color(']','white'), color('escaneie o código qr'))
})

fs.existsSync('./qr.json') && tobi.loadAuthInfo('./qr.json')
  tobi.on('connecting', () => {
  start('2', ' ')
})
  tobi.on('open', () => {
  success('2', `Lolizita-BOT Conectada`)
})

/********** MENSAGEM PARA O DONO **********/
//tobi.sendMessage(`${OwnerNumber}@s.whatsapp.net`, `Ohayo prazer eu sou o seu bot❤️`, MessageType.text)
  await tobi.connect({timeoutMs: 10*1000})
fs.writeFileSync('./qr.json', JSON.stringify(tobi.base64EncodedAuthInfo(), null, '\t'))

/********** WELCOME (BEM VINDO) **********/
tobi.on('group-participants-update', async (anu) => {
  if (antifaker.includes(anu.jid)) {
  const mdata = await tobi.groupMetadata(anu.jid)
  if (anu.action == 'add'){
  num = anu.participants[0]
  if(!num.split('@')[0].startsWith(55)) {
  tobi.sendMessage(mdata.id, 'Números fake não são permitidos nesse grupo️️', MessageType.text)							
  setTimeout(async function () {
  console.log(color('[','white'), color('!','red'), color(']','white'), color('Banindo O Número Fake...','red'))
  tobi.groupRemove(mdata.id, [num])
  }, 5000)
  }
  }
  }		
if (!welcome.includes(anu.jid)) return
  try {
  const mdata = await tobi.groupMetadata(anu.jid)
  console.log(anu)
  if (anu.action == 'add') {
  num = anu.participants[0]
  try {
  ppimg = await tobi.getProfilePicture(`${num.split('@')[0]}@c.us`)
  } catch {
  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
teks = `Olá @${num.split('@')[0]}\nSeja bem vindo(a) ao grupo: ${mdata.subject}`
  let bufff = await getBuffer(ppimg)
  tobi.sendMessage(mdata.id, bufff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
  } else if (anu.action == 'remove') {
  num = anu.participants[0]
  try {
  ppimg = await tobi.getProfilePicture(`${num.split('@')[0]}@c.us`)
  } catch {
  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
teks = `O integrante @${num.split('@')[0]} saiu do grupo... bye bye👋`
  let buff = await getBuffer(ppimg)
  tobi.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
  }
  } catch (e) {
  console.log('Error : %s', color(e, 'red'))
  }
  })

/********** FUCTION BLOCKLIST **********/
tobi.on('blocklist-update', async (chat) => {
  for (i of chat.added){
  target = i.replace('@c.us', '@s.whatsapp.net')
  blocked.push(target)
  console.log(color("[ BLOQUEADO ] ",'red')+target)
  }
  for (i of chat.removed){
  target = i.replace('@c.us', '@s.whatsapp.net')
  blocked.splice(blocked.indexOf(target), 1)
  console.log(color("[ DESBLOQUEADO ] ", 'green')+target)
  }
})

/********** FUCTION ANTI CALL **********/
tobi.on('CB:action,,call', async json => {
  const callerId = json[2][0][1].from;
  console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LIGAÇÃO DETECTADA LIGAÇÕES = BLOCK \x1b[1;37m]')
  tobi.sendMessage(callerId, `${emoji_bot} Ligações = block`, MessageType.text)
  setTimeout(async() => {
  await tobi.blockUser(callerId, "add")
  }, 3000)
})

/********** FUCTION BATERIA **********/
tobi.on('CB:action,,battery', json => {
  global.batteryLevelStr = json[2][0][1].value
  global.batterylevel = parseInt(batteryLevelStr)
  baterai = batterylevel
  if (json[2][0][1].live == 'true') charging = true
  if (json[2][0][1].live == 'false') charging = false
  })
  global.p
  global.batrei = global.batrei ? global.batrei : []
  tobi.on('CB:action,,battery', json => {
  const batteryLevelStr = json[2][0][1].value
  const batterylevel = parseInt(batteryLevelStr)
  global.batrei.push(batterylevel)
})

/********** FUCTION BATERIA **********/
tobi.on('CB:action,,battery', json => {
  global.batteryLevelStr = json[2][0][1].value
  global.batterylevel = parseInt(batteryLevelStr)
  var baterai = batterylevel
  if (json[2][0][1].live == 'true') charging = true
  if (json[2][0][1].live == 'false') charging = false
  console.log(color('🔋Carga da bateria: ' + batterylevel+'%', "yellow"))
})

/************* LINGUAGEM ************/
tobi.on('chat-update', async (mek) => {
  try {
  if (!mek.hasNewMessage) return
  mek = mek.messages.all()[0]
  if (!mek.message) return
  if (mek.key && mek.key.remoteJid == 'status@broadcast') return
  if (mek.key.fromMe) return 
  
/************** PREFIXO && BLOKLIST ************/
  global.p
  global.blocked

/************** HORAS ************/
  const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
  const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
  const data = moment.tz('Asia/Jakarta').format('DD/MM')
  const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')

/************** TYPE DOS CONSOLE ************/
  const content = JSON.stringify(mek.message)
  const from = mek.key.remoteJid
  const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
  const type = Object.keys(mek.message)[0]

/************** BUDY DO AUTO RESPONDER ************/
  body = (type === 'conversation' && mek.message.conversation.startsWith(p)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(p) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(p) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(p) ? mek.message.extendedTextMessage.text : ''
  budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''

/************** CONST DE STRING ************/
  const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
  const args = body.trim().split(/ +/).slice(1)
  const isCmd = body.startsWith(p)
  const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
  var totalchat = await tobi.chats.all()
  const botNumber = tobi.user.jid
  const q = args.join(' ')
  const testekkkk = botNumber
  const me = tobi.user
  const tescuk = ["0@s.whatsapp.net"]

/************** DONO DO BOT ************/
  const ownerNumber = [`${OwnerNumber}@s.whatsapp.net`] 
/* Caso não consiga, tire esse "${OwnerNumber}" e coloque seu número*/

/************** LINGUAGEM GRUPO ************/
  const isGroup = from.endsWith('@g.us')
  const senderr = isGroup ? mek.participant : mek.key.remoteJid
  const sender = mek.key.fromMe ? tobi.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
  const groupMetadata = isGroup ? await tobi.groupMetadata(from) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const groupId = isGroup ? groupMetadata.jid : ''
  const groupMembers = isGroup ? groupMetadata.participants : ''
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
  const groupDesc = isGroup ? groupMetadata.desc : ''
  const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
  const isGroupAdmins = groupAdmins.includes(sender) || false
  const isOwner = ownerNumber.includes(sender)
  const isBanned = ban.includes(sender) 
  const bater = global.batrei[global.batrei.length - 1]

/************** PUSHNAME (NOME) ************/
  let pushname = tobi.contacts[sender] != undefined ? tobi.contacts[sender].vname || tobi.contacts[sender].notify: undefined
  const conts = mek.key.fromMe ? tobi.user.jid : tobi.contacts[sender] || { notify: jid.replace(/@.+/, '') }

/************** CONST ANTILINK ************/
  var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
  const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

/************** RECURSO DE SEGURANÇA ************/
  const isWelcome = isGroup ? welcome.includes(from) : true 
  const isLevelingOn = isGroup ? _leveling.includes(from) : true 
  const isAntiLink = isGroup ? antilink.includes(from) : true 
  const isAntifaker = isGroup ? antifaker.includes(from) : true 
  const isPalavrão = isGroup ? palavrão.includes(from) : false
  const isAutconversa = isGroup ? autconversa.includes(from) : false

/************** REGISTRO ************/
  const isRegistered = checkRegisteredUser(sender) 
  const isUser = checkRegisteredUser(sender) //Use

/************** PREMIUM ************/
  const isPremium= prem.includes(sender)	 

/********** OUTRAS CONST **********/
const sendMediaURL = async(to, url, text="", mids=[]) =>{
  if(mids.length > 0){
  text = normalizeMention(to, text, mids)
  }
  const fn = Date.now() / 10000;
  const filename = fn.toString()
  let mime = ""
  var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
  mime = res.headers['content-type']
  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
 });
 };
}

const sendStickerFromUrl = async(to, url) => {
  var names = Date.now() / 10000;
  var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
  };
  download(url, './sticker' + names + '.png', async function () {
  console.log('pronto');
  let filess = './sticker' + names + '.png'
  let asw = './sticker' + names + '.webp'
  exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
  let media = fs.readFileSync(asw)
  tobi.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek})
  fs.unlinkSync(filess)
  fs.unlinkSync(asw)
  });
 });
} 

/********** ANTI NOME MODICADO **********/
function isDoubleByte(str) {
  for (let i = 0, n = str.length; i < n; i++) {
  if (str.charCodeAt(i) > 255) {
  return true;
  }
  }
  return false;
  }

/********** FUCTION FOTO **********/
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
tobi.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
tobi.sendMessage(from, hasil, type, options).catch(e => {
tobi.sendMessage(from, { url : link }, type, options).catch(e => {
enviar('_[ ! ] Erro ao baixar e enviar mídia_')
console.log(e)
})
})
})
})
}

/********** ENVIAR MSG **********/
const enviar = (text) => { tobi.sendMessage(from, text, MessageType.text, {quoted: mek ,thumbnail: fs.readFileSync(`./lib/logo.jpeg`)})  }

/********** COSTUM DO TTT **********/
const costum = (pesan, tipe, target, target2) => {
 tobi.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}

/********** SENDMESS DO BC **********/
const sendMess = (hehe, teks) => {
tobi.sendMessage(hehe, teks, text)
}

const math = (teks) => {
return Math.floor(teks)
} 

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? tobi.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tobi.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
}

const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

/********** MENSAGENS DO BOT **********/
var replys = [`${emoji_bot} Okay oni chan, espere, estou processando os dados...`, `${emoji_bot} ${NomeDoBot} está processando...`]
var replys_loli= replys[Math.floor(Math.random() * replys.length)] 

/********** MESS && PTBR **********/
mess = {
espere: `${replys_loli}`,
success: '『❗』Sucesso lek',
error: {
stick: '『❗』 Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
},
only: {
tobireplayoff: `『❌』Comando ${comando} desativado com sucesso!`,
tobireplay: `『❗』Comando ${comando} ativado com sucesso!`,
tobantilink: `Essᴇ ᴛɪᴘᴏ ᴅᴇ ʟɪɴᴋ: *${budy}*\n\nNᴀ̃ᴏ ᴇ́ ᴍᴜɪᴛᴏ ʙᴇᴍ ᴘᴇʀᴍɪᴛɪᴅᴏ ᴀǫᴜɪ`,
}
}

/********** TIPOS DE MENSAGENS **********/
colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage') 
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

/********** FUCTION PATENTE **********/
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {
patt = 'Bronze  I🥉'
} else if (nivelAtual === 2) {
patt = 'Bronze II🥉'
} else if (nivelAtual === 3) {
patt = 'Bronze  III🥉'
} else if (nivelAtual === 4) {
patt = 'Bronze  IV🥉'
} else if (nivelAtual === 5) {
patt = 'Bronze  V🥉'
} else if (nivelAtual === 6) {
patt = 'Prata I🥈'
} else if (nivelAtual === 7) {
patt = 'Prata II🥈'
} else if (nivelAtual === 8) {
patt = 'Prata III🥈'
} else if (nivelAtual === 9) {
patt = 'Prata IV🥈'
} else if (nivelAtual === 10) {
patt = 'Prata V🥈'
} else if (nivelAtual === 11) {
patt = 'Ouro I🥇'
} else if (nivelAtual === 12) {
patt = 'Ouro II🥇'
} else if (nivelAtual === 13) {
patt = 'Ouro III🥇'
} else if (nivelAtual === 14) {
patt = 'Ouro IV🥇'
} else if (nivelAtual === 15) {
patt = 'Ouro V🥇'
} else if (nivelAtual === 16) {
patt = 'Campeão I🏆'
} else if (nivelAtual === 17) {
patt = 'Campeão II🏆'
} else if (nivelAtual === 18) {
patt = 'Campeão III🏆'
} else if (nivelAtual === 19) {
patt = 'Campeão IV🏆'
} else if (nivelAtual === 20) {
patt = 'Campeão V🏆'
} else if (nivelAtual === 21) {
patt = 'Diamante I 💎'
} else if (nivelAtual === 22) {
patt = 'Diamante II 💎'
} else if (nivelAtual === 23) {
patt = 'Diamante III 💎'
} else if (nivelAtual === 24) {
patt = 'Diamante IV 💎'
} else if (nivelAtual === 25) {
patt = 'Diamante V 💎'
} else if (nivelAtual === 26) {
patt = 'Mestre I 🐂'
} else if (nivelAtual === 27) {
patt = 'Mestre II 🐂'
} else if (nivelAtual === 28) {
patt = 'Mestre III 🐂'
} else if (nivelAtual === 29) {
patt = 'Mestre IV 🐂'
} else if (nivelAtual === 30) {
patt = 'Mestre V 🐂'
} else if (nivelAtual === 31) {
patt = 'Mítico I 🔮'
} else if (nivelAtual === 32) {
patt = 'Mítico II 🔮'
} else if (nivelAtual === 33) {
patt = 'Mítico III 🔮'
} else if (nivelAtual === 34) {
patt = 'Mítico IV 🔮'
} else if (nivelAtual === 35) {
patt = 'Mítico V 🔮'
} else if (nivelAtual === 36) {
patt = 'God I🕴'
} else if (nivelAtual === 37) {
patt = 'God II🕴'
} else if (nivelAtual === 38) {
patt = 'God III🕴'
} else if (nivelAtual === 39) {
patt = 'God IV🕴'
} else if (nivelAtual === 40) {
patt = 'God V🕴'
} else if (nivelAtual === 41) {
patt = 'Grande Mestre I 🛐'
} else if (nivelAtual === 42) {
patt = 'Grande Mestre II 🛐'
} else if (nivelAtual === 43) {   	
patt = 'Grande Mestre III 🛐'
} else if (nivelAtual === 44) {
patt = 'Grande Mestre IV 🛐'
} else if (nivelAtual >= 45) {
patt = 'Deus-Sama🔰'
} 

/********** FUCTION TIPO DE USUÁRIO **********/
if (groupAdmins) {
prema = 'Ademir🤓'
}
if (isOwner) {
prema = `El ${SeuNome}🕴🏽`
} else {
var prema = 'Membro comum🗿'
}

/********** FUCTION BODIA **********/
var ase = new Date();
var tempo = ase.getHours();
switch(tempo){
case 0: tempo = `Boa noite ${pushname}🌛`; break;
case 1: tempo = `Boa noite ${pushname}🌛`; break;
case 2: tempo = `Boa noite ${pushname}🌛`; break;
case 3: tempo = `Bom Dia ${pushname}✨`; break;
case 4: tempo = `Bom Dia ${pushname}✨`; break;
case 5: tempo = `Bom Dia ${pushname}✨`; break;
case 6: tempo = `Bom Dia ${pushname}✨`; break;
case 7: tempo = `Bom Dia ${pushname}✨`; break;
case 8: tempo = `Bom Dia ${pushname}✨`; break;
case 9: tempo = `Bom Dia ${pushname}✨`; break;
case 10: tempo = `Bom Dia ${pushname}✨`; break;
case 11: tempo = `Boa tarde ${pushname}🔥`; break;
case 12: tempo = `Boa tarde ${pushname}🔥`; break;
case 13: tempo = `Boa tarde ${pushname}🔥`; break;
case 14: tempo = `Boa tarde ${pushname}🔥`; break;
case 15: tempo = `Boa tarde ${pushname}🌹`; break;
case 16: tempo = `Boa tarde ${pushname}🌹`; break;
case 17: tempo = `Boa tarde ${pushname}🌹`; break;
case 18: tempo = `Boa noite ${pushname}🌛`; break;
case 19: tempo = `Boa noite ${pushname}🌛`; break;
case 20: tempo = `Boa noite ${pushname}🌛`; break;
case 21: tempo = `Boa noite ${pushname}🌛`; break;
case 22: tempo = `Boa noite ${pushname}🌛`; break;
case 23: tempo = `Boa noite ${pushname}🌛`; break;
}
var tempo = '' + tempo;

/********** FUCTION LEVELING **********/
var up_porcenntagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const level_porcen = getLevelingLevel(sender)
if (level_porcen <= 10) {
up_porcenntagem = `*[█▒▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 20) {
up_porcenntagem = `*[██▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 30) {
up_porcenntagem = `*[███▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 40) {
up_porcenntagem = `*[████▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 50) {
up_porcenntagem = `*[█████▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 60) {
up_porcenntagem = `*[██████▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 70) {
up_porcenntagem = `*[███████▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 80) {
up_porcenntagem = `*[████████▒▒] ${level_porcen}%*`
} else if (level_porcen <= 90) {
up_porcenntagem = `*[█████████▒] ${level_porcen}%*`
} else if (level_porcen <= 100) {
up_porcenntagem = `*[██████████] ${level_porcen}%*`
} 		

/********** FUCTION BATERIA **********/
var porcentagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const bateria = (`${baterai}`)
if (bateria <= 10) {
porcentagem = `*[█▒▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 20) {
porcentagem = `*[██▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 30) {
porcentagem = `*[███▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 40) {
porcentagem = `*[████▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 50) {
porcentagem = `*[█████▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 60) {
porcentagem = `*[██████▒▒▒▒] ${bateria}%*`
} else if (bateria <= 70) {
porcentagem = `*[███████▒▒▒] ${bateria}%*`
} else if (bateria <= 80) {
porcentagem = `*[████████▒▒] ${bateria}%*`
} else if (bateria <= 90) {
porcentagem = `*[█████████▒] ${bateria}%*`
} else if (bateria <= 100) {
porcentagem = `*[██████████] ${bateria}%*`
} 			

/********** VERIFICADOS **********/
const tob = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${tempo}`}}}
const players_caption = `${groupName}\n⪧ ⃝༘⃕Cᴏᴍᴀɴᴅᴏ: ${comando}\n⪧ ⃝༘⃕ Mᴜsɪᴄᴀ: ${q}` 
const play_quetod = {
key: { groupName, fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": players_caption} } } 

/********** FUCTION TEMPO **********/
const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

/********** FUCTION HIDETAG **********/
const hideTag = async function(from, text){
let anu = await tobi.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
tobi.sendMessage(from, text, 'extendedTextMessage', {quoted: mek, contextInfo: {"mentionedJid": ane}})
}  

/********** FUCTION LEVEL XP **********/
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
var requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
var getLevel = getLevelingLevel(sender)
const namelv = checkId
mett = ["1", "2", "3", "4", "5"]
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./database/audios/som` + res + `.mp3`)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LEVEL UP \x1b[1;37m]', color(pushname, "yellow"), color('subiu'), color('de', "yellow"), color('level'), color('no', "yellow"), color('grupo:'), color(groupName, "yellow"))
const lvup = { 
text:
`
    ═══╾ Lᴇᴠᴇʟ Uᴘ ╼═══                           
  ➣ 𝙽ᴜᴍᴇʀᴏ: @${namelv.split('@')[0]}
╭════╾「👾」╼════╾
┣❲🔰❳ 𝚇ᴘ: ${getLevelingXp(sender)}
┣❲🆙❳ 𝙻ᴇᴠᴇʟ: ${getLevel} -> ${getLevelingLevel(sender)}
┣❲〽️❳ 𝙿ᴀᴛᴇɴᴛᴇ: ${patt}
╰════╾「🌀」╼════╾
`,
contextInfo: {mentionedJid: [namelv]}}
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\nTag: @${namelv.split('@')[0]}\n${up_porcenntagem}`}}}
tobi.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
tobi.sendMessage(from, lvup, text, {quoted: level_quetod})
}
} catch (err) {
console.error(err)
}
}

/********** FUCTION DINHEIRO **********/
if (isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}

/***** FINALIZAR TTT AUTOMATICAMENTE *****/
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
tobi.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
tobi.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

/********** ANTIS DO BRABO **********/
if (budy.includes("https")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
tobi.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("://chat.whatsapp.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
tobi.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("://youtu.be/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
tobi.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
tobi.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("Https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
tobi.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("http:/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
tobi.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("https:/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
tobi.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("https://t.me/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
tobi.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("https://wa.me/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
tobi.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("*TED ou PIX*")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
tobi.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (budy.includes("https://vm.tiktok.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
tobi.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

if (messagesC.includes("https://s.kwai.app/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(mess.only.tobantilink)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
tobi.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)	    
}

/*[--ANTI PALAVRÃO --]*/
if (isGroup && isPalavrão) { 
if (palavra.includes(messagesC)) {
enviar(`Essᴀ ᴘᴀʟᴀᴠʀᴀ ғᴏɪ ᴘʀᴏɪʙɪᴅᴀ ɴᴇssᴇ ɢʀᴜᴘᴏ\nRᴇᴘᴇɴsᴇ ᴏǫᴜᴇ ᴠᴄ ғᴇᴢ ᴘᴏʀ 4 ᴍɪɴᴜᴛᴏs ғᴏʀᴀ ᴅᴏ ɢʀᴜᴘᴏ 👋`)
setTimeout( () => { 
tobi.groupRemove(from, [sender]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}, 2000)
setTimeout( () => { 
enviar(`Aᴅɪᴄɪᴏɴᴀɴᴅᴏ ${pushname} Nᴏᴠᴀᴍᴇɴᴛᴇ\nCᴀsᴏ ᴅᴇ̂ ᴇʀʀᴏ, Aʟɢᴜᴍ ᴀᴅᴍ ᴀᴅᴅ ᴅᴇɴᴏᴠᴏ シ︎`)
}, 185000) //240000
var addd = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => { 
tobi.groupAdd(from, [addd]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}, 240000)
setTimeout( () => {
tobi.updatePresence(from, )
enviar("Aᴅᴇᴜsシ︎")
}, 0)
}
}

/********** CONSOLE LOGOS PRIVADO E MENSAGEM **********/
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('CMD', "red"), ']', color(comando, "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))
if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color('Message', "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))

/********** CONSOLE LOGOS MENSAGENS EM GRUPOS **********/
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('CMD', "red"), ']', color(comando, "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))
if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color('Message', "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))

/********** VISUALIZADOR AS MENSAGENS  **********/
tobi.chatRead(from)

/********** USUÁRIO BANIDO **********/
if (isCmd && isBanned) {
enviar(linguagem.ban())
return console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('BAN', "red"), ']', color('Ignorando', "yellow"), 'comando', color('do', "yellow"), color(pushname), 'Horas', color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'))
}

/********** REGISTRO **********/
if (isCmd && !isRegistered) {
const kapai = `╭━━━━━━─ • ─━━━━━─\n│*「️𝙲𝚘𝚖𝚊𝚗𝚍𝚘 𝙽𝚎𝚐𝚊𝚍𝚘」*\n╰┯━━━━━─ • ─━━━━━─\n╭┤𝖯𝖺𝗋𝖺 𝖿𝖺𝗓𝖾𝗋 𝖫𝗈𝗀𝗂𝗇:\n││𝖴𝗌𝖾: 𝖫𝗈𝗀𝗂𝗇\n│╰━━━━━─ • ─━━━━━─\n╰━━━━━━─ • ─━━━━━─`
wew = fs.readFileSync('./lib/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${kapai}`})
return 
}

/********** LOGIN **********/
if ((budy === "login") || (budy === "Login") || (budy === "Login")) {
if (isUser) return enviar(`📌 *Você já está registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
if (!isGroup) enviar('『❗』Esᴘᴇʀᴇ ᴏ ᴘʀᴏᴄᴇssᴀᴍᴇɴᴛᴏ ᴅᴏ sᴇᴜ ʟᴏɢɪɴ')
if (isGroup) enviar(`『❗』Sᴇʀᴠɪᴄ̧ᴏ ᴅᴇ ʟᴏɢɪɴ ʙᴇᴍ-sᴜᴄᴇᴅɪᴅᴏ!\nEsᴛᴏᴜ ᴇɴᴠɪᴀɴᴅᴏ ᴏs ᴅᴀᴅᴏs ɴᴏ sᴇᴜ ᴘʀɪᴠᴀᴅᴏ`)
try {
var ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)
const tekentod = 
`
╭•❏ 📝 ૨૯g¡ઽƬ૨ѳ
 • ⪧ ⃝༘⃕🐤REGISTRADO(A)
│⪧ ⃝༘⃕⚡ɪᴅ: ${serialUser}
 • Rᴇɢɪsᴛʀᴏ ʙᴇᴍ sᴜᴄᴇᴅɪᴅᴏ!!
│⪧ ⃝༘⃕⏳ʜᴏʀᴀʀɪᴏ: ${time}
 • ⪧ ⃝༘⃕,⚠️ɴᴏᴍᴇ: ${pushname}
│⪧ ⃝༘⃕🐤ɴᴜᴍᴇʀᴏ: wa.me/${sender.split('@')[0]}
╰━━━━━━─ • ─━━━━━━❋ཻུ۪۪⸙
`            
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await tobi.sendMessage(senderr, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                 
} else {
addRegisteredUser(from, pushname, time, serialUser)
await tobi.sendMessage(senderr, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                  
}
}

/********** EVAL CMDS **********/
if (budy.startsWith('>')){
if(!isOwner) return
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m EVAL \x1b[1;37m]', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return enviar(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
enviar(`${e}`)
}
}

/********** EVAL CMDS **********/
if (budy.startsWith('=>')){
if (!isOwner) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return enviar(bang)
}
try {
enviar(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
enviar(String(e))
}
}

/********** COMANDOS SEM PREFIX, BR TOBI **********/
if (!mek.key.fromMe) {
if ((budy.match("Pq")) || (budy.match("pq"))) {
if (!isAutconversa) return 
tobi.updatePresence(from, Presence.composing)
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./database/figurinhas/Pq_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}}

if (!mek.key.fromMe) {
if ((budy.match("hentai")) || (budy.match("Hentai"))) {
if (!isAutconversa) return 
tobi.updatePresence(from, Presence.composing)
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./database/figurinhas/hentai_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}}

if (!mek.key.fromMe) {
if ((budy.match("Analise")) || (budy.match("analise"))) {
if (!isAutconversa) return 
tobi.updatePresence(from, Presence.composing)
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./database/figurinhas/Analise_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}}

if (!mek.key.fromMe) {
if ((budy.match("Sexo")) || (budy.match("sexo"))) {
if (!isAutconversa) return 
tobi.updatePresence(from, Presence.composing)
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./database/figurinhas/sexo_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}}

if (!mek.key.fromMe) {
if ((budy.match("Não")) || (budy.match("não"))) {
if (!isAutconversa) return 
tobi.updatePresence(from, Presence.composing)
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./database/figurinhas/sim_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}}

/********** TODOS OS CMD APARTI DAQUI **********/
switch(comando) {
case 'menu':
case 'ajuda':
//「 ❗ 」By Tobi シ︎
tobi.updatePresence(from, Presence.composing)
uptime = process.uptime()
const checATM = checkATMuser(sender)
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const requireXp = 5 * Math.pow(useLevel, 2) + 50 * useLevel + 100
const chatss = `${totalchat.length}`
const antifaker_by_tobi = isAntifaker ? 'Ativado' : 'Desativado'
const antilink_by_tobi = isAntiLink ? 'Ativado' : 'Desativado'
const welcome_by_tobi = isWelcome ? 'Ativado' : 'Desativado'
const levelingon_by_tobi = isLevelingOn ? 'Ativado' : 'Desativado'
const selfchat_by_tobi = isAutconversa ? 'Ativado' : 'Desativado'
wew = fs.readFileSync('./lib/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: help(p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, chatss, antilink_by_tobi, welcome_by_tobi, levelingon_by_tobi, antifaker_by_tobi, selfchat_by_tobi, tempo)})
break

case 'grupo':
if (!isGroup) return enviar(linguagem.group())
const total_gp1 = `${totalchat.length}`
const grupo_by_tobi = (linguagem.menu2(pushname, hr, total_gp1, bateria))
wew = fs.readFileSync('./lib/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: grupo_by_tobi})
break

case 'dono':
//「 ❗ 」By Tobi シ︎
tobi.sendMessage(from, '『❗』Nᴜᴍᴇʀᴏ do Mᴇᴜ Cʀɪᴀᴅᴏʀ foi Eɴᴠɪᴀᴅᴏ no seu ᴘʀɪᴠᴀᴅᴏ',MessageType.text, { quoted: mek} )
tobi.sendMessage(sender, 'Esᴛᴇ ᴇ́ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ [(>_<)] Cᴀsᴏ ᴛᴇɴʜᴀ ᴀʟɢᴜᴍᴀ ᴅᴜᴠɪᴅᴀ ғᴀʟᴇ ᴄᴏᴍ ᴇʟᴇ',MessageType.text, { quoted: mek} )
tobi.sendMessage(sender, {displayname: "Jeff", vcard: vcard}, MessageType.contact, {quoted: mek})
break

case 'banir':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return enviar(linguagem.Badmin()) 
if (args.length < 1) return enviar(`${emoji_bot} Sintaxe correta: ${p + comando} @${OwnerNumber}`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Alvo removido com sucesso :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
tobi.groupRemove(from, mentioned)
} else {
mentions(`${emoji_bot} Alvo removido com sucesso : @${mentioned[0].split('@')[0]}`, mentioned, true)
tobi.groupRemove(from, mentioned)
}
break

case 'add':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return enviar(linguagem.Badmin()) 
if (args.length < 1) return enviar(`${emoji_bot} Sintaxe correta: ${p + comando} ${OwnerNumber}`)
if (args[0].startsWith('08')) return enviar('Use o código do país, man')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
tobi.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
enviar('Falha ao adicionar destino, talvez porque é privado')
}
break

case 'promover': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return enviar(linguagem.Badmin()) 
if (args.length < 1) return enviar(`${emoji_bot} Sintaxe correta: ${p + comando} @${OwnerNumber}`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Promovido com sucesso\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
tobi.groupRemove(from, mentioned)
} else {
mentions(`${emoji_bot} Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
tobi.groupMakeAdmin(from, mentioned)
}
break

case 'rebaixar':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return enviar(linguagem.Badmin()) 
if (args.length < 1) return enviar(`${emoji_bot} Sintaxe correta: ${p + comando} @${OwnerNumber}`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Rebaixado com sucesso\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
tobi.groupRemove(from, mentioned)
} else {
mentions(`${emoji_bot} Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
tobi.groupDemoteAdmin(from, mentioned)
}
break

case 'addprem': //Dono
if (!isGroup) return enviar(linguagem.group())
if (!isOwner && !isPremium) return  enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
prem.push(`${mentioned}`)
fs.writeFileSync('./database/datauser/premium.json', JSON.stringify(prem))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break

case 'dellprem': 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
delp = prem.indexOf()
prem.splice(`${mentioned}`)
fs.writeFileSync('./database/datauser/premium.json', JSON.stringify(prem))
susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   
break

case 'group': //by resen e Tobi
case 'grup':
case 'gp':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return enviar(linguagem.Badmin()) 
if (args.length < 1) return enviar(`${emoji_bot} Sintaxe correta: ${p + comando} abrir/fechar`)
if (args[0].toLowerCase() == 'abrir') { 
enviar(`${emoji_bot} Grupo aberto com sucesso`)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0].toLowerCase() == 'fechar') {
await tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)
enviar(`${emoji_bot} Grupo fechado com sucesso`)
}
break                  

case 'totag':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return enviar(linguagem.Badmin()) 
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 999999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 999999999,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
enviar(`${emoji_bot} Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${p + comando}`)
}
break

case 'setnome': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return enviar(linguagem.Badmin()) 
if (args.length < 1) return enviar(`${emoji_bot} Use: ${p + comando} <Novo nome do grupo>`)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
tobi.groupUpdateSubject(idgrup, `${body.slice(9)}`)
tobi.sendMessage(from, `${emoji_bot} Nome do grupo alterado`, text, {quoted: mek})
break

case 'setdesk': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return enviar(linguagem.Badmin()) 
if (args.length < 1) return enviar(`${emoji_bot} Use: ${p + comando} <Nova Descrição>`)
tobi.groupUpdateDescription(from, `${body.slice(9)}`)
tobi.sendMessage(from, `${emoji_bot} Descrição do grupo alterada`, text, {quoted: mek})
break

case 'setppgc': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return enviar(linguagem.Badmin()) 
if (!isQuotedImage) return enviar(`${emoji_bot} Use: ${p + comando} <Marque uma foto>`)
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const medipp = await tobi.downloadAndSaveMediaMessage(ftgp)
await tobi.updateProfilePicture (from, medipp)
enviar(`${emoji_bot} foto do grupo alterada`) 
break

case 'delete': 
case 'del':
case 'apagar':
//「 ❗ 」By Tobi シ︎
if (!isGroup)return enviar(linguagem.group())
if (!isGroupAdmins)return enviar(linguagem.admin())
try {
tobi.deleteMessage(from, {
id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
enviar(`${emoji_bot} Só é possível deletar mensagens minhas`)
}
break

case 'marcar':
//「 ❗ 」By Tobi シ︎
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `${q}\n\n`
for (let mem of groupMembers) {
todos += `⪧ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(' '+todos+' ', members_id, true)
break

case 'info': //by resen e Tobi
if (args.length < 1) return enviar(`${emoji_bot} Use ${p + comando} <Grupo ou Perfil>`)
//「 ❗ 」By Tobi シ︎
if (args[0].toLowerCase() == 'grupo') {
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
ppUrl = await tobi.getProfilePicture(from) 
buffer = await getBuffer(ppUrl)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO*:\n${groupDesc}`})
} else if (args[0].toLowerCase() == 'perfil') {
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const usTime = getRegisterTime(sender) 
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, usLevel) - 1)
const teste64 = sender
const teste65 = await tobi.getStatus(teste64 , MessageType.text)
try {
ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
pf = 
`
╭•❏ ઽ૯ષ ℓ૯√૯ℓ
 • ⋟ 🪀 Nome: ${pushname}
│⋟ 🔮 Level: ${usLevel}
 • ⋟ 💎 XP: ${usXp}/${requirXp}
│⋟ 🧸 Patente: ${patt}
 • ⋟ 📂 link: wa.me/${sender.split("@")[0]}
│⋟ 👾 Seu recado: ${teste65.status}
╰━━━━━━─ • ─━━━━━━❋ཻུ۪۪⸙
`
its = await getBuffer (ppimg)
tobi.sendMessage(from, its, image, {quoted: mek, thumbnail:null, caption: pf, contextInfo: {mentionedJid: [sender]}})
}
break

case 'listadmins': 
case 'listadmin':
case 'adminlist':
case 'listadm':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
adl = `Lista de administradores do grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adl, groupAdmins, true)
break

case 'linkgp': 
case 'link':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return enviar(linguagem.Badmin()) 
if (args.length < 1) return enviar(`${emoji_bot} Use ${p + comando} <Grupo ou Pv>`)
if (args[0].toLowerCase() == 'grupo') {
linkgc = await tobi.groupInviteCode(from)
enviar('https://chat.whatsapp.com/'+linkgc)
} else if (args[0].toLowerCase() == 'pv') {
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
linkgc = await tobi.groupInviteCode(from)
tobi.sendMessage(senderr, 'https://chat.whatsapp.com/'+linkgc, MessageType.text)
}
break

case 'notif': 
//「 ❗ 」By Tobi シ︎
if (!isGroupAdmins) return enviar(linguagem.admin())
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (args.length < 1) return enviar(`${emoji_bot} Use: ${p + comando} Aviso!`)
aviso  = `Aviso de: @${sender.split("@")[0]}\n\nAviso: ${body.slice(7)}`
group = await tobi.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {text: aviso, contextInfo: {mentionedJid: jids}, quoted: mek}
await tobi.sendMessage(from, options, text)
break

case 'hidetag':  
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return enviar(linguagem.Badmin()) 
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break

case 'welcome':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return enviar(linguagem.Badmin()) 
if (args.length < 1) return enviar(`[❗]On/Off, Exemplo ${p + comando} On`)
if (args[0] === 'on') {
if (isWelcome) return enviar('*[❗] ja esta ativado amigo...*')
welcome.push(from)
fs.writeFileSync('./database/arquivos/welcome.json', JSON.stringify(welcome))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = welcome.indexOf(welcome.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
welcome.splice(position, 1)
fs.writeFileSync('./database/arquivos/welcome.json', JSON.stringify(welcome))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]ativar/desativar, Exemplo ${p + comando} On`)
}
break

case 'leveling':
case 'leveis':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]ativar/desativar, Exemplo ${p}${comando} ativar`)
if (args[0] === 'on') {
if (isLevelingOn) return enviar('*[❗] ja esta ativado amigo...*')
_leveling.push(from)
fs.writeFileSync('./database/arquivos/leveling.json', JSON.stringify(_leveling))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = _leveling.indexOf(_leveling.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
_leveling.splice(position, 1)
fs.writeFileSync('./database/arquivos/leveling.json', JSON.stringify(_leveling))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]on/off, Exemplo ${p}${comando} on`)
}
break

case 'antilink':
case 'antilinks':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAntiLink) return enviar('*[❗] ja esta ativado amigo...*')
antilink.push(from)
fs.writeFileSync('./database/arquivos/antilink.json', JSON.stringify(antilink))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = antilink.indexOf(antilink.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
antilink.splice(position, 1)
fs.writeFileSync('./database/arquivos/antilink.json', JSON.stringify(antilink))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
}
break

case 'antifake':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAntifaker) return enviar('*[❗] ja esta ativado amigo...*')
antifaker.push(from)
fs.writeFileSync('./database/arquivos/antifaker.json', JSON.stringify(antifaker))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = antifaker.indexOf(antifaker.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
antifaker.splice(position, 1)
fs.writeFileSync('./database/arquivos/antifaker.json', JSON.stringify(antifaker))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
}
break

case 'autconversa':
case 'selfchat':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAutconversa) return enviar('*[❗] ja esta ativado amigo...*')
autconversa.push(from)
fs.writeFileSync('./database/arquivos/autconversa.json', JSON.stringify(autconversa))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = autconversa.indexOf(autconversa.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
autconversa.splice(position, 1)
fs.writeFileSync('./database/arquivos/autconversa.json', JSON.stringify(autconversa))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]On/Off, Exemplo ${p + comando} Off`)
}
break
//<~FIM DOS COMANDOS EM GRUPOS

//<~COMEÇO DOS COMANDOS STICKERS
case 'figurinhas':
const total_gp2 = `${totalchat.length}`
const figurinhas_by_tobi = (linguagem.figurinhas(pushname, hr, total_gp2, bateria))
wew = fs.readFileSync('./lib/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: figurinhas_by_tobi})
break

case 's':
case 'f':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function(err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
enviar(linguagem.stick())
})
.on('end', function() {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar(linguagem.stick())
tobi.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(200,iw)':min'(200,ih)':force_original_aspect_ratio=decrease,fps=15, pad=200:200:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
enviar(linguagem.wait())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function(err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(linguagem.stick())
})
.on('end', function() {
console.log('Finish')
buff = fs.readFileSync(ran)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar(linguagem.stick())
tobi.sendMessage(from, buff, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(200,iw)':min'(200,ih)':force_original_aspect_ratio=decrease,fps=15, pad=200:200:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'st':
//「 ❗ 」By Tobi シ︎
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
enviar(linguagem.stick())
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
tobi.sendMessage(from, buffer, sticker, {
quoted: mek
})
fs.unlinkSync(rano)
})
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`Falha na conversão de ${tipe} para sticker`)
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
tobi.sendMessage(from, buffer, sticker, {
quoted: mek
})
fs.unlinkSync(rano)
})
})
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'stk':
//「 ❗ 」By Tobi シ︎
tobi.updatePresence(from, Presence.composing)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
fs.unlinkSync(media)
enviar(linguagem.stick())
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar(linguagem.stick())
tobi.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: mek
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
enviar(mess.espere)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar(linguagem.stick())
tobi.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: mek
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'toimg':
//「 ❗ 」By Tobi シ︎
tobi.updatePresence(from, Presence.composing)
if (!isQuotedSticker) return enviar(`${emoji_bot} Você precisa marcar um sticker não animado para isso`)
enviar(mess.espere)
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medtmg = await tobi.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return enviar(`${emoji_bot} falha ao converter sticker em imagem`)
buffer = fs.readFileSync(ran)
tobi.sendMessage(from, buffer, image, {quoted: mek, caption: '🐤'})
fs.unlinkSync(ran)
})
break

case 'ttp':
if (args.length < 1) return enviar(`cadê o texto mano?\nexemplo ${p + comando} ${pushname}|yellow`)
var kntl = body.slice("5")
var nama = kntl.split("|")[0];
var impostor = kntl.split("|")[1];
enviar(mess.espere)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${encodeUrl(nama)}&color=${impostor}`
sendStickerFromUrl(from, anjay)
break

case 'ttp1':
case 'ttp2': case 'ttp3':
case 'ttp4': case 'ttp5':
if (args.length < 1) return enviar(`cadê o texto mano?\nexemplo ${p + comando} ${pushname}`)
sayo = `https://api-gdr2.herokuapp.com/api/${comando}?texto=${encodeUrl(body.slice(6))}`               
sendStickerFromUrl(from, sayo)
break

case 'togif': 
//「 ❗ 」By Tobi シ︎
if (!isQuotedSticker) return enviar(`${emoji_bot} Você precisa marcar um sticker animado para isso`)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await tobi.downloadAndSaveMediaMessage(encmediaaa)
enviar(mess.espere)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
tobi.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '🐤'})
fs.unlinkSync(mediaaa)
}
break

case 'figupet':               
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figupet = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figupet.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'arma':
case 'figuarma':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figuarma = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuarma.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuarma1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
exec(`wget ${figuarma1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'triggered':
case 'figuger':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)  
owgi = await tobi.downloadAndSaveMediaMessage(ger)
triggered = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${triggered.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuger1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
exec(`wget ${figuger1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'raimbow':
case 'arcoirirs':
case 'figulgbt':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/rainbow?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'figuwasted':              
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figuwasted = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuwasted.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuwasted1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
exec(`wget ${figuwasted1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'preso':
case 'figupreso':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
preso = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${preso.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
preso1 = `https://api-exteam.herokuapp.com/api/jail?img=${imgtrg}`
exec(`wget ${preso1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'figuinvert':
case 'invert':
case 'figuinvertida':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figuinvertida = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuinvertida.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuinvertida1 = `https://api-exteam.herokuapp.com/api/invert?img=${imgtrg}`
exec(`wget ${figuinvertida1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'figuprocurado':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😔😔`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'attp': 
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Use dessa forma:\nComando: ${p}attp ${SeuNome} gado`)
enviar(mess.espere)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
tobi.sendMessage(from, attp2, sticker, {quoted: mek})
break

case 'attp1': 
//「 ❗ 」By Tobi シ︎ //「 ❗ 」Kratos 愛
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`)
teks = body.slice(6)
enviar(mess.espere)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tobi.sendMessage(from, send, sticker, {quoted: mek})
break	     

case 'attp2': 
//「 ❗ 」By Tobi シ︎ //「 ❗ 」Kratos 愛
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`)                                
teks = body.slice(6)
enviar(mess.espere)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tobi.sendMessage(from, send, sticker, {quoted: mek})
break	

case 'attp3': 
//「 ❗ 」By Tobi シ︎ //「 ❗ 」Kratos 愛
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`)
teks = body.slice(6)
enviar(mess.espere)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tobi.sendMessage(from, send, sticker, {quoted: mek})
break	

case 'attp4': 
//「 ❗ 」By Tobi シ︎ //「 ❗ 」Kratos 愛
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`)
teks = body.slice(6)
enviar(mess.espere)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tobi.sendMessage(from, send, sticker, {quoted: mek})
break	

case 'attp5': 
//「 ❗ 」By Tobi シ︎ //「 ❗ 」Kratos 愛
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`)
teks = body.slice(6)
enviar(mess.espere)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tobi.sendMessage(from, send, sticker, {quoted: mek})
break

case 'attp6': 
//「 ❗ 」By Tobi シ︎ //「 ❗ 」Kratos 愛
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`)
teks = body.slice(6)
enviar(mess.espere)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tobi.sendMessage(from, send, sticker, {quoted: mek})
break	                    

case 'borra':
case 'figuborrada':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
enviar(mess.espere)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break           
//<~FIM DOS COMANDOS DE FIGURINHAS

//<~COMEÇO DOS COMANDOS AUDIOS
case 'playrs': 
const total_gp3 = `${totalchat.length}`
const plars_by_tobi = (linguagem.playrs(pushname, hr, total_gp3, bateria))
wew = fs.readFileSync('./lib/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: plars_by_tobi})
break

case 'play': 
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Exemplo : ${p + comando} Plutão`)	
hay = body.slice(6)
enviar(mess.espere)
play = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=S38aL2CO2Ez4wZjJWxD2vaJKKrC&q=${hay}`)
lagu = await getBuffer(play.result.url_audio)
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'play1':    
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Exemplo : ${p + comando} Plutão`)	
enviar(mess.espere)
play = body.slice(7)
trescapa = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${play}`)
lagu = await getBuffer(trescapa.result.url)
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'play3': 
if (args.length < 1) return enviar(`Exemplo : ${p}play João e maria chico buarque`)	
apykeybysayo = 'akame'
enviar(mess.espere)
anu = await fetchJson(`https://akamer.herokuapp.com/api/yt/playmp3?query=${body.slice(5)}&apikey=${apykeybysayo}`)
if (anu.error) return enviar(anu.error)
infomp3 = `❗MUSÍCA ENCONTRADA\n[❗] enviando sua música aguarde..`				
buffer = await getBuffer(anu.result.thumb)
tobi.sendMessage(from, buffer, image, {quoted: mek})					
msc = await getBuffer(anu.result.url)				
tobi.sendMessage(from, msc, audio, {mimetype: 'audio/mp4', filename: `${q}`, quoted: mek })
break

case 'play2':  
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar('Qual o nome da música?')
enviar(mess.espere)
play = body.slice(7)
play_4 = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${play}`)
buffer = await getBuffer(play_4.result.thumb)
lagu = await getBuffer(play_4.result.url)
tobi.sendMessage(from, buffer, image, {quoted: mek, caption: `${play_4.result.title}`})
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'tomp3': 
//「 ❗ 」By Tobi シ︎
tobi.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return enviar(`Marque um vídeo com ${p}tomp3`)
enviar(mess.espere)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await tobi.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
if (err) return enviar('❌falha ao converter video para mp3❌')
buffer = fs.readFileSync(ran)
tobi.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'rapido':  
case 'nightcore':
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} , Adicionando efeito rápido....`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bmedia = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bmedia} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bmedia)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

case 'devagar': 
case 'slow':
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito devagar....`)
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await tobi.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'esquilo': 
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito esquilo....`)
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await tobi.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'gemuk': 
case 'gigante':
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito gigante....`)
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await tobi.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'fast': 
case 'rapid':
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito rapido 3x....`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
amedia = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${amedia} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(amedia)
if (err) return enviar('Erro')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'baixo': 
case 'bass': 
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito baixo 50hz....`) 
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tobi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'earrape': 
case 'estourar':       
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito estorado....`)
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tobi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'ytsearch':
if (args.length < 1) return enviar(`${emoji_bot} Procure de forma certa!!\nUse ${p + comando} Mc poze`)
const srch = args[0];
try {
var aramas = await yts(srch);
} catch {
return await tobi.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
});
ytresult += `◩ *${NomeDoBot}*`
await tobi.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./lib/logo.jpeg'),quoted: mek, caption: ytresult})
break

case 'sombrio': 
encmmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mehdia = await tobi.downloadAndSaveMediaMessage(encmmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mehdia} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mehdia)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
break
//<~FIM DOS COMANDOS DE MUSICAS

//<~COMEÇO DOS COMANDOS DE NUVEM
case 'nuvem': 
const total_gp4 = `${totalchat.length}`
const nuvem_by_tobi = (linguagem.nuvem(pushname, hr, total_gp4, bateria))
wew = fs.readFileSync('./src/menu.png')
tobi.sendMessage(from, wew, image, {quoted: mek, thumbnail:null, caption: nuvem_by_tobi})
break

case 'liststik':
//「 ❗ 」By Tobi シ︎
teks = `Lista de sticker : \n`
for (let awokwkwk of setiker) {
teks += `⪧ ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*\nUse o comando\n*${p}getstik (nome do pacote)*\nPara pegar adesivos`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
break

case 'getstik':
//「 ❗ 」By Tobi シ︎
namastc = body.slice(9)
try {
result = fs.readFileSync(`./database/temp/stick/${namastc}.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} catch {
enviar('Pacote não registrado')
}
break

case 'addstik':
//「 ❗ 」By Tobi シ︎
if (!isQuotedSticker) return enviar('Responder o adesivo')
if (!isOwner) return enviar(mess.only.ownerB)
svst = body.slice(9)
if (!svst) return enviar('Qual é o nome do adesivo?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await tobi.downloadMediaMessage(boij)
setiker.push(`${svst}`)
fs.writeFileSync(`./database/temp/stick/${svst}.webp`, delb)
fs.writeFileSync('./database/temp/stik.json', JSON.stringify(setiker))
tobi.sendMessage(from, `Adicionando adesivo com sucesso\nConferido por ${p}liststik`, MessageType.text, { quoted: mek })
break

case 'listvn':
case 'vnlist':
//「 ❗ 」By Tobi シ︎
teks = '*Lista de audio:*\n\n'
for (let awokwkwk of audionye) {
teks += `⪧ ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*\nUse comandos\n*${p}getvn (nome do pacote)*\nPara pegar o audio`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
break

case 'getvn':
//「 ❗ 」By Tobi シ︎
namastc = body.slice(7)
try {
buffer = fs.readFileSync(`./database/temp/audio/${namastc}.mp3`)
tobi.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
} catch {
enviar('Pacote não registrado')
}
break

case 'addvn':
//「 ❗ 」By Tobi シ︎
if (!isQuotedAudio) return enviar('Marque um audio!!!')
if (!isOwner) return enviar(mess.only.ownerB)
svst = body.slice(7)
if (!svst) return enviar('Qual é o nome do audio')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await tobi.downloadMediaMessage(boij)
audionye.push(`${svst}`)
fs.writeFileSync(`./database/temp/audio/${svst}.mp3`, delb)
fs.writeFileSync('./database/temp/vn.json', JSON.stringify(audionye))
tobi.sendMessage(from, `Sucesso ao adicionar audio\nConferido por ${p}listvn`, MessageType.text, { quoted: mek })
break

case 'listimg':
//「 ❗ 」By Tobi シ︎
teks = '*Lista Imagem :*\n\n'
for (let awokwkwk of imagenye) {
teks += `⪧ ${awokwkwk}\n`
}
teks += `\n*Total : ${imagenye.length}*\nUse o comando\n*${p}getimg (nome do pacote)*\nPara tirar fotos`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, thumbnail:null, contextInfo: { "mentionedJid": imagenye } })
break

case 'addimg':
//「 ❗ 」By Tobi シ︎
if (!isQuotedImage) return enviar('responder imagem ')
if (!isOwner) return enviar(mess.only.ownerB)
svst = body.slice(8)
if (!svst) return enviar('Qual é o nome da imagem ')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await tobi.downloadMediaMessage(boij)
imagenye.push(`${svst}`)
fs.writeFileSync(`./database/temp/foto/${svst}.jpeg`, delb)
fs.writeFileSync('./database/temp/image.json', JSON.stringify(imagenye))
tobi.sendMessage(from, `Adicionando Video com Sucesso\nConferido por ${p}listimg`, MessageType.text, { quoted: mek })
break

case 'getimg':
//「 ❗ 」By Tobi シ︎
namastc = body.slice(8)
try {
buffer = fs.readFileSync(`./database/temp/foto/${namastc}.jpeg`)
tobi.sendMessage(from, buffer, image, { quoted: mek, caption: `Resultado do banco de dados : ${namastc}.jpeg` })
} catch {
enviar('Pack tidak terdaftar')
}
break

case 'listvid':
//「 ❗ 」By Tobi シ︎
teks = '*Lista de Videos :*\n\n'
for (let awokwkwk of videonye) {
teks += `⪧ ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}*\nUse o comando\n*${p}getvid (nome do pacote)*\nPara pegar um video`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
break

case 'addvid':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return enviar(mess.only.ownerB)
if (!isQuotedVideo) return enviar('Marque um video')
svst = body.slice(8)
if (!svst) return enviar('O nome do video')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await tobi.downloadMediaMessage(boij)
videonye.push(`${svst}`)
fs.writeFileSync(`./database/temp/vídeo/${svst}.mp4`, delb)
fs.writeFileSync('./database/temp/vid.json', JSON.stringify(videonye))
tobi.sendMessage(from, `Sucesso Adicionais Video\nConferido por ${p}listvid`, MessageType.text, { quoted: mek })
break

case 'getvid':
//「 ❗ 」By Tobi シ︎
namastc = body.slice(8)
try {
buffer = fs.readFileSync(`./database/temp/vídeo/${namastc}.mp4`)
tobi.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
} catch {
enviar('Pacote não registrado')
}
break
//<~FIM DOS COMANDOS DE NUVEM

//<~COMEÇO DOS COMANDOS DE JOGOS
case 'jogos': 
const total_gp5 = `${totalchat.length}`
const jogos_by_tobi = (linguagem.jogos(pushname, hr, total_gp5, bateria))
wew = fs.readFileSync('./src/menu.png')
tobi.sendMessage(from, wew, image, {quoted: mek, thumbnail:null, caption: jogos_by_tobi})
break

case 'amongus': 
//「 ❗ 」By Tobi シ︎
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
mentions(`${sus}`, mentioned, true)
break

case 'getname':
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Tag alguém`)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const arroz = tobi.contacts[mentioned] != undefined ? tobi.contacts[mentioned].vname || tobi.contacts[mentioned].notify: undefined
nome = `${arroz}`
tobi.sendMessage(from, nome, text, {quoted: mek})	
break

case 'dado': 
//「 ❗ 」By Tobi シ︎
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/datauser/dados/'+dadu+'.webp')
tobi.sendMessage(from, dador, sticker, {quoted: mek})
break

case 'tagme':
//「 ❗ 」By Tobi シ︎
const tagme = {text: `@${sender.split("@")[0]} 🧙‍♂️`, contextInfo: {mentionedJid: [sender]}}
tobi.sendMessage(from, tagme, text)
break

case "ppt": 
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(linguagem.tterro())
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return enviar(linguagem.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do bot"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
enviar(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
enviar(pph)
}
break

case 'gado': 
//「 ❗ 」By Tobi シ︎
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
enviar(hisil)
break

case 'sn': 
//「 ❗ 」By Tobi シ︎
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return tobi.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${p}sn O ${SeuNome} é um baiano preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
enviar(hasil)
break

case 'chance': 
//「 ❗ 」By Tobi シ︎
tobi.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return tobi.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${p}chance do ${SeuNome} ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
tobi.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break

case 'ttt': 
//「 ❗ 」By Tobi シ︎
const limitrl = getLimit(sender, daily)
if (!isGroup) {
enviar(linguagem.group())
} else if (tttset.tttstatus == "on") {
enviar(`
「❗ESPERE❗ 」

 Alguém já está jogando no momento
 Por favor aguarde 8 minutos`)
} else if (tttset.waitingTime == "on") {
enviar(`
「❗ESPERE 8 MINUTOS❗ 」

Alguém jogou recentemente
Por favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
enviar(`
「❗Defina a dificuldade❗ 」

${p}ttt easy
Dificuldades: easy, normal... 
hard e impossible....`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
enviar(`
「❗ESPERE❗」

Opa, deixe seus amigos jogarem.
também, tente novamente Em 8 minutos.`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`╭◪「❗COMEÇOU❗ 」\n╰───────────────╮  \n╭───────────────╯\n├❏ O Jogo Começou!!!\n├❏ Modo: ${tttset.tttdifficulty}\n╰───────────────╯`, text, tescuk, crtt)
tobi.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
tobi.sendMessage(from,`Caso não saiba como jogar digite: ${p}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'lolizita': 
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Use ${p}loli texto`)
try { 
capaz = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (capaz.error) return enviar('Não sei ler o que não existe 🐤 (converse cmg)')
tobi.sendMessage(from, `${capaz.success} 🐤`, text, {quoted: mek})
} catch {
enviar(linguagem.erro)
}
break 

case 'level':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isLevelingOn) return enviar(linguagem.levelnoton())
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return enviar(linguagem.levelnol())
var requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
var getLevel = getLevelingLevel(sender)
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\n⪧𝖳𝚊𝚐: @${sender.split('@')[0]}\n${up_porcenntagem}`}}}
tobi.sendMessage(from, leveltab(pushname, userLevel, userXp, patt, getLevel), text, {
quoted: level_quetod, contextInfo: {mentionedJid: [sender]}})
.catch(async(err) => {
console.error(err)
await enviar(`Error!\n${err}`)
})
break

case 'ranklevel':
case 'nivelrall':
//「 ❗ 」By Tobi シ︎
if (!isLevelingOn) return enviar(linguagem.levelnoton())
let userh = _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = `*〈👾 Rᴀɴᴋ Lᴇᴠᴇɪs 👾〉*\n\n`
let nom = 0
try {
for (let i = 0; i < 5; i++) {
nom++
leaderboardlvl += `⪧ ⃝༘⃕ꪶ📱ꫂ @${userh[i].id.replace('@s.whatsapp.net', '')}\n⪧ ⃝༘⃕ꪶ👾ꫂ 𝚇ᴘ: ${userh[i].xp}\n⪧ ⃝༘⃕ꪶ🌀ꫂ 𝙻ᴇᴠᴇʟ: ${userh[i].level}\n\n`
}
tobi.sendMessage(from, leaderboardlvl, text, {quoted: mek})
} catch (err) {
console.error(err)
await enviar(`pelo menos 10 usuários para poder acessar o banco de dados`)
}
break

case 'coord': 
//「 ❗ 」By Tobi シ︎
tttset.playertest = sender
if (!isGroup) {
enviar(linguagem.group())
} else if (tttset.tttstatus == "off") {
enviar(`Você ainda não iniciou o jogo\nDigite ${p}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
enviar(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
enviar(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
enviar(`Digite o comando com uma coordenada\nExemplo: ${p}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
enviar(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
tobi.sendMessage(from, `『❗』Parabens *${pushname}* Você ganhou no jogo da velha\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
tobi.sendMessage(from, `『❗』Parabens *${pushname}* Você Ganhou.`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "??"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "??"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
tobi.sendMessage(from, `『❗』Parabens *${pushname}* Você perdeu.\n\n➣  PUNIÇÃO: +${randomTTTXP} XP 🔮`, text)
} else {
tobi.sendMessage(from, `『❗』Vitoria da *${NomeDoBot}* Você Perdeu amigo!`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
tobi.sendMessage(from, `『❗』Empate entre *${pushname}* e *${NomeDoBot}*\n\n ➣ NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
tobi.sendMessage(from, `『❗』Empate entre *${pushname}* e *${NomeDoBot}*`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break

case 'ttthelp': 
//「 ❗ 」By Tobi シ︎
tobi.sendMessage(from, ttthelp(p), text, {quoted:mek})
break

case 'tttme': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
tobi.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tttrank': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 7; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 3) {board += `${i + 1}º 🏆 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 4) {board += `${i + 1}º 💎 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 5) {board += `${i + 1}º 🐂 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 6) {board += `${i + 1}º 🐂 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await tobi.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break

case 'pau':
//「 ❗ 」By Tobi シ︎
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
enviar(hasil)
break

case 'slot': 
//「 ❗ 」By Tobi シ︎
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : ??') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '?? : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : ?? : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`Consiga 3 iguais para ganhar
╭╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╝

${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
enviar(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
tobi.sendMessage(from, slott, text, {quoted: mek})
break
   
case 'gay':
//「 ❗ 」By Tobi シ︎
tobi.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não???'} else if (boiola > 51) {bo = 'você é gay??'
}
hasil = `Você é ${random}% gay\n\n${bo}`
enviar(hasil)
break

case 'roleta': 
//「 ❗ 」By Tobi シ︎
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./database/figurinhas/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
tobi.sendMessage(from, figb, sticker, {quoted: mek})
}, 2100)
}
setTimeout( () => {
tobi.sendMessage(from, morte, text, {quoted: mek})
}, 2300)
break

case 'caracoroa': 
//「 ❗ 」By Tobi シ︎
const cara = fs.readFileSync('./database/datauser/cara/cara.webp');
const coroa = fs.readFileSync('./database/datauser/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
enviar(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./database/datauser/cara/'+fej+'.webp')
tobi.sendMessage(from, cararoa, sticker, {quoted: mek})
break
//<~FIM DOS COMANDOS DE JOGOS

//<~COMEÇO DOS HENTAIS
case 'animes': 
const total_gp6 = `${totalchat.length}`
const animes_by_tobi = (linguagem.animes(pushname, hr, total_gp6, bateria))
wew = fs.readFileSync('./src/menu.png')
tobi.sendMessage(from, wew, image, {quoted: mek, thumbnail:null, caption: animes_by_tobi})
break

case 'ass':
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
var apikey = `akame`
hentanime = await getBuffer(`https://akamer.herokuapp.com/api/ass?apikey=${apikey}`)
tobi.sendMessage(senderr, hentanime, image, {quoted: mek, thumbnail:null})
break

case 'holo':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`) 
res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'erofeet':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'trap':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'eron':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'anal':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'ero':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'cum':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'les':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'holoero':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case  'hentai': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
tk = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(tk.url)
tobi.sendMessage(senderr, buffer, image, {caption: 'Baum né?', quoted: mek, thumbnail:null})
break

case 'eroyuri':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'hentain':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case  'neko':
//「 ❗ 」By Tobi シ︎
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
znn = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(znn.url)
tobi.sendMessage(senderr, buffer, image, {caption: `${comando}, certo?`, quoted: mek, thumbnail:null})
break

case 'lewd':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'solog':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'bdsm':
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
var apikey = `akame`
hentanime = await getBuffer(`https://akamer.herokuapp.com/api/bdsm?apikey=${apikey}`)
tobi.sendMessage(senderr, hentanime, image, {quoted: mek, thumbnail:null})
break

case 'feet':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'feetg':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'classic':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'erokemo':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'nsfwneko':
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
var apikey = `akame`
hentanime = await getBuffer(`https://akamer.herokuapp.com/api/nsfwNeko?apikey=${apikey}`)
tobi.sendMessage(senderr, hentanime, image, {quoted: mek, thumbnail:null})
break

case 'futanari':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'nsfwloli':
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
var apikey = `akame`
hentanime = await getBuffer(`https://akamer.herokuapp.com/api/nsfwloli?apikey=${apikey}`)
tobi.sendMessage(senderr, hentanime, image, {quoted: mek, thumbnail:null})
break

case 'femdom':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'blowjob':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'pwankg':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'lewdk':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case'boobs':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'spank':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'trapnime':
//「 ❗ 」By Tobi シ︎
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
tobir = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(tobir.url)
tobi.sendMessage(senderr, buffer, image, { quoted: mek, thumbnail:null})
break

case 'solo':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'erok':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'feed':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'hololewd':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'lewdkemo':
try {
if (!isGroup) enviar(mess.espere)
if (isGroup) enviar(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break
//<~FIM DOS COMANDOS DE HENTAI

//<~COMEÇO DOS COMANDOS ANIMES
case 'loli':
enviar(mess.espere)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/randomloli?apikey=Ikyy69`)
img = await getBuffer(anu.link)
tobi.sendMessage(from, img, image, { quoted: mek, thumbnail:null})
break

case 'waifu':
enviar(mess.espere)
anu = (`https://bx-hunter.herokuapp.com/api/sfw/waifu?apikey=Ikyy69`)
img = await getBuffer(anu)
tobi.sendMessage(from, img, image, { quoted: mek, thumbnail:null})
break

case 'abraço':
enviar(mess.espere)
lolizita_2 = (`https://bx-hunter.herokuapp.com/api/sfw/cuddle?apikey=Ikyy69`)
img = await getBuffer(lolizita_2)
tobi.sendMessage(from, img, image, {quoted: mek, thumbnail:null})
break

case 'shinobu':
enviar(mess.espere)
lolizita_3 = (`https://bx-hunter.herokuapp.com/api/sfw/shinobu?apikey=Ikyy69`)
img = await getBuffer(lolizita_3)
tobi.sendMessage(from, img, image, {quoted: mek, thumbnail:null})
break

case 'ahegao':
enviar(mess.espere)
var apikey = `akame`
hentanime = await getBuffer(`https://akamer.herokuapp.com/api/ahegao?apikey=${apikey}`)
tobi.sendMessage(from, hentanime, image, {quoted: mek, thumbnail:null})
break

case 'lolizinha':
enviar(mess.espere)
var apikey = `akame`
lolizinha = await getBuffer(`https://akamer.herokuapp.com/api/loli?apikey=${apikey}`)
tobi.sendMessage(from, lolizinha, image, {quoted: mek, thumbnail:null})
break

case 'bully':
enviar(mess.espere)
lolizita_4 = (`https://bx-hunter.herokuapp.com/api/sfw/bully?apikey=Ikyy69`)
img = await getBuffer(lolizita_4)
tobi.sendMessage(from, img, image, { quoted: mek, thumbnail:null})
break

case 'shota':
enviar(mess.espere)
var apikey = `akame`
shota = await getBuffer(`https://akamer.herokuapp.com/api/shotas?apikey=${apikey}`)
tobi.sendMessage(from, shota, image, {quoted: mek, thumbnail:null})
break

case 'nekoa':
enviar(mess.espere)
lolizita_6 = (`https://bx-hunter.herokuapp.com/api/sfw/neko?apikey=Ikyy69`)
img = await getBuffer(lolizita_6)
tobi.sendMessage(from, img, image, { quoted: mek, thumbnail:null})
break

case  'megumin':
//「 ❗ 」By Tobi シ︎
enviar(mess.espere)
tobiu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(tobiu.url)
tobi.sendMessage(from, buffer, image, {caption: `${comando}, certo?`, quoted: mek, thumbnail:null})
break

case 'zoro': case 'nami': case 'carrot': case 'buggy':
case 'shanks': case 'ace': case 'naruto': case 'sakura':
case 'hinata': case 'madara': case 'sasuke': case 'obito':
case 'shikamaru': case 'shikaku': case 'shikadai': case 'asuma': 
case 'luffy':
enviar(mess.espere)
teks = `${comando}`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return enviar('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
break

case 'pinterest':
enviar(mess.espere)
teks = `${q}`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return enviar('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
break
//<~FIM DOS COMANDOS DE ANIMES

//<~COMEÇO DOS COMANDOS DO DONO
case 'criador': 
const total_gp7 = `${totalchat.length}`
const dono_by_tobi = (linguagem.dono(pushname, hr, total_gp7, bateria))
wew = fs.readFileSync('./src/menu.png')
tobi.sendMessage(from, wew, image, {quoted: mek, thumbnail:null, caption: dono_by_tobi})
break

case 'bateria':
if (!isOwner) return  enviar(linguagem.ownerB())
enviar(linguagem.bateria(baterai, porcentagem))
break

case 'bc':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return  enviar(linguagem.ownerB())
if (args.length < 1) return enviar('Cadê o texto?')
tobis = await tobi.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await tobi.downloadMediaMessage(encmedia)
for (let _ of anu) {
tobi.sendMessage(_.jid, buff, image, {caption: `╭━━━━━── • ──━━━━━\n┃⋟ 𝚃ʀᴀɴsᴍɪssᴀ̃ᴏ ᴅᴇ 𝙰ᴠɪsᴏ\n┃⋟ ᴅᴇ: ${pushname}\n╰━━━━━── • ──━━━━━\n╭━━━━━── • ──━━━━━\n╰ ⋟ 𝚃ʀᴀɴsᴍɪssᴀ̃ᴏ:\n${q}`})
}
enviar('Transmissão enviada com sucesso')
} else {
for (let _ of tobis) {
sendMess(_.jid, `╭━━━━━── • ──━━━━━\n┃⋟ 𝚃ʀᴀɴsᴍɪssᴀ̃ᴏ ᴅᴇ 𝙰ᴠɪsᴏ\n┃⋟ ᴅᴇ: ${pushname}\n╰━━━━━── • ──━━━━━\n╭━━━━━── • ──━━━━━\n╰ ⋟ 𝚃ʀᴀɴsᴍɪssᴀ̃ᴏ:\n${q}`)
}
enviar('Transmissão enviada com sucesso')
}
break

case 'bcstik':
case 'bcfig':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return enviar('Quem é Você, Você não é meu dono ???')
if (!isQuotedSticker) return enviar('Marque uma figurinha!!!')
bcsticker = await tobi.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await tobi.downloadMediaMessage(encmedia)
for (let _ of bcsticker) {
tobi.sendMessage(_.jid, bc, sticker) 
}
enviar(`Figurinha envianda para: ${totalchat.length} chats`)
}
break

case 'clone': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return  enviar(linguagem.ownerB())
if (args.length < 1) return enviar('Mencione quem devo roubar a foto de perfil')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await tobi.getProfilePicture(id)
buffer = await getBuffer(pp)
tobi.updateProfilePicture(botNumber, buffer)
mentions(`Roubei a foto de perfil de: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
enviar('ocorreu um erro')
}
break

case 'block':
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return enviar(linguagem.ownerB(ownerName))
tobi.blockUser(`${body.slice(8)}@c.us`, "add")
tobi.sendMessage(from, `Usuário bloqueado`, text, {quoted: mek})
break

case 'ban': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return  enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot`
mentions(`${susp}`, mentioned, true)   
break

case 'unban': 
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return  enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot`
mentions(`${susp}`, mentioned, true)   
break

case 'antipalavras':
//「 ❗ 」By Tobi シ︎
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return enviar(`[📍] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return enviar(`[❗]ativar/desativar, Exemplo ${p + comando} ativar`)
if (args[0] === 'on') {
if (isPalavrão) return enviar('*Já esta ativado...*')
palavrão.push(from)
fs.writeFileSync('./database/arquivos/palavrão.json', JSON.stringify(palavrão))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
palavrão.splice(from, 1)
fs.writeFileSync('./database/arquivos//palavrão.json', JSON.stringify(palavrão))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]on/off, Exemplo ${p + comando} on`)
}
break

case 'addpalavra':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return  enviar(linguagem.ownerB())
if (!isPalavrão) return enviar(`『❗』A função anti palavras está desativada`)
if (args.length < 1) return enviar( `Use assim : ${p + comando} [palavra]. exemplo ${p + comando} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./lib/palavras.json', JSON.stringify(palavra))
await enviar(`Palavra *${q}* adicionado na lista com sucesso!`)
break

case 'delpalavra':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return  enviar(linguagem.ownerB())
if (!isPalavrão) return enviar(`『❗』A função anti palavras está desativada`)
if (args.length < 1) return enviar( `Use assim : ${p + comando} [palavra]. exemplo ${p + comando} puta`)
let dbw = body.slice(12)
const position = palavra.indexOf(dbw)
palavra.splice(position, 1)
fs.writeFileSync('./lib/palavras.json', JSON.stringify(palavra))
await enviar(`Palavra *${q}* removida da lista com sucesso!`)
break 

case 'listname':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return  enviar(linguagem.ownerB())
if (!isPalavrão) return enviar(`『❗』A função anti palavras está desativada`)
teks = `Lista de palavras: \n\n`
for (let ahzhgxnshxg of palavra) {
teks += `⪧ ${ahzhgxnshxg}\n`
}
teks += `\nTotal : ${palavra.length}\nUse o comando\n${p}Addpalavra『Nome』\nPara adicionar texto\n\n E use o comando\n${p}Delpalavra『Nome』\nPara tirar texto`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": palavra } })
break

case 'mystat':
 if (!isOwner) return enviar('Este comando e so pro meu criador')
var groups = tobi.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = tobi.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
timestamp = speed();
totalChat = await tobi.chats.all()
charge = charging ? 'sim' : 'não'
listrik = charging ? '⚡' : 'ga di cas'
latensi = speed() - timestamp
var total = math(`${groups.length}*${privat.length}`)
teks = `
┌════════════════⊷
└┬ ✘▓⫯️ 𝖨𝗇𝖿𝗈 𝖽𝗈 𝖡𝗈𝗍 ⫰▓✘
   │⪧ 𝖵𝖾𝗅𝗈𝖼𝗂𝖽𝖺𝖽𝖾: ${latensi.toFixed(4)} S𝖾𝖼𝗈𝗇𝖽
   │⪧ 𝚃𝖾𝗆𝗉𝗈 𝖺𝗍𝗂𝗏𝗈: ${temporizado(uptime)} 
┌┤⪧ 𝚃𝗈𝗍𝖺𝗅 𝖽𝖾 𝖼𝗁𝖺𝗍𝗌: ${totalChat.length}
┃│⪧ 𝚃𝗈𝗍𝖺𝗅 𝖽𝖾 𝗀𝗋𝗎𝗉𝗈𝗌: ${groups.length}
┃│⪧ 𝚃𝗈𝗍𝖺𝗅 𝖽𝖾 𝗎𝗌𝗎𝖺𝗋𝗂𝗈𝗌 𝗇𝗈 𝗉𝗏 𝖽𝗈 𝖻𝗈𝗍: ${privat.length}
┃╰══════════════⊷
└╦═══════════════⊷
┌┤ ✘▓⫯️ 𝖨𝗇𝖿𝗈 𝖽𝗈 𝖢𝖾𝗅𝗎𝗅𝖺𝗋 ⫰▓✘
┃╞══════════════⊷
┃│⪧ 𝙱𝖺𝗍𝖾𝗋𝗂𝖺: ${baterai}
┃│⪧ 𝚄𝗌𝗈 𝖽𝖾 𝗋𝖺𝗆: ${ram2}
┃│⪧ 𝙿𝗅𝖺𝗍𝖺𝖿𝗈𝗋𝗆𝖺: ${os.platform()}
┃│⪧ 𝙽𝗈𝗆𝖾 𝖽𝗈 𝗁𝗈𝗌𝗍: ${os.hostname()}
┃│⪧ 𝚅𝖾𝗋𝗌𝖺̃𝗈 𝖽𝗈 𝖼𝖾𝗅𝗎𝗅𝖺𝗋: ${tobi.user.phone.os_version}
┃│⪧ 𝚃𝖾𝗆𝗉𝗈 𝖽𝖾 𝖺𝗍𝗂𝗏𝗂𝖽𝖺𝖽𝖾: ${temporizado(os.uptime())}
┃│⪧ 𝚅𝖾𝗋𝗌𝖺̃𝗈 𝖽𝗈 𝗐𝗁𝖺𝗍𝗌𝖺𝗉𝗉: ${tobi.user.phone.wa_version}
┃│⪧ 𝙼𝗈𝖽𝖾𝗅𝗈 𝖽𝗈 𝖽𝗂𝗌𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝗈: ${tobi.user.phone.device_model}
┃└══════════════⊷
└════════════════⊷`
enviar(`${teks}`)
break

case 'setname':
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Use ${p + comando} Churrasco-Bot`)
if (!isOwner) return  enviar(linguagem.ownerB())
NomeDoBot = args[0]
enviar(`*O nome do bot foi alterado com sucesso para*: ${q}`)
break 		 		

case 'setprefix':
//「 ❗ 」By Tobi シ︎
if (args.length < 1) return enviar(`Use ${p + comando} !`)
if (!isOwner) return  enviar(linguagem.ownerB())
p = args[0]
enviar(`*O prefix do bot foi alterado com sucesso para*: ${q}`)
break 		 		

case 'tagstick':
if (!isOwner) return enviar(linguagem.ownerB())
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const enmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await tobi.downloadAndSaveMediaMessage(enmedia, filename = getRandom())
var value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: {
mentionedJid: mem
},
quoted: mek
}
ini_buffer = fs.readFileSync(filePath)
tobi.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(filePath)
} else {
enviar(`Marque um sticker para que eu mencione todos com ele`)
}
break

case 'tagimg':
if (!isOwner) return enviar(linguagem.ownerB(ownerName))
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const ncmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await tobi.downloadAndSaveMediaMessage(ncmedia, filename = getRandom())
var value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: {
mentionedJid: mem
},
quoted: mek
}
ini_buffer = fs.readFileSync(filePath)
tobi.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(filePath)
} else {
enviar(`Marque uma imagem para que eu mencione todos com ela`)
}
break

case 'ping':
//「 ❗ 」By Tobi シ︎
var timestamp = speed();
var latensi = speed() - timestamp
tobi.updatePresence(from, Presence.composing)
uptime = process.uptime()
enviar(linguagem.speed(latensi))
break

case 'visuchat':
//「 ❗ 」By Tobi シ︎
const readallid = await tobi.chats.all()
tobi.setMaxListeners(25)
for (let xyz of readallid) {
await tobi.chatRead(xyz.jid)
}
tobi.sendMessage(from, `Pronto`, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": "Todos os chats foram vistos",
'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')
}
}
}
})
break

case 'bloqueados': 
//「 ❗ 」By Tobi シ︎
teks = 'Esta é uma lista de números bloqueados :\n'
for (let block of blocked) {
teks += `~> @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
tobi.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
break

case 'desligar':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return enviar(linguagem.ownerB)
enviar('Bot desligado')
setTimeout(() => {
tobi.close()
}, 3000)
break

case 'reiniciar': 
//「 ❗ 」By Tobi シ︎
if (!isOwner) return enviar(linguagem.ownerB())
npm = `npm start`
enviar("Aguarde, Estou Reiniciando...")
exec(npm, (err, stdout) => {
if(err) return tobi.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
tobi.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break

case 'clearchat': 
case 'clearall':
case 'clear-all':
//「 ❗ 」By Tobi シ︎
if (!isOwner) return  enviar(linguagem.ownerB())
tobif = await tobi.chats.all()
list_chat = await tobi.chats.all()
for (let chat of list_chat) {
tobi.modifyChat(chat.jid, "delete", {includeStarred: false})
}
tobi.sendMessage(from, `Pronto`, text, {
quoted: { key: {fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"caption": `Todos os chats foram apagados`
}
}
}
})
break
//<~FIM DOS COMANDOS DE DONOS

case 'logos': 
const total_gp8 = `${totalchat.length}`
const logos_by_tobi = (linguagem.logos(pushname, hr, total_gp8, bateria))
wew = fs.readFileSync('./src/menu.png')
tobi.sendMessage(from, wew, image, {quoted: mek, thumbnail:null, caption: logos_by_tobi})
break

case 'magmahot':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
magmahot = await fetchJson(`https://akamer.herokuapp.com/api/textpro/magmahot?apikey=akame&text=${texto}`)
buffer = await getBuffer(magmahot.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case '3dstone':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
dstone = await fetchJson(`https://akamer.herokuapp.com/api/textpro/3Dstone?apikey=akame&text=${texto}`)
buffer = await getBuffer(dstone.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'harrypotter':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
harrypotter = await fetchJson(`https://akamer.herokuapp.com/api/textpro/HarryPotter?apikey=akame&text=${texto}`)
buffer = await getBuffer(harrypotter.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'embossed':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
embossed = await fetchJson(`https://akamer.herokuapp.com/api/textpro/embossed?apikey=akame&text=${texto}`)
buffer = await getBuffer(embossed.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'berry':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
berry = await fetchJson(`https://akamer.herokuapp.com/api/textpro/berry?apikey=akame&text=${texto}`)
buffer = await getBuffer(berry.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'artpaper':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
artpaper = await fetchJson(`https://akamer.herokuapp.com/api/textpro/artpaper?apikey=akame&text=${texto}`)
buffer = await getBuffer(artpaper.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'greenhorror':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
greenhorror = await fetchJson(`https://akamer.herokuapp.com/api/textpro/greenhorror?apikey=akame&text=${texto}`)
buffer = await getBuffer(greenhorror.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'sciencefiction':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
sciencefiction = await fetchJson(`https://akamer.herokuapp.com/api/textpro/sciencefiction?apikey=akame&text=${texto}`)
buffer = await getBuffer(sciencefiction.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'transformer':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
transformer = await fetchJson(`https://akamer.herokuapp.com/api/textpro/transformer?apikey=akame&text=${texto}`)
buffer = await getBuffer(transformer.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'brokenglass':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
brokenglass = await fetchJson(`https://akamer.herokuapp.com/api/textpro/Brokenglass?apikey=akame&text=${texto}`)
buffer = await getBuffer(brokenglass.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case '3dneonlight':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
dneonlight = await fetchJson(`https://akamer.herokuapp.com/api/textpro/3Dneonlight?apikey=akame&text=${texto}`)
buffer = await getBuffer(dneonlight.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'impressiveglitch':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
impressiveglitch = await fetchJson(`https://akamer.herokuapp.com/api/textpro/impressiveglitch?apikey=akame&text=${texto}`)
buffer = await getBuffer(impressiveglitch.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case '3dglossy':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
dglossy = await fetchJson(`https://akamer.herokuapp.com/api/textpro/3Dglossy?apikey=akame&text=${texto}`)
buffer = await getBuffer(dglossy.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'neondevilwings':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
neondevilwings = await fetchJson(`https://akamer.herokuapp.com/api/textpro/neondevilwings?apikey=akame&text=${texto}`)
buffer = await getBuffer(neondevilwings.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case '3dunderwater':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
dunderwater = await fetchJson(`https://akamer.herokuapp.com/api/textpro/3Dunderwater?apikey=akame&text=${texto}`)
buffer = await getBuffer(dunderwater.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'bearmascot':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
bearmascot = await fetchJson(`https://akamer.herokuapp.com/api/textpro/bearmascot?apikey=akame&text=${texto}`)
buffer = await getBuffer(bearmascot.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
 break

case 'wonderfulgraffiti':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
wonderfulgraffiti = await fetchJson(`https://akamer.herokuapp.com/api/textpro/wonderfulgraffiti?apikey=akame&text=${texto}`)
buffer = await getBuffer(wonderfulgraffiti.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'futuristicneon':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
futuristicneon = await fetchJson(`https://akamer.herokuapp.com/api/textpro/futuristicneon?apikey=akame&text=${texto}`)
buffer = await getBuffer(futuristicneon.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'snow':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
snow = await fetchJson(`https://akamer.herokuapp.com/api/textpro/snow?apikey=akame&text=${texto}`)
buffer = await getBuffer(snow.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'cloud':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
cloud = await fetchJson(`https://akamer.herokuapp.com/api/textpro/cloud?apikey=akame&text=${texto}`)
buffer = await getBuffer(cloud.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'luxurygold':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
luxurygold = await fetchJson(`https://akamer.herokuapp.com/api/textpro/luxurygold?apikey=akame&text=${texto}`)
buffer = await getBuffer(luxurygold.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case '3dgradient':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
dgradient = await fetchJson(`https://akamer.herokuapp.com/api/textpro/3Dgradient?apikey=akame&text=${texto}`)
buffer = await getBuffer(dgradient.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'sandsummer':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
sandsummer = await fetchJson(`https://akamer.herokuapp.com/api/textpro/SandSummer?apikey=akame&text=${texto}`)
buffer = await getBuffer(sandsummer.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'sandwriting':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
sandwriting = await fetchJson(`https://akamer.herokuapp.com/api/textpro/SandWriting?apikey=akame&text=${texto}`)
buffer = await getBuffer(sandwriting.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'sandengraved':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
sandengraved = await fetchJson(`https://akamer.herokuapp.com/api/textpro/Sandengraved?apikey=akame&text=${texto}`)
buffer = await getBuffer(sandengraved.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'summerysand':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
summerysand = await fetchJson(`https://akamer.herokuapp.com/api/textpro/summerysand?apikey=akame&text=${texto}`)
buffer = await getBuffer(summerysand.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case '3dglue':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
dglue = await fetchJson(`https://akamer.herokuapp.com/api/textpro/3dglue?apikey=akame&text=${texto}`)
buffer = await getBuffer(dglue.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'metaldarkgold':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
metaldarkgold = await fetchJson(`https://akamer.herokuapp.com/api/textpro/MetalDarkGold?apikey=akame&text=${texto}`)
buffer = await getBuffer(metaldarkgold.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'neonlight':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
neonlight = await fetchJson(`https://akamer.herokuapp.com/api/textpro/NeonLight?apikey=akame&text=${texto}`)
buffer = await getBuffer(neonlight.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case '1917':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
taogx = await fetchJson(`https://akamer.herokuapp.com/api/textpro/1917Style?apikey=akame&text=${texto}`)
buffer = await getBuffer(taogx.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'xmascards3d':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
xmascards3d = await fetchJson(`https://akamer.herokuapp.com/api/textpro/XmasCards3D?apikey=akame&text=${texto}`)
buffer = await getBuffer(xmascards3d.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'blood':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
blood = await fetchJson(`https://akamer.herokuapp.com/api/textpro/Blood?apikey=akame&text=${texto}`)
buffer = await getBuffer(blood.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'halloweenfire':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
halloweenfire = await fetchJson(`https://akamer.herokuapp.com/api/textpro/HalloweenFire?apikey=akame&text=${texto}`)
buffer = await getBuffer(halloweenfire.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'lava':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = baterai
enviar('Pfvr Aguarde...')
lava = await fetchJson(`https://akamer.herokuapp.com/api/textpro/Lava?apikey=akame&text=${texto}`)
buffer = await getBuffer(lava.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'steeltext':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
steeltext = await fetchJson(`https://akamer.herokuapp.com/api/textpro/SteelText?apikey=akame&text=${texto}`)
buffer = await getBuffer(steeltext.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'captainamerica':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
captainamerica = await fetchJson(`https://akamer.herokuapp.com/api/textpro/CaptainAmerica?apikey=akame&text=${texto}`)
buffer = await getBuffer(captainamerica.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'toxic':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
toxic = await fetchJson(`https://akamer.herokuapp.com/api/textpro/Toxic?apikey=akame&text=${texto}`)
buffer = await getBuffer(toxic.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'chocolate':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
chocolate = await fetchJson(`https://akamer.herokuapp.com/api/textpro/Chocolate?apikey=akame&text=${texto}`)
buffer = await getBuffer(chocolate.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'matrix':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
matrix = await fetchJson(`https://akamer.herokuapp.com/api/textpro/Matrix?apikey=akame&text=${texto}`)
buffer = await getBuffer(matrix.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'horrorblood':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
horrorblood = await fetchJson(`https://akamer.herokuapp.com/api/textpro/HorrorBlood?apikey=akame&text=${texto}`)
buffer = await getBuffer(horrorblood.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'thunder2':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
thunder2 = await fetchJson(`https://akamer.herokuapp.com/api/textpro/Thunder2?apikey=akame&text=${texto}`)
buffer = await getBuffer(thunder2.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case '3dbox':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
dbox = await fetchJson(`https://akamer.herokuapp.com/api/textpro/3DBox?apikey=akame&text=${texto}`)
buffer = await getBuffer(dbox.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'naturalleaves':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
naturalleaves = await fetchJson(`https://akamer.herokuapp.com/api/textpro/natural-leaves?apikey=akame&text=${texto}`)
buffer = await getBuffer(naturalleaves.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'blackpink':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
blackpink = await fetchJson(`https://akamer.herokuapp.com/api/textpro/black-pink?apikey=akame&text=${texto}`)
buffer = await getBuffer(blackpink.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'dropwater':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
dropwater = await fetchJson(`https://akamer.herokuapp.com/api/textpro/drop-water?apikey=akame&text=${texto}`)
buffer = await getBuffer(dropwater.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'christmas':  
if (args.length == 0) return enviar(`Exemplo: ${p + comando} ${SeuNome}`)
texto = args.join(" ")
enviar('Pfvr Aguarde...')
christmas = await fetchJson(`https://akamer.herokuapp.com/api/textpro/christmas?apikey=akame&text=${texto}`)
buffer = await getBuffer(christmas.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'pornhub':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi1 = a.split("|")[0]
tobi2 = a.split("|")[1]
pornhub = await fetchJson(`https://akamer.herokuapp.com/api/textpro/porn-hub?apikey=akame&text=${tobi1}&text2=${tobi2}`)
buffer = await getBuffer(pornhub.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'videogame':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi3 = a.split("|")[0]
tobi4 = a.split("|")[1]
videogame = await fetchJson(`https://akamer.herokuapp.com/api/textpro/video-game?apikey=akame&text=${tobi3}&text2=${tobi4}`)
buffer = await getBuffer(videogame.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case 'glitch':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi5 = a.split("|")[0]
tobi6 = a.split("|")[1] //Hm
glitch = await fetchJson(`https://akamer.herokuapp.com/api/textpro/glitch?apikey=akame&text=${tobi5}&text2=${tobi6}`)
buffer = await getBuffer(glitch.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case 'glitchtk':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi7 = a.split("|")[0]
tobi8 = a.split("|")[1]
glitchtk = await fetchJson(`https://akamer.herokuapp.com/api/textpro/glitchtk?apikey=akame&text=${tobi7}&text2=${tobi8}`)
buffer = await getBuffer(glitchtk.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case 'america':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi9 = a.split("|")[0]
tobi10 = a.split("|")[1]
america = await fetchJson(`https://akamer.herokuapp.com/api/textpro/america?apikey=akame&text=${tobi9}&text2=${tobi10}`)
buffer = await getBuffer(america.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case 'silver':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi11 = a.split("|")[0]
tobi12 = a.split("|")[1]
silver = await fetchJson(`https://akamer.herokuapp.com/api/textpro/silver?apikey=akame&text=${tobi11}&text2=${tobi12}`)
buffer = await getBuffer(silver.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case 'silvergalax':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi13 = a.split("|")[0]
tobi14 = a.split("|")[1]
silvergalax = await fetchJson(`https://akamer.herokuapp.com/api/textpro/silvergalax?apikey=akame&text=${tobi13}&text2=${tobi14}`)
buffer = await getBuffer(silvergalax.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case '3dsteal':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi15 = a.split("|")[0]
tobi16 = a.split("|")[1]
dsteal = await fetchJson(`https://akamer.herokuapp.com/api/textpro/3dsteal?apikey=akame&text=${tobi15}&text2=${tobi16}`)
buffer = await getBuffer(dsteal.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case 'stone':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi17 = a.split("|")[0]
tobi18 = a.split("|")[1]
stone = await fetchJson(`https://akamer.herokuapp.com/api/textpro/stone?apikey=akame&text=${tobi17}&text2=${tobi18}`)
buffer = await getBuffer(stone.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case 'lightbulb':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi19 = a.split("|")[0]
tobi20 = a.split("|")[1]
lightbulb = await fetchJson(`https://akamer.herokuapp.com/api/textpro/lightbulb?apikey=akame&text=${tobi19}&text2=${tobi20}`)
buffer = await getBuffer(lightbulb.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case 'space3d':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi21 = a.split("|")[0]
tobi22 = a.split("|")[1]
space3d = await fetchJson(`https://akamer.herokuapp.com/api/textpro/space3D?apikey=akame&text=${tobi21}&text2=${tobi22}`)
buffer = await getBuffer(space3d.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case 'marvelstudios':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi23 = a.split("|")[0]
tobi24 = a.split("|")[1]
marvelstudios = await fetchJson(`https://akamer.herokuapp.com/api/textpro/Marvelstudios?apikey=akame&text=${tobi23}&text2=${tobi24}`)
buffer = await getBuffer(marvelstudios.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case 'marvelstudios2':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi25 = a.split("|")[0]
tobi26 = a.split("|")[1]
anu = await fetchJson(`https://akamer.herokuapp.com/api/textpro/Marvelstudios2?apikey=akame&text=${tobi25}&text2=${tobi26}`)
buffer = await getBuffer(anu.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case 'lionlogo':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi27 = a.split("|")[0]
tobi28 = a.split("|")[1]
lionlogo = await fetchJson(`https://akamer.herokuapp.com/api/textpro/LionLogo?apikey=akame&text=${tobi27}&text2=${tobi28}`)
buffer = await getBuffer(lionlogo.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

 case 'wolflogo':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi29 = a.split("|")[0]
tobi30 = a.split("|")[1]
wolflogo = await fetchJson(`https://akamer.herokuapp.com/api/textpro/WolfLogo?apikey=akame&text=${tobi29}&text2=${tobi30}`)
buffer = await getBuffer(wolflogo.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'wolflogogalaxy':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi31 = a.split("|")[0]
tobi32 = a.split("|")[1]
wolflogogalaxy = await fetchJson(`https://akamer.herokuapp.com/api/textpro/WolfLogoGalaxy?apikey=akame&text=${tobi31}&text2=${tobi32}`)
buffer = await getBuffer(wolflogogalaxy.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'ninjalogo':  
a = body.slice(5)
if (!a.includes("|")) return enviar("Cadê o | fdp?kkkkk")
a = body.slice(comando.length + 2)
tobi33 = a.split("|")[0]
tobi34 = a.split("|")[1]
ninjalogo = await fetchJson(`https://akamer.herokuapp.com/api/textpro/NinjaLogo?apikey=akame&text=${tobi33}&text2=${tobi34}`)
buffer = await getBuffer(ninjalogo.resultado)
tobi.sendMessage(from, buffer, image, {caption: `Pronto...`, quoted: mek, thumbnail:null})
break

case 'celular':
if (!q) return enviar(`Qual celular você está procurando?`)
teks = args.join(' ')
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
const busca_celular = 
`
─━━━━━━━─ • ─━━━━━━─
📝 Titulo: ${anu.judul}
─━━━━━━━─ • ─━━━━━━─
❗Última atualização: ${anu.rilis}
─━━━━━━━─ • ─━━━━━━─
📱 Tamanho do celular: ${anu.ukuran}
─━━━━━━━─ • ─━━━━━━─
⚡ Tipo: ${anu.type}
─━━━━━━━─ • ─━━━━━━─
🗃️ Armazenamento: ${anu.storage}
─━━━━━━━─ • ─━━━━━━─
📴 Tela: ${anu.display}
─━━━━━━━─ • ─━━━━━━─
📳 Polegada: ${anu.inchi}
─━━━━━━━─ • ─━━━━━━─
🔰 Resolução da câmera: ${anu.pixel}
─━━━━━━━─ • ─━━━━━━─
📲 Resolução do video: ${anu.videoPixel}
─━━━━━━━─ • ─━━━━━━─
💭 Ram do celular: ${anu.ram}
─━━━━━━━─ • ─━━━━━━─
👤 Hardware do celular: ${anu.chipset}
─━━━━━━━─ • ─━━━━━━─
⚠️ Bateria: ${anu.batrai}
─━━━━━━━─ • ─━━━━━━─
🔋 Tipo da bateria: ${anu.merek_batre}`
 wew = fs.readFileSync('./lib/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, detectLinks: false, mimetype: Mimetype.gif, thumbnail:null, caption: `${busca_celular}`})
break

case 'report': //info
const bug = `${q}`
 if (args.length > 300) return tobi.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `╭ ⋟ 𝖲𝗎𝗀𝖾𝗌𝗍𝖺̃𝗈 + 𝖱𝖾𝗉𝗈𝗋𝗍𝖾\n├ ⋟ 𝖣𝖾: ${pushname}\n├ ⋟ 𝖭𝗎𝗆𝖾𝗋𝗈: @${sender.split("@s.whatsapp.net")[0]}\n╰━━━━━── • ──━━━━━\n ⋟ 𝖲𝗎𝗀𝖾𝗌𝗍𝖺̃𝗈:\n${bug}`
var options = {text: teks1, contextInfo: {mentionedJid: [sender]},}
tobi.sendMessage(`${OwnerNumber}@s.whatsapp.net`, options, text, {quoted: mek})
enviar("Mensagem enviada ao meu dono; Spam = block + ban.")
break

case 'premium':  
var totalchat = `${totalchat.length}`
const premiun_by_tobi = (linguagem.premium(pushname, hr, totalchat, bateria))
wew = fs.readFileSync('./src/menu.png')
tobi.sendMessage(from, wew, image, {quoted: mek, thumbnail:null, caption: premiun_by_tobi})
break

case 'ddd':
//「 ❗ 」By Tobi シ︎
if (!isOwner && !isPremium) return  enviar(`${emoji_bot} Você não é usuário premium!`)
if (args.length < 1) return enviar(`Use ${p + comando} 94`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
tobi.sendMessage(from, dddlist, text, {quoted: mek})	
break

case 'pinapi':   
if (!isOwner && !isPremium) return  enviar(`${emoji_bot} Você não é usuário premium`)
if (args.length < 1) return enviar(`${emoji_bot} Quer pesquisar algo? Use ${p + comando} Anime loli!!`) 
enviar(mess.espere)
const pes2 = ['0','3','9','8','7','6','5','4','2','1']      
const pes3 = pes2[Math.floor(Math.random() * (pes2.length))]       
const pes1 = ['333.878','988.432','746.748','454.018','893.263','273.064','379.311','283.808','111.878','028.282','930.718','927.283','017.287','018.739','013.543']           
const pes = pes1[Math.floor(Math.random() * (pes1.length))]    
by_tob_hgo = await fetchJson(`https://bx-hunter.herokuapp.com/api/pinterest?text=${q}&apikey=${macarrão}`)
buffer = await getBuffer(by_tob_hgo.image)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `Pesquisa sobre: ${q}`})
break

case 'covidst':
if (!isOwner && !isPremium) return  enviar(`${emoji_bot} Você não é usuário premium!`)
enviar(mess.espere)
teks = args.join(' ')
if (!q) return enviar(`${emoji_bot} Use apenas a sigla do estado e, apenas uma sigla por consulta`)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/brasil?estado=${q}`)
const by_tobi_thiago = `
╭═══════════════⊷
╰╮✙◗ 𝖢𝗈𝗏𝗂𝖽 𝖬𝗎𝗇𝖽𝗈 
╭┤➩ Sigla do estado: ${anu.Sigla_Do_Estado}
┃│➩ Estado: ${anu.Estado_Informado}
┃│➩ Casos desconhecidos: ${anu.Casos_Desconhecidos}
┃│➩ Casos encontrados: ${anu.Casos_Encontrados}
┃│➩ Mortes encontradas: ${anu.Mortes_Encontradas}
┃│➩ Previsões Econtradas: ${anu.Previsoes_Encontradas}
┃╰═════════════⊷
╰══════「★」═════⊷`
wew = fs.readFileSync('./lib/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, detectLinks: false, mimetype: Mimetype.gif, thumbnail:null, caption: `${by_tobi_thiago}`})
break

case 'xsearch':
case 'xs':
if (!isOwner && !isPremium) return  enviar(`${emoji_bot} Você não é usuário premium!`)
if (!q) return enviar('Nome do que deseja pesquisar😈?')
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${q}&apikey=${macarrão}`)
enviar(mess.espere)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `🍟Titulo : ${x.title}\n\n`
ini_txt += `🍟Info : ${x.info}\n\n`
ini_txt += `🍟Link : ${x.link}\n\n\n`
}
lolizita_7 = `${ini_txt}───────────────\n\n`
tobi.sendMessage(from, lolizita_7, text, {quoted: mek})
break

case 'sticknime':
if (!isOwner && !isPremium) return  enviar(`${emoji_bot} Você não é usuário premium!!`)
enviar(mess.espere)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break

case 'playstore':
if (!isOwner && !isPremium) return  enviar(`${emoji_bot} Você não é usuário premium!!`)
if (args.length < 1) return enviar(`${emoji_bot} Quer pesquisar algo? Use ${p + comando} Whatsapp!!`) 
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/playstore-search?text=${q}&apikey=${macarrão}`)
buffer = await getBuffer(`${anu.data[0].icon}`)
teks = args.join(' ')            
const play_store = 
`  「🍛PLAY STORE🍛」
            
📄 Titulo: ${anu.data[0].title}
📤 Id da empresa: ${anu.data[0].appId}
🤵🏻 Criador: ${anu.data[0].developer}
🏦 Empresa: ${anu.data[0].developerId}
⛩️ Tipo: ${anu.data[0].priceText}
💵 Preço: ${anu.data[0].price}
📓 Resumo: ${anu.data[0].summary}
📊 Pontuação: ${anu.data[0].scoreText}
🔎 Total de pontuação: ${anu.data[0].score}
📂 Link do app: ${anu.data[0].url}`
tobi.sendMessage(from, buffer, image, { quoted: mek, thumbnail:null, caption: `${play_store}`})
break

case 'amazon': 
if (!isOwner && !isPremium) return  enviar(`${emoji_bot} Você não é usuário premium!`)
if (args.length < 1) return enviar(`${emoji_bot} Quer pesquisar algo? Use ${p + comando} iphone!!`) 
teks = args.join(' ')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/amazon?text=${q}&apikey=${macarrão}`)
item = 
`  「🍙 AMAZON PRIME 🍙」

📂Item: ${anu.item}
📊Visualizações: ${anu.review}
🔎Avaliação: ${anu.rating}
💵Preço: ${anu.price}
📤Pontuação: ${anu.score}
⚖️Disconto: ${anu.discounted}
🛍️patrocinios: ${anu.sponsored}
⚠️Melhor preço: ${anu.bestseller}
‼️Amazon primes: ${anu.amazonprime}
🐣Link do produto: ${anu.url}` 
wew = fs.readFileSync('./lib/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, detectLinks: false, mimetype: Mimetype.gif, thumbnail:null, caption: `${item}`})
break

case 'rename':
//「 ❗ 」By Tobi シ︎
if (!isOwner && !isPremium) return  enviar(`${emoji_bot} Você não é usuário premium!`)
var namaPackss = q.substring(0, q.indexOf('|') - 0)
var authorPackss = q.substring(q.lastIndexOf('|') + 1)
texto = body.slice(7)
if (isDoubleByte(texto)) return enviar('🤖⚠️ Não é permitido letras modificadas!!')
stiker_wm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await tobi.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
tobi.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: mek})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
fs.unlinkSync('undefined.webp')
})
});
break

case 'covidmundo':
if (!isOwner && !isPremium) return  enviar(`${emoji_bot} Você não é usuário premium!`)
enviar(mess.espere)
teks = args.join(' ')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/mundial`)
const bya_tobi_thiago = `
╭═══════════════⊷
╰╮✙◗ 𝖢𝗈𝗏𝗂𝖽 𝖬𝗎𝗇𝖽𝗈 
╭┤➩ Total de casos: ${anu.Total_Casos}
┃│➩ Total de casos ativos: ${anu.Total_Casos_Ativos}
┃│➩ Total de casos criticos: ${anu.Total_Casos_Criticos}
┃│➩ Total de casos hoje: ${anu.Total_Casos_Hoje}
┃│➩ Total de mortes: ${anu.Total_Mortes}
┃│➩ Total de mortes hoje: ${anu.Total_Mortes_Hoje}
┃│➩ Total de recuperados: ${anu.Total_Recuperados}
┃╰═════════════⊷
╰══════「★」═════⊷`
wew = fs.readFileSync('./lib/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, detectLinks: false, mimetype: Mimetype.gif, thumbnail:null, caption: `${bya_tobi_thiago}`})
break 

default:

if (body == `${p + comando}`)  {
teks = `${comando}`
enviar(`『❗』Comando não encontrado! buscando algo sobre: *${comando}*`)
res = await googleImage(teks, google)
function google(error, result){
if (error){ return enviar('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `Resultado do comando usado: ${teks}`, thumbnail: null})
console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('CMD', "red"), ']', color('Comando', "yellow"), color(`${p}${comando}`, "yellow"), color('não registrado', "yellow"), color('de', "yellow"), color(pushname, "yellow"))
}
}
}
}
} catch (e) {
e = String(e)
if (e.includes('this.isZero')){
return
}
console.log('Error : %s', color(e, 'red'))
}
})
}
starts()
//FIM
