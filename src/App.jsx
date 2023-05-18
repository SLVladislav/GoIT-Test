import { Card, Line, Img, Tweets, Followers, Button } from "./App.styled";
import logo from "./img/logo.png";
import picture from "./img/picture.png";
function App() {
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
      <Img></Img>
      <Line></Line>
      <Tweets>tweets</Tweets>
      <Followers>followers</Followers>
      <Button>follow</Button>
    </Card>
  );
}

export default App;
