import React from "react";
import axios from "axios";

const Activity = ({activities}) => {
    return (
        activities.map((activity) => (
            <div className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <h5>{activity.label}</h5>
                    {activity.type === "expense" ?
                        <span className="badge badge-danger badge-pill">-{activity.change}</span> :
                        <span className="badge badge-success badge-pill">+{activity.change}</span>
                    }
                </li>
            </div>
        ))
    )
}

class Activities extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: props.token,
            activities: [],
        }
    }

    componentDidMount() {
        const activitiesUrl = 'http://localhost:8000/api/activities/'

        const headers = {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token,
        }

        axios.get(activitiesUrl, {
            headers: headers
        }).then(response => {
            this.setState({activities: response.data})
        }).catch(console.log)
    }

    render() {
        return (
            <div>
                <h3>Activities:</h3>
                <Activity activities={this.state.activities}/>
            </div>
        )
    }
}

export default Activities