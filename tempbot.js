const Discord = require ("discord.js");
const client = new Discord.Client();

// Set - as PREFIX
const PREFIX = "-";

client.on ("ready", () => {
  console.log ("TempBot v2 Started");
  client.user.setActivity ("Boop Beep | -help");
});

// Token
client.login(process.env.BOT_TOKEN);

// Server IDs
var serverDeCipher = "261286578385584138";
var serverWOR = "434153569529233458";

// Arrays
// Rock Paper Scissors
var rps = [
  "Rock",
  "Paper",
  "Scissors",
];

// Card-Jitsu
var cj = [
  "Fire",
  "Water",
  "Snow",
];

// 8Ball Responses
var responses = [
  "Without a doubt.",
  "Yes, definitely, absolutely.",
  "I guess.",
  "It's possible.",
  "no u",
  "Don't count on it.",
  "Outlook not so good.",
];

// CPR Rooms
var rooms = [
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/e/e2/Beach_2006.png/revision/latest?cb=20170405193607",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/a/a1/Beacon_2011.png/revision/latest?cb=20171217060823",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/a/af/Boiler_Room.png/revision/latest?cb=20170327092258",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/5/5e/IMG_0876.PNG/revision/latest?cb=20170407095933",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/5/55/Cave_Mine.png/revision/latest?cb=20171126231447",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/5/50/Coffee_Shop_2005.png/revision/latest?cb=20170408075549",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/c/c0/Cove_2009.png/revision/latest?cb=20170629010633",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/0/0a/Dance_Lounge.png/revision/latest?cb=20170331082331",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/f/ff/Dock_2009.png/revision/latest?cb=20171128050737",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/4/47/Dojo_CJ.png/revision/latest?cb=20170815211239",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/0/03/Dojo_Courtyard_CJ.png/revision/latest?cb=20170815211300",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/6/66/Everyday_Phoning_Facility.png/revision/latest?cb=20171128032146",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/c/c1/Forest.png/revision/latest?cb=20171128051545",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/3/38/IMG_0878.PNG/revision/latest?cb=20170407111308",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/6/69/Hidden_Lake.png/revision/latest?cb=20170331074552",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/a/a6/Ice_Rink_2010.png/revision/latest?cb=20171010141355",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/2/2f/IMG_0887.PNG/revision/latest?cb=20170410074925",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/b/be/Lighthouse.png/revision/latest?cb=20170224212425",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/8/8e/Lodge_Attic_2006.png/revision/latest?cb=20170410124642",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/2/2b/Mine_2010.png/revision/latest?cb=20170624174003",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/c/ca/Mine_Shack_2010.png/revision/latest?cb=20171213053600",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/c/c7/IMG_0877.PNG/revision/latest?cb=20170407111157",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/f/f6/Pet_Shop.png/revision/latest?cb=20170723070421",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/6/64/Pizza_Parlor_2007.png/revision/latest?cb=20171128043906",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/a/a6/Plazablankstage.png/revision/latest?cb=20171212030530",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/b/b7/Recycling_Plant.png/revision/latest?cb=20171128052302",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/d/d9/SkiHill2017.png/revision/latest?cb=20170410190230",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/b/b1/SkiLodge000.png/revision/latest?cb=20171128044433",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/5/55/SkiVillage.png/revision/latest?cb=20171128044052",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/5/59/SnowForts2.png/revision/latest?cb=20171128214247",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/4/47/Stadium_2010.png/revision/latest?cb=20171010141944",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/d/dc/Stage_Quest_for_the_Golden_Puffle.png/revision/latest?cb=20171126202037",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/7/7e/Town.png/revision/latest?cb=20171128033356",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/9/9b/Underground_Pool.png/revision/latest?cb=20171213054014",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/e/e2/WelcomeSolo.png/revision/latest?cb=20170331073704",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/f/f3/Box_Dimension.png/revision/latest?cb=20170331073307",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/1/11/EPF_Command_Room_2017.png/revision/latest?cb=20171128045150",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/4/4b/HQ_2008_2.png/revision/latest?cb=20170326211101",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/5/58/Underwater.png/revision/latest?cb=20171128061152",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/b/b6/Ninja_Hideout_2008.png/revision/latest?cb=20171228083858",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/b/b9/Migrator_2008.png/revision/latest?cb=20170405193805",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/2/25/Crow%27s_Nest.png/revision/latest?cb=20170331075341",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/0/0d/Ship_Hold_2017.png/revision/latest?cb=20180121203812",
  "https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/8/80/Captain%27s_Quarters.png/revision/latest?cb=20171128182225",
];

