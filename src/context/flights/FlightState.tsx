import { useReducer } from "react";

import { flightReducer } from "./FlightReducer";
import { flightContext, FlightProviderT } from "./flightContext";
import axios from "axios";

interface IChildrenProps {
  children: JSX.Element | JSX.Element[];
}

const initialState: FlightProviderT = {
  error: null,
  loading: null,
};

export const FlightProvider = ({ children }: IChildrenProps) => {
  const [userData, dispatch] = useReducer(flightReducer, initialState);

  const getFlight = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer Lz1VsIDAo2PjRAhyFMSa3jTyOE0c`,
          accept: "*/*",
        },
      };

      const url =
        "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ABV&destinationLocationCode=DXB&departureDate=2024-04-02&adults=1&travelClass=ECONOMY&nonStop=false&max=5";

      const response = await axios.get(url, config);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const removeLoading = () => {
    dispatch({ type: "REMOVE_LOADING" });
  };

  const value = { userData, setLoading, removeLoading, getFlight };

  return (
    <flightContext.Provider value={value}>{children}</flightContext.Provider>
  );
};
