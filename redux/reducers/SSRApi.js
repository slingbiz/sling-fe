import {SET_SSR_API_RESPONSE} from '../../shared/constants/ActionTypes';

const initialState = {
  ssrApi: {},
};

const ssrApi = (state = initialState, action) => {
  switch (action.type) {
    case SET_SSR_API_RESPONSE: {
      return {...state, ssrApi: action.payload};
    }

    default: {
      return state;
    }
  }
};
export default ssrApi;
