import React from 'react';
import Avatar from './Avatar';
import Card from './Card';


export function Profile() {
  const person = {
    name: 'Ada Lovelace',
    imageId: 'YfeOqp2'
  };

  return (
    <Card>
      <h3>{person.name}</h3>
      <Avatar person={person} size={120} />
    </Card>
  );
}
