'use client'

import Image from 'next/image';

function Card({ children }) {
  return (
    <div className='border rounded-md border-gray-600 p-4'>{children}</div>
  );
}

export default function Home() {
  const name = 'Piotr';

  const handleClick = (e) => {
    e.preventDefault();
    
    console.log(e)
    alert('Hello!')
  }

  return (
    <>
      <div className='p-20 space-y-4'>
        <div>Hello, {name}</div>
        <Card>This is being passed from parent</Card>
        <Card>
          <div>This is JS!</div>
          <Card>Nested text!</Card>
        </Card>
        <Card />
        <Card />
        <button onClick={handleClick}> Click me! </button>
      </div>
    </>
  );
}
