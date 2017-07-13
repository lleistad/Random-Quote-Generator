// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//empty array to store quotes already called
viewedQuotes= [];

//function pulls a quote randomly from the quotes array & makes sure it doesn't repeat before all quotes are called
function getRandomQuote(){
  if (quotes.length === 0){
    quotes = viewedQuotes.splice(0, viewedQuotes.length);
  }
  var randNum = Math.floor(Math.random() * quotes.length);
  var splicedQuote = quotes.splice(randNum, 1)[0];
  viewedQuotes.push(splicedQuote);
  return splicedQuote;
}

//function prints random quote
function printQuote () {
  var nextQuote= getRandomQuote(0, 6);
  console.log(nextQuote)
  //picks random color
  function randomRGB(){
    return Math.floor(Math.random() * 256);
    }
  var red = randomRGB();
  var green = randomRGB();
  var blue = randomRGB();
  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  //template for quotes
  document.getElementById('quote-box').innerHTML = 
  '<p class="quote">' + nextQuote.quote + '</p>'+
  '<p class="source">' + nextQuote.source + '</p>';
  
  //tests if random quote has the citation property
  if (nextQuote.hasOwnProperty("citation") === true) {
    document.getElementById('quote-box').innerHTML += '<span class="citation">' + nextQuote.citation + " " + '</span>';
  }
  //tests if the random quote has the date property
  if (nextQuote.hasOwnProperty('date') === true) {
    document.getElementById('quote-box').innerHTML += '<span class="year">' + nextQuote.date + ", " + '</span>';
  }
  //tests if the random quote has the tags property
  if (nextQuote.hasOwnProperty('tags') === true) {
    document.getElementById('quote-box').innerHTML += '<span class="tags">' + nextQuote.tags + '</span>';
  }
  document.getElementById('quote-box').innerHTML += '</p>';
  //changes background color
  document.body.style.backgroundColor = rgbColor;
 }

//automatically changes quote after 30 seconds
var intervalID = window.setInterval(printQuote, 30000);
  

//An array of objects that contains the quotes
var quotes= [
  {quote:"Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world.",
   source: "Joel A. Barker",
   tags:"motivational"
  },
  {
    quote:"The way I see it, every life is a pile of good things and bad things. The good things don’t always soften the bad things, but vice versa, the bad things don’t always spoil the good things and make them unimportant.",
   source: "The Doctor",
   citation:"Season 5, Episode 10",
   tags:"doctor who"
  },
  {
    quote:"And so, my fellow Americans: ask not what your country can do for you--ask what you can do for your country.",
   source: "John F. Kennedy",
   citation:"Presidential Inaugural Address",
   date:"January 20, 1961",
   tags:"political"
  },
  {
    quote: "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
   source: "Douglas Adams",
   citation:"The Restaurant at the End of the Universe",
   tags:"humor"
  },
  {
    quote:"People assume that time is a strict progression of cause to effect, but *actually* from a non-linear, non-subjective viewpoint - it's more like a big ball of wibbly wobbly... time-y wimey... stuff.",
   source: "The Doctor",
   citation:"Season 3, Episode 10",
   tags:"doctor who"
  },
  {
    quote:"And a mistake repeated more than once is a decision.",
   source: "Paulo Coelho",
   tags:"motivational"
  }
]

