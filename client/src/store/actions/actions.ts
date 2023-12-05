import { UUID } from "crypto";
import {
  ADD_APPLICATION,
  INCREASE_APPROVED_APPLICATIONS,
  INCREASE_CONFIRMED_APPLICATIONS,
  INCREASE_REVIEWED_APPLICATIONS,
  INCREASE_SCANS_COUNT,
  REMOVE_USER,
  SET_APPLICATION_IS_PROCESSED,
  SET_APPLICATION_IS_VIEWED,
  SET_IS_AUTH,
  SET_USER,
} from "./actionsConstants";

export interface IUser {
  id: UUID | null;
  name: string;
  secondName: string;
  lastName: string;
  username: string;
  isManager: boolean;
  scansCount: number;
  confirmedApplications: number;
  approvedapplications: number;
  reviewedApplications: number;
}

export interface IApplication {
  id: UUID | null;
  userId: UUID | null;
  data: Object;
  isProcessed: boolean;
  isViewed: boolean;
}

export interface IActionSetIsAuth {
  type: typeof SET_IS_AUTH;
  payload: boolean;
}

export interface IActionSetUser {
  type: typeof SET_USER;
  payload: IUser;
}

export interface IActionIncreaseScansCount {
  type: typeof INCREASE_SCANS_COUNT;
}

export interface IActionIncreaseConfirmedApplications {
  type: typeof INCREASE_CONFIRMED_APPLICATIONS;
}

export interface IActionIncreaseApprovedApplications {
  type: typeof INCREASE_APPROVED_APPLICATIONS;
}

export interface IActionIncreaseReviewedApplications {
  type: typeof INCREASE_REVIEWED_APPLICATIONS;
}

export interface IActionAddApplication {
  type: typeof ADD_APPLICATION;
  payload: IApplication;
}

export interface IActionSetApplicationIsProcessed {
  type: typeof SET_APPLICATION_IS_PROCESSED;
  payload: boolean;
}

export interface IActionSetApplicationIsViewed {
  type: typeof SET_APPLICATION_IS_VIEWED;
  payload: boolean;
}

export interface IActionRemoveUser {
  type: typeof REMOVE_USER;
}

export type ActionTypes =
  | IActionSetUser
  | IActionSetIsAuth
  | IActionAddApplication
  | IActionIncreaseApprovedApplications
  | IActionIncreaseConfirmedApplications
  | IActionIncreaseScansCount
  | IActionIncreaseReviewedApplications
  | IActionSetApplicationIsProcessed
  | IActionSetApplicationIsViewed
  | IActionRemoveUser;
