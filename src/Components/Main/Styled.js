import styled from 'styled-components';
import { ButtonStyle } from '../../global-styles';

export const Wrapper = styled.div`
  border: 1px solid #ddd;
  font-size: 0.5rem;
  margin: 0.5rem 1rem;
  padding: 1rem;
  @media (max-width: 1024px) {
    margin: 0 auto;
    padding: 0.2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0.5rem 0;
  justify-content: space-between;
  label {
    margin-right: 0.2rem;
  }
  input,
  select {
    height: 1rem;
    line-height: 1rem;
  }
`;

export const HeaderItem = styled.div`
  margin: 0.2rem 0;
`;

export const AddUserBtn = styled.button`
  ${ButtonStyle};
  background: #0066ff;
  color: #fff;
  &:active {
    background: #0052cc;
  }
`;
