import React, { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
useEffect(() => {
  fetchQuote();
}, []);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.api-ninjas.com/v2/quotes?categories=success,wisdom', {
        headers: {
          'X-Api-Key': '5qUxmcbvuyHMwfwlLZ3Q0g==zw1e11WMTkv4LWGK',
        },
      });

      const data = await response.json();
      setQuote(data[0].quote || 'No quote found');
      setAuthor(data[0].author || 'Unknown');
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch quote');
      setLoading(false);
    }
  };

  if (loading) return <p>Loading quote...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="quote-box">
      <p>"{quote}"</p>
      <span>— {author}</span>
    </div>
  );
}

export default Quote;
