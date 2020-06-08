import React, { Component} from 'react';

import './css/body.css';
import './css/header.css';
import './css/footer.css';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';



class Wrap extends Component {
   
 state = {
     scroll:true
 };


 // Adds an event listener when the component is mount.
 componentDidMount() {
  this.prev = window.scrollY;
  window.addEventListener('scroll', e => this.handleScroll(e));
 } 


handleScroll = (e) => {
        
  
    const window=e.currentTarget;

    if(this.prev > window.scrollY ) {

        this.setState({
            scroll:true
        });
    }else {

        this.setState({
            scroll:false
        });
    }
    this.prev= window.scrollY;


};
   
   getPageChange(pageMode){

        if(pageMode === 'scrollTopPflio'){
            console.log('포트폴리오');
            var portfolioBox=document.querySelector('.portfolio_outerbox').offsetTop;
            console.log(portfolioBox);
           
            window.scrollTo({top:portfolioBox,behavior:'smooth'});
            

        }else if(pageMode === 'scrollTopAbout') {
            console.log('어바웃');
            var aboutMeBox=document.querySelector('.aboutMe_box').offsetTop;
            console.log(aboutMeBox);

            window.scrollTo({top:aboutMeBox,behavior:'smooth'});

        
        }else if(pageMode === 'home'){
            window.scrollTo({top:0,behavior:'smooth'});
        }

    
   }
    

    render(){
        return(
            <div>
                <Header
                    className={(this.state.scroll?'hidden':'navbar')}
                    changeMode={function(mode){

                        this.getPageChange(mode);

                    }.bind(this)}
                />
                <Body />
                <Footer />
            </div>
        );
    }
}
export default Wrap;