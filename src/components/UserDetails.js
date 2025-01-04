
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const UserDetails = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => setUser(data));
    }, [id]);
  
    if (!user) return <div className="p-4">Loading...</div>;
  
    return (
      <div className="p-4 max-w-2xl mx-auto">
        <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
          ← Back to Users
        </Link>
        <div className="border rounded-lg p-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
          <div className="space-y-3">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <div>
              <strong>Address:</strong>
              <p className="ml-4">
                {user.address.street}, {user.address.suite}<br />
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };