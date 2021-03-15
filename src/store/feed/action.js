import axios from "axios";

export const startLoading = () => ({
  type: "feed/startLoading",
});

export const postsFetched = (post) => ({
  type: "feed/postsFetched",
  payload: post,
});

export async function fetchNext5Posts(dispatch, getState) {
  const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;
  const posts = getState().feed.posts;
  console.log("posts", posts);

  dispatch(startLoading());
  const res = await axios.get(
    `${API_URL}?offset=${posts ? posts.length : 0}&limit=5`
  );
  const morePosts = res.data.rows;
  dispatch(postsFetched(morePosts));
}
