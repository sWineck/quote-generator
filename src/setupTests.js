// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Testen, ob das Zitat und der Autor angezeigt werden
test('check if quote and author are displayed', () => {
  // Rendern Sie die App-Komponente
  render(<App />);
  // Überprüfen Sie, ob das Zitat und der Autor im DOM vorhanden sind
  const quoteElement = screen.getByText(/meinZitat1/i);
  const authorElement = screen.getByText(/Peter1/i);
  // Überprüfen Sie, ob das Zitat und der Autor angezeigt werden
  expect(quoteElement).toBeInTheDocument();
  expect(authorElement).toBeInTheDocument();
});

// Testen, ob ein neues Zitat generiert wird, wenn der Button geklickt wird
test('check if new quote is generated on button click', async () => {
  // Rendern Sie die App-Komponente
  render(<App />);
  // Holen Sie sich den Button zum Generieren eines Zitats
  const button = screen.getByText(/Generate Quote/i);
  // Holen Sie sich das anfänglich angezeigte Zitat und den Autor
  const initialQuoteElement = screen.getByTestId('quote');
  const initialAuthorElement = screen.getByTestId('author');
  const initialQuote = initialQuoteElement.textContent;
  const initialAuthor = initialAuthorElement.textContent

  // Klicken Sie auf den Button
  fireEvent.click(button);

  // Warten Sie darauf, dass sich das Zitat ändert
  await waitFor(() => {
    const newQuoteElement = screen.getByTestId('quote');
    const newQuote = newQuoteElement.textContent;
    expect(newQuote).not.toEqual(initialQuote);
  });

  // Warten Sie darauf, dass sich der Autor ändert
  await waitFor(() => {
    const newAuthorElement = screen.getByTestId('author');
    const newAuthor = newAuthorElement.textContent
    expect(newAuthor).not.toEqual(initialAuthor);
  });
});
