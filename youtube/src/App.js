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
import { BiDotsVerticalRounded } from "react-icons/bi";

function App() {
  const nextInfoData = [
    {
      image: "assets/images/image.jpg",
      title:
        "프론트엔드 강의, 프론트엔드 개발자가 되고 싶다면? 웹개발 입문자편 강의를 시작합니다 ⭐️ (HTML, CSS, Javascript + 실전 프로젝트)",
      who: "드림코딩 by 엘리",
      veiw: "82K views",
    },
    {
      image: "assets/images/image.jpg",
      title:
        "프론트엔드 강의, 프론트엔드 개발자가 되고 싶다면? 웹개발 입문자편 강의를 시작합니다 ⭐️ (HTML, CSS, Javascript + 실전 프로젝트)",
      who: "드림코딩 by 엘리",
      veiw: "82K views",
    },
    {
      image: "assets/images/image.jpg",
      title:
        "프론트엔드 강의, 프론트엔드 개발자가 되고 싶다면? 웹개발 입문자편 강의를 시작합니다 ⭐️ (HTML, CSS, Javascript + 실전 프로젝트)",
      who: "드림코딩 by 엘리",
      veiw: "82K views",
    },
  ];
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
      <InfoAndUpNext className="InfoAndUpNext">
        <InfoSection className="InfoSection">
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
            <button className="moreBtn" id="infoSectionMoreBtn">
              <FaAngleDown className="icon"></FaAngleDown>
            </button>
          </div>
          <p className="subInfo">1M views 1 month ago</p>
          <ul className="actions">
            <li>
              <button>
                <AiFillLike className="like"></AiFillLike>
              </button>
              <span>1K</span>
            </li>
            <li>
              <button>
                <AiFillDislike></AiFillDislike>
              </button>
              <span>0</span>
            </li>
            <li>
              <button>
                <FaShare></FaShare>
              </button>
              <span>Share</span>
            </li>
            <li>
              <button>
                <FaPlus></FaPlus>
              </button>
              <span>Save</span>
            </li>
            <li>
              <button>
                <FaFlag></FaFlag>
              </button>
              <span>Report</span>
            </li>
          </ul>
          <div className="metaInfo">
            <div className="userInfo">
              <img src="assets/images/image.jpg" className="userImage"></img>
              <div className="titleAndInfo">
                <span className="title">드림코딩 by 엘리</span>
                <span className="info">1M views 1 month ago</span>
              </div>
            </div>
            <button className="userBtn">SUBSCRIBE</button>
          </div>
        </InfoSection>
        <UpNextSection className="UpNextSection">
          <p className="upNext">Up Next</p>
          {nextInfoData.map((value) => {
            return (
              <div className="nextInfo">
                <img src={value.image} className="image"></img>
                <div className="mainInfo">
                  <p className="title">{value.title}</p>
                  <p className="who">{value.who}</p>
                  <p className="veiw">{value.veiw}</p>
                </div>
                <button className="moreBtn">
                  <BiDotsVerticalRounded></BiDotsVerticalRounded>
                </button>
              </div>
            );
          })}
        </UpNextSection>
      </InfoAndUpNext>
    </div>
  );
}
const UpNextSection = styled.section`
  width: 50%;
  padding: 15px 10px 0px 10px;
  & .upNext {
    color: gray;
  }
  & .nextInfo {
    display: flex;
    margin-top: 10px;
    & .image {
      flex: 1 1 35%;
      width: 100%;
    }
    & .mainInfo {
      flex: 1 1 60%;
      display: flex;
      flex-direction: column;
      padding: 0 10px 0 10px;
      & .who,
      .veiw {
        color: gray;
      }
    }
    & .moreBtn {
      flex: 1 1 5%;
      height: 100%;
    }
  }
`;

const InfoSection = styled.section`
  width: 50%;
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
      transition: transform 300ms ease-in-out;
    }
    & .moreBtn:hover {
      //transform: translate(20px, 30px);
      transform: scale(1.5);
      //transform: rotate(180deg);
      .mainInfo {
        -webkit-line-clamp: 3;
      }
    }
  }
  & .subInfo {
    margin: 0 0 10px 10px;
  }
  & .actions {
    display: flex;
    justify-content: space-around;
    margin: 0px 10px 0px 10px;
    & li {
      display: flex;
      flex-direction: column;
      color: gray;
      text-align: center;
      & button {
        height: 100%;
        color: gray;
        & .like {
          color: blue;
        }
      }
    }
  }
  & .metaInfo {
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
    margin: 10px 10px 10px 10px;
    display: flex;
    justify-content: space-between;
    padding: 5px 0 5px 0;
    & .userInfo {
      display: flex;
      & .userImage {
        border-radius: 50%;
      }
      & .titleAndInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
      }
    }
  }
`;
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
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .InfoSection {
      width: 100%;
    }
    .UpNextSection {
      width: 100%;
    }
  }
`;

export default App;
