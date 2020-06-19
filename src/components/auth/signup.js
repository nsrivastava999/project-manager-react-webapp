import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {signUp} from '../../store/actions/authactions'

class Signup extends Component {
    state = {
        firstName:'',
        lastName:'',
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
        this.props.signUp(this.state);
    }
    render() {
        const {auth,authError} = this.props;
        if(auth.uid){
            return <Redirect to="/" />
        }
        return (
            <div className="container blue lighten-5">
                <form onSubmit={this.handleSubmit} style={{padding:3+'%',marginTop:4+'%'}}>
                    <h5 className="blue-text text-darken-3">Sign Up</h5>
                    <div className="input-field" style={{marginTop:2+'%'}}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn orange">Sign Up</button>
                    </div>
                    <div className="red-text center">
                        {authError?<p>{authError}</p>:null}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp:(newUser)=>dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);
