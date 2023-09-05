import React, { useState, useEffect } from "react";
import Posts from "./i3";
import Pagination from "./i2";

function Page() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://random-data-api.com/api/users/random_user?size=${usersPerPage}&page=${currentPage}`
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, [currentPage, usersPerPage]);

  if (loading && users.length === 0) {
    return <h2>Loading...</h2>;
  }

  //Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const howManyPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Users</h1>
      <Posts users={currentUsers} />
      <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Page;
