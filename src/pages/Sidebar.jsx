import React, { useState } from 'react';

const Sidebar = () => {
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const styles = {
    sidebar: {
      width: '300px',
      backgroundColor: '#D9D9D9',
      padding: '20px',
      borderRight: '1px solid #ddd',
      height: '100vh',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    filterItem: {
      marginBottom: '15px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    filterCircle: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: '#325098',
      marginRight: '10px',
      display: 'inline-block',
    },
    filterGroup: {
      marginBottom: '20px',
    },
    inputContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '15px',
    },
    inputBox: {
      width: '48%',
      padding: '10px',
      borderRadius: '10px',
      border: '1px solid #ddd',
      position: 'relative',
    },
    dropdownArrow: {
      position: 'absolute',
      right: '10px',
      top: '12px',
      fontSize: '12px',
      color: '#999',
      pointerEvents: 'none',
    },
  };

  const handleSelectProperty = (property) => {
    setSelectedProperties((prev) => {
      if (prev.includes(property)) {
        return prev.filter((item) => item !== property);
      }
      return [...prev, property];
    });
  };

  const handleSelectAmenity = (amenity) => {
    setSelectedAmenities((prev) => {
      if (prev.includes(amenity)) {
        return prev.filter((item) => item !== amenity);
      }
      return [...prev, amenity];
    });
  };

  const handleSelectAvailability = (availability) => {
    setSelectedAvailability((prev) => {
      if (prev.includes(availability)) {
        return prev.filter((item) => item !== availability);
      }
      return [...prev, availability];
    });
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.filterGroup}>
        <div style={styles.sectionTitle}>Property Type</div>
        {['House', 'Apartment', 'Rooms', 'Townhouses'].map((property) => (
          <div key={property} style={styles.filterItem} onClick={() => handleSelectProperty(property)}>
            {selectedProperties.includes(property) && <div style={styles.filterCircle}></div>}
            {property}
          </div>
        ))}
      </div>

      <div style={styles.filterGroup}>
        <div style={styles.sectionTitle}>Rooms</div>
        
        {/* Move Bedroom text above the input container */}
        <div style={styles.filterItem}>Bedroom</div>
        
        <div style={styles.inputContainer}>
          <div style={styles.inputBox}>
            Min
            <input
              type="number"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              style={{ width: '100%', border: 'none', outline: 'none', padding: '8px', borderRadius: '10px' }}
              placeholder="Min"
            />
          </div>
          <div style={styles.inputBox}>
            Max
            <input
              type="number"
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
              style={{ width: '100%', border: 'none', outline: 'none', padding: '8px', borderRadius: '10px' }}
              placeholder="Max"
            />
          </div>
        </div>
        
        <div style={styles.filterItem}>Bathroom</div>
      </div>

      <div style={styles.filterGroup}>
        <div style={styles.sectionTitle}>Amenities</div>
        {['Pool', 'Gym', 'Parking', 'Garden'].map((amenity) => (
          <div key={amenity} style={styles.filterItem} onClick={() => handleSelectAmenity(amenity)}>
            {selectedAmenities.includes(amenity) && <div style={styles.filterCircle}></div>}
            {amenity}
          </div>
        ))}
      </div>

      <div style={styles.filterGroup}>
        <div style={styles.sectionTitle}>Availability Date</div>
        {['Ready to move', 'Future availability'].map((availability) => (
          <div key={availability} style={styles.filterItem} onClick={() => handleSelectAvailability(availability)}>
            {selectedAvailability.includes(availability) && <div style={styles.filterCircle}></div>}
            {availability}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
