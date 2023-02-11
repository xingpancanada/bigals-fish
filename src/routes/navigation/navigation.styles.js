import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const LogoImg = styled.img`
  height: 3rem;
  width: auto;
`;

export const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  color: black;
  cursor: pointer;
  &:hover {
    color: #76cbf5;
  }
`;

export const WelcomeSpan = styled.div`
  padding-right: 1rem;
  color: #68a9ff;
`;
