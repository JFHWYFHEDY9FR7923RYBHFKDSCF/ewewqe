    
const Discord = require('discord.js');
const devs = ['444126346676011028'];
const db = require('quick.db');
const premium = ['408028251731001354']
const client = new Discord.Client();  
const bot = new Discord.Client();  
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');  
const fs = require("fs");
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id');
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set();
const jimp = require('jimp');  
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it');
const queue = new Map();
const zalgo = require('zalgolize');  
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat');
const pretty = require('pretty-ms')
const prefix = '#';
const adminprefix = '#';
var table = require('table').table

client.on('ready', () => {
client.user.setStatus("dnd");
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
    if (message.content.startsWith("#obc")) {
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




  client.on("message", message => {   // Alpha Codes Ghost
   
              if (message.content.startsWith(prefix + "bc")) {    // Alpha Codes Ghost
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

  client.on('message', msg => {
    if(msg.content === '#help')
    msg.reply('Check Your DM :white_check_mark:')  // Alpha Codes Ghost
  });
  
  
  client.on("message", message => {
    if (message.content === "#help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب
  
       ${prefix}obc | لأرسال برود كاست للكل  

       ${prefix}bc  |  لأرسال برود كاست للأونلاين

       ${prefix}offbc | لأرسال برود كاست للـ اوفلاين

       ** `)
   message.author.sendEmbed(embed)
   
   }
   });

 client.on("message", message => {
    if (message.content === "#help-dev") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Commands Dev|اوامر ديف
       ${prefix}sets | لعمل البوت ستريم
       
       ${prefix}setg | لعمل البوت بلاينق

       ${prefix}setw | لعمل البوت يشاهد

       ${prefix}setl | لعمل البوت يسمع اغاني

       ${prefix}setava | لتغيير صورة البوت

       ${prefix}setname | لتغيير اسم البوت
                    
       ** `)
   message.author.sendEmbed(embed)
   
   }
   });


const developers = ["444126346676011028","569233904389718028"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');  // Alpha Codes Ghost
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {  // Alpha Codes Ghost
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");  // Alpha Codes Ghost
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});





client.login(process.env.BOT_TOKEN);
