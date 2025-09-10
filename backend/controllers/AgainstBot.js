import { spawn } from 'node:child_process';



// stockfish start karna sikh liya 
const AgainstBot =(req , res)=>{
const start = spawn('D:/chess/stcokfish/stockfish/stockfish-windows-x86-64-avx2.exe',{
    shell : true
});

start.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
  if(data)
 res.send(data.toString());
});

start.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
  if(data)
  res.send(data.toString());
});

start.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

}

export default AgainstBot;