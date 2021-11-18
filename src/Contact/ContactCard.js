import React from 'react';
import './ContactCard.css';

const ContactCard = ({ data }) => {
  const { iconName, title, desc } = data;
  return (
    <div className="contactCard bg-light text-center w-100">
      <i className={`fas fa-${iconName} contactCardIcon fa-3x my-3 text-primary`} />
      <h3 className="my-3 text-danger">{title}</h3>
      <p className="text-muted my-3">{desc}</p>
    </div>
  );
};

export default ContactCard;
