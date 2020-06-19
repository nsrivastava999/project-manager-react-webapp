import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authactions';
import {Redirect} from 'react-router-dom';

class Signin extends Component {
    state = {
        email:'',
        password:''
    }
    handleChange = (e) => {
        // console.log(e)
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.signIn(this.state);
    }
    render() {
        const {authError,auth} = this.props;
        if(auth.uid){
            return <Redirect to="/" />
        }
        return (
            <div className="container blue lighten-5">
                <form onSubmit={this.handleSubmit} style={{padding:3+'%',marginTop:4+'%'}}>
                    <h5 className="blue-text text-darken-3">Sign In</h5>
                    <div className="input-field" style={{marginTop:2+'%'}}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn orange">Sign in</button>
                        <div className="red-text">{authError?<p>{authError}</p>:null}</div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn:(creds)=>{dispatch(signIn(creds))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin);
