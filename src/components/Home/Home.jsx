import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Modal from '../Modal/Modal';
import HomeAnime from '../../assets/home_anime.gif'   //here HomeAnime is an alias of our home-anime.gif image 
class Home extends Component{
    state = {
        showModal: false,
        modalHeader:"Announcement"
    }

    componentDidMount() {    //This lifecycle method will load only once component is loaded into DOM .At that time  out Modal should be visible so we are making it controlled component by setting boolean flag in state object
        this.setState({
            showModal:true
        })
    }
    handleCloseModal = () => {
        this.setState({showModal:false})
    }
    render() {
            return ( 
                <div className="home_container">
                    {
                        this.state.showModal ? <Modal modalHeading={this.state.modalHeader} closeModal={this.handleCloseModal}/>:''
                    }
                   

                    <div className="header_text">
                        <h1>Welcome to my Portfolio</h1>
                        <p>This is Shruti Sugandhi, an UI Developer</p>
                    </div>
                    <div className="head_btns">
                        <Link to="/about" className="btn btn-white">
                            <p className="btn-text">know more about me</p>
                        </Link>
                         <Link to="/contact" className="btn btn-transparent">
                            <p className="btn-text">Contact me</p>
                         </Link>
                    </div>
                    <div className="splash-image">
                    <img src={HomeAnime} alt="home-img" className="home-anime"/>

                    </div>
                </div>
            ) 
}
   
}

export default Home


//Generally we are using Class Based Components in order to hold state at some point and functinal based components are dependent on react hooks which are pending to study