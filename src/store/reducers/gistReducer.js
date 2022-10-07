import type from "../constant/gistConstants";

const initialState = {
  gists: {
    gists: [],
    error: "",
    loading: false,
  },
  details: {
    loading: false,
    data: {},
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case type.GET_GISTS_REQUEST:
      return {
        ...state,
        gists: {
          ...state?.gists,
          ...action.payload,
        },
      };
    case type.GET_GISTS_SUCCESS:
      return {
        ...state,
        gists: {
          ...state?.gists,
          ...action.payload,
        },
      };
    case type.GET_GISTS_FAILED:
      return {
        ...state,
        gists: {
          ...state?.gists,
          ...action.payload,
        },
      };

      // get gists by id

    case type.GET_GIST_BY_ID_REQUEST:
      return {
        ...state,
        details: {
          ...state?.details,
          ...action.payload,
        },
      };
    case type.GET_GIST_BY_ID_SUCCESS:
      return {
        ...state,
        details: {
          ...state?.details,
          ...action.payload,
        },
      };
    case type.GET_GIST_BY_ID_FAILED:
      return {
        ...state,
        details: {
          ...state?.details,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
