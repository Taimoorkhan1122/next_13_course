interface User {
  name: string
  id: number
}

const Page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
    next: {revalidate: 10}
  });
  const users : User[] = await res.json();

  return ( 
    <div>
      <h3>Users: </h3><br />
      <ul> 
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default Page