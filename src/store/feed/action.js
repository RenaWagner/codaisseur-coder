import axios from "axios";
import { API_URL } from "../../config";

export const startLoading = () => ({
  type: "feed/startLoading",
});

export const postsFetched = (post) => ({
  type: "feed/postsFetched",
  payload: post,
});

export async function fetchNext5Posts(dispatch, getState) {
  const posts = getState().feed.posts;
  console.log("posts", posts);

  dispatch(startLoading());
  const res = await axios.get(
    `${API_URL}/posts?offset=${posts ? posts.length : 0}&limit=5`
  );
  const morePosts = res.data.rows;
  dispatch(postsFetched(morePosts));
}
