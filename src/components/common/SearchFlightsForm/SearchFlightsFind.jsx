import React from 'react';
import './SearchFlightFind.css';
import Button from '../button/button';

const SearchFlightsFind = () => {
  return (
    <div className="searchFlightMainDiv">
      <div className="id01">
        <h1>SEARCH FLIGHTS</h1>
        <div className="id01-2">
          <input
            type="radio"
            id="return"
            name="chekone"
            value="return"
          />
          <label htmlFor="return" className='lable1'> Return</label>
   
          <input
            type="radio"
            id="oneway"
            name="chekone"
            value="oneway"
          />
          <label htmlFor="oneway" >One-way</label>
        </div>
      </div>
      <div className='searchFlightForm'>
          <form action="">
            <div className="inputContainer">
              <label for="departure">Departure</label>
              <input type="text" id="departure" name="departure" placeholder="Singapore(SIN)"/>
            </div>
            <div className="inputContainer">
              <label for="Arrival">Arrival</label>
              <input type="text" id="Arrival" name="departure" placeholder="Los Angeles (LA)"/>
            </div>
            <div className="inputContainer">
              <label for="Date">Date</label>
              <input type="date" id="departure" name="departure" placeholder=" "/>
            </div>
            <Button className="hello" buttonTittle="SEARCH FLIGHTS"/>
          </form>
      </div>  
    </div>
  );
};

export default SearchFlightsFind;