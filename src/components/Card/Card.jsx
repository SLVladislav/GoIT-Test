import { useEffect, useState } from "react";
import useIsFollowingCard from "../../hooks/useIsFollowingCard";
import { fetchFollowUser } from "../../Servise/fetchFollowUser";
import fetchFollowingUser from "../../Servise/fetchFollowingUser";
import Status from "../../status/status";
import { Cards, Img, Line, Followers, Button, Tweets } from "./Card.styled";
// import updateStorageFollowing from "../../utils/updateStorageFollowing";

const Card = ({ cardInfo }) => {
  const [state, setState] = useState(cardInfo);
  const [status, setStatus] = useState(Status.IDLE);
  const [isFollowing, setIsFollowing] = useIsFollowingCard(state.id);

  const handleFollowClick = async () => {
    try {
      if (!isFollowing) {
        const followers = await fetchFollowUser(state);

        setState((prevState) => ({
          ...prevState,
          followers,
        }));
        // setIsFollowing(false);
        // updateStorageFollowing(state.id, isFollowing);
        setIsFollowing(true);
        setStatus(Status.RESOLVED);
      } else {
        const followers = await fetchFollowingUser(state);
        setState((prevState) => ({
          ...prevState,
          followers,
        }));
        // updateStorageFollowing(state.id, isFollowing);
        setIsFollowing(false);
        setStatus(Status.RESOLVED);
      }
    } catch (error) {
      setStatus(Status.REJECTED);
      console.log(error);
    }
  };
  return (
    <Cards>
      <img
        src={picture}
        alt="picture"
        style={{
          position: "absolute",
          width: 308,
          height: 168,
          left: 36,
          top: 28,
        }}
      />
      <img
        src={logo}
        alt="logo"
        style={{
          position: "absolute",
          width: 76,
          height: 22,
          left: 20,
          top: 20,
        }}
      />
      <Img imageUrl={state.avatar}></Img>
      <Line></Line>
      <Tweets> {state.tweets}Tweets</Tweets>
      <Followers>{formattedNumber(state.followers)}Follower</Followers>
      <Button
        onClick={handleFollowClick}
        isFollowing={isFollowing}
        disabled={status === Status.PENDING || status === Status.REJECTED}
        // status={status}
      >
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </Cards>
  );
};

export default Card;

// const Card = ({ userFollowers }) => {
//   const [state, setState] = useState(userFollowers);
//   const [status, setStatus] = useState(Status.IDLE);
//   const [isFollowing, setIsFollowing] = useIsFollowingCard(state.id); // Передайте правильне значення id

//   const handleFollowClick = async () => {
//     try {
//       if (!isFollowing) {
//         const followers = await fetchFollowUser(state);
//         console.log(followers);

//         setState((prevState) => ({
//           ...prevState,
//           followers,
//         }));
//         setIsFollowing((prevIsFollowing) => !prevIsFollowing);
//         updateStorageFollowing(state.id, !isFollowing); // Оновлення значення isFollowing
//         setStatus(Status.RESOLVED);
//       } else {
//         const followers = await fetchFollowingUser(state);
//         setState((prevState) => ({
//           ...prevState,
//           followers,
//         }));
//         setIsFollowing((prevIsFollowing) => !prevIsFollowing);
//         updateStorageFollowing(state.id, !isFollowing); // Оновлення значення isFollowing
//         setStatus(Status.RESOLVED);
//       }
//     } catch (error) {
//       setStatus(Status.REJECTED);
//       console.log(error);
//     }
//   };

//   return (
//     <Cards>
//       <img
//         src={picture}
//         alt="picture"
//         style={{
//           position: "absolute",
//           width: 308,
//           height: 168,
//           left: 36,
//           top: 28,
//         }}
//       />
//       <img
//         src={logo}
//         alt="logo"
//         style={{
//           position: "absolute",
//           width: 76,
//           height: 22,
//           left: 20,
//           top: 20,
//         }}
//       />
//       <Img imageUrl={state.avatar}></Img>
//       <Line></Line>
//       <Tweets> {state.tweets}Tweets</Tweets>
//       <Followers>{formattedNumber(state.followers)}Follower</Followers>
//       <Button
//         onClick={handleFollowClick}
//         isFollowing={isFollowing}
//         disabled={status === Status.PENDING || status === Status.REJECTED}
//       >
//         {isFollowing ? "Following" : "Follow"}
//       </Button>
//     </Cards>
//   );
// };

// const Card = ({ userFollowers }) => {
//   const [state, setState] = useState(userFollowers);
//   const [status, setStatus] = useState(Status.IDLE);
//   const [isFollowing, setIsFollowing] = useIsFollowingCard(state.id); // Передайте правильне значення id

//   useEffect(() => {
//     setState(userFollowers);
//   }, [userFollowers]);

//   const handleFollowClick = async () => {
//     try {
//       if (!isFollowing) {
//         const followers = await fetchFollowUser(state);

//         setState((prevState) => ({
//           ...prevState,
//           followers,
//         }));
//         setIsFollowing((prevIsFollowing) => !prevIsFollowing);
//         updateStorageFollowing(state.id, !isFollowing); // Оновлення значення isFollowing
//         setStatus(Status.RESOLVED);
//       } else {
//         const followers = await fetchFollowingUser(state);
//         setState((prevState) => ({
//           ...prevState,
//           followers,
//         }));
//         setIsFollowing((prevIsFollowing) => !prevIsFollowing);
//         updateStorageFollowing(state.id, !isFollowing); // Оновлення значення isFollowing
//         setStatus(Status.RESOLVED);
//       }
//     } catch (error) {
//       setStatus(Status.REJECTED);
//       console.log(error);
//     }
//   };

//   return (
//     <Cards>
//       <img
//         src={picture}
//         alt="picture"
//         style={{
//           position: "absolute",
//           width: 308,
//           height: 168,
//           left: 36,
//           top: 28,
//         }}
//       />
//       <img
//         src={logo}
//         alt="logo"
//         style={{
//           position: "absolute",
//           width: 76,
//           height: 22,
//           left: 20,
//           top: 20,
//         }}
//       />
//       <Img imageUrl={state.avatar}></Img>
//       <Line></Line>
//       <Tweets> {state.tweets} Tweets</Tweets>
//       <Followers>{formattedNumber(state.followers)} Follower</Followers> //
//       <Button
//         onClick={handleFollowClick}
//         isFollowing={isFollowing}
//         disabled={status === Status.PENDING || status === Status.REJECTED}
//       >
//         {isFollowing ? "Following" : "Follow"}
//       </Button>
//     </Cards>
//   );
// };

// export default Card;
