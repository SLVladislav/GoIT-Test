import axios from "axios";

axios.defaults.baseURL = "https://6465eb0a9c09d77a62f7acdc.mockapi.io/";

export const fetchUsers = async (page, abortController) => {
  const response = await axios.get("/Followers", {
    params: {
      page,
      limit: 3,
    },
    signal: abortController.signal,
  });
  return response.data;
};
