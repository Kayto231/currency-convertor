import React, { useEffect, useState } from 'react';

const FinancialNewsItem = ({ item }) => {
  const handleClick = () => {
    window.open(item.link, '_blank');
  };
  const [content, setContent] = useState('');
  useEffect(() => {
    setContent(item.content);
  }, []);

  return (
    <div className="financial__item" onClick={handleClick}>
      {content.substring(0, 150)}...
    </div>
  );
};

export default FinancialNewsItem;
