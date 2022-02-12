import {
  FETCH_START,
  FETCH_SUCCESS,
  SET_PRODUCT_FILTER_DATA,
  GET_PRODUCT_LIST,
  FETCH_ERROR,
} from '../../utils/constants/ActionTypes';
import Api from '../../@sling/services/ApiConfig';

export const setProductFilters = (filters) => {
  return (dispatch) => {
    dispatch({type: SET_PRODUCT_FILTER_DATA, payload: filters});
  };
};

export const getProducts = (filterData) => {
  console.log('[onGetEcommerceData] action start');
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.post('/api/product/list', {
      params: {filterData},
    })
      .then((data) => {
        if (data.status === 200) {
          console.log(
            data,
            '[onGetEcommerceData] action - data Response on 200',
          );
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_PRODUCT_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: 'Something went wrong, Please try again!',
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};
