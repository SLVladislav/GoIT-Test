import axios from "axios";

const fetchFollowingUser = async (state) => {
  const response = await axios.put(`/Followers/${state.id}`, {
    ...state,
    followers: (state.followers -= 1),
  });
  return response.data.followers;
};

export default fetchFollowingUser;