// RichEmbed
// CPR Rooms
var embedRooms = new Discord.RichEmbed()
  .setColor("#78f7fe")
  .setTitle("List of Rooms and Image IDs")
  .addField("0 - 9", "0 - BEACH\n1 - BEACON\n2 - BOILER ROOM\n3 - BOOK ROOM\n4 - CAVE MINE\n5 - COFFEE SHOP\n6 - COVE\n7 - DANCE LOUNGE\n8 - DOCK\n9 - DOJO", true)
  .addField("10 - 19", "10 - DOJO COURTYARD\n11 - EVERYDAY PHONING FACILITY\n12 - FOREST\n13 - GIFT SHOP\n14- HIDDEN LAKE\n15 - ICE RINK\n16 - ICEBERG\n17 - LIGHTHOUSE\n18 - LODGE ATTIC\n19 - MINE", true)
  .addBlankField()
  .addField("20 - 29", "20 - MINE SHACK\n21 - NIGHT CLUB\n22 - PET SHOP\n23 - PIZZA PARLOUR\n24 - PLAZA\n25 - RECYCLING PLANT\n26 - SKI HILL\n27 - SKI LODGE\n28 - SKI VILLAGE\n29 - SNOW FORTS", true)
  .addField("30 - 39", "30 - STADIUM\n31 - STAGE\n32 - TOWN\n33 - UNDERGROUND POOL\n34 - WELCOME SOLO\n35 - BOX DIMENSION\n36 - EPF COMMAND ROOM\n37 - HQ\n38 - UNDERWATER\n39 - NINJA HIDEOUT", true)
  .addBlankField()
  .addField("40 - 43", "\n40 - MIGRATOR\n41 - CROW'S NEST\n42 - SHIP HOLD\n43 - CAPTAIN'S QUARTERS")

// Universal Help
var embedHelp = new Discord.RichEmbed()
  .setColor("#78f7fe")
  .setTitle("List of Commands available")
  .addField("-rps", "Play Rock Paper Scissors!\nUsage: -rps-paper", true)
  .addField("-dice", "Roll a die.\nUsage: -dice", true)
  .addField("-8ball", "Ask the Magic 8ball a question!\nUsage: -8ball", true)

// DeCipher Help
var embedHelpWOR = new Discord.RichEmbed()
  .setColor("#78f7fe")
  .setTitle("#WOR Exclusive Commands")
  .addField("-count", "Check if a line is over 48 characters long, the maximum length of characters in a message in CPR.\nUsage: -count-This'll be a piece of cake!", true)
  .addField("-timezone", "Get a link to timeanddate.com's webpage on a timezone.\nUsage: -timezone-pst", true)
  .addField("-cardjitsu", "Play Card-Jitsu ... without the animations, anything cool or half of the game's features.\nUsage: -cardjitsu-snow", true)
  .addField("-rooms", "Get an embeded image of a room in CPR. Use -rooms for a list of IDs.\nUsage: -rooms-16", true)

