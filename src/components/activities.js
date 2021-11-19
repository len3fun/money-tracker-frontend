import React from "react";

const Activity = ({activities}) => {
    return (
        <div>
            <h3>Activities:</h3>
            {activities.map((activity) => (
                <div className="card" key={activity.id}>
                    <div className="card-body">
                        <h5 className="card-title">{activity.label}</h5>
                        <p className="card-text">{activity.type === "expense" ?
                            "-" :
                            "+"}
                            {activity.change}
                        </p>
                        <p>
                            {activity.type}'s date:
                        </p>
                        <p>
                            {activity.activity_date}
                        </p>
                    </div>
                </div>
            ))}
        </div>
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
            <Activity activities={this.state.activities}/>
        )
    }
}

export default Activities