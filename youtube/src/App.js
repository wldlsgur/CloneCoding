import styled from "styled-components";
import { FaYoutube, FaSistrix } from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";

function App() {
  return (
    <div className="App">
      <Header>
        <div className="logo">
          <FaYoutube className="icon"></FaYoutube>
          <span className="title">Youtube</span>
        </div>
        <div className="icons">
          <FaSistrix className="search"></FaSistrix>
          <RxDotsVertical className="dot"></RxDotsVertical>
        </div>
      </Header>
    </div>
  );
}

const Header = styled.header`
  width: 100%;
  height: 5%;
  background-color: black;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  & .icon {
  }
  & .title {
  }
`;

export default App;
