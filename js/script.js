// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

//Defined all my variables here
var message = "";
var viewedQuotes = [];
var setTimer = window.setTimeout(printQuote, 5000);

//Created an array literal with the name 'quotes'
var quotes = [
  {
    quotes:
      "The problem is not the problem, the problem is your attitude about the problem.",
    source: "Captain Jack Sparrow",
    citation: "Pirates of the Carribean",
    year: 2003,
    tags: "humor"
  },

  {
    quotes: "Creativity is contagious, pass it on.",
    source: "Albert Einstein",
    citation: "",
    year: "",
    tags: "inspirational"
  },

  {
    quotes:
      "Madness, as you know, is a lot like gravity, all it takes is a little push.",
    source: "Joker",
    citation: "The Dark Knight",
    year: "2008",
    tags: "serious"
  },

  {
    quotes: "As you think, you shall become.",
    source: "Bruce Lee",
    citation: "",
    year: "",
    tags: "inspirational"
  },

  {
    quotes: "Reality is merely an illusion, albeit a very persistent one.",
    source: "Albert Einstein",
    citation: "",
    year: "",
    tags: "informative"
  }
];

/* created function to iterate through the 'quotes' array above at random,
store that in new variable called 'randomQuote', and then return 'randomQuote'*/
function getRandomQuote() {
  var quote;
  if (quotes.length === viewedQuotes.length) {
    viewedQuotes = [];
  }
  do {
    quote = Math.floor(Math.random() * quotes.length);
  } while (viewedQuotes.indexOf(quote) > -1);
  viewedQuotes.push(quote);
  console.log(quotes[quote]);
  return quotes[quote];
}
/*var randomQuote = quotes[Math.floor(Math.random() * (quotes.length))];

  var splicedQuote = quotes.splice(randomQuote, 1,)[0];
  viewedQuotes.push(splicedQuote);
  console.log(viewedQuotes)
  if (quotes.length === 0) {
    quotes = viewedQuotes;
    viewedQuotes = [];
  }

  return splicedQuote;
} */

// calling the getRandomQuote function
getRandomQuote(quotes);

//this function creates a random RGB value to then generate a random color for the background
function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
  document.getElementById("loadQuote").style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
}

function resetTimer() {
  clearInterval(timer);
  timer = window.setInterval(printQuote, 5000);
}

function printQuote() {
  var returnedQuote = getRandomQuote(quotes);
  message = '<p class="quote">' + returnedQuote.quotes + "</p>";
  message += '<p class="source">' + returnedQuote.source;
  if (returnedQuote.citation) {
    message += '<span class="citation">' + returnedQuote.citation + "</span>";
  } else {
    message += "";
  }
  if (returnedQuote.year) {
    message += '<span class="year">' + returnedQuote.year + "</span>";
  }
  if (returnedQuote.tags) {
    message += '<h3>' + returnedQuote.tags + '</h3>';
  } else {
    message += "";
  }
  //calling the random color function
  getRandomColor();

  document.getElementById("quote-box").innerHTML = message;
}
