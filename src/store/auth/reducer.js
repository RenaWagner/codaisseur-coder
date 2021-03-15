const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function redcuer(state = initialState, action) {
  switch (action.type) {
    case "auth/userLoggedIn": {
      return {
        ...state,
        me: action.payload.profile.data,
        accessToken: action.payload.jwt,
      };
    }
    case "auth/logout": {
      return {
        ...state,
        me: null,
        accessToken: null,
      };
    }
    default: {
      return state;
    }
  }
}
