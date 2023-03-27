import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { checkStatus } from '../redux/categories/catagoriesSlice';
import ButtonWrap from './Books/ButtonWrap';

const Catagories = () => {
  const dispatch = useDispatch();
  const { category: { categories: cat } } = useSelector((store) => store);
  return (
    <CatagoriesWrap>
      <h2>{cat[0]}</h2>
      <ButtonWrap onClick={() => dispatch(checkStatus())} type="button" className="button status">
        Check status
      </ButtonWrap>
    </CatagoriesWrap>
  );
};

const CatagoriesWrap = styled.div`
  display: grid;
  place-items: center;
`;

export default Catagories;
