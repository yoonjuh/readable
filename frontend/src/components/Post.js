import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const PostContainer = Styled.div`
  background-color: #FFFFFF;
  flex: 1;
  border: .12rem red dotted;
  position: relative;
  display: flex;
  flex-warp: wrap;
  flex-direction: column;
  padding: 1rem 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.5rem 0;
`
const TitleWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
`
const CloseButton = Styled.div`
  color: #b4b4b4;
  font-weight: bold;
  padding-left: 2rem;
  font-size: 2rem;

  :hover {
    color: 	#DC3545;
    transition-duration: 0.7s;
  }
`
const Title = Styled.div`
  color: #FF292C;
  font-size: 2.5rem;
`
const Author = Styled.div`
  font-size: 1.4rem;
  color: #6B7485;
`
const Contents = Styled.div`
  font-size: 1.8rem;
  margin-top: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Time = Styled.div`
margin-top: .5rem;
  font-size: 1.4rem;
  color: #6B7485;
`
const KeyIndicator = Styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`
const CategoryIcon = Styled.div`
  margin-right: 0.7rem;
  width: min-content;
  font-size: 1.3rem;
  background-color: blue;
  color: white;
  border-radius: .3rem;
  padding: .2rem .5rem;
`
const VoteScore = Styled.div`
  display: flex;
  justifyContent: center;
  align-items: center;
  width: min-content;
  font-size: 1.3rem;
  background-color: ${({ voteScore }) => (voteScore >= 10 ? '#dc3545' : 'gray')};
  color: white;
  border-radius: .3rem;
  padding: .2rem 0.5rem;
`
const VoteScoreNumber = Styled.div`
  color: #FFC900;
  margin-left: 0.3rem;
  font-size: 1.3rem;
`
const ThumbsUpButtom = Styled.div`
  color: #4169e1;
  border: .1rem #4169e1 solid;
  border-radius: .3rem;
  width: min-content;
  padding: 0 .5rem;
  margin-right: 1rem;

  :hover{
    background-color: #4169e1;
    color: white;
  }
`
const Icon = Styled.i`
  font-size: 2rem;
  padding-bottom: 0.3rem;
`
const ThumbsDownButton = Styled.div`
  border: .1rem grey solid;
  border-radius: .3rem;
  width: min-content;
  padding: 0 .5rem;

  :hover {
    background-color: grey;
    color: white;
  }
`

const Post = ({ post = {} }) => {
  const { category, voteScore, title, author, body, timestamp } = post
  console.log(`from Post ${JSON.stringify(post)}`)
  console.log(category, title, author)
  return (
    <PostContainer>
      <TitleWrapper>
        <Title>{title}</Title>
        <CloseButton>{'×'}</CloseButton>
      </TitleWrapper>
      <Author>{`Posted by ${author}`}</Author>
      <KeyIndicator>
        <CategoryIcon>{category}</CategoryIcon>
        <VoteScore voteScore={voteScore}>
          {'Vote'}
          <VoteScoreNumber>{`${voteScore < 0 ? '-' : ''}${voteScore}`} </VoteScoreNumber>
        </VoteScore>
      </KeyIndicator>
      <Contents>{body}</Contents>
      <Time>{timestamp}</Time>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ThumbsUpButtom>
            <Icon className="far fa-thumbs-up" />
          </ThumbsUpButtom>
          <ThumbsDownButton>
            <Icon className="far fa-thumbs-down" />
          </ThumbsDownButton>
        </div>
      </div>
    </PostContainer>
  )
}

export default Post
