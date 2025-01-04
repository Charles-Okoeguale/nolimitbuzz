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
  
    if (!user) return <div className="p-4">
        <svg 
          className="animate-spin h-5 w-5 mr-3 text-blue-500" 
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
    </div>;
  
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