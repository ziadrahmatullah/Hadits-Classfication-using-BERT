import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: Props) => {
  return (
    <div className="antialiased w-full bg-gray-50">
      <main className="w-full min-h-screen">{children}</main>
    </div>
  );
};

export default MainTemplate;
