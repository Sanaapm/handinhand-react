import React, { useState } from 'react';
import Login from './Login.jsx';
import Image from './assets/han.jpg'


const Header = () => (
  <header>
    <h1>Hand In Hand</h1>
    {/* <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav> */}
  </header>
);

const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => onRegister(name, email, password);

  return (
    <div className="reg">
      <h2>Register</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => onLogin(email, password);

  return (
    <div className="log">
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};



const VolunteerRequest = ({ onRequestPickup, volunteers }) => {
  const [pickupLocation, setPickupLocation] = useState('');

  return (
    <div className="req">
      <h2>Request a Volunteer for Pickup</h2>
      <input type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} placeholder="Enter Pickup Location" />
      <button onClick={() => onRequestPickup(pickupLocation)}>Request Pickup</button>

      <h3>Available Volunteers:</h3>
      <ul>
        {volunteers.map((volunteer, index) => (
          <li key={index}>{volunteer}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => (
  <footer>
    <p>&copy; 2025 Local Food Rescue Platform. All rights reserved.</p>
  </footer>
);

const HandInHandApp = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [isDonor, setValue] = useState(0); // Initial value is 0

  const registerUser = (name, email, password) => {
    console.log('Registered:', { name, email, password });
  };

  const loginUser = (email, password) => {
    console.log('Logged in:', { email, password });
  };

  const requestPickup = (location) => {
    console.log('Pickup requested at:', location);
    setVolunteers([...volunteers, `Volunteer for ${location}`]);
  };

  const setZero = () => {
    setValue(0); // Toggle between 0 and 1
};
  const setOne = () => {
    setValue(1); // Toggle between 0 and 1
};
  
  return (
    <div className="app-container">
      <Header />
      <div className="main">
        <div className="top-container">
          <div className="content">
            <div className="left-par">
              <div className="hero">
                <h2>Join the Fight Against Food Waste</h2>
                <p>Connect with local charities, shelters, and people in need to donate or receive food.</p>
              </div>

              <div className="buttons">
                <button onClick={setOne}>I am a Donor</button>
                <button onClick={setZero}>I am a Recipient</button>
              </div>
              <div className="mainContent">
                {isDonor 
                ?
                <>
                  <h2>Donate Surplus Food</h2>
                  <form id="donorForm">
                    <input type="text" id="foodItem" placeholder="Food Item" required></input>
                    <input type="number" id="quantity" placeholder="Quantity" required></input>
                    <input type="date" id="expirationDate" required></input>
                    <button type="submit">Donate</button>
                  </form>
                </> : <>
                <h2>Available Food Donations</h2>
                  <div className="donation-list">
                      <ul>
                          <li>Food Item 1 - Quantity: 10 - Expires on: 2025-02-20</li>
                          <li>Food Item 2 - Quantity: 5 - Expires on: 2025-02-22</li>
                          <li>Food Item 3 - Quantity: 20 - Expires on: 2025-02-18</li>
                      </ul>
                  </div>
                </>
                }
              </div>
            </div>

            <div className="right-par">
              <img src={Image} alt="Food Donation" />
            </div>
          </div>
          <div></div>
          <div className="container">
            {/* <RegistrationForm onRegister={registerUser} /> */}
            <Login /> 
            {/* <LoginForm onLogin={loginUser} /> */}
          </div>
        </div>
      </div>

      <VolunteerRequest onRequestPickup={requestPickup} volunteers={volunteers} />
      <Footer />
    </div>
  );
};

export default HandInHandApp;
