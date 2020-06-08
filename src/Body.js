import React, {Component} from 'react';
import ilhsaemain from "./img/ilhase_main.png";
import ilhsaeImg from "./img/ilhase.jpg";
import ilhsaeImg2 from "./img/ilhase2.jpg";
import ilhsaeImg3 from "./img/ilhase3.jpg";
import ilhsaeImg4 from "./img/ilhase4.jpg";
import ilhsaeImg5 from "./img/ilhase5.jpg";
import ilhsaeImg6 from "./img/ilhase6.jpg";

import android from "./img/android.png";
import android2 from "./img/android2.png";
import android3 from "./img/android3.png";
import android5 from "./img/android5.png";
import android6 from "./img/android6.png";
import android7 from "./img/android7.png";
import android11 from "./img/android11.png";
import android12 from "./img/android12.png";
import android13 from "./img/android13.png";
import android8 from "./img/android8.png";
import android9 from "./img/android9.png";
import android10 from "./img/android10.png";
import android4 from "./img/android4.png";

import java from "./img/java.png";
import java2 from "./img/java2.png";
import java01 from "./img/java01.jpg";
import java02 from "./img/java02.jpg";
import java03 from "./img/java03.jpg";
import java04 from "./img/java04.jpg";
import java05 from "./img/java05.jpg";

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

const androidImages = [
    android,
    android2,
    android3,
    android6,
    android11,
    android7,
    android12,
    android13,
    android8,
    android9,
    android4,
    android10,
    android5

];

const javaImages = [
    java01,
    java02,
    java2,
    java03,
    java04,
    java05,
    java
];

