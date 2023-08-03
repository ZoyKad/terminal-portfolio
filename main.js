let animating;

const COMMAND_PREFIX = "guest@zoykad-portofolio $ "

const HELP_TEXT = `List of all commands :
 help\t\t\tThis menu
 echo [text]\tprints the given text
 contact\t\tSee ways to contact me and my profiles
 zoyart\t\t\t???`

const CONTACT_TEXT = `Here are all my profiles and way to contact me : \n \
Discord : https://discordapp.com/users/675031196693954606 \n \
Roblox : https://www.roblox.com/users/1097155733/profile \n \
Github : https://github.com/ZoyKad`

const ZOYKAD_ART = `
$$$$$$$$\\                     $$\\   $$\\                 $$\\ 
\\____$$  |                    $$ | $$  |                $$ |
    $$  /  $$$$$$\\  $$\\   $$\\ $$ |$$  /  $$$$$$\\   $$$$$$$ |
   $$  /  $$  __$$\\ $$ |  $$ |$$$$$  /   \\____$$\\ $$  __$$ |
  $$  /   $$ /  $$ |$$ |  $$ |$$  $$<    $$$$$$$ |$$ /  $$ |
 $$  /    $$ |  $$ |$$ |  $$ |$$ |\\$$\\  $$  __$$ |$$ |  $$ |
$$$$$$$$\\ \\$$$$$$  |\\$$$$$$$ |$$ | \\$$\\ \\$$$$$$$ |\\$$$$$$$ |
\\________| \\______/  \\____$$ |\\__|  \\__| \\_______| \\_______|
                    $$\\   $$ |                              
                    \\$$$$$$  |                              
                     \\______/                               
`


const term = $('body').terminal({
    contact: function() {
        term.echo(CONTACT_TEXT)
    },
    help: function() {
        term.echo(HELP_TEXT)
    },
    echo: function(text) {
        term.echo(text !== null ? text: "")
    },
    zoyart: function() {
        term.echo(ZOYKAD_ART)
    }
}, {
    greetings: false,
    typewriterDelay: 350,
    keydown: () => animating ? false : undefined
});

const contact = async () => {
    await term.echo("Here are all my profiles and way to contact me : \n \
     Discord : https://discordapp.com/users/675031196693954606 \n \
     Roblox : https://www.roblox.com/users/1097155733/profile \n \
     Github : https://github.com/ZoyKad")
};

const delay = time => new Promise(r => setTimeout(r, time));

// Animation

const animate = async () => {
    term.clear().set_prompt("");
    await delay(1000);
    term.clear();
    
    await term.echo("Knock, knock...", {typing: true, delay: 190});
    await delay(1500);
    
    await term.echo("Wonder who I am ?", {typing: true, delay:130});
    await delay(2000);
    
    await term.echo("You can call me zoy", {typing: true, delay:150});
    await delay(500);
    
    await term.echo("Type 'help' to get more info", {typing: true, delay:150});
    await delay(500);

    term.set_prompt(COMMAND_PREFIX);

    animating = false;
};

animate();