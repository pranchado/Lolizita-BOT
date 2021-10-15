console.log('Iniciando bot...')
const {
  WAConnection,
  } = require('@adiwajshing/baileys');
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')
const tobi = new WAConnection()

async function aaa() {
const totalchat = await tobi.chats.all()
}

//console.log(`eita : ${totalchat}`)
CFonts.say('By©_Tobizinho', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`Lolizita-BOT|V 3.0`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
function start(file) {
  let args = [path.join(file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    console.log('[RECEBIDO]', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  .on('error', e => {
    console.error(e)
    fs.watchFile(args[0], () => {
      start()
      fs.unwatchFile(args[0])
    })
  })
}
start('Lolizita.js')
