import React, {useEffect, useState} from 'react';
import axios from 'axios';



const SearchBar = () => {
  const [keyword, setKeyword] = useState([]);
  const [results, setResults] = useState([]);

  const BarStyling = {width: '20rem', background: '#F2F1F9', border: 'none', padding: '0.5rem'};

  return (
    <div>
      <input
        value={keyword}
        style={BarStyling}
        //key="random1"

        onChange={(e) => setKeyword(e.target.value)}
        placeholder='search a business'
      />
      <button type="submit"
        onClick={() => {
          //console.log('line 24', keyword);
          axios.get(`http://localhost:3000/api/search?term=${keyword} `)
            .then(({data}) => {

              setResults(data.businesses);

            }).catch((err) => console.error(err));

        }}
      >Search</button>

      <div>

        {
          results.map((data, i) => {
            if (data) {
              return (
                <div className='business'>
                  <div key={String(i)}>

                    <h2> Name: {data.name}</h2>
                  </div>
                  <div className='loc'>
                    <h3>Address: {data.location.address1} {data.location.city} {data.location.state} {data.location.zip_code}</h3>
                  </div>
                  <div className='phone'>
                    <h3>Phone Number: {data.phone}</h3>
                  </div>
                  <div className='rating'>
                    <h3>Rating: {data.rating}</h3>
                  </div>

                </div>
              );
            }
            return null;
          })

        }
      </div>


    </div>


  );
};

export default SearchBar;