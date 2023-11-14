/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// import { MdAdd } from 'react-icons/md';

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
  const [inputValue, setInputValue] = useState('');

  const onToggle = () => setOpen(!open);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleAdd = () => {
    console.log('Todo added:', inputValue);
    setInputValue('');
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <InputWrapper>
      <Add>Add what you want to do later on.</Add>
      <Input
        autoFocus
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterKey}
        style={{ display: 'block' }}
      />
      <ButtonWrapper onClick={handleAdd} open={open}>
        Add to list
      </ButtonWrapper>
    </InputWrapper>
  );
}

export default TodoCreate;

// import React, { useState } from 'react';
// import styled, { css } from 'styled-components';
// import { MdAdd } from 'react-icons/md';

// function ColorButton(props) {
//     const { name } = props;
//     return <ButtonWrapper>{name}</ButtonWrapper>;
// }

// const ButtonWrapper = styled.div`
//   position: fixed;
//   left: 50%;
//   bottom: 30px;
//   transform: translateX(-50%);
//   width: 220px;
//   height: 38px;
//   line-height: 44px;
//   text-align: center;
//   background: var(--highlight-color);
//   color: #fff;
//   font-size: var(--font-size-medium);
//   cursor: pointer;

//   transition: filter 0.3s ease; // 트랜지션 추가

//   &:active {
//     filter: blur(4px); // 클릭 시 흐리게 처리
//   }

//   ${props =>
//         props.open &&
//         css`
//       filter: none; // 열렸을 때는 흐림 효과 제거
//       background: #ff6b6b;
//       &:hover {
//         background: #ff8787;
//       }
//       &:active {
//         background: #fa5252;
//       }
//     `}
// `;

// const InsertForm = styled.form`
//   position: fixed;
//   left: 50%;
//   bottom: 120px;
//   transform: translateX(-50%);
//   background: #f8f9fa;
//   padding: 44px;
//   border-radius: 16px;
//   border: 1px solid #e9ecef;
//   display: ${props => (props.open ? 'block' : 'none')};
// `;
// const Input = styled.input`
//   width: calc(100% - 24px);
//   padding: 12px;
//   margin-bottom: 12px;
//   border-radius: 4px;
//   border: 1px solid #dee2e6;
//   outline: none;
//   font-size: 18px;
//   box-sizing: border-box;
// `;

// function TodoCreate() {
//     const [open, setOpen] = useState(false);

//     const onToggle = () => setOpen(!open);

//     return (
//         <>
//             <InsertForm open={open}>
//                 <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
//             </InsertForm>
//             <ButtonWrapper>
//                 <ColorButton onClick={onToggle} open={open} name="Add to list">
//                     <MdAdd />
//                 </ColorButton>
//             </ButtonWrapper>
//         </>
//     );
// }

// export default TodoCreate;

// import React, { useState } from 'react';
// import styled, { css } from 'styled-components';
// import { MdAdd } from 'react-icons/md';

// function ColorButton(props) {
//     const { name } = props;
//     return <ButtonWrapper>{name}</ButtonWrapper>;
// }

// const ButtonWrapper = styled.div`
//   width: 220px;
//   height: 44px;
//   line-height: 44px;
//   text-align: center;
//   background: var(--highlight-color);
//   color: #fff;
//   font-size: var(--font-size-medium);
//   cursor: pointer;

//   transition: filter 0.3s ease; // 트랜지션 추가

//   &:active {
//     filter: blur(4px); // 클릭 시 흐리게 처리
//   }

//   ${props =>
//         props.open &&
//         css`
//       filter: none; // 열렸을 때는 흐림 효과 제거
//       background: #ff6b6b;
//       &:hover {
//         background: #ff8787;
//       }
//       &:active {
//         background: #fa5252;
//       }
//     `}
// `;

// const InsertFormPositioner = styled.div`
//   width: 100%;
//   bottom: 0;
//   left: 0;
//   position: absolute;
// `;

// const InsertForm = styled.form`
//   background: #f8f9fa;
//   padding-left: 32px;
//   padding-top: 32px;
//   padding-right: 32px;
//   padding-bottom: 72px;

//   border-bottom-left-radius: 16px;
//   border-bottom-right-radius: 16px;
//   border-top: 1px solid #e9ecef;
// `;

// const Input = styled.input`
//   padding: 12px;
//   border-radius: 4px;
//   border: 1px solid #dee2e6;
//   width: 100%;
//   outline: none;
//   font-size: 18px;
//   box-sizing: border-box;
// `;

// function TodoCreate() {
//     const [open, setOpen] = useState(false);

//     const onToggle = () => setOpen(!open);

//     return (
//         <>
//             {open && (
//                 <InsertFormPositioner>
//                     <InsertForm>
//                         <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
//                     </InsertForm>
//                 </InsertFormPositioner>
//             )}
//             <ButtonWrapper>
//                 <ColorButton onClick={onToggle} open={open} name="Add to list">
//                     <MdAdd />
//                 </ColorButton>
//             </ButtonWrapper>

//         </>
//     );
// }

// export default TodoCreate;
