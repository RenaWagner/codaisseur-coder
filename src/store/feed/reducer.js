const initialState = {
  loading: true,
  posts: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "feed/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "feed/postsFetched": {
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
