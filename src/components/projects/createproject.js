import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projects';
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
    state = {
        title:'',
        content:''
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
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    render() {
        const {auth} = this.props;
        if(!auth.uid){
            return <Redirect to="/signin" />
        }
        return (
            <div className="container blue lighten-5">
                <form onSubmit={this.handleSubmit} style={{padding:3+'%',marginTop:4+'%'}}>
                    <h5 className="blue-text text-darken-3">Create a New Project</h5>
                    <div className="input-field" style={{marginTop:2+'%'}}>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn orange">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const stateMapToProps = (state) => {
    return{
        auth:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProject:(project) => dispatch(createProject(project))
    }
}

export default connect(stateMapToProps,mapDispatchToProps)(CreateProject);
