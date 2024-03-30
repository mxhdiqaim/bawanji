import { useReducer } from "react";

import { flightReducer } from "./FlightReducer";
import { FlightContext, FlightProviderT } from "./FlightContext";

interface IChildrenProps {
  children: JSX.Element | JSX.Element[];
}

const initialState: FlightProviderT = {
  error: null,
  loading: null,
};

export const FlightProvider = ({ children }: IChildrenProps) => {
  const [userData, dispatch] = useReducer(flightReducer, initialState);
  

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const removeLoading = () => {
    dispatch({ type: "REMOVE_LOADING" });
  };

  return (
    <FlightContext.Provider
      value={{ userData, setLoading, removeLoading }}
    >
      {children}
    </FlightContext.Provider>
  );
};
