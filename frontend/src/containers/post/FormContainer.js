import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import marked from 'marked';
import FormHeader from '../../components/post/FormHeader';
import MarkdownEditor from '../../components/editor/MarkdownEditor';

const FormBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

const InputContainer = styled.div`
  flex: 1;
  display: flex;
`;
const TextArea = styled.textarea`
  font-family: 'Open Sans';
  padding: 1rem;
  font-size: 2rem;
  flex: 1;
  min-height: 100%;
  background-color: ${props => props.backgroundColor};
  border: none;
  color: #99a3a4;
  &:focus {
    outline: none;
  }
`;

const FormContainer = () => {
  const [inputBody, setInputBody] = useState('');

  // function onChangeHandler(e) {
  //   setInputBody(e.target.value);
  // }

  marked.setOptions({
    highlight(code) {
      return require('highlight.js').highlightAuto(code).value;
    },
    breaks: false,
    gfm: true,
    langPrefix: 'language-',
    pedantic: false,
    sanitize: false,
    smartLists: false,
    tables: true,
  });

  return (
    <FormBox>
      <FormHeader />
      <InputContainer>
        <MarkdownEditor inputBody={inputBody} onChangeHandler={setInputBody} />
        {/* <TextArea
          backgroundColor="#2a353b"
          value={inputSource}
          onChange={onChange}
          placeholder="Markdown to be enabled here..."
        /> */}
        <TextArea
          backgroundColor="white"
          style={{flex: 1, fontSize: '3rem'}}
          // value={marked(inputSource)}
        />
      </InputContainer>
    </FormBox>
  );
};
export default FormContainer;
