import React from "react";

const ZitateAutor = (props) => {

const {zitat, generateRandomQuote} = props;

return(
<div id="quote-box">
<p id="quote" className="title">Quote: </p>
<div id="quote-content" data-testid="quote" className="content">{zitat.zitat}</div>
<p id="author" className="title">Author: </p>
<div id="author-content" data-testid="author" className="content">{zitat.autor}</div>
<button id="generate-quote" onClick={generateRandomQuote}>Generate Quote</button>
<a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${zitat.zitat} - ${zitat.autor}`} target="_blank" rel="noopener noreferrer">Tweet this Quote</a>
</div>

);

};

<p id="quote" class="title">Quote: </p>





export default ZitateAutor;