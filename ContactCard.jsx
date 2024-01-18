import React, { useState } from 'react';

const ContactCard = props => {
    const [showAge, setShowAge] = useState(false);
    const handleShowAge = () => {
        setShowAge(!showAge);
    }
  return (
    <div className='contact-card'>
      <img src={props.avatar} alt="profile" />
        <div className="user-details">
          <p>Name: {props.name}</p>
          <p>Email: {props.email}</p>
          {/*Another way  {showAge === true ? <p>Age: 25</p> : null} */} 
          {showAge && <p>Age: {props.age}</p> }
          <button onClick={handleShowAge}>
            Toggle Age
          </button>
        </div>
    </div>
  );
}

export default ContactCard