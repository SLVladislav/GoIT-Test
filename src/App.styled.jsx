import styled from "@emotion/styled";

export const Card = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  left: 435px;
  top: 168px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Img = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: #ebd8ff;
  border: 8px solid #ebd8ff;

  border-radius: 50%;

  background: url("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1048.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Tweets = styled.p`
  position: absolute;
  left: 50%;
  top: 284px;
  transform: translateX(-50%);

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Followers = styled.p`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 324px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Button = styled.button`
  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  font-family: "inherit";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
`;
