import styled from "styled-components";
import {
  FaYoutube,
  FaSistrix,
  FaAngleDown,
  FaShare,
  FaPlus,
  FaFlag,
} from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

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
      <VideoSection>
        <video src="assets/images/video.mp4" controls className="video"></video>
      </VideoSection>
      <InfoAndUpNext>
        <InfoSection>
          <ul className="hashTag">
            <li>#DreamCoding</li>
            <li>#DreamCodress</li>
            <li>#Ellie</li>
          </ul>
          <div className="infoAndBtn">
            <p className="mainInfo">
              Clone Coding: Youtube Mobile Website 유튜브 모바일 웹사이트 따라
              만들기 | 프론트엔드 개발자 입문편: HTML, CSS, Javascript
              드림코딩과 함께하는 프론트엔드 실전 입문편
            </p>
            <button className="moreBtn">
              <FaAngleDown className="icon"></FaAngleDown>
            </button>
          </div>
          <p className="subInfo">1M views 1 month ago</p>
          <ul className="actions">
            <li>
              <button>
                <AiFillLike></AiFillLike>
              </button>
            </li>
            <li>
              <button>
                <AiFillDislike></AiFillDislike>
              </button>
            </li>
            <li>
              <button>
                <FaShare></FaShare>
              </button>
            </li>
            <li>
              <button>
                <FaPlus></FaPlus>
              </button>
            </li>
            <li>
              <button>
                <FaFlag></FaFlag>
              </button>
            </li>
          </ul>
        </InfoSection>
        <UpNextSection></UpNextSection>
      </InfoAndUpNext>
    </div>
  );
}

const Header = styled.header`
  width: 100%;
  height: 40px;
  background-color: black;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  padding 0 20px 0 20px;
  & .logo{
    display: flex;
    align-items: center;
    & .icon{
      margin-right: 20px;
    }
  }
`;

const VideoSection = styled.section`
  width: 100%;
  height: 500px;
  background: black;
  text-align: center;

  & .video {
    height: 100%;
  }
`;
const InfoAndUpNext = styled.div`
  height: 100%;
  display: flex;
`;
const InfoSection = styled.section`
  flex: 1 1 50%;
  & .hashTag {
    display: flex;
    margin: 10px 10px 10px 10px;
    & li {
      color: blue;
      margin-right: 10px;
    }
  }
  & .infoAndBtn {
    display: flex;
    margin: 10px 10px 10px 10px;
    & .mainInfo {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    & .moreBtn {
      height: 100%;
    }
  }
  & .subInfo {
    margin: 0 0 10px 10px;
  }
  & .actions {
    display: flex;
    justify-content: space-around;
    & li {
      & button {
        height: 100%;
      }
    }
  }
`;
const UpNextSection = styled.section`
  flex: 1 1 50%;
`;

export default App;
