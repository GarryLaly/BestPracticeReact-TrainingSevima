import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: yellow;
  padding: 30px;
`;

const Title = styled.h1`
  color: green;
`;

const NewsItem = styled.a`
  background-color: ${({backgroundColor}) => backgroundColor || "gray" };
  padding: 20px;
  display: block;
  ${({noBorder}) => {
    if (!noBorder) {
      return "border-bottom: 1px solid black;";
    }
  }}
`;
const NewsItemTitle = styled.h4`
  margin: 0;
  padding: 0;
`;
const NewsItemDate = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

class List2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [
        {
          title: "Judul Artikel",
          date: "24 Jam 2020",
        },
        {
          title: "Judul Artikel",
          date: "24 Jam 2020",
        },
      ]
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>List Item with Class Component</Title>
        {this.state.news.map((item, index) => (
          <NewsItem key={index}>
            <NewsItemTitle>{item.title}</NewsItemTitle>
            <NewsItemDate>{item.date}</NewsItemDate>
          </NewsItem>
        ))}
      </Wrapper>
    );
  }
}

export default List2;
