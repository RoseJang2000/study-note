import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers?limit=50')
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        'Loading...'
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}) : ${Math.round(coin.quotes.USD.price * 1000) / 1000}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
