
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="py-4 px-4 border-b border-tg-card w-full">
      <h1 className="text-2xl font-medium text-center">{title}</h1>
    </header>
  );
};

export default Header;
