import styled from "styled-components";
import { centerBox, rowBox } from "../styles";
import { IconAdd, IconMedia, IconSearch, IconUser } from "../assets/icons";
import { IconHome } from "../assets/icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ComponentWrapper>
      <Icon to="/">{IconHome}</Icon>
      <Icon to="/explorer">{IconSearch}</Icon>
      <Icon to="/new">{IconAdd}</Icon>
      <Icon to="/reels">{IconMedia}</Icon>
      <Icon to="/user">{IconUser}</Icon>
    </ComponentWrapper>
  );
};

const ComponentWrapper = styled.div`
  ${rowBox};
  position: absolute;
  bottom: -1px;
  height: 48px;
  min-height: 48px;
  width: 100%;
  color: white;
  background-color: black;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid var(--border);
  z-index: 9999;
`;

const Icon = styled(Link)`
  ${centerBox};
  text-decoration: none;
  color: white;
  width: 48px;
  height: 48px;
`;

export default Navigation;
