const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require("fs");

const prefix = "+";

const adminprefix = "+"; 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log(' ID [ " ${user.id} "]')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on("message", message => {
    if (message.content.startsWith("+bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;   // Alpha Codes Ghost
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {   // Alpha Codes Ghost
  m.send(`${argresult}\n ${m}`);// Alpha Codes Ghost 
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `); // Alpha Codes Ghost
  message.delete();
  };
  });


//bc online

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+ownerbc')){
if (message.author.id !== '444126346676011028') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
if(!message.author.id === '444126346676011028') return;
message.channel.sendMessage('Now Sending |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


  client.on("message", message => {   // Alpha Codes Ghost
   
              if (message.content.startsWith(prefix + "obc")) {    // Alpha Codes Ghost
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;   // Alpha Codes Ghost
    let args = message.content.split(" ").slice(1);  // Alpha Codes Ghost
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {  // Alpha Codes Ghost
   m.send(`${argresult}\n ${m}`);   // Alpha Codes Ghost
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;  // Alpha Codes Ghost
if (message.content.startsWith("#avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });


  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "offbc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'Offline').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });



 








client.login(process.env.BOT_TOKEN);
