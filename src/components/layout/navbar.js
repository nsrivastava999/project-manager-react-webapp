import React from 'react';
import {Link} from 'react-router-dom';
import SignedinLinks from './signedinlinks';
import SignedoutLinks from './signedoutlinks';
import {connect} from 'react-redux';

const Navbar = (props) => {
    const {auth,profile} = props;
    const links = auth.uid ? <SignedinLinks profile={profile} /> : <SignedoutLinks/>
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Project'Manager</Link>
                {links}
            </div>
        </nav> 
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);