client.on ('message', message => {
  if (message.author.equals(client.user)) return;

  // CHECK IF MESSAGE STARTS WITH PREFIX
  if (!message.content.startsWith(PREFIX)) return;

  // SEPARATE ARGUMENTS WITH -
  var args = message.content.substring(PREFIX.length).split("-");

  // UNIVERSAL COMMANDS | Set first argument to lower case
  switch (args[0].toLowerCase()) {

    // CLASSIC PING COMMAND
    case "ping":
      message.reply ("Pong! :ping_pong:")
      break;

    // ROCK PAPER SCISSORS
    case "rps":
      // Check if a second argument (Scissors/Paper/Rock) exists
      if (args[1]) {
        // Create a variable for the argument/user's choice
        var rpsChoice = args[1].toLowerCase();
        // Randomly draw a choice from the Scissors/Paper/Rock array
        var rpsBot = rps[Math.floor(Math.random() * rps.length)];
        // Something about the choice
        switch (rpsChoice) {
          case "rock":
            // If rpsBot beats rpsChoice
            if (rpsBot === "Paper") {message.reply(rpsBot + " :newspaper: | I Win!")}
            // If rpsBot is the same as rpsChoice
            else if (rpsBot === "Rock") {message.reply(rpsBot + " :full_moon: | It's a tie!")}
            // if rpsChoice beats rpsBot
            else {message.reply(rpsBot + " :scissors: | You win!")}
            break;
          case "paper":
            // If rpsBot beats rpsChoice
            if (rpsBot === "Scissors") {message.reply(rpsBot + " :scissors: | I Win!")}
            // If rpsBot is the same as rpsChoice
            else if (rpsBot === "Paper") {message.reply(rpsBot + " :newspaper: | It's a tie!")}
            // if rpsChoice beats rpsBot
            else {message.reply(rpsBot + " :full_moon: | You win!")}
            break;
          case "scissors":
            // If rpsBot beats rpsChoice
            if (rpsBot === "Rock") {message.reply(rpsBot + " :full_moon: | I Win!")}
            // If rpsBot is the same as rpsChoice
            else if (rpsBot === "Scissors") {message.reply(rpsBot + " :scissors: | It's a tie!")}
            // if rpsChoice beats rpsBot
            else {message.reply(rpsBot + " :newspaper: | You win!")}
            break;
          default: message.reply("Error. What is this, Card-Jitsu? That's not an allowed choice! Available choices: `Rock/Paper/Scissors`.")

        }
      } else {message.reply("You didn't pick a choice! Available choices: `Rock/Paper/Scissors`.")}
      break;

    case "dice":
      message.reply(Math.floor(Math.random() * 6) + 1 + " :game_die:")
      break;

    case "8ball":
      if (args[1]) {
        message.reply(responses[Math.floor(Math.random() * responses.length)] + " :8ball:")
      } else {
        message.reply("What?")
      }
      break;

    case "help":
      message.author.send(embedHelp);
      if (message.guild.id == serverWOR) {message.author.send(embedHelpWOR)};
      message.reply("A list of commands has been sent to your direct messages.")
      break;

  }

  // CHECK USER ID IF IT IS FROM TEMPUSWARE :)
  if (message.author.id == "182787333169348608") {
    switch (args[0].toLowerCase()) {
      // POST COMMANT
      case "post":
        // CHECK IF A SECOND ARGUMENT EXISTS
        if (args[1]) {
          switch (args[1].toLowerCase()) {
            case "message":
              // Remove the first 14 characters from the message
              var postMessage = message.content.substring(14);
              // Repeat the message
              message.channel.send(postMessage);
              // Delete the original message
              message.delete()
              break;
            case "file":
              if (args[2]) {
                message.channel.send({files: [args[2]]})
                message.delete()
              }
          }
          break;
        }
    }
  }

  // CHECK SERVER ID IF IT IS THE ESTABLISHED WOR ID VARIABLE
  if (message.guild.id == serverWOR) {
    // WOR EXCLUSIVE COMMANDS
    switch (args[0].toLowerCase()) {
      case "count":
        // Check if the second variable is not longer than 48 characters
        if (args[1]) {
          if (args[1].length <= 48) {
            message.reply("It fits. :ok_hand: (Character Count: `" + args[1].length + "`)")
          } else {
            message.reply("Too long, try shortening it or breaking it into multiple lines. :triumph: (Character Count: `" + args[1].length + "`)")
          }
        }
        break;
      case "timezone": case "tz":
        // Check if there is a second argument (timezone abbreviation)
        if (args[1]) {
          // Attach second argument to end of url
          message.reply("Click here for information about your requested timezone: https://www.timeanddate.com/time/zones/" + args[1].toLowerCase() + " :clock7:")
        }
        break;
      // CARD-JITSU
      case "cj": case "cardjitsu":
      // Check if a second argument (Fire/Water/Snow) exists
        if (args[1]) {
          // Create a variable for the argument/user's choice
          var cjChoice = args[1].toLowerCase();
          // Randomly draw a choice from the Fire/Water/Snow array
          var cjBot = cj[Math.floor(Math.random() * cj.length)];
          // Something about the choice
          switch (cjChoice) {
            case "fire":
              // If cjBot beats cjChoice
              if (cjBot === "Water") {message.reply(cjBot + " :sweat_drops: | I Win!")}
              // If cjBot is the same as cjChoice
              else if (cjBot === "Fire") {message.reply(cjBot + " :fire: | It's a tie!")}
              // if cjChoice beats cjBot
              else {message.reply(cjBot + " :snowflake: | You win!")}
              break;
            case "water":
              // If cjBot beats cjChoice
              if (cjBot === "Snow") {message.reply(cjBot + " :snowflake: | I Win!")}
              // If cjBot is the same as cjChoice
              else if (cjBot === "Water") {message.reply(cjBot + " :sweat_drops: | It's a tie!")}
              // if cjChoice beats cjBot
              else {message.reply(cjBot + " :fire: | You win!")}
              break;
            case "snow":
              // If cjBot beats cjChoice
              if (cjBot === "Fire") {message.reply(cjBot + " :fire: | I Win!")}
              // If cjBot is the same as cjChoice
              else if (cjBot === "Snow") {message.reply(cjBot + " :snowflake: | It's a tie!")}
              // if cjChoice beats cjBot
              else {message.reply(cjBot + " :sweat_drops: | You win!")}
              break;
            default: message.reply("Error. What is this, Rock Paper Scissors? That's not an allowed choice! Available choices: `Fire/Water/Snow`.")
          }
        } else {message.reply("You didn't pick a choice! Available choices: `Fire/Water/Snow`.")}
        break;
      case "rooms":
        // Check if there is a second argument
        if (args[1]) {
          // Get second argument value from array
          var requestedRoom = rooms[args[1]];
          // Send file
          //message.channel.send({files: requestedRoom})
          message.author.send(requestedRoom);
          message.reply("An image of the requested room has been sent to your direct messages.")
        } else {
          message.author.send(embedRooms);
          message.author.send("Use these IDs to get an image of the room. For instance, `-rooms-23` shows you the Pizza Parlour. Use this command in the #bot-commands channel.")
          message.reply("A list of room IDs has been sent to your direct messages.")
        }
      break;
    }
  }

  // CHECK SERVER ID IF IT IS THE ESTABLISHED DECIPHER ID VARIABLE
  if (message.guild.id == serverDeCipher) {
    // DECIPHER EXCLUSIVE COMMANDS
    switch (args[0].toLowerCase()) {
      case "role":
        // SEARCH FOR THE ROLE
        var role = message.guild.roles.find("name", args[2].toUpperCase());
        // IF THE ROLE EXISTS, CONTINUE
        if (role != null) {
          switch (args[1].toLowerCase()) {
            case "add":
              // ADD THE ROLE
              message.member.addRole(role).catch(console.error);
              message.reply ("You have been added to '" + args[2].toUpperCase() + "'. :fireworks:")
              break;
            case "remove":
              // REMOVE THE ROLE
              message.member.removeRole(role).catch(console.error);
              message.reply ("You have been removed from '" + args[2].toUpperCase() + "'. :fearful:")
              break;
          }
        // IF THE ROLE DOESN'T EXIST,
        } else {
          // SEND THIS MESSAGE
          message.reply (" *OOF! * That isn't an available role here! :cold_sweat: Ask an Admin to add it!")
        }
        break;
    }
  }
})
