import React from 'react';


export default function Header() {
  return (
    <header className="text-center mb-10">
      <div className="flex justify-center mb-2">
        <Logo className="h-16 w-16" />
      </div>
      <h1 className="text-4xl font-bold">Konstantinos Merkouris</h1>
      <p className="text-lg text-gray-600">Full-Stack Software Engineer</p>
      <p className="text-sm text-gray-500">konstantinosmerkouris5@gmail.com | Athens, Greece</p>
    </header>
  );
}