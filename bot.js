    
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
    if (message.content.startsWith("+obc")) {
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



 








client.login(process.env.BOT_TOKEN);
