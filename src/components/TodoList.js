import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
// import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  border-radius: 25px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="Follow Oluwafisayomi.dev on Twitter." done />
      <TodoItem text="Learn Figma by 4pm." done />
      <TodoItem text="Coding at 9am." done={false} />
      <TodoItem text="Watch Mr Beasts Videos." done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
