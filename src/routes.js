import Index from "views/Index.js";
import Profile from "./pages/ProfilePage";
import Tables from "views/examples/Tables.js";
import Icons from "./pages/IconsPage";
import Questionare from "./pages/QuestionarePage";
import React from "react";
import MyAccount from "./pages/MyAccount";
import CreateRecipes from "./pages/CreateRecipePage";
import Recipes from "./pages/AllRecipesPage";
import AllWorkoutPage from"./pages/AllWorkoutPage";
import WorkoutVideoUploadPage from "./pages/WorkoutVideoUploadPage";
const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-home",
    component: <Index />,
    layout: "/main",
    bodyTypeAvailable: true,
    ut: 0
  }, {
    path: "/workouts",
    name: "Workouts",
    icon: "fas fa-dumbbell",
    component: <AllWorkoutPage />,
    layout: "/main",
    bodyTypeAvailable: true,
    ut: 0
  },{
    path: "/recipes/create",
    name: "Create recipes",
    icon: "fas fa-utensils",
    component: <CreateRecipes/>,
    layout: "/main",
    bodyTypeAvailable: true,
    ut: 1
  },{
    path: "/recipes",
    name: "Diet recipes",
    icon: "fas fa-utensils",
    component: <Recipes/>,
    layout: "/main",
    bodyTypeAvailable: true,
    ut: 0
  },
  // {
  //   path: "/account",
  //   name: "My Account 2",
  //   icon: "fas fa-user",
  //   component: <MyAccount />,
  //   layout: "/main",
  //   bodyTypeAvailable: true
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: <Icons />,
  //   layout: "/main",
  //   bodyTypeAvailable: true
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/main",
    bodyTypeAvailable: true,
    hidden: true,
    ut: 0
  },
  {
    path: "/questionare",
    name: "Questionare",
    icon: "ni ni-single-02 text-yellow",
    component: <Questionare />,
    layout: "/main",
    bodyTypeAvailable: false,
    ut: 0
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/main",
  //   bodyTypeAvailable: true
  // },
  {
    path: "/workout/create",
    name: "Create workout",
    icon: "ni ni-bullet-list-67 text-red",
    component: <WorkoutVideoUploadPage/>,
    layout: "/main",
    bodyTypeAvailable: true,
    ut: 1
  }
];
export default routes;
