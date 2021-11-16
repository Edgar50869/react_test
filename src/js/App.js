import React, {useState} from "react";
import { Layout } from 'antd';
import '../css/App.css';
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Albums from "./pages/Albums";
import Navbar from "./components/Navbar";
import AnyText from './components/ToDo';
import Help from './components/Help';
import About from './components/About';
import Contact from './components/Contacts'
import ErrorPage from "./components/ErrorPage";
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom'

const {Header, Footer, Content} = Layout;
const App = () => {

  const [current, setCurrent] = useState("home");
  const [todoStatus, setTodoStatus] = useState("all");
  const changeCurrent = (current) => {
    setCurrent(current)
  }
  const pageMap = {
    home: <Home />,
    posts: <Posts />,
    todos: <Todos />,
    albums: <Albums />
  }
  const todos = [
    {label:"first todo", type:"warning", description: 'desc', complited: false},
    {label:"second todo", type:"done", description: 'desc', complited: false},
    {label:"third todo", type: 'warning', description: 'desc', complited: true}
  ];
  const todos_markup = todos.map(
    e => todoStatus === 'all' || e.type  === todoStatus ? <AnyText {...e} 
    />:''
    );
  return (
    <div>
      <BrowserRouter>
      <Link to="/about">about </Link>
      <Routes>
        <Route path="/" element={<Help />} exact/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>
      </BrowserRouter>
    <Layout>
      <Header>Header</Header>
      <Navbar current = {current} handleClick = {changeCurrent} />
      <Content>
        <div className="pageContent">
          {pageMap[current]}
        </div>
        <select onChange={(e) => setTodoStatus(e.target.value)}>
        <option value="all">all
          </option>
          <option value="warning">warning
          </option>
          <option value="done">done
          </option>
        </select>
        <div className="ToDos">
          {todos_markup}
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
