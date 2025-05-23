import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '6px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      margin: '10px 0'
    }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
