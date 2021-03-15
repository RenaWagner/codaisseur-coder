// import axios from "axios";
import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNext5Posts,
  postsFetched,
  startLoading,
} from "../store/feed/action";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";

// const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;
export default function PostsFeed() {
  //   const [data, setData] = useState({
  //     loading: true,
  //     posts: [],
  //   });
  const dispatch = useDispatch();
  const feedLoading = useSelector(selectFeedLoading);
  const postsLoaded = useSelector(selectFeedPosts);
  console.log(postsLoaded);

  //   async function fetchNext5Posts() {
  //     //   setData({ ...data, loading: true });
  //     dispatch(startLoading());
  //     const res = await axios.get(
  //       `${API_URL}?offset=${postsLoaded.length}&limit=5`
  //     );
  //     const morePosts = res.data.rows;
  //     dispatch(postsFetched(morePosts));
  //     //   setData({ loading: false, posts: [...data.posts, ...morePosts] });
  //   }

  useEffect(() => {
    // fetchNext5Posts();
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div>
      <p>Recent posts</p>
      {postsLoaded ? (
        postsLoaded.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
              {post.tags.map((tag) => {
                return <React.Fragment key={tag.id}>{tag.tag} </React.Fragment>;
              })}
            </div>
          );
        })
      ) : (
        <p>{feedLoading}</p>
      )}
      <button onClick={() => dispatch(fetchNext5Posts)}>Load more</button>
    </div>
  );
}
