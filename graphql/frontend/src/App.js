import React, { useState } from 'react';
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'

const GET_USERS = gql`
  {
    users {
      id
      name
      age
    }
  }
`

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!) {
    createUser(name: $name, age: $age) {
      id
      name
      age
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(GET_USERS)
  const [ createUser, user ] = useMutation(CREATE_USER)
  const [ name, setName ] = useState('')
  const [ age, setAge ] = useState(18)

  console.log(user)

  function handleSubmit(e) {
    e.preventDefault();

    createUser({ variables: { name, age: +age } })
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong!</p>
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </fieldset>
        <button>Create user</button>
      </form>
      {data && data.users && data.users.length > 0 && data.users.map(user => {
        return (
          <div className="user" key={user.id}>
            <h1>{user.name}</h1>
            <span>{user.age}</span>
          </div>
        )
      })}
    </div>
  );
}

export default App;
