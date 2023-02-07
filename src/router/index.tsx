import { ReactElement, FunctionComponent } from "react";
import Main from "../pages/Main/Main";
import Profile from "../pages/Profile/Profile";

interface IRoute {
  path: string;
  element: ReactElement;
}

export const routes: IRoute[] = [
  { path: "/",
    element: <Main/>,
  },
  { path: "/user/:id",
    element: <Profile/>,
  },
];