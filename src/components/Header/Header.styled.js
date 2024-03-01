import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  text-decoration: none;
  list-style: none;
  width:100%;
  height: 68px;
`;

export const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 21px;
  margin-right: 15px;
  gap: 14px;

`;

export const ListItem = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  list-style: none;
  padding-right: 24px;
`;

export const P = styled.p`
  margin-right: 8px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
`;
