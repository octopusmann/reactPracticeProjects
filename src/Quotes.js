import { useEffect,useState } from "react";
import "./Quotes.css";
function Quotes () {

const [quote, setQuote] = useState([]);
const [author, setAuthor] = useState();

useEffect(() => {
    generateQuote()
}, []);

const generateQuote = () => {

    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
    .then(response =>response.json())
    .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
    })

}

const handleClick = ()  => {

    generateQuote();

   };

return (

    <main className="main-page"> 
    <div className="box-container"> 
    
        <div id = "quote"> <p>{quote}</p></div>
        <div id = "author"> <p>{author}</p></div>
        <div id="button-box">
        <button onClick={handleClick}> Generate quote</button>
        </div>
    </div>
  </main>
);

}
export default Quotes;