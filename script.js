const A_chord = new Audio("sounds/A_chord.mp3");
const Am_chord = new Audio("sounds/Am_chord.mp3");
const Ab_chord = new Audio("sounds/Ab_chord.mp3");
const Abm_chord = new Audio("sounds/Abm_chord.mp3");
const B_chord = new Audio("sounds/B_chord.mp3");
const Bm_chord = new Audio("sounds/Bm_chord.mp3");
const Bb_chord = new Audio("sounds/Bb_chord.mp3");
const Bbm_chord = new Audio("sounds/Bbm_chord.mp3");
const C_chord = new Audio("sounds/C_chord.mp3");
const Cm_chord = new Audio("sounds/Cm_chord.mp3");
const Cb_chord = new Audio("sounds/Cb_chord.mp3");
const Cbm_chord = new Audio("sounds/Cbm_chord.mp3");
const D_chord = new Audio("sounds/D_chord.mp3");
const Dm_chord = new Audio("sounds/Dm_chord.mp3");
const Db_chord = new Audio("sounds/Db_chord.mp3");
const Dbm_chord = new Audio("sounds/Dbm_chord.mp3");
const E_chord = new Audio("sounds/E_chord.mp3");
const Em_chord = new Audio("sounds/Em_chord.mp3");
const Eb_chord = new Audio("sounds/Eb_chord.mp3");
const Ebm_chord = new Audio("sounds/Ebm_chord.mp3");
const F_chord = new Audio("sounds/F_chord.mp3");
const Fm_chord = new Audio("sounds/Fm_chord.mp3");
const Fb_chord = new Audio("sounds/Fb_chord.mp3");
const Fbm_chord = new Audio("sounds/Fbm_chord.mp3");
const G_chord = new Audio("sounds/G_chord.mp3");
const Gm_chord = new Audio("sounds/Gm_chord.mp3");
const Gb_chord = new Audio("sounds/Gb_chord.mp3");
const Gbm_chord = new Audio("sounds/Gbm_chord.mp3");

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
};

function change(id1, id2) {
  document.getElementById(id1).style.display="none";
  document.getElementById(id2).style.display="block";
}

// All the scales (If len(element) == 2, element % 10 -> concatenate 'm' to the element )
var scales_dict = {
  "radiohead":[0, 95,  3,  93],
  "tay-tay":[0, 95, 3, 4],
  "lorde-n-saviour":[0, 3, 95, 93],
  "idk-my-name":[0, 3, 95, 4],
  "iconic":[4, 92, 95, 1],

  "basic":[0, 4, 95, 3],
  "bittersweet":[0, 3, 93, 0],
  "hopeful":[95, 3, 0, 4],
  "happy":[0, 3, 4, 4]
};

