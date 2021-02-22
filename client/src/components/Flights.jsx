import React, {useState, useEffect } from 'react';
import axios from 'axios';

const getFlights = () => {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    // axios.get('/flights')
    //   .then(({data}) => setPosts(data))
    //   .catch((err) => console.warn(err));
  });

  return (
    <div>
      {/* {
        posts.map((post, i) => {
          return (
          //throw key to stop error
            <div key={ String(i) }>
              <div>Date: { post.flight_date }</div>
              <div>Status: { post.flight_status }</div>
              <div>Destination: { post.arrival.airport }</div>
              <div>Landing Time: { post.arrival.scheduled }</div>
              <div>Flight Number: { post.flight.number }</div>
              <br></br>
            </div>
          );
        })
      } */}
      <div>Date: 2021-02-21</div>
      <div>Status: landed</div>
      <div>Destination: Dallas/Fort Worth International</div>
      <div>Landing Time: 2021-02-21T11:05:00+00:00</div>
      <div>Flight Number: 3446</div>
      <br></br>
    </div>
  );
};

export default getFlights;
