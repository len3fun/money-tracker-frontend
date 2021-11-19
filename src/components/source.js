import React from "react";

const Source = ({ sources }) => {
    return (
        <div>
            {sources.map((source) => (
                <div class="card" key={source.id}>
                    <div class="card-body">
                        <h5 class="card-title">{source.type}</h5>
                        <p class="card-text">{source.balance} {source.currency_id}</p>
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

    async componentDidMount() {
        fetch("/api/sources", {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + this.state.token,
                }
            }
        ).then(res => res.json())
            .then((data) => {
                this.setState({sources: data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <Source sources={this.state.sources}/>
        )
    }
}

export default Sources