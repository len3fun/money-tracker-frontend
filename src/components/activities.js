import React from "react";

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

    async componentDidMount() {
        fetch("api/activities", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token,
            }

        }).then(res => res.json())
            .then((data) => {
                this.setState({activities: data})
            })
            .catch(console.log)
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