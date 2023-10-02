import Home from "./pages/Home/Home";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";
import Courses from "./components/Courses/Courses";
import Questions from "./components/Questions/Questions";
import Stat from "./components/Statistics/Stat";
import Register from "./pages/Register/Register";
import SIngleCourse from "./components/SingleCourse/SIngleCourse";
import Test from "./pages/Test/Test";
import SingleStat from "./components/SingleStat/SingleStat";

function App() {
  const router = createBrowserRouter([{
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/course/:id',
        element:<Courses/>
      },
      {
        path:'/single_course/:id',
        element:<SIngleCourse/>
      },
      {
        path:'/questions/:id',
        element:<Questions/>
      },
      {
        path:'/statistics/:id',
        element:<Stat/>
      }
    ]
  },
{
  path:'/login',
  element:<Login/>
},
{
  path:'/register',
  element:<Register/>
},
{
  path:'/test/:id',
  element:<Test/>
},
{
  path:'/single_stat/:id',
  element:<SingleStat/>
}
])
  return (<div className="app_container">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
