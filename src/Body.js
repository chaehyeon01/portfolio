import React, {Component} from 'react';
import ilhsaemain from "./img/ilhase_main.png";
import ilhsaeImg from "./img/ilhase.jpg";
import ilhsaeImg2 from "./img/ilhase2.jpg";
import ilhsaeImg3 from "./img/ilhase3.jpg";
import ilhsaeImg4 from "./img/ilhase4.jpg";
import ilhsaeImg5 from "./img/ilhase5.jpg";
import ilhsaeImg6 from "./img/ilhase6.jpg";
import ramada from "./img/ramada.png";
import ramada1 from "./img/ramada.jpg";
import cj from "./img/cj.png";
import cj2 from "./img/cj2.png";
import cj3 from "./img/cj3.png";
// import ramada2 from "./img/ramada2.jpg";
// import ramada3 from "./img/ramada3.jpg";
// import ramada4 from "./img/ramada4.jpg";
// import ramada5 from "./img/ramada5.jpg";
// import ramada6 from "./img/ramada6.jpg";

import movie from "./img/movie_main.png";
import movie1 from "./img/movie.jpg";

import profileImg from  "./img/9.jpg"

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const movieImges = [
    movie1

];

const images = [
    ilhsaeImg,
    ilhsaeImg2,
    ilhsaeImg5,
    ilhsaeImg3,
    ilhsaeImg6,
    ilhsaeImg4
];

const ramadaImages = [
    ramada1,
];

const cjImages = [
    cj,
    cj2,
    cj3
];
// const androidImages = [
//     android,
//     android2,
//     android3,
//     android6,
//     android11,
//     android7,
//     android12,
//     android13,
//     android8,
//     android9,
//     android4,
//     android10,
//     android5

// ];

// const javaImages = [
//     java01,
//     java02,
//     java2,
//     java03,
//     java04,
//     java05,
//     java
// ];

