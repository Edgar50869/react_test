import "./Navbar.css";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;

const Navbar = (props) => {
    return (
        <Menu selectedKeys={[props.current]} mode="horizontal">
        <Menu.Item onClick={(e) => props.handleClick("home")} key="home" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item onClick={(e) => props.handleClick("posts")} key="posts" icon={<AppstoreOutlined />}>
          Posts
        </Menu.Item>
        <Menu.Item onClick={(e) => props.handleClick("todos")} key="todos" icon={<AppstoreOutlined />}>
          Todos
        </Menu.Item>
        <Menu.Item onClick={(e) => props.handleClick("albums")} key="albums" icon={<AppstoreOutlined />}>
          Albums
        </Menu.Item>
      </Menu>
    )
}

export default Navbar;