class Body extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movieIndex:0,
            photoIndex: 0,
            photoAndroidIndex:0,
            javaIndex:0,
            isOpen: false,
            isAndroidOpen: false,
            isMovieOpen:false,
            isJavaOpen:false,
        };
    }

    render() {

        const {photoIndex, isOpen, isAndroidOpen, photoAndroidIndex ,isMovieOpen,movieIndex,javaIndex,isJavaOpen} = this.state;

        return (
        <section>
            <article className="portfolio_outerbox">
                <div className="left_box">
                    <h1>PORTFOLIO</h1>
                </div>
                <div className="right_box">
                    <div className="portFolio_box">
                        <div className="portFlio_img" onClick={() => this.setState({isMovieOpen: true})}>
                            <img className="web_img" src={movie} alt="영화 박스오피스" />
                            <div className="hover_box"></div>
                            <i className="fas fa-image"></i>
                        </div>
                        <div className="portFlio_contents">
                            <p className="title">
                                <span className="col_title">개인 프로젝트</span>
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
                                <span className="col_title">팀 프로젝트 </span>
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
                    <div className="portFolio_box">
                        <div className="portFlio_img" onClick={() => this.setState({isAndroidOpen: true})}>
                            <img className="android" src={android} alt="청소의달인"/>
                            <img className="android" src={android12} alt="청소의달인12"/>
                            <img className="android" src={android8} alt="청소의달인8"/>
                            <img className="android" src={android4} alt="청소의달인8"/>
                            <div className="hover_box"></div>
                            <i className="fas fa-image"></i>
                        </div>
                        <div className="portFlio_contents">
                            <p className="title">
                                <span className="col_title">팀 프로젝트</span>
                                '청소의 달인'<sapn className="text_tilte"> (청소루틴을 만들어 주는 Android APP)</sapn>
                            </p>
                            <p className="col_contents">&nbsp;&nbsp; 사용자들이 해야할 청소를 규칙적으로 관리할 수 있도록 하고자 만든 어플.
                            </p>
                            <div className="col_innerContents">
                                    <ul>
                                        <li>
                                            <span className="col_li">개발인원</span>4명</li>
                                        <li>
                                            <span className="col_li">개발기간</span>2019/12/02 ~ 2019/02/20</li>
                                        <li>
                                            <span className="col_li">담당업무</span>
                                            오늘의 청소 리스트, 경험치 보상 기능 구현 
                                        </li>
                                        <li >
                                            <span className="col_li">사용 기술</span>
                                              Java  / DBMS : MysqLite
                                        </li>
                                    </ul>      
                            </div>
                            <div className="link_box">
                                <ul>
                                    <li>
                                        <i className="fab fa-youtube"></i>시연영상 >
                                        <a href="https://www.youtube.com/watch?v=w2zrfTsT3VY" target="blank">https://www.youtube.com/watch?v=w2zrfTsT3VY</a>
                                    </li>
                                    <li>
                                        <i className="fab fa-github"></i>
                                        <a href="https://github.com/chaehyeon01/CleaningMaster" target="blank">https://github.com/chaehyeon01/CleaningMaster</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {
                            isAndroidOpen && (
                                <Lightbox
                                    mainSrc={androidImages[photoAndroidIndex]}
                                    nextSrc={androidImages[(photoAndroidIndex + 1) % androidImages.length]}
                                    prevSrc={androidImages[(photoAndroidIndex + androidImages.length - 1) % androidImages.length]}
                                    onCloseRequest={() => this.setState({isAndroidOpen: false})}
                                    onMovePrevRequest={() => this.setState({
                                        photoAndroidIndex: (photoAndroidIndex + androidImages.length - 1) % androidImages.length
                                    })
                                    }
                                    onMoveNextRequest={() => this.setState({
                                        photoAndroidIndex: (photoAndroidIndex + 1) % androidImages.length
                                    })
                                    }/>
                            )
                        }
                    </div>
                    <div className="portFolio_box">
                        <div className="portFlio_img" onClick={() => this.setState({isJavaOpen: true})}>
                            <img className="Nam2Chatch" src={java} alt="Nam2 캐치마인드1"/>
                            <img className="Nam2Chatch" src={java2} alt="Nam2 캐치마인드2"/>
                            <div className="hover_box"></div>
                            <i className="fas fa-image"></i>
                        </div>
                        <div className="portFlio_contents">
                            <p className="title">
                                <span className="col_title">팀 프로젝트</span>
                                'Nam2 캐치마인드'<sapn className="text_tilte"> (소켓통신을 이용한 그림퀴즈 게임)</sapn>
                            </p>
                            <p className="col_contents">&nbsp;&nbsp; 모바일 게임 캐치마인드를 모방하여 소켓통신과 멀티쓰레드를 이용하여 순수 자바 코드로 만든 게임.
                            </p>
                            <div className="col_innerContents">
                                    <ul>
                                        <li>
                                            <span className="col_li">개발인원</span>2명</li>
                                        <li>
                                            <span className="col_li">개발기간</span>2019/09/11 ~ 2020/09/24</li>
                                        <li className="col_liOuterbox">
                                            <span className="col_li">담당업무</span>
                                                클라이언트 담당 / 게임 UI 구성 및 구현 / 이미지 입,출력 구현 / 회원가입,회원 정보 수정
                                        </li>
                                        <li>
                                            <span className="col_li">사용 기술</span>
                                             Java / DBMS: Mysql
                                        </li>
                                    </ul>
                            </div>
                            <div className="link_box">
                                <ul>
                                    <li>
                                        <i className="fab fa-youtube"></i>시연영상 >
                                        <a href="https://youtu.be/f5nduntFdAs" target="blank">https://youtu.be/f5nduntFdAs</a>
                                    </li>
                                    <li>
                                        <i className="fab fa-github"></i>
                                        <a href="https://github.com/chaehyeon01/JAVA_catchMind" target="blank">https://github.com/chaehyeon01/JAVA_catchMind</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {
                            isJavaOpen && (
                                <Lightbox
                                    mainSrc={javaImages[javaIndex]}
                                    nextSrc={javaImages[(javaIndex + 1) % javaImages.length]}
                                    prevSrc={javaImages[(javaIndex + javaImages.length - 1) % javaImages.length]}
                                    onCloseRequest={() => this.setState({isJavaOpen: false})}
                                    onMovePrevRequest={() => this.setState({
                                        javaIndex: (javaIndex + javaImages.length - 1) % javaImages.length
                                    })
                                    }
                                    onMoveNextRequest={() => this.setState({
                                        javaIndex: (javaIndex + 1) % javaImages.length
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
                        <h1>"도전하는 것에 두려워 하지 않고 책임을 다하는 개발자"</h1>
                        <p> &nbsp;&nbsp;2016년, 웹 디자인 교육을 들으면서 처음으로 웹 코딩을 접했습니다. 그 때 
                            구상 한 디자인을 가지고 웹 사이트를 만드는 것에 매력을 느꼈고 
                            웹 개발자라는 직업에 꿈을 품게 되었습니다. 비록 첫 직장을 편집디자이너로 시작했지만, 웹 개발자의 꿈에
                            미련이 남아 더 늦기 전에 도전하게 되었습니다. <br /><br />
                            비전공자 이기 때문에 여러 언어들을 배우고 싶어 9개월이라는 긴 과정의 '안드로이드 웹·앱 개발자' 교육을 이수 했습니다.
                            돌고 돌아 온 만큼 아직 배우지 못한 언어들에 호기심이 많습니다. 최근 리액트나 노드JS과 같은 프레임워크에 호기심이 생겨
                            개인 적으로 공부하고 있습니다. 
                            저는 어떤 것에 도전하는 것에 두려워 하지않고 맡은 업무 책임을 다하는 개발자로 목표를 삼아 끊임 없이 발전하는 개발자로 
                            남고 싶습니다.          
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