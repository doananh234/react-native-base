import Types from '../Actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';
export const INITIAL_STATE = Immutable({
  data: null,
  error: null,
  isLogin: false,
  fetching: false,
  editing: false,
});

const login = (state, action) => {
  return state.merge({
    error: null,
    fetching: true
  });
}

const register = (state, action) =>
  state.merge({
    isLogin: false,
    error: null,
    fetching: true
  });

const logout = (state, action) => {
  return state.merge({
    data: {},
    error: null,
    fetching: false,
    isLogin: false
  });
}

const editUser = (state, action) =>
  state.merge({
    data: {...state.data, ...action.data},
    error: null,
    editing: action.isEditProfile,
    fetching: false
  });

const success = (state, action) =>
  state.merge({
    data: {...state.data, ...action.response},
    isLogin: true,
    editing: false,
    fetching: false
  });

const failure = (state, action) =>
  state.merge({
    fetching: false,
    error: action.error,
    editing: false,
  });


const ACTION_HANDLERS = {
  [Types.LOGIN]: login,
  [Types.REGISTER]: register,
  [Types.LOGOUT]: logout,
  [Types.EDIT_USER]: editUser,
  [Types.UPDATE_USER_SUCCESS]: success,
  [Types.UPDATE_USER_FAILURE]: failure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
