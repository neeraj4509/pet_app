import React, { useEffect, useState } from 'react';

function DisplayArea({ petType }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (petType) {
      const url = petType === 'cat' 
        ? 'https://catfact.ninja/fact' 
        : 'https://dog.ceo/api/breeds/image/random';

      fetch(url)
        .then(response => response.json())
        .then(data => setData(data));
    }
  }, [petType]);

  if (!petType) return <p></p>;

  return (
    <div className="DisplayArea">
      {petType === 'cat' ? <p className="cat-fact">{data?.fact}</p> : <img src={data?.message} alt="Dog" />}
    </div>
  );
}

export default DisplayArea;
