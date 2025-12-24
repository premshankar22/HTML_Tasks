import UserCard from "./UserCard";

const UserList = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  return (
    <div className="card">
      <h2>User Details</h2>
      <UserCard name={user.name} email={user.email} />
    </div>
  );
};

export default UserList;