import React from "react";
import "./style.scss";
import loginImg from "../../this cant be real.jpg";


export class Register extends React.Component{
    constructor(props) {
        super(props);
        this.UsernameRef = React.createRef();
        this.PasswordRef = React.createRef();
        this.EmailRef = React.createRef();
        this.state = {
          chars: [],
        };
      }

      componentDidMount() {
        console.log(this.UsernameRef)
        function set(params) {
            var list = [];
            for (let i = 32; i < 127; i++) {
                list.push({name : String.fromCharCode(i)})
            }
            return list
        }

        this.setState({
            chars: set(),
            username: this.UsernameRef
        });

      }

    render(){
        const {username} = this.state;
        function AddChar(id) {
            switch (id) {
                case "username":
                    var selectVal = document.getElementById("select").value;
                    document.getElementById("username").value += selectVal;
                    break;
                case "password":
                    var selectVal = document.getElementById("select1").value;
                    document.getElementById("password").value += selectVal;
                    break;
                case "email":
                    var selectVal = document.getElementById("select2").value;
                    document.getElementById("email").value += selectVal;
                    break;
                default:
                    break;
            }
        }
        const { chars } = this.state;

        let charsList = chars.length > 0
            && chars.map((item, i) => {
        return (
            <option key={i} value={item.id}>{item.name}</option>
        )
        }, this);

        return(
        <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt="alt"/>
                </div>
                <div className="form">
                    <div className="div-form-group">
                        <label htmlFor="username">Username</label>
                        <input ref={this.UsernameRef} disabled type="text" id="username" name="username" placeholder="username"/>
                        <button onClick={() => AddChar("username")} type="button" className="btn">+</button>
                        <select name="select" id="select">
                            {charsList}
                        </select>
                    </div>
                    <div className="div-form-group">
                        <label htmlFor="password">Password</label>
                        <input disabled type="password" name="password" id="password" placeholder="password"/>
                        <button onClick={() => AddChar("password")} type="button" className="btn">+</button>
                        <select name="select" id="select1">
                            {charsList}
                        </select>
                    </div>
                    <div className="div-form-group">
                        <label htmlFor="email">Email</label>
                        <input disabled type="email" name="email" id="email" placeholder="email"/>
                        <button onClick={() => AddChar("email")} type="button" className="btn">+</button>
                        <select name="select" id="select2">
                            {charsList}
                        </select>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Register</button>
            </div>
        </div>)
    }
}