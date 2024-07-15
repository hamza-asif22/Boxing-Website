import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/news';

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log('Full API Response:', response.data); // Log the full response data

        // Adjust this line based on the actual structure of the response
        const articles = response.data.articles || response.data.headlines || [];
        setData(articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div className='min-h-screen text-white flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: "url('/media/b7.jpg')" }}>
      <h1>Latest College Football News</h1>
      {data.length === 0 ? (
        <p>No news articles found.</p>
      ) : (
        data.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default News;
