import React, { useState } from 'react';
import pier23 from "../assets/logo.png";
import imf from "../assets/dp.svg";
import group18 from "../assets/Group 18.png"; // Importing Group 18.png

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("sell");

  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 30px',
      backgroundColor: '#f5f7fa',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      marginRight: '20px',
      width: '80px',
    },
    locationSelect: {
      marginRight: '15px',
      padding: '8px 12px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      backgroundColor: '#f5f5f5',
    },
    searchBarContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: '6px 12px',
      borderRadius: '30px',
      border: '1px solid #ddd',
      marginRight: '15px',
      width: '300px',
    },
    searchInput: {
      border: 'none',
      outline: 'none',
      flex: 1,
      padding: '6px',
      borderRadius: '20px',
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
    },
    priceRange: {
      marginRight: '15px',
      textAlign: 'center',
    },
    button: {
      padding: '8px 40px',
      marginRight: '40px',
      marginLeft: '40px',
      backgroundColor: '#1c4c9c',
      color: '#fff',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
    },
    icon: {
      fontSize: '30px',
      marginLeft: '-8px',
      cursor: 'pointer',
    },
    profilePic: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      marginLeft: '15px',
    },
    priceRangeDisplay: {
      fontSize: '12px',
      color: '#555',
      marginBottom: '5px',
    },
    priceRangeLabel: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#000',
    },
    optionsBox: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px',
      borderRadius: '20px',
      backgroundColor: '#e6f0ff',
      marginTop: '10px',
    },
    option: (isActive) => ({
      padding: '8px 16px',
      borderRadius: '20px',
      cursor: 'pointer',
      backgroundColor: isActive ? '#325098' : 'transparent',
      color: isActive ? '#fff' : '#000',
      fontWeight: isActive ? 'bold' : 'normal',
      transition: 'background-color 0.3s',
    }),
    image: {
      marginLeft: '20px', // Adjust spacing as needed
      width: '100px', // Adjust image width as needed
      borderRadius: '10px',
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.leftSection}>
        {/* Pier Logo */}
        {/* <img src={pier23} alt="Pier Logo" style={styles.logo} /> */}

        {/* Country Selector */}
        <select style={styles.locationSelect}>
          <option value="Pakistan">Pakistan</option>
        </select>

        {/* Search Bar */}
        <div style={styles.searchBarContainer}>
          <input type="text" placeholder="Search here" style={styles.searchInput} />
          <i className="fas fa-search" style={styles.icon}></i>
        </div>

        {/* Buttons */}
        <button style={styles.button}>Rent</button>
        <button style={styles.button}>Sell</button>

        {/* Price Range */}
        <div style={styles.priceRange}>
          <div style={styles.priceRangeLabel}>Price Range</div>
          <div style={styles.priceRangeDisplay}>
            <b>$3,200 - $206,700</b>
          </div>
          <input type="range" min="1000" max="200000" />
        </div>

        {/* Options Box */}
        <div style={styles.optionsBox}>
          {['sell', 'rent property', 'purchase'].map((option) => (
            <div
              key={option}
              style={styles.option(selectedOption === option)}
              onClick={() => setSelectedOption(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Notifications, Profile, Group Image */}
      <div style={styles.rightSection}>
        <img src={group18} alt="Group 18" style={styles.image} /> {/* Moved the image here */}
        <i className="fas fa-bell" style={styles.icon}></i>
        {/* Profile Picture Placeholder */}
        <img src={imf} alt="Profile" style={styles.profilePic} />
      </div>
    </header>
  );
};

export default Header;
