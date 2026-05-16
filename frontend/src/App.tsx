import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users");

    setUsers(res.data);
  };

  const addUser = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/users", form);

    setForm({
      name: "",
      email: "",
      phone: "",
      city: "",
    });

    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);
  const deleteUser = async (id: string) => {
  await axios.delete(`http://localhost:5000/api/users/${id}`);

  getUsers();
};

  return (
    <div style={{ padding: "30px" }}>
      <h1>Ep enter KEP details HERE</h1>

      <form onSubmit={addUser}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          placeholder="City"
          value={form.city}
          onChange={(e) =>
            setForm({
              ...form,
              city: e.target.value,
            })
          }
        />

        <br />
        <br />

        <button type="submit">Save User</button>
      </form>

      <hr />

      <h2>Stored feature Users</h2>
     


      {users.map((user) => (
        <div
          key={user._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>City: {user.city}</p>
        </div>
      ))}
    </div>
  );
}

export default App;