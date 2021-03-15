import axios from "axios";
import { API_URL } from "../../config";

export const startLoadingPost = () => ({
  type: "postPage/startLoadingPost",
});

export const postFullyFetched = (postData) => ({
  type: "postPage/postFullyFetched",
  payload: postData,
});

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);

    // console.log("postResponse", postResponse.data);
    // console.log("commentsResponse", commentsResponse.data);

    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}
