import React from 'react';
import moment from 'moment'

const Notifications = (props) => {
    const { notif } = props;
    return (
        <div className="section">
            <div className="card blue lighten-5">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul>
                        {notif && notif.map(item => {
                            return (
                                <li key={item.id}>
                                    <span className="orange-text">{item.user} </span>
                                    <span>{item.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(item.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;