let name, feet, inches, weight, diet;
// Create Dino Constructor
function Dino(name, weight, height, diet, fact, image) {
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.diet = diet;
  this.image = image;
  this.fact = fact;
}
// create bird constructor
function Bird(name, weight, height, diet, fact, image) {
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.diet = diet;
  this.image = image;
  this.fact = fact;
}
// Create Dino Objects
const triceratops = new Dino(
  "Triceratops",
  13000,
  114,
  "herbavor",
  ["First discovered in 1889 by Othniel Charles Marsh"],
  "./images/triceratops.png"
);
const tyrannosaurusRex = new Dino(
  "Tyrannosaurus Rex",
  11905,
  144,
  "carnivor",
  ["The largest known skull measures in at 5 feet long."],
  "./images/tyrannosaurus rex.png"
);
const anklyosaurus = new Dino(
  "Anklyosaurus",
  10500,
  55,
  "herbavor",
  ["Anklyosaurus survived for approximately 135 million years."],
  "./images/anklyosaurus.png"
);
const brachiosaurus = new Dino(
  "Brachiosaurus",
  70000,
  372,
  "herbavor",
  ["An asteroid was named 9954 Brachiosaurus in 1991."],
  "./images/brachiosaurus.png"
);
const stegosaurus = new Dino(
  "Stegosaurus",
  11600,
  79,
  "herbavor",
  ["The Stegosaurus had between 17 and 22 seperate places and flat spines."],
  "./images/stegosaurus.png"
);
const elasmosaurus = new Dino(
  "Elasmosaurus",
  16000,
  59,
  "carnivor",
  ["Elasmosaurus was a marine reptile first discovered in Kansas."],
  "./images/elasmosaurus.png"
);
const pteranodon = new Dino(
  "Pteranodon",
  44,
  20,
  "carnivor",
  ["Actually a flying reptile, the Pteranodon is not a dinosaur."],
  "./images/pteranodon.png"
);
const pigeon = new Bird(
  "Pigeon",
  0.5,
  9,
  "herbavor",
  ["All birds are living dinosaurs."],
  "./images/pigeon.png"
);
// Create Human Object
const human = new Dino(
  document.getElementById("name").value,
  document.getElementById("feet").value * 12 +
    document.getElementById("inches").value,
  document.getElementById("weight").value,
  document.getElementById("diet").value,
  [""],
  "./images/human.png"
);

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
weightCompare = item => {
  // check if not human
  if (item.name !== human.name) {
    if (human.weight < item.weight) {
      item.fact.push(
        `${human.name} (${human.weight}lbs) is bigger than ${item.name} (${item.weight} lbs)`
      );
    } else {
      item.fact.push(
        `${human.name} (${human.weight}lbs) is lighter than ${this.name} (${item.weight} lbs)`
      );
    }
  }
};

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
heightCompare = item => {
  if (human.name !== item.name) {
    if (human.height > item.height) {
      item.fact.push(
        `${human.name} (${human.height} Inches) is taller than ${item.name} (${item.height}  inches)`
      );
    } else {
      item.fact.push(
        `${human.name} (${human.height} Inches) is shorter than ${item.name} (${item.height}  inches)`
      );
    }
  }
};

// Create Dino Compare Method 3
dietCompare = item => {
  if (item.name !== human.name) {
    if (item.diet === human.diet) {
      item.fact.push(`${item.name} & ${human.name} both on ${human.diet}`);
    } else {
      item.fact.push(
        `${item.name} on ${item.diet} while ${human.name} on ${human.diet}`
      );
    }
  }
};

// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array
const titles = [
  triceratops,
  tyrannosaurusRex,
  anklyosaurus,
  brachiosaurus,
  human,
  stegosaurus,
  elasmosaurus,
  pteranodon,
  pigeon
];
// Add tiles to DOM

const ui = () => {
  grid.innerHTML = (() => {
    return `
          ${titles
            .map(
              item => `
              <div class="grid-item">
                <h3>${item.name}</h3>
                <img src="${item.image}" />
                <p> 
                    ${
                      item instanceof Dino
                        ? item.fact[
                            Math.floor(Math.random() * item.fact.length)
                          ]
                        : item.fact
                    }
                </p>
              </div>
            `
            )
            .join("")}
      `;
  })();
};
// Remove form from screen
document.getElementById("grid").style.display = "none";
// On button click, prepare and display infographic
document.getElementById("btn").onclick = () => {
  document.getElementById("dino-compare").style.display = "none";
  document.getElementById("grid").style.display = "flex";
  human.name = document.getElementById("name").value;
  human.height =
    document.getElementById("feet").value * 12 +
    document.getElementById("inches").value;
  human.weight = document.getElementById("weight").value;
  human.diet = document.getElementById("diet").value;
  titles.map(item => {
    if (item instanceof Dino) {
      weightCompare(item);
      heightCompare(item);
      dietCompare(item);
    }
  });
  ui();
};
