import { useEffect, useState } from "react";
import { CardList } from "./components/CardList/CardList";
import Status from "./status/status";
import { fetchFollower } from "./Servise/fetchFollowers";
import Paginate from "./components/Pagination/Pagination";
import Card from "./components/Card/Card";

// function App() {
//   const [userFollowers, setUserFollowers] = useState([]);
//   const [status, setStatus] = useState(Status.IDLE);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filterUsers, setFilterUsers] = useState([]);

//   const cardsPerPage = 4;
//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const cardsOnCurrentPage = filterUsers.slice(
//     indexOfFirstCard,
//     indexOfLastCard
//   );
//   const count = Math.ceil(filterUsers.length / cardsPerPage);

//   if (cardsOnCurrentPage.length === 0 && currentPage !== 1) {
//     setCurrentPage((prev) => prev - 1);
//   }

//  useEffect(() => {
//    const abortController = new AbortController();

//    const fetchUsers = async () => {
//      setStatus(Status.PENDING);
//      try {
//        const fetchedUsers = await fetchFollower(abortController);

//        setUserFollowers([...fetchedUsers]);
//        setStatus(Status.RESOLVED);
//      } catch (error) {
//        setStatus(Status.REJECTED);
//        console.log(error);
//      }
//    };

//    fetchUsers();

//    return () => {
//      abortController.abort();
//    };
//  }, []);

//   return (
//     <>
//       <CardList userFollowers={cardsOnCurrentPage} />

//       <Paginate
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         count={count}
//       />
//     </>
//   );
// }

// export default App;

function App() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterUsers, setFilterUsers] = useState([]);

  const cardsPerPage = 1;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const cardsOnCurrentPage = filterUsers.slice(
    indexOfFirstCard,
    indexOfLastCard
  );
  const count = Math.ceil(filterUsers.length / cardsPerPage);
  if (cardsOnCurrentPage.length === 0 && currentPage !== 1) {
    setCurrentPage((prev) => (prev -= 1));
  }

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setStatus(Status.PENDING);
      try {
        const fetchedUsers = await fetchFollower(abortController);

        setUsers([...fetchedUsers]);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  // useEffect(() => {
  //   if (cardsOnCurrentPage.length === 0 && currentPage !== 1) {
  //     setCurrentPage((prev) => prev - 1);
  //   }
  // }, [cardsOnCurrentPage, currentPage]);

  return (
    <>
      <CardList users={cardsOnCurrentPage} />
      <Paginate
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        count={count}
      />
    </>
  );
}

export default App;
