import React, { useState } from 'react';
import axios from 'axios';
import '../styles/issueFuel.css';

const IssueFuel = () => {
  const [vehicleNumberPlate, setVehicleNumberPlate] = useState('');
  const [fuelAmount, setFuelAmount] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/fuelTransaction', {
        VehicleNumberPlate: vehicleNumberPlate,
        FuelAmount: fuelAmount,
      });

      console.log(response.data); // Handle the successful response

    } catch (error) {
      console.error(error); // Handle the error
    }
  };

  return (
    <div className="issue-fuel-container">
      <h1 className="issue-fuel-title">Issue Fuel</h1>
      <form className="issue-fuel-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="vehicleNumberPlate" className="form-label">Vehicle Number Plate</label>
          <input
            type="text"
            id="vehicleNumberPlate"
            className="form-input"
            value={vehicleNumberPlate}
            onChange={(e) => setVehicleNumberPlate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fuelAmount" className="form-label">Fuel Amount</label>
          <input
            type="text"
            id="fuelAmount"
            className="form-input"
            value={fuelAmount}
            onChange={(e) => setFuelAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default IssueFuel;
