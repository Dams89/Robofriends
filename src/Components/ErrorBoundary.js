import React, {Component} from "react";

class errorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch (error,info) {
        this.state({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops, something went wrong</h1>
        }
        return this.props.children
    }

}

export default errorBoundary;