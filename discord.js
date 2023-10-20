const {Client, Events, GatewayIntentBits} = require ('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
})

function ClientISReady(c){
    console.log("Logged in ass:" + c.user.tag);
}
function OnMessage(message){
    const channel = client.channels.cache.get('1161927632120717315');
    if(message.author.bot == false){
      const content = message.content;
      if(content.startsWith("turbokick")){
        let splitContent = content.split("");
        channel.send("i'm trying to kick" + splitContent[1] + "but I don't have legs");
      }
    }
}
client.once(Events.ClientReady, ClientISReady);
client.on(Events.MessageCreate, OnMessage)

client.login("MTE2MTk5Mzg4OTUwMzI2ODkzNA.GhvS-a.asHeTErw4IIxNVkDyTTMEUX8-zFOa3zDLtQ8OI")