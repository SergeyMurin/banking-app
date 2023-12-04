import { ActionTypes, IApplication, IUser } from "../actions/actions";
import { SET_IS_AUTH } from "../actions/actionsConstants";

type IState = {
  isAuth: boolean;
  user: IUser;
  applications: IApplication[];
};
const initialState: IState = {
  isAuth: false,
  user: {
    id: null,
    name: "",
    secondName: "",
    lastName: "",
    username: "",
    isManager: false,
    scansCount: 0,
    confirmedApplications: 0,
    approvedapplications: 0,
    reviewedApplications: 0,
  },
  applications: [],
};

export const appReducer = (
  state = initialState,
  action: ActionTypes
): IState => {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};
