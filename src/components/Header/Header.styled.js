import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  text-decoration: none;
  list-style: none;
  width:100%;
  height: 68px;
  background-color: var(--background_header);
  transition: background-color 200ms linear;
`;

export const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 21px;
  margin-right: 15px;
  gap: 14px;
  color: var(--text-color);
  transition: color 500ms linear;
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
  color: var(--main_text_color);
  transition: color 00ms linear;
`;
