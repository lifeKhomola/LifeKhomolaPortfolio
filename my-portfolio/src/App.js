import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
// import { Switch, Route } from "react-router-dom";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/Workpage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Routes>
        {/* <Switch> */}
          <Route  path="/" element={<Main/>}/>
          <Route  path="/about" element={<AboutPage/>}/>
          <Route  path="/blog" element={<BlogPage/>} />
          <Route  path="/work" element={<WorkPage/>}/>
          <Route  path="/skills" element={<MySkillsPage/>}/>
          <Route path="/*" element={<NotFound/>}/>
        {/* </Switch> */}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
