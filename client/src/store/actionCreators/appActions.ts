import { Dispatch } from "redux";
import {
  REMOVE_USER,
  SET_IS_AUTH,
  SET_USER,
} from "../actions/actionsConstants";
import { ActionTypes, IUser } from "../actions/actions";
import { IIncomingUser } from "../../@types/interfaces";
import { UUID } from "crypto";
import axios from "axios";
import { appConfig } from "../../config/appConfig";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

export const setAuth = (isAuth: boolean) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: SET_IS_AUTH, payload: isAuth });
  };
};

export const setUser = (incomingUser: IIncomingUser) => {
  const makeFullUser = (incomingUser: IIncomingUser): IUser => {
    return {
      id: incomingUser.id || null,
      name: incomingUser.name || "",
      secondName: incomingUser.secondName || "",
      lastName: incomingUser.lastName || "",
      username: incomingUser.username || "",
      isManager: incomingUser.isManager || false,
      scansCount: 0,
      confirmedApplications: 0,
      approvedapplications: 0,
      reviewedApplications: 0,
    };
  };

  const fullUser = makeFullUser(incomingUser);

  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: SET_USER, payload: fullUser });
  };
};

export const setUserAsync = (
  id: UUID
): ThunkAction<void, RootState, null, ActionTypes> => {
  return async (dispatch) => {
    const response = await axios
      .get(`${appConfig.API}/users`, { params: { id } })
      .catch((error) => {
        console.error(error);
      });
    if (response?.data[0]) {
      const incomingUser = response.data[0];
      dispatch(setUser(incomingUser));
    } else {
      return null;
    }
  };
};

export const increaseScansCount = () => {
  return (dispatch: Dispatch<ActionTypes>, getState: () => any) => {
    const { user } = getState().appReducer;
    const updatedUser = { ...user, scansCount: user.scansCount + 1 };
    dispatch({ type: SET_USER, payload: updatedUser });
  };
};

export const removeUser = () => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: REMOVE_USER });
  };
};
