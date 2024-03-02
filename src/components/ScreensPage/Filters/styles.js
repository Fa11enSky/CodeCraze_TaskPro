import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 64px;
  height: 20px;
  left: 1352px;
  top: 82px;
`;

export const FilterIcon = styled.div`
  /* filter */
  width: 16px;
  height: 16px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Vector = styled.div`
  /* Vector */
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 12.5%;
  bottom: 12.5%;
  border: 1.5px solid rgba(255, 255, 255, 0.8);
`;

export const FiltersText = styled.div`
  /* Filters */
  width: 40px;
  height: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.8);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;
