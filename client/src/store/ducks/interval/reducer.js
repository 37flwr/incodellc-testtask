import actions from "./actionTypes";

const initialState = {
  interval: 5000,
  loading: false,
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_INTERVAL:
      return {
        ...state,
        loading: true,
      };
    case actions.CHANGE_INTERVAL_SUCCESS:
      return {
        ...state,
        interval: action.payload,
        loading: false,
      };
    case actions.API_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default contact;
