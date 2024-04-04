import { ErrorT, FlightProviderT } from "./flightContext";


type IUserAction =
  | { type: "ERROR"; payload: ErrorT }
  | { type: "SET_LOADING" }
  | { type: "REMOVE_LOADING" };

export const flightReducer = (
  state: FlightProviderT,
  action: IUserAction
): FlightProviderT => {
  switch (action.type) {
    
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "REMOVE_LOADING":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
