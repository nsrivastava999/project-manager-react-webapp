import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';


function ProjectDetails(props) {
    // console.log(props)
    // const id = props.match.params.id;
    const {project,auth} = props;
    if(!auth.uid){
        return <Redirect to="/signin" />
    }
    if(project){
        return(
            <div className="container project-details section">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action blue blue-text lighten-4">
                        <div className="blue-text text-darken-4">Posted by - {project.authorFirstName} {project.authorLastName}</div>
                        <div className="blue-text text-darken-4">{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="container center">
                <p>Loading...</p>
            </div>
        )
        
    }
    
}

const mapStateToProps = (state,ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] :null;
    return{
        project:project,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection:'projects'
    }])
)(ProjectDetails)
