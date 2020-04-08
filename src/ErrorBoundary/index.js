import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isError: false,
            errorMessage: ''
        }
    }

    componentDidCatch(info){
        this.setState({isError: true, errorMessage: info});
    }

    render() {
        const { isError } = this.state;
        if(isError){
            return <h1>Exception occurred, please contact your system adminstrator</h1>;
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
