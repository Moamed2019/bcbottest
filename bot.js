const Discord = require('discord.js');
const client = new Discord.Client();
console.log("3bker");
var prefix = "1";
client.on("message", message => {

            if (message.content.startsWith(prefix + "la")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n 1{m}`);
})
 message.channel.send(`\`1{message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : darkxx`);
        console.log(`----------------`);
      console.log(`ON 1{client.guilds.size} Servers '     Script By : black ' `);
    console.log(`----------------`);
  console.log(`Logged in as 1{client.user.tag}!`);
client.user.setGame(`1bc |MadeBy|محمد`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.login(process.env.BOT_TOKEN);
