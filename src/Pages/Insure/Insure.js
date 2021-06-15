import React, { Component } from 'react'
import './Insure.css'
import underline from "../../../src/Assets/img/underline.png";
import head from "../../../src/Assets/img/head.png";

class Insure extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           username: ''  
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    
    render() {
        return (

            <div className="Insure_container">
                <div className="Insure_wrapper">
                    {/* <div className="head">
                <img src={head} alt="head" />
                </div> */}
            <form>
            <div>
                <h1 className="Insure_header">Your car details</h1>
                <img className="img_line" src={underline} alt="underline" />
                <div className="Detail_list">
                <label>Enter your licence number  </label>
                <input className="Detail_input1"
                    type="text" 
                    placeholder="Licence number"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                     />
                 <a href="a" className="banner-btn1">
                    Submit
                 </a>
                </div>
                <div className="Detail_list">
                <label>Do you use your car for business?   </label>
                <input 
                    className="Detail_input2"
                    type="text" 
                    placeholder="Yes  |  No"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                     />
                </div>
                <div className="Detail_list">
                <label>What address is your car usually kept at?  </label>
                <input 
                    className="Detail_input"
                    type="text" 
                    placeholder="Address"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                     />
                </div>
                <div className="Detail_list">
                <label>When would you like your policy to start?  </label>
                <input 
                    className="Detail_input1"                
                    type="text" 
                    placeholder="3 June 2021"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                     />
                </div>
                
                <h1 className="Insure_header">Main driver details</h1>
                <img className="img_line" src={underline} alt="underline" />
                
                <div className="Detail_list">
                <label>Date of birth  </label>
                <input className="Detail_input1"
                    type="text" 
                    placeholder="dd/mm/yy"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                     />
                </div>
                <div className="Detail_list">
                <label>Gender   </label>
                <input 
                    className="Detail_input1"
                    type="text" 
                    placeholder="Please select"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                     />
                </div>
                <div className="Detail_list">
                <label>Phone number  </label>
                <input 
                    className="Detail_input"
                    type="text" 
                    placeholder="Phone number"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                     />
                </div>
                <div className="Detail_list">
                <label>Email address  </label>
                <input 
                    className="Detail_input"                
                    type="text" 
                    placeholder="Email address"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                     />
                </div>
                <div className="Detail_list">
                <label>Licence type  </label>
                <input 
                    className="Detail_input"                
                    type="text" 
                    placeholder="Please select"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                     />
                </div>
                <div className="Detail_list">
                <label>How many years have you held your driver's licence?  </label>
                <input 
                    className="Detail_input1"                
                    type="text" 
                    placeholder="Please select"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                     />
                </div>
                <div className="Detail_list">
                <label>In the last 5 years, Have you had any incidents </label>
                <input 
                    className="Detail_input2"               
                    type="text" 
                    placeholder="Yes  |   No"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                     />
                </div>
                <div>
                <a href="a" className="banner-btn2">
                    Back
                 </a>
                 <a href="a" className="banner-btn3">
                    Get quote
                 </a>
                </div>
            </div>
            </form>
            </div>
            </div>
        )
    }
}

export default Insure
