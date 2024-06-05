/*####################################
                 F E N I X - V 15
             MADE BY F E N I X ID SERVER
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/Fenix-server
👥 Github: https://github.com/Botdevillozan
🤖 Youtube https://youtube.com/@fenix_programmer
#####################################*/













const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
