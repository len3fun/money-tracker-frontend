import React from "react";
import axios from "axios";

const Source = ({sources}) => {
    return (
        <div className="content">
            <h2>Sources:</h2>
            {sources.map((source) => (
                <div class="card mb-5 mr-5" key={source.id}>
                    <div class="card-content">
                        <p class="title">{source.type}</p>
                        <p class="subtitle">{source.balance} {source.currency_id}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

class Sources extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: props.token,
            sources: [],
        }
    }

    componentDidMount() {
        const sourcesUrl = "/api/sources"

        const headers = {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token,
        }

        axios.get(sourcesUrl, {
            headers: headers,
        }).then(response => {
            this.setState({sources: response.data})
        }).catch(console.log)
    }

    render() {
        return (
            <Source sources={this.state.sources}/>
        )
    }
}

export default Sources