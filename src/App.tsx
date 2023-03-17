import React from "react";
import "./App.css";
import ShowPosts from "./views/showPosts";
import ContainerMain from "./components/containerMain/index";
import { Route, Routes } from "react-router-dom";
import { RoutesWithAuth } from "./routes";
import Navbar from "./views/navbar";
import NavLeft from "./views/navLeft";
import { makeStyles } from "@mui/styles";
import ContainerPosts from "./components/containerPosts/index";
import { varCss } from "./theme/varCss";
import CreatePost from './views/posts';
const useStyles = makeStyles((theme) => {
  return {
    contentContainer: {
      display: "flex",
      paddingTop:"50px"
    },
    contentRightContainer:{
      width:`calc(100% - ${varCss.widthNavLeft})`
    }
  };
});
function App() {
  const [openCreatePost, setOpenCreatePost] = React.useState<boolean>(false)
  const classes = useStyles();
  const hanldeHideCreatePost = () => {
    setOpenCreatePost(false)
  } 
  const hanldeShowCreatePost = () => {
    setOpenCreatePost(true)
  } 
  return (
    <div className="App">
      <div className="">
        <Navbar />
        <div className={classes.contentContainer}>
          <NavLeft showCreatePost={hanldeShowCreatePost}/>
          <div className={classes.contentRightContainer}>
            <ContainerPosts>
              <Routes>
                {RoutesWithAuth.map((route) => (
                  <Route
                    path={route.path}
                    key={route.path}
                    element={<route.component />}
                  ></Route>
                ))}
              </Routes>
            </ContainerPosts>
          </div>
        </div>
      </div>
      <CreatePost open={openCreatePost} onClose={hanldeHideCreatePost}/>
    </div>
  );
}

export default App;
