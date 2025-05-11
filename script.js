const allQuotes = [
  {
    text: "Science is a way of thinking much more than it is a body of knowledge.",
    category: "science",
  },
  {
    text: "The good thing about science is that it's true whether or not you believe in it.",
    category: "science",
  },
  {
    text: "Somewhere, something incredible is waiting to be known.",
    category: "science",
  },
  {
    text: "Science knows no country, because knowledge belongs to humanity.",
    category: "science",
  },
  {
    text: "Research is what I'm doing when I don't know what I'm doing.",
    category: "science",
  },
  {
    text: "The science of today is the technology of tomorrow.",
    category: "science",
  },

  {
    text: "Life is what happens when you're busy making other plans.",
    category: "life",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    category: "life",
  },
  { text: "The purpose of our lives is to be happy.", category: "life" },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    category: "life",
  },
  {
    text: "Difficulties in life are intended to make us better, not bitter.",
    category: "life",
  },
  {
    text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    category: "life",
  },

  {
    text: "Pure mathematics is, in its way, the poetry of logical ideas.",
    category: "math",
  },
  {
    text: "Without mathematics, there's nothing you can do.",
    category: "math",
  },
  { text: "Mathematics is the music of reason.", category: "math" },
  {
    text: "Go down deep enough into anything and you will find mathematics.",
    category: "math",
  },
  {
    text: "Mathematics is the most beautiful and most powerful creation of the human spirit.",
    category: "math",
  },
  {
    text: "The essence of mathematics is not to make simple things complicated, but to make complicated things simple.",
    category: "math",
  },

  {
    text: "Engineers like to solve problems. If there are no problems handily available, they will create their own problems.",
    category: "engineering",
  },
  {
    text: "Science can amuse and fascinate us all, but it is engineering that changes the world.",
    category: "engineering",
  },
  {
    text: "One man's 'magic' is another man's engineering.",
    category: "engineering",
  },
  {
    text: "Engineering is the art of directing the great sources of power in nature for the use and convenience of man.",
    category: "engineering",
  },
  { text: "The fewer moving parts, the better.", category: "engineering" },
  {
    text: "An engineer is someone who washes his hands before going to the bathroom.",
    category: "engineering",
  },

  { text: "We rise by lifting others.", category: "social" },
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    category: "social",
  },
  { text: "Peace begins with a smile.", category: "social" },
  {
    text: "The greatest problem in communication is the illusion that it has been accomplished.",
    category: "social",
  },
  {
    text: "Empathy is seeing with the eyes of another, listening with the ears of another and feeling with the heart of another.",
    category: "social",
  },
  {
    text: "Injustice anywhere is a threat to justice everywhere.",
    category: "social",
  },
];
let quotes = [...allQuotes]

const display = document.querySelector(".quotes");
const randomBtn = document.querySelector(".random");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".previous");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const warning = document.querySelector(".warning");
const category=document.getElementById("category");
const darkModeBtn = document.querySelector('.bg-btn');
console.log(category);
console.log(display);
let currentIndex;
let font = 16;
let darkMode = false;

const generateRandomNum = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  return randomNumber;
};
const generateRandomQuotes = () => {
  currentIndex = generateRandomNum();
  display.innerHTML = quotes[currentIndex].text;
};

const nextQuotes = () => {
  if (currentIndex >= quotes.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  console.log(currentIndex);
  display.innerHTML = quotes[currentIndex].text;
};

const prevQuotes = () => {
  if (currentIndex <= 0) {
    currentIndex = quotes.length - 1;
  } else {
    currentIndex--;
  }
  console.log(currentIndex);
  display.innerHTML = quotes[currentIndex].text;
};

const changeCategory = cat =>{
  if(cat ===  "all") {
    quotes = [...allQuotes]
    console.log(quotes)
    return;
  }
  quotes = allQuotes.filter(quote => quote.category === cat) ;
  console.log(quotes)

  generateRandomQuotes()

}

const increaseFont = () => {
  font++;
  display.style.fontSize = `${font}px`;
  warning.innerHTML = "";
};
const decreaseFont = () => {
  if (font > 6) {
    font--;
    console.log(font);
    display.style.fontSize = `${font}px`;
    warning.innerHTML = "";
  } else {
    warning.innerHTML = "Maximum limit reached!";
  }
};

const changeMode = () => {
  darkMode = !darkMode;
  document.body.classList.toggle('dark');

  let text = darkMode ? 'light': 'dark';

  darkModeBtn.innerHTML = text;
}

generateRandomQuotes();
randomBtn.addEventListener("click", generateRandomQuotes);
nextBtn.addEventListener("click", nextQuotes);
prevBtn.addEventListener("click", prevQuotes);
increaseBtn.addEventListener("click", increaseFont);
decreaseBtn.addEventListener("click", decreaseFont);
category.addEventListener('change', e => {
  console.log(e.target.value)
  changeCategory(e.target.value)
});
darkModeBtn.addEventListener("click", changeMode)