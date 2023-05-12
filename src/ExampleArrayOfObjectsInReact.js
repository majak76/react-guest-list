import { useState } from 'react';

export default function ExampleArrayOfObjectsInReact() {
  const [user, setUser] = useState({
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Fabiane',
      last: 'da Conceição',
    },
    location: {
      city: 'Maricá',
      state: 'Amapá',
      country: 'Brazil',
      postcode: 27972,
      coordinates: {
        latitude: '-74.4067',
        longitude: '0.8445',
      },
    },

    email: 'fabiane.daconceicao@example.com',
    uuid: '532dd481-383b-4efa-a5f3-6bea201937f5',
    phone: '(00) 6249-3485',
    picture: 'https://randomuser.me/api/portraits/med/women/12.jpg',
  });
  return <img alt="user pic" src={user.picture} />;
}
