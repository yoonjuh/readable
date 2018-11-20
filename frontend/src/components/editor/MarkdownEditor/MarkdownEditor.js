import React, {Component} from 'react';
import styled from 'styled-components';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/material.css';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/css/css');
require('codemirror/mode/go/go');
require('codemirror/addon/display/placeholder');
require('codemirror/mode/go/go');

const EditorContainer = styled.div``;

const EditorWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  min-width: 0;
  flex-direction: column;

  .editor {
    min-width: 0;
    flex: 1;
    display: flex;
    .CodeMirror {
      padding-top: 1rem;
      padding-bottom: 1rem;
      & > * {
        font-size: 2rem;
        line-height: 1.6rem;
      }
      .CodeMirror-lines {
        padding-left: 1.6rem;
        padding-right: 1.5rem;
        &.em {
          font-size: 2rem;
          line-height: 1.5rem;
        }
      }
      width: 1px;
      flex: 1;
      font-family: 'Open Sans', sans-serif;
      height: auto;
      font-size: 2.2rem;
      line-height: 1.5rem;

      .cm-variable {
        font-size: 1.7rem;
        line-height: 1.5rem;
      }
      .cm-variable-1 {
        font-size: 1.7rem;
        line-height: 1.5rem;
      }
      .cm-variable-2 {
        font-size: 1.7rem;
        line-height: 1.5rem;
      }
      .cm-variable-3 {
        font-size: 1.7rem;
        line-height: 1.5rem;
      }
      .cm-strong {
        font-size: 2rem;
        line-height: 1.5rem;
      }
      .cm-string {
        font-size: 1.7rem;
        line-height: 1.5rem;
      }
      .cm-em {
        font-size: 2rem;
        line-height: 1.5rem;
      }
      .cm-comment {
        font-size: 1.7rem;
        line-height: 1.5rem;
      }
      .cm-keyword {
        font-size: 1.8rem;
        line-height: 1.5rem;
      }

      .cm-link {
        font-size: 1.7rem;
      }
      .cm-tag {
        font-size: 1.7rem;
      }
      .cm-attribute {
        font-size: 1.7rem;
      }
      .cm-def {
        font-size: 1.7rem;
      }
      .cm-operator {
        font-size: 1.7rem;
      }
      .cm-builtin {
        font-size: 1.7rem;
      }
      pre {
        line-height: 1.5rem;
        font-size: 2.3rem;
      }
      .cm-header {
        line-height: 1.75;
      }
      .cm-header-1 {
        font-size: 3.25rem;
      }
      .cm-header-2 {
        font-size: 2.6825rem;
      }
      .cm-header-3 {
        font-size: 2.2125rem;
      }
      .cm-header-4 {
        font-size: 1.825rem;
      }
      .cm-header-5 {
        font-size: 1.525rem;
      }
      .cm-header-6 {
        font-size: 1.325rem;
      }
      &.cm-s-material {
        height: 100%;
        font-size: 8rem;
        line-height: 1.5rem;

        &.CodeMirror-empty {
          color: #808b96;
        }
        .cm-header {
          font-weight: 600;
        }
        .cm-quote {
          font-size: 2rem;
          line-height: 1.5rem;
          font-style: italic;
        }
      }
    }
  }
`;

class MarkdownEditor extends Component {
  editor = null;

  mirroInstance = null;

  componentDidMount() {
    const {inputBody} = this.props;
    this.mirroInstance = CodeMirror(this.editor, {
      value: inputBody,
      mode: 'markdown',
      theme: 'material',
      lineWrapping: true,
      placeholder: 'Tell us about your story...',
    });
  }

  render() {
    const {inputBody, onChangeHandler} = this.props;
    console.log(inputBody);
    return (
      <EditorWrapper>
        <div className="editor" ref={ref => (this.editor = ref)} />
      </EditorWrapper>
    );
  }
}

export default MarkdownEditor;