// All of the chord progressions (Make the chord progressions easier for the computer to read)
var chords_dict = {
  "key-of-c":["C", "D", "E", "F", "G", "A", "B"],
  "key-of-c#/db":["Db", "Eb", "Fb", "Gb", "Ab", "Bb", "Cb"],
  "key-of-d":["D", "E", "F#", "G", "A", "B", "Db"],
  "key-of-d#/eb":["Eb", "F", "G", "Ab", "Bb", "C", "D"],
  "key-of-e":["E", "Gb", "Ab", "A", "B", "Db", "Eb"],
  "key-of-f":["F", "G", "A", "Bb", "C", "D", "E"],
  "key-of-f#/gb":["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
  "key-of-g":["G", "A", "B", "C", "D", "E", "Gb"],
  "key-of-g#/ab":["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
  "key-of-a":["A", "B", "Db", "D", "E", "Gb", "Ab"],
  "key-of-a#/bb":["Bb", "C", "D", "Eb", "F", "G", "A"],
  "key-of-b":["B", "Db", "Eb", "E", "Gb", "Ab", "Bb"]
};

const A_chordKey = document.querySelector(".A_chord-key");
const playA = () => {
  playSound(A_chord);
};
A_chordKey.addEventListener("submit", playA, true);

const Am_chordKey = document.querySelector(".Am_chord-key");
const playAm = () => {
  playSound(Am_chord);
};
Am_chordKey.addEventListener("submit", playAm, true);

const Ab_chordKey = document.querySelector(".Ab_chord-key");
const playAb = () => {
  playSound(Ab_chord);
};
Ab_chordKey.addEventListener("submit", playAb, true);

const Abm_chordKey = document.querySelector(".Abm_chord-key");
const playAbm = () => {
  playSound(Abm_chord);
};
Abm_chordKey.addEventListener("submit", playAbm, true);

const B_chordKey = document.querySelector(".B_chord-key");
const playB = () => {
  playSound(B_chord);
};
B_chordKey.addEventListener("submit", playB, true);

const Bm_chordKey = document.querySelector(".Bm_chord-key");
const playBm = () => {
  playSound(Bm_chord);
};
Bm_chordKey.addEventListener("submit", playBm, true);

const Bb_chordKey = document.querySelector(".Bb_chord-key");
const playBb = () => {
  playSound(Bb_chord);
};
Bb_chordKey.addEventListener("submit", playBb, true);

const Bbm_chordKey = document.querySelector(".Bbm_chord-key");
const playBbm = () => {
  playSound(Bbm_chord);
};
Bbm_chordKey.addEventListener("submit", playBbm, true);

const C_chordKey = document.querySelector(".C_chord-key");
const playC = () => {
  playSound(C_chord);
};
C_chordKey.addEventListener("submit", playC, true);

const Cm_chordKey = document.querySelector(".Cm_chord-key");
const playCm = () => {
  playSound(Cm_chord);
};
Cm_chordKey.addEventListener("submit", playCm, true);

const Cb_chordKey = document.querySelector(".Cb_chord-key");
const playCb = () => {
  playSound(Cb_chord);
};
Cb_chordKey.addEventListener("submit", playCb, true);

const Cbm_chordKey = document.querySelector(".Cbm_chord-key");
const playCbm = () => {
  playSound(Cbm_chord);
};
Cbm_chordKey.addEventListener("submit", playCbm, true);

const D_chordKey = document.querySelector(".D_chord-key");
const playD = () => {
  playSound(D_chord);
};
D_chordKey.addEventListener("submit", playD, true);

const Dm_chordKey = document.querySelector(".Dm_chord-key");
const playDm = () => {
  playSound(Dm_chord);
};
Dm_chordKey.addEventListener("submit", playDm, true);

const Db_chordKey = document.querySelector(".Db_chord-key");
const playDb = () => {
  playSound(Db_chord);
};
Db_chordKey.addEventListener("submit", playDb, true);

const Dbm_chordKey = document.querySelector(".Dbm_chord-key");
const playDbm = () => {
  playSound(Dbm_chord);
};
Dbm_chordKey.addEventListener("submit", playDbm, true);

const E_chordKey = document.querySelector(".E_chord-key");
const playE = () => {
  playSound(E_chord);
};
E_chordKey.addEventListener("submit", playE, true);

const Em_chordKey = document.querySelector(".Em_chord-key");
const playEm = () => {
  playSound(Em_chord);
};
Em_chordKey.addEventListener("submit", playEm, true);

const Eb_chordKey = document.querySelector(".Eb_chord-key");
const playEb = () => {
  playSound(Eb_chord);
};
Eb_chordKey.addEventListener("submit", playEb, true);

const Ebm_chordKey = document.querySelector(".Ebm_chord-key");
const playEbm = () => {
  playSound(Ebm_chord);
};
Ebm_chordKey.addEventListener("submit", playEbm, true);

const F_chordKey = document.querySelector(".F_chord-key");
const playF = () => {
  playSound(F_chord);
};
F_chordKey.addEventListener("submit", playF, true);

const Fm_chordKey = document.querySelector(".Fm_chord-key");
const playFm = () => {
  playSound(Fm_chord);
};
Fm_chordKey.addEventListener("submit", playFm, true);

const Fb_chordKey = document.querySelector(".Fb_chord-key");
const playFb = () => {
  playSound(Fb_chord);
};
Fb_chordKey.addEventListener("submit", playFb, true);

const Fbm_chordKey = document.querySelector(".Fbm_chord-key");
const playFbm = () => {
  playSound(Fbm_chord);
};
Fbm_chordKey.addEventListener("submit", playFbm, true);

const G_chordKey = document.querySelector(".G_chord-key");
const playG = () => {
  playSound(G_chord);
};
G_chordKey.addEventListener("submit", playG, true);

const Gm_chordKey = document.querySelector(".Gm_chord-key");
const playGm = () => {
  playSound(Gm_chord);
};
Gm_chordKey.addEventListener("submit", playGm, true);

const Gb_chordKey = document.querySelector(".Gb_chord-key");
const playGb = () => {
  playSound(Gb_chord);
};
Gb_chordKey.addEventListener("submit", playGb, true);

const Gbm_chordKey = document.querySelector(".Gbm_chord-key");
const playGbm = () => {
  playSound(Gbm_chord);
};
Gbm_chordKey.addEventListener("submit", playGbm, true);


// Initializes the form variable, to be used later when pulling user input
var form = document.getElementById("the-form");

let chord_funcs = []
// Initializes the submit function with the event parameter; this'll be the function that will pull
// user-inputted elements from the form.
function submit(event) {
    var key = document.getElementById('key');
    var chords = document.getElementById('chords');
    let progression = [];
    for (let i = 0; i < 4; i++) {
      if  (scales_dict[chords.value.toString()][i].toString().length == 2){
      progression.push(chords_dict[key.value.toString()][scales_dict[chords.value.toString()][i] % 10] + "m"); 
    } else {
      progression.push(chords_dict[key.value.toString()][scales_dict[chords.value.toString()][i]]);
    }
    } 
    document.getElementById("the-progression").innerHTML = progression;

    for (let i = 0; i < 4; i++) {
      chord_funcs.push('play' + progression[i]);
    }

    change("home-page", "result");

    event.preventDefault();
}
// 'Listens' for when the user submits the form, then calls the submit(event) function.
form.addEventListener("submit", submit, true)

function man_click() {
  start_playing.addEventListener("click", play_chords, true);
  start_playing.click()
}

var start_playing = document.getElementById("play-chords");
function play_chords(event) {
  start_playing.removeEventListener("click", play_chords, true);
    setTimeout(eval(chord_funcs[0]), 1);
    setTimeout(eval(chord_funcs[1]), 2424);
    setTimeout(eval(chord_funcs[2]), 4810);
    setTimeout(eval(chord_funcs[3]), 7210);
    setTimeout(man_click, 9588);
  event.preventDefault();
}
start_playing.addEventListener("click", play_chords, true);

var stop_playing = document.getElementById("refresh");
function refresh() {
  location.reload();
}
stop_playing.addEventListener("click", refresh, true);