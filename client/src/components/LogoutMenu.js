import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function LogoutMenu (props) {

  return <Menu.Item
    as={Link} to={"/auth/logout"}
    name={"Logout"}
    active={props.activeItem === "Logout"}
    onClick={props.logout}
  > 
  </ Menu.Item>
  }