// LABEL INTERACTION
// Constante waarde input.
const input = document.getElementsByTagName('input');

// Selecteer van de parent element en daar dan weer de sibling van.


// Hier volg je een array van alle input elementen en voer je dit op uit.
for (let i = 0; i < input.length; i++) {
  input[i].onfocus = function(e) {
    movePlaceholder(e.currentTarget, "forwards");
  };

  input[i].onblur = function(e) {
    movePlaceholder(e.currentTarget, "backwards");
  }
}

//BOOKMARK INTERACTION
const icons = document.getElementsByClassName('icon');
const notification = document.getElementsByClassName('notification')[0];
let timer = 3; // seconds


// For loop zoekt naar alle "icon" classes.
for (let i = 0; i < icons.length; i++) {
  let icon = icons[i];

  // Zodra je clickt en hij heeft een bepaalde class dan verander je dat in fa fa-bookmark fa-2x
  // En dan dezelfde werking andersom.
  icon.onclick = function(e) {
    e.stopPropagation();
    if (icon.classList.contains('fa-bookmark-o')) {
      icon.className = 'fa fa-bookmark fa-2x';
      toggleNotification();
    } else if (icon.classList.contains('fa-bookmark')) {
      icon.className = 'fa fa-bookmark-o fa-2x';
    }
  };
}

// Functions
function movePlaceholder(element, direction) {
  let label = element.parentElement.previousElementSibling;

  // Als direction forwards is voeg dan test toe.
  if (direction == "forwards") {
    element.placeholder = "";
    label.classList.add("test");
  }
  // En anders moet je hem verwijderen.
  if (direction == "backwards") {
    element.placeholder = label.innerHTML;
    label.classList.remove("test");
  }
}

// FLIP INTERACTION
// Op het geselecteerde "target" wordt de class flipped getoggled.
function flip(e) { e.currentTarget.classList.toggle('flipped'); };


function toggleNotification() {
  notification.classList.add('active');

  setTimeout(function() {
    notification.classList.remove('active');
  }, timer*1000);
}