import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes, AppRouteType } from "./routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

import "./App.scss";

const renderRoute = (route: AppRouteType, index: number): JSX.Element => {
  const element = <route.element />;

  return <Route key={index} path={route.to} element={element} />;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {appRoutes.map((route, index) => renderRoute(route, index))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
