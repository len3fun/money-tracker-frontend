import React from "react";
import axios from "axios";

const Activity = ({activities}) => {
    if (activities === null) {
        return (
            <></>
        )
    } else {
        let socialLinks = [];
        for (var date in activities) {
            socialLinks.push(
                <h2 key={date}>{date}</h2>
            )
            for (var i in activities[date]) {
                console.log(activities[date][i]["id"])
                let el = <div key={activities[date][i]["id"]}>
                    <h5>{activities[date][i]["label"]}</h5>
                    {activities[date][i]["type"] === "expense" ?
                        <span className="badge badge-danger badge-pill">-{activities[date][i]["change"]}</span> :
                        <span className="badge badge-success badge-pill">+{activities[date][i]["change"]}</span>
                    }
                </div>
                socialLinks.push(el)
            }
        }
        return (
            <div>
                {socialLinks}
            </div>
        )
    }
}

class Activities extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: props.token,
            activities: [],
        }
    }

    groupBy = (object, key) => {
        return object.reduce((rv, x) => {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {})
    }

    handleActivities = (activities) => {
        return activities.map((el) => {
            let date = el["activity_date"].split("T")[0];
            let time = el["activity_date"].split("T")[1];
            return {
                "id": el["id"],
                "activity_date": date,
                "activity_time": time,
                "type": el["type"],
                "change": el["change"],
                "label": el["label"]
            }
        })
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
            this.setState({activities: this.handleActivities(response.data)})
        }).catch(console.log)
    }

    render() {
        let act = (this.state.activities.length == 0)
            ? null
            : this.groupBy(this.state.activities, "activity_date")

        return (
            <div className="content">
                <h2>Activities:</h2>
                <Activity activities={act}/>
            </div>
        )
    }
}

export default Activities