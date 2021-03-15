export const selectProfile = (reduxState) =>
  reduxState.auth ? reduxState.auth : null;

// reduxState.postPage.loading
// ? null
// : {
//     post: reduxState.postPage.post,
//     comments: reduxState.postPage.comments,
//   };
