import React, { Component } from 'react';


class Header extends Component {

    
    constructor(props){

        super(props);
        this.state = {
            hidden:false
        };
    }
    

    handleNavClick = () => {
        
        if(this.state.hidden){
            this.setState({hidden : false});    
        }else {
            this.setState({hidden : true});
        } 
    }
   
    handleScroll = (pageMode)  => {

        this.props.changeMode(pageMode);
       
    }

   

    
    render(){

        return(      
                <div className={this.props.className}>
                    <nav>
                        <div className="icon">
                            <i className="fas fa-seedling" onClick={() => this.handleScroll('home')}>C/H</i>
                        </div>
                        {
                        this.state.hidden ? (
                            <div className="nav_box">
                                <ul className="nav_list active" >
                                     <li onClick={() => this.handleScroll('scrollTopPflio')}>PortFolio</li>
                                    <li onClick={() => this.handleScroll('scrollTopAbout')}>About Me</li>
                                   
                                </ul>
                                <ul className="sns_icon active">
                                     <li><a href="https://github.com/chaehyeon01/" target="blank"><i className="fab fa-github"></i></a></li>
                                </ul>
                            </div>
                        
                        ) : (
                            <div className="nav_box">
                                <ul className="nav_list" >
                                        <li onClick={() => this.handleScroll('scrollTopPflio')}>PortFolio</li> 
                                     <li onClick={() => this.handleScroll('scrollTopAbout')}>About Me</li>
                                    
                                </ul>
                                <ul className="sns_icon" >
                                <li><a href="https://github.com/chaehyeon01/" target="blank"><i className="fab fa-github"></i></a></li>
                                </ul>
                            </div>
                            )
                        }
                        
                        <div className="nav_toolBtn" onClick={this.handleNavClick}>
                            <i className="fas fa-bars"></i>
                        </div>
                    </nav>
                </div>
  
        );

    }

}

export default Header;