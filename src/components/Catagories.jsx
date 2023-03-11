import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/catagoriesSlice';
import ButtonWrap from './Books/ButtonWrap';

const Catagories = () => {
  const dispatch = useDispatch();
  const { category: { categories: cat } } = useSelector((store) => store);
  return (
    <div>
      <h5>{cat}</h5>
      <ButtonWrap onClick={() => dispatch(checkStatus())} type="button" className="button status">
        Check status
      </ButtonWrap>
    </div>
  );
};

export default Catagories;
