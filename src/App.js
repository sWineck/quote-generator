import React, { Component } from 'react';
import ZitateAutor from './components/ZitateAutor';
import quotes from './db';

export default class App extends Component{
  state = {
   zitat: quotes[0].zitat,
   autor: quotes[0].autor
  }

generateRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

this.setState({
  zitat: randomQuote.zitat,
  autor: randomQuote.autor
})


}

render(){
      // Rückgabe der JSX-Struktur der Komponente
      return (
        <div className="container">
          <h1 className="text-center">Random Quote</h1>
          <ZitateAutor
          // Übergeben der Funktion zum Generieren eines neuen Zitats als Prop an die QuoteAndAuthor-Komponente
            generateRandomQuote={this.generateRandomQuote}
            // Übergeben des aktuellen Zustands als Prop an die ZitateAutor-Komponente
            zitat={this.state}
          />
        </div>
      )
    }
}

