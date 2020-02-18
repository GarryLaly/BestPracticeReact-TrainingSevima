import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {axiosGeneral} from "./globals";
import moment from "moment";
import "moment/locale/id";

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

const News = ({
  label,
  name
}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNewsAsync();
    // fetchPost({
    //   email: "email@domain.com",
    //   password: "test123"
    // });
  },[]);

  const fetchNewsAsync = async () => {
    try {
      const response = await axiosGeneral.get('news-json.php');
      console.log(response);
      const {data,status} = response;

      if (status === 200) {
        setNews(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const fetchNewsPromise = () => {
    axiosGeneral.get('news-json.php')
      .then(function (response) {
        const {data} = response;
        setNews(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const fetchPost = (values) => {
    axiosGeneral.post('news-json.php', values, {})
      .then(function (response) {
        const {data} = response;
        setNews(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Wrapper>
      <Title>List Item with Functional State (React Hooks)</Title>
      {news.map((item, index) => (
        <NewsItem key={index}>
          <NewsItemTitle>{item.title}</NewsItemTitle>
          {/* <NewsItemDate>{moment(item.date).format("dddd, DD MMMM YYYY")}</NewsItemDate> */}
          <NewsItemDate>{moment(item.date).fromNow()}</NewsItemDate>
        </NewsItem>
      ))}
    </Wrapper>
  )
};

export default News;
