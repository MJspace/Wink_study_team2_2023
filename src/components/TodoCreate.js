/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const ButtonWrapper = styled.div`
  position: relative;
  left: 30%;
  transform: translateX(-50%);
  width: 220px;
  height: 44px;
  line-height: 38px; /* 수정된 부분 */
  text-align: center;
  align-items: center;
  background: var(--highlight-color);
  color: #fff;
  font-size: var(--font-size-medium);
  cursor: pointer;

  transition: filter 0.3s ease;

  &:active {
    filter: blur(4px);
  }

  ${(props) =>
    props.open &&
    css`
      filter: none;
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
    `}
`;

const Add = styled.div`
  font-size: var(--font-size-medium);
  color: var(--highlight-color);
  bottom: 172px;
  left: 50%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  left: 50%;
`;

const Input = styled.input`
  width: 340px;
  height: 47px;
  border-radius: 12px;
  /* padding: 12px;
  margin-bottom: 12px; */
  gap: 15px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  position: relative;
  left: 45%;
  transform: translateX(-50%);
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <InputWrapper>
      <Add>Add what you want to do later on.</Add>
      <Input
        autoFocus
        onChange={onChange}
        // onKeyDown={handleEnterKey}
        style={{ display: 'block' }}
        value={value}
      />
      <ButtonWrapper onClick={onSubmit} open={open}>
        Add to list
      </ButtonWrapper>
    </InputWrapper>
  );
}

export default React.memo(TodoCreate);
