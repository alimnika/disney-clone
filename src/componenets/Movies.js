import React from "react";
import styled from "styled-components";
// import {selectMovies} from "../features/Movie/movieSlice"
// import {useSelector} from "react-redux"
// import {Link} from "react-router-dom"
function Movies() {
  // const movies = useSelector(selectMovies)
  return (
    <Container>
      <Text>Recommended for You</Text>
      <Content>
        <Wrap>
            <img src="https://newscdn2.weigelbroadcasting.com/pIKcA-1547745595-127682-blog-EnchantedTales.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="http://media-s3-us-east-1.ceros.com/editorial-content/images/2019/11/07/4e517819b35e70c155ff476bd4986040/1994-the-lion-king.png" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Disney-films-release-date-2380002.jpg?r=1585076573770" alt="" />
        </Wrap>
        <Wrap>
            <img src="http://media-s3-us-east-1.ceros.com/editorial-content/images/2019/11/07/4e517819b35e70c155ff476bd4986040/1994-the-lion-king.png" alt="" />
        </Wrap><Wrap>
            <img src="https://cherish365.com/wp-content/uploads/2021/05/Asian-American-and-Pacific-Islander-Movies-checklist-Over-the-Moon.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://i2.wp.com/twinfinite.net/wp-content/uploads/2021/09/Encanto.jpg?fit=1280%2C720&ssl=1" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://www.vitalthrills.com/wp-content/uploads/2021/03/raya-and-the-last-dragon-digital.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://i2.wp.com/twinfinite.net/wp-content/uploads/2021/09/Encanto.jpg?fit=1280%2C720&ssl=1" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://miro.medium.com/max/1400/1*6c9LL4NKMGEqn6nxdLeWNw.png" alt="" />
        </Wrap>
        <Wrap>
            <img src="http://media-s3-us-east-1.ceros.com/editorial-content/images/2019/11/07/4e517819b35e70c155ff476bd4986040/1994-the-lion-king.png" alt="" />
        </Wrap><Wrap>
            <img src="https://flixable.b-cdn.net/disney-plus/large/us/luca.png" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4EFA023C562F0DA8198539E7B41A11352AD5B95ACE82D7772A9ABC006C13B087/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;
const Container = styled.div``;
const Text = styled.h4`
  text-align:left;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
`;
const Wrap = styled.div`
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
