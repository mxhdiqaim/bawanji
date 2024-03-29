import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes, AppRouteType } from "./routes";

import "./App.scss";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

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
