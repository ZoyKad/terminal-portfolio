import * as constants from "./constants.js";

let animating;

const term = $('body').terminal({
    contact: function() {
        term.echo(constants.CONTACT_TEXT)
    },
    help: function() {
        term.echo(constants.HELP_TEXT)
    },
    echo: function(text) {
        term.echo(text !== null ? text: "")
    },
    zoyart: function() {
        term.echo(constants.ZOYKAD_ART)
    },
    carrd: function() {
        window.open("https://zoykad.carrd.co/")
    }
}, {
    greetings: false,
    typewriterDelay: 350,
    keydown: () => animating ? false : undefined
});


const delay = time => new Promise(r => setTimeout(r, time));

// Animation
async function animate() {
    term.clear().set_prompt("");
    await delay(1000);
    term.clear();
    
    await term.echo("");
    await term.echo("Knock, knock...", {typing: true, delay:60});
    await delay(1500);
    
    await term.echo("Wonder who I am ?", {typing: true, delay:70});
    await delay(2000);
    
    await term.echo("You can call me zoy", {typing: true, delay:70});
    await delay(500);
    
    await term.echo("Type \"help\" for more information", {typing: true, delay:70});
    await delay(500);

    term.set_prompt(constants.COMMAND_PREFIX);

    animating = false;
};

animate();