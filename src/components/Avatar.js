import React from 'react';

export default function Avatar({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      src={`https://i.imgur.com/${person.imageId}s.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
