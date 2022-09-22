

function change(id1, id2) {
  document.getElementById(id1).style.display="none";
  document.getElementById(id2).style.display="block";
}
// Initializes the form variable, to be used later when pulling user input
var form = document.getElementById("the-form");

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
  "key-of-d":["D", "E", "F#", "G", "A", "B", "C#"],
  "key-of-d#/eb":["Eb", "F", "G", "Ab", "Bb", "C", "D"],
  "key-of-e":["E", "F#", "G#", "A", "B", "C#", "D#"],
  "key-of-f":["F", "G", "A", "Bb", "C", "D", "E"],
  "key-of-f#/gb":["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
  "key-of-g":["G", "A", "B", "C", "D", "E", "F#"],
  "key-of-g#/ab":["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
  "key-of-a":["A", "B", "C#", "D", "E", "F#", "G#"],
  "key-of-a#/bb":["Bb", "C", "D", "Eb", "F", "G", "A"],
  "key-of-b":["B", "C#", "D#", "E", "F#", "G#", "A#"]
};

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
    change("home-page", "result");
    alert('Key: ' + key.value.toString() + '\nChords: ' + chords.value.toString() + '\nProgression: ' + chords_dict[key.value.toString()] + '\nNumerals: ' + scales_dict[chords.value.toString()] );
    event.preventDefault();
}
// 'Listens' for when the user submits the form, then calls the submit(event) function.
form.addEventListener("submit", submit, true)