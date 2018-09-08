const discord = require("discord.js");
var client = new discord.Client();
const token = "token";

//setup

client.on("ready", () =>{
    console.log("ready");
    client.user.setActivity ("vines");
});

//commands (i write everything inside the same thing)

client.on("message", (message) => {
    //so it doesnt answer to bots
    if (message.author.bot) return;
  
  //so it's case insenitive
    msg = message.content.toLowerCase();
  
    //regular message command (i just copy and paste one after another)
    if(msg.startsWith ("i cant read")) {
      message.channel.send ("whaddup my names jared im 19 and i never learned fucking how to read");
    }

    if(msg.startsWith ("press f")) {
      message.channel.send ("f");
    }

    if(msg.startsWith ("kickstarter")) {
      message.channel.send ("hi my brother pushed me so im starting a kickstarter to put him down");
    }

    if(msg.startsWith ("road work ahead")) {
      message.channel.send ("uh yeah i sure hope it does");
    }

    if(msg.startsWith ("huricane katrina")) {
      message.channel.send ("more like huricane tortilla");
    }

    if(msg.startsWith ("dad")) {
      message.channel.send ("you are my dad boogie woogie woogie");
    }

    if(msg.startsWith ("ah")) {
      message.channel.send ("i couldve dropped my crossaint!");
    }

    if(msg.startsWith ("vape")) {
      message.channel.send ("_adam_");
    }

    if(msg.startsWith ("this bitch empty")) {
      message.channel.send ("YEET");
    }

    if(msg.startsWith ("yeet")) {
        message.channel.send ("this bitch empty");
      }

    if(msg.startsWith ("how do you know whats good for me?")) {
      message.channel.send ("thats my oPINION");
    }

    if(msg.startsWith ("welcome to bible study")) {
        message.channel.send ("we're all children of jesus here");
      }

    if(msg.startsWith ("this bitch empty")) {
      message.channel.send ("YEET");
    }
    
    if(msg.startsWith ("fuck")) {
        message.channel.send ("what the FUCK is up kyle");
      }

    if(msg.startsWith ("what are you doing")) {
      message.channel.send ("im washing me and my clothes bitch");
    }      

    if(msg.startsWith ("birthday")) {
        message.channel.send ("so youre just gonna give me a birthday gift on my birthday? happy birthday");
      }

    if(msg.startsWith ("head")) {
      message.channel.send ("so no head?");
    }
    
    if(msg.startsWith ("um")) {
        message.channel.send ("actually megan i have _hemorroids_");
      }

    if(msg.startsWith ("can i get a waffle")) {
      message.channel.send ("can i PLEASE get a waffle???");
    }

    if(msg.startsWith ("chris is that a weed")) {
        message.channel.send ("im calling the police");
      }

    if(msg.startsWith ("mrs keisha")) {
      message.channel.send ("oh my fucking god she fucking dead");
    }      

    if(msg.startsWith ("im lesbian")) {
        message.channel.send ("i though you were american");
      }

    if(msg.startsWith ("im a")) {
      message.channel.send ("bad bitch you cant kill me");
    }      

    if(msg.startsWith ("we all die")) {
        message.channel.send ("you either kill yourself or get killed");
      }

    if(msg.startsWith ("whip")) {
      message.channel.send ("https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjh6frPlqzdAhVJS6wKHWPcB7wQjRx6BAgBEAU&url=https%3A%2F%2Ftwitter.com%2Fflowersivann&psig=AOvVaw0DSKRgwTSK_AKaZAOJNzv4&ust=1536522531736742 SNOOOOO");
    }      

    if(msg.startsWith ("what the fuck richard")) {
        message.channel.send ("https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjz94OCl6zdAhVSLKwKHQzAA_4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.buzzfeed.com%2Ferinchack%2Fget-out-me-quiz&psig=AOvVaw1OiS5fsq6kwlLuauTtE76e&ust=1536522633408006");
      }

    if(msg.startsWith ("way to go paul")) {
        message.channel.send ("https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FFKVGse55qaITvbxgJRzpFWvNAMA%3D%2F1x0%3A520x292%2F1600x900%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F45513414%2FScreen_Shot_2015-01-22_at_8.57.21_AM.0.0.png&imgrefurl=https%3A%2F%2Fwww.sbnation.com%2Flookit%2F2015%2F1%2F22%2F7871107%2Fhockey-dad-breaks-glass-holy-crap&docid=o7frsrJsDZn28M&tbnid=SiMqe8R3ySZsCM%3A&vet=10ahUKEwic1c-fl6zdAhVD7IMKHV-uBGgQMwg7KAQwBA..i&w=1600&h=900&safe=active&bih=631&biw=1366&q=way%20to%20go%20paul%20vine&ved=0ahUKEwic1c-fl6zdAhVD7IMKHV-uBGgQMwg7KAQwBA&iact=mrc&uact=8");
      }  

    if(msg.startsWith ("nice going ron")) {
        message.channel.send ("what? i sneezed! im not allowed to sneeze?");
      } 
      
    if(msg.startsWith ("hi")) {
        message.channel.send ("welcome to chilis");
      }  

    if(msg.startsWith ("fuck")) {
        message.channel.send ("i cant belive youve done this");
      }

    if(msg.startsWith ("i spilled lipstick you your valentino bag")) {
        message.channel.send ("you spilled alLKASDJ IN MY VALENTINO *WHITE* BAG");
      }

    if(msg.startsWith ("zack thats gay")) {
        message.channel.send ("jared weve been dating");
      }

    if(msg.startsWith ("zack")) {
        message.channel.send ("zack stop");
      }
    
    if(msg.startsWith ("who ever threw that paper")) {
        message.channel.send ("your moms a hoe");
      }
      
    if(msg.startsWith ("zack")) {
        message.channel.send ("zack stop");
      }

    if(msg.startsWith ("two bros chillin in a hot tub")) {
        message.channel.send ("five feet apart cause theyre not gay");
      }

    if(msg.startsWith ("come to el taco")) {
        message.channel.send ("theyve got this new thing called uh fre sha vaca do");
      }

    if(msg.startsWith ("is there anything better than pussy")) {
        message.channel.send ("yes a really good book");
      }

    if(msg.startsWith ("its wednesday my dudes")) {
        message.channel.send ("https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwikrrXymazdAhUFJKwKHchTDHAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzUV_CrDuLng&psig=AOvVaw2-gRMHZcYj0gHAJR8hZoir&ust=1536523390108963");
      }

    if(msg.startsWith ("mother trucker dude")) {
        message.channel.send ("that hurt like a buttcheek on a stick");
      }

    if(msg.startsWith ("its an avacado!")) {
        message.channel.send ("thankssss");
      }

//randomizer
  
  const VINE = [
    "give me a vine"
    ];
  const VINERESPONCE = [
    "whaddup my names jared im 19 and i never fucking learned how to read",
    "you are my dad, your my dad! boogie woogie woogie",
    "PATRICIA",
    "nice going ron!",
    "way to go paul",
    "what the fuck richard",
    "fre sha vaco do",
    "hi welcome to chilis",
    "its wednesday my dudes",
    "hi my brother pushed me so im starting a kickstarter to put him down. benifits of me killing him is i would get pushed way less",
    "road work ahead? uh, yeah i sure hope it does",
    "GIMMIE YOUR FUCKIN MANEY"
  ];

  if(VINE.some(word => msg.includes(word))) {
    var response = VINERESPONCE [Math.floor(Math.random() * VINERESPONCE.length)];
    
    message.channel.send(response).then().catch(console.error);
  } else;

});

client.login(token);