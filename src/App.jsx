import { useState } from "react";
import { Card, Line, Img, Tweets, Followers, Button } from "./App.styled";
import formattedNumber from "./Servise/formatedNumber";
import logo from "./img/logo.png";
import picture from "./img/picture.png";
import { fetchFollower } from "./Servise/fetchFollowers";

import useIsFollowingCard from "./hooks/useIsFollowingCard";

function App({ cardInfo }) {
  const [state, setState] = useState(cardInfo);
  const [isFollowing, setIsFollowing] = useIsFollowingCard(false);

  const handleFollowClick = async () => {
    try {
      if (!isFollowing) {
        const followers = await fetchFollower(state);
        setState((prevState) => ({
          ...prevState,
          followers,
        }));
        // setIsFollowing(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card>
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
      <Button onClick={handleFollowClick} isFollowing={isFollowing}>
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </Card>
  );
}

export default App;
