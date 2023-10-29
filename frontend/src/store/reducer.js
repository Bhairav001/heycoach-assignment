import * as types from "./action.types";

const initialState = {
 movie: {
    loading: false,
    error: false,
  },
  data: [],
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_RESTAURANT_DETAILS_LOADING:
      return {
        ...state,
       movie: {
          loading: true,
          error: false,
        },
      };
    case types.GET_RESTAURANT_DETAILS_SUCCESS:
      return {
        ...state,
       movie: {
          loading: false,
          error: false,
        },
        data: [...payload],
      };
    case types.GET_RESTAURANT_DETAILS_ERROR:
      return {
        ...state,
       movie: {
          loading: false,
          error: true,
        },
      };
    case types.DELETE_RESTAURANT_DETAILS_LOADING:
      return {
        ...state,
       movie: {
          loading: true,
          error: false,
        },
      };
    case types.DELETE_RESTAURANT_DETAILS_SUCCESS:
      return {
        ...state,
       movie: {
          loading: false,
          error: false,
        },
      };
    case types.DELETE_RESTAURANT_DETAILS_ERROR:
      return {
        ...state,
       movie: {
          loading: false,
          error: true,
        },
      };
    case types.ADD_RESTAURANT_DETAILS_LOADING:
      return {
        ...state,
       movie: {
          loading: true,
          error: false,
        },
      };
    case types.ADD_RESTAURANT_DETAILS_SUCCESS:
      return {
        ...state,
       movie: {
          loading: false,
          error: false,
        },
      };
    case types.ADD_RESTAURANT_DETAILS_ERROR:
      return {
        ...state,
       movie: {
          loading: false,
          error: true,
        },
      };
    case types.UPDATE_RESTAURANT_DETAILS_LOADING:
      return {
        ...state,
       movie: {
          loading: true,
          error: false,
        },
      };
    case types.UPDATE_RESTAURANT_DETAILS_SUCCESS:
      return {
        ...state,
       movie: {
          loading: false,
          error: false,
        },
      };
    case types.UPDATE_RESTAURANT_DETAILS_ERROR:
      return {
        ...state,
       movie: {
          loading: false,
          error: true,
        },
      };
    default:
      return state;
  }
};
