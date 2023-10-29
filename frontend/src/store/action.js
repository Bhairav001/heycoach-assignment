import * as types from "./action.types.js";
import axios from "axios";
// ##########################################
//Restaurant
const getRestaurantDetailsLoading = (payload) => {
  return {
    type: types.GET_RESTAURANT_DETAILS_LOADING,
    payload,
  };
};


const getRestaurantDetailsSuccess = (payload) => {
  return {
    type: types.GET_RESTAURANT_DETAILS_SUCCESS,
    payload,
  };
};


const getRestaurantDetailsError = (payload) => {
  return {
    type: types.GET_RESTAURANT_DETAILS_ERROR,
    payload,
  };
};





const getRestaurantDetailsAPI = (payload) => (dispatch) => {
    dispatch(getRestaurantDetailsLoading(payload));
    axios
      .get(`https://mock-server-eight-app-data.onrender.com/Restaurants`)
      .then((r) => dispatch(getRestaurantDetailsSuccess(r.data)))
      .catch((e) => dispatch(getRestaurantDetailsError(e.data)));
  };



  const addRestaurantDetailsLoading = (payload) => {
    return {
      type: types.DELETE_RESTAURANT_DETAILS_LOADING,
      payload,
    };
  };
  const addRestaurantDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_RESTAURANT_DETAILS_SUCCESS,
      payload,
    };
  };
  const addRestaurantDetailsError = (payload) => {
    return {
      type: types.DELETE_RESTAURANT_DETAILS_ERROR,
      payload,
    };
  };
  
  const addRestaurantDetailsAPI = (payload) => (dispatch) => {
    dispatch(addRestaurantDetailsLoading(payload));
    axios
      .post(`https://mock-server-eight-app-data.onrender.com/Restaurants`, payload)
      .then((r) => {
        dispatch(addRestaurantDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getRestaurantDetailsAPI());
      })
      .catch((e) => dispatch(addRestaurantDetailsError(e.data)));
  };
  // ##########################################
  const updateRestaurantDetailsLoading = (payload) => {
    return {
      type: types.DELETE_RESTAURANT_DETAILS_LOADING,
      payload,
    };
  };
  const updateRestaurantDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_RESTAURANT_DETAILS_SUCCESS,
      payload,
    };
  };
  const updateRestaurantDetailsError = (payload) => {
    return {
      type: types.DELETE_RESTAURANT_DETAILS_ERROR,
      payload,
    };
  };
  
  const updateRestaurantDetailsAPI = (payload) => (dispatch) => {
    dispatch(updateRestaurantDetailsLoading(payload));
    axios
      .patch(
        `https://mock-server-eight-app-data.onrender.com/Restaurants/${payload.id}`,
        payload
      )
      .then((r) => {
        dispatch(updateRestaurantDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getRestaurantDetailsAPI());
      })
      .catch((e) => dispatch(updateRestaurantDetailsError(e.data)));
  };
  
  // ##########################################
  const deleteRestaurantDetailsLoading = (payload) => {
    return {
      type: types.DELETE_RESTAURANT_DETAILS_LOADING,
      payload,
    };
  };
  const deleteRestaurantDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_RESTAURANT_DETAILS_SUCCESS,
      payload,
    }
 }  
  const deleteRestaurantDetailsError = (payload) => {
    return {
      type: types.DELETE_RESTAURANT_DETAILS_ERROR,
      payload,
    };
  };
  
  const deleteRestaurantDetailsAPI = (payload) => (dispatch) => {
    dispatch(deleteRestaurantDetailsLoading(payload));
    axios
      .delete(`https://mock-server-eight-app-data.onrender.com/Restaurants/${payload}`)
      .then((r) => {
        dispatch(deleteRestaurantDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getRestaurantDetailsAPI());
      })
      .catch((e) => dispatch(deleteRestaurantDetailsError(e.data)));
  };


  export{getRestaurantDetailsAPI,addRestaurantDetailsAPI,updateRestaurantDetailsAPI,deleteRestaurantDetailsAPI}