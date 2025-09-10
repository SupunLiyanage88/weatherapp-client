import { useAuth } from "../context/AuthContext";

function Homepage() {
  const { user, login, logout, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome {user.email}</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("careers@fidenz.com", "Pass#fidenz")}>Login</button>
      )}
    </div>
  );
}

export default Homepage;
