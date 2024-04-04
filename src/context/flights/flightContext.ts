import { createContext } from "react";

type FunctionT = () => void;

export type ErrorT = null | unknown;

export interface FlightProviderT {
  error?: ErrorT;
  loading: boolean | null;
}

export type Authenticate = {
  userData: FlightProviderT;
  setLoading: FunctionT;
  removeLoading: FunctionT;
  getFlight: () => void;
};

export const flightContext = createContext<Authenticate>({} as Authenticate);