class Body extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movieIndex:0,
            photoIndex: 0,
            ramadaIndex:0,
            cjIndex:0,
            isOpen: false,
            isMovieOpen:false,
            isRamadaOpen:false,
            isCjOpen:false
        };
    }

    render() {

        const {photoIndex, isOpen,isMovieOpen, isCjOpen, cjIndex ,ramadaIndex,isRamadaOpen,movieIndex} = this.state;

        return (
        <section>
            <article className="portfolio_outerbox">
                <div className="left_box">
                    <h1>PORTFOLIO</h1>
                </div>
                <div className="right_box">
                    <div className="portFolio_box">
                        <div className="portFlio_img" onClick={() => this.setState({isRamadaOpen:true})}>
                            <img className="web_img" src={ramada} alt="라마다웨딩홀" />
                            <div className="hover_box"></div>
                            <i className="fas fa-image"></i>
                        </div>
                        <div className="portFlio_contents">
                            <p className="title">
                                <span className="col_title">프로젝트1</span>
                                '신도림 라마다웨딩홀 관리자프로그램'
                            </p>
                            <p className="col_contents">&nbsp;&nbsp;
                                웨딩업체 직원들이 사용할 웹 기반의 관리자 프로그램 , 상담문의 부터 정산서 발급까지 일련의 과정을 손쉽게 관리하는 것이 목적
                            </p>
                            <div className="col_innerContents">
                                    <ul>
                                        <li>
                                            <span className="col_li">개발인원</span>개발팀(2인) 
                                        </li>
                                        <li>
                                            <span className="col_li">개발기간</span>2020/07 ~ 2020/10 , 2020/10 ~ 2021/02
                                        </li>
                                        <li>
                                            <span className="col_li">사용 기술</span>
                                            html / Javascript / php(7.x) / bootestrap(4.x) / mysqli 
                                        </li>
                                        <li>
                                            <span className="col_li">담당업무</span>
                                            <br />- 홈페이지 문의관리 페이지<br />
- 일정관리 (내방상담스케줄, 시식스케줄, 컨트롤차트) 페이지<br /> 
- 고객리스트 메인페이지, 고객리스트(최종체크리스트) , 취소 보관함 페이지<br />
- 발주관리<br /> 
- 직원관리<br /> 
- 전체적인 페이지 프론트 엔드 및 백엔드 개발 수행
                                        </li>
                                    </ul>
                            </div>
                            <div className="link_box"></div>
                        </div>
                        {
                            isRamadaOpen && (
                                <Lightbox
                                    mainSrc={ramadaImages[ramadaIndex]}
                                    nextSrc={ramadaImages[(ramadaIndex + 1) % ramadaImages.length]}
                                    prevSrc={ramadaImages[(ramadaIndex + ramadaImages.length - 1) % ramadaImages.length]}
                                    onCloseRequest={() => this.setState({isRamadaOpen: false})}
                                    onMovePrevRequest={() => this.setState({
                                        ramadaIndex: (ramadaIndex + ramadaImages.length - 1) % ramadaImages.length
                                    })
                                    }
                                    onMoveNextRequest={() => this.setState({
                                        ramadaIndex: (ramadaIndex + 1) % ramadaImages.length
                                    })
                                  }/>
                              )
                        }
                    </div>
                    <div className="portFolio_box">
                        <div className="portFlio_img" onClick={() => this.setState({isCjOpen: true})}>
                            <img className="web_img" src={cj} alt="CJ오쇼핑" />
                            <div className="hover_box"></div>
                            <i className="fas fa-image"></i>
                        </div>
                        <div className="portFlio_contents">
                            <p className="title">
                                <span className="col_title">프로젝트2</span>
                                '카카오 챗봇(CJ 오쇼핑 알리미)'
                            </p>
                            <p className="col_contents">&nbsp;&nbsp;
                            카카오 챗봇(CJ 오쇼핑 알리미)을 통해  실시간 방송 주문 서비스
                            </p>
                            <div className="col_innerContents">
                                    <ul>
                                        <li>
                                            <span className="col_li">개발인원</span>개발팀(3인)
                                        </li>
                                        <li>
                                            <span className="col_li">개발기간</span>2020/10 ~ 2021/01
                                        </li>
                                        <li>
                                            <span className="col_li">사용 기술</span>
                                            php(CI)_5.x / css / html / 자사 챗봇 빌더 사용 
                                        </li>
                                        <li>
                                            <span className="col_li">담당업무</span>
                                            <br/>- 배송지 목록 캐로셀 개발 및 배송지 추가 페이지<br/> 
- 결제 주문 새창 페이지 개발<br/>
- 개발 후 전체적인 오류 사항 유지보수   
                                        </li>
                                    </ul>
                            </div>
                            <div className="link_box"></div>
                            {
                            isCjOpen && (
                                <Lightbox
                                    mainSrc={cjImages[cjIndex]}
                                    nextSrc={cjImages[(cjIndex + 1) % cjImages.length]}
                                    prevSrc={cjImages[(cjIndex + cjImages.length - 1) % cjImages.length]}
                                    onCloseRequest={() => this.setState({isCjOpen: false})}
                                    onMovePrevRequest={() => this.setState({
                                        cjIndex: (cjIndex + cjImages.length - 1) % cjImages.length
                                    })
                                    }
                                    onMoveNextRequest={() => this.setState({
                                        cjIndex: (cjIndex + 1) % cjImages.length
                                    })
                                  }/>
                              )
                        }
                        </div>
                    </div>
                    <div className="portFolio_box">
                        <div className="portFlio_img" onClick={() => this.setState({isMovieOpen: true})}>
                            <img className="web_img" src={movie} alt="영화 박스오피스" />
                            <div className="hover_box"></div>
                            <i className="fas fa-image"></i>
                        </div>
                        <div className="portFlio_contents">
                            <p className="title">
                                <span className="col_title">개인 리액트 공부</span>
                                '영화 일별 박스오피스'
                            </p>
                            <p className="col_contents">&nbsp;&nbsp;
                                ReactJS 클론 코딩으로 공부 하면서 영화진흥위원회 api 와 tmdb api 를 활용하여 만든 웹. 
                            </p>
                            <div className="col_innerContents">
                                    <ul>
                                        <li>
                                            <span className="col_li">개발인원</span>1명
                                        </li>
                                        <li>
                                            <span className="col_li">개발기간</span>2020/05/30 ~ 2020/6/08
                                        </li>
                                        <li>
                                            <span className="col_li">사용 기술</span>
                                            HTML5 / CSS3 / React
                                        </li>
                                    </ul>
                            </div>
                            <div className="link_box">
                                <ul>
                                    <li>
                                        <i className="fas fa-external-link-alt"></i>
                                        <a href="https://chaehyeon01.github.io/movie_app/" target="blank">https://chaehyeon01.github.io/movie_app/</a>
                                    </li>
                                    <li>
                                        <i className="fab fa-github"></i>
                                        <a href="https://github.com/chaehyeon01/movie_app" target="blank">https://github.com/chaehyeon01/movie_app</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {
                            isMovieOpen && (
                                <Lightbox
                                    mainSrc={movieImges[movieIndex]}
                                    nextSrc={movieImges[(movieIndex + 1) % movieImges.length]}
                                    prevSrc={movieImges[(movieIndex + movieImges.length - 1) % movieImges.length]}
                                    onCloseRequest={() => this.setState({isMovieOpen: false})}
                                    onMovePrevRequest={() => this.setState({
                                        movieIndex: (movieIndex + movieImges.length - 1) % movieImges.length
                                    })
                                    }
                                    onMoveNextRequest={() => this.setState({
                                        movieIndex: (movieIndex + 1) % movieImges.length
                                    })
                                  }/>
                              )
                        }
                    </div>
                    <div className="portFolio_box">
                        <div className="portFlio_img" onClick={() => this.setState({isOpen: true})}>
                            <img className="web_img"  src={ilhsaemain} alt="일하세"/>
                            <div className="hover_box"></div>
                            <i className="fas fa-image"></i>
                        </div>
                        <div className="portFlio_contents">
                            <p className="title">
                                <span className="col_title">학원 팀 프로젝트</span>
                                '일하세' (노인 분들을 위한 구직사이트)
                            </p>
                            <p className="col_contents">
                                &nbsp;&nbsp;노인분들이 편하고 쉽게 구직 서비스를 사용하실 수 있도록 하고자 만든 웹.
                            </p>
                            <div className="col_innerContents">
                                    <ul>
                                        <li>
                                            <span className="col_li">개발인원</span>5명</li>
                                        <li>
                                            <span className="col_li">개발기간</span>2020/02/10 ~ 2020/2/28</li>
                                        <li>
                                            <span className="col_li">담당업무</span>
                                               메인,채용,인재,검색,공고 상세 페이지 구현 / 화면확대,축소기능 구현 / 무한 스크롤 기능 구현
                                        </li>
                                        <li>
                                            <span className="col_li">사용 기술</span>
                                                HTML5,CSS3,Javascript,PHP7 / web Server: Apache2.4 / DBMS : Mysql  
                                        </li>
                                    </ul>
                            </div>
                            <div className="link_box">
                                <ul>
                                    <li>
                                        <i className="fas fa-external-link-alt"></i>
                                        <a href="http://ilhase.shop" target="blank">http://ilhase.shop</a>
                                    </li>
                                    <li>
                                        <i className="fab fa-github"></i>
                                        <a href="https://github.com/chaehyeon01/ilhase_project" target="blank">https://github.com/chaehyeon01/ilhase_project</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {
                            isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => this.setState({isOpen: false})}
                                    onMovePrevRequest={() => this.setState({
                                        photoIndex: (photoIndex + images.length - 1) % images.length
                                    })
                                    }
                                    onMoveNextRequest={() => this.setState({
                                        photoIndex: (photoIndex + 1) % images.length
                                    })
                                    }/>
                            )
                        }
                    </div>
                </div>
            </article>
            <article className="aboutMe_box">
                <div className="left_box">
                    <h1>ABOUT ME</h1>
                </div>
                <div className="abRight_box">
                    <div className="ab_profileBox">
                        <div className="ab_imgBox">
                            <img src={profileImg} alt="profile" />
                        </div>
                        <div className="ab_profileText">
                            <h1>남채현</h1>
                            <p>1993.05.21</p>
                            <p>P.H : 010-2744-1786</p>
                            <p>E-mail : skacod01@naver.com</p>
                        </div>                
                    </div>
                    <div className="ab_contents">
                        <h1>"현재에 만족하지 않고 끊임없이 성장하는 개발자가 되고 싶습니다!"</h1>
                        <p> &nbsp;&nbsp;2016년, 웹 디자인 교육을 들으면서 처음으로 웹 코딩을 접했습니다. 그 때 
                            구상 한 디자인을 가지고 웹 사이트를 만드는 것에 매력을 느꼈고 
                            웹 개발자라는 직업에 꿈을 품게 되었습니다. 비록 첫 직장을 편집디자이너로 시작했지만, 웹 개발자의 꿈에
                            미련이 남아 더 늦기 전에 도전하게 되었습니다. <br /><br />
                            비전공자 이기 때문에 여러 언어들을 배우고 싶어 9개월이라는 긴 과정의 '안드로이드 웹·앱 개발자' 교육을 이수 했습니다.
                            돌고 돌아 온 만큼 아직 배우지 못한 언어들에 호기심이 많습니다. 최근 리액트나 Vue와 같은 프레임워크에 호기심이 생겨
                            개인 적으로 공부하고 있습니다. 
                            저는 지금 현재에 만족하지 않고  끊임 없이 발전하는 개발자로 성장하고 싶습니다.          
                        </p>
                    </div>
                    <div className="my_skill">
                            <h2 className="skill_title">My Skill</h2>
                            <h3>Web</h3>
                            <ul className="web_skill">
                                <li className="web_html5"></li>
                                <li className="web_js"></li>
                                <li className="web_css3"></li>
                                <li className="web_jqeury"></li>
                            </ul>
                            <h3>Launage</h3>
                            <ul className="lang">
                                <li className="lang_c"></li>
                                <li className="lang_java"></li>
                                <li className="lang_js"></li>
                                <li className="lang_php"></li>
                                <li className="lang_android"></li>
                            </ul>
                            <h3>DBMS</h3>
                            <ul className="dbms">
                                <li className="db_mysql"></li>
                            </ul>
                        </div>
                </div>
            </article>
        </section>
        );

  }
  
}

export default Body;