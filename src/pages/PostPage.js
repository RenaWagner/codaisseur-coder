import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";
import ReactMarkdown from "react-markdown";
import moment from "moment";

export default function PostPage() {
  const dispatch = useDispatch();
  const postAndComment = useSelector(selectPostAndComments);
  const postId = useParams();
  const id = postId.id;

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  console.log(postAndComment);

  return (
    <div>
      {postAndComment ? (
        <div>
          <h1>{postAndComment.post.title}</h1>
          <p className="meta">
            By <strong>{postAndComment.post.developer.name} </strong>
            {moment(postAndComment.post.createdAt).format("DD-MM-YYYY")}
          </p>
          {postAndComment.post.tags.map((tag) => {
            return <React.Fragment key={tag.id}>{tag.tag}</React.Fragment>;
          })}
          <ReactMarkdown source={postAndComment.post.content} />
          <h2>Comments</h2>
          {postAndComment.comments.rows.length ? (
            postAndComment.comments.rows.map((comment) => {
              return <li>{comment}</li>;
            })
          ) : (
            <p>No comments on this post yet!</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
