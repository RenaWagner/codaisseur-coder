const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "postPage/startLoadingPost": {
      return {
        ...state,
        loading: true,
      };
    }
    case "postPage/postFullyFetched": {
      return {
        ...state,
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    }
    default: {
      return state;
    }
  }
}
