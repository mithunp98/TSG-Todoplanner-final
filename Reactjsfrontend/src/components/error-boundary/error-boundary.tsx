import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    error?: Error;
    errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    redirectToError = (): JSX.Element => {
        return (
           <>Error</>
        );
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({ error, errorInfo });
    }

    render(): ReactNode {
        return this.state.error ? this.redirectToError() : this.props.children;
    }
}

export default ErrorBoundary;
