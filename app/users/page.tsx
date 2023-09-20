interface User {
  name: string;
  id: number;
  email: string;
}

const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  return (
    <div className="bg-white mx-auto w-[600px]">
      <h3>Users: </h3>
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover">
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
