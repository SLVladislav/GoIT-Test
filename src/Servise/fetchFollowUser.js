import axios from "axios";

export const fetchFollowUser = async (state) => {
  const response = await axios.put(`/Followers/${state.id}`, {
    ...state,
    followers: (state.followers += 1),
  });
  return response.data.followers;
};
