import { Fragment, useState } from 'react';

const people = [
  {
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
  },
];

export default function ExampleArrayOfObjectsInReact() {
  const [users, setUsers] = useState(people);

  return (
    <>
      {users.map((user) => {
        return (
          <Fragment key={'user-profile-${user.uuid}'}>
            <img alt="user pic" src={user.picture} />
            <h6>
              {user.name.title} {user.name.first} {user.name.last}
            </h6>
            <div>
              <p>city: {user.location.city}</p>
              <p>country: {user.location.country}</p>
            </div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
            <br />
          </Fragment>
        );
      })}
      <button>Add new User</button>
    </>
  );
}
