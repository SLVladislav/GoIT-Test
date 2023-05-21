import axios from "axios";

axios.defaults.baseURL = "https://6465eb0a9c09d77a62f7acdc.mockapi.io";

export const fetchFollower = async (abortController) => {
  const response = await axios.get("/Followers", {
    signal: abortController.signal,
  });
  console.log(response.data);

  return response.data;
};
