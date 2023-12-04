import { Dispatch } from "redux";
import { SET_IS_AUTH } from "../actions/actionsConstants";
import { ActionTypes } from "../actions/actions";

export const setAuth = (isAuth: boolean) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: SET_IS_AUTH, payload: isAuth });
  };
};
