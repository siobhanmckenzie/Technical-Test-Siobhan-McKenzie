import { Component, ErrorInfo, ReactNode } from 'react';
import * as Styled from './ErrorBoundary.styled';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    // Could also log this error to a service like sentry or Redux store
  }

  render() {
    if (this.state.hasError) {
      return (
        <Styled.Container>
          <h1>Something went wrong.</h1>
          <p>Oops.. something went wrong! Please try reloading the page. If this problem persists, please contact support.</p>
          <a href="https://9fin.com/about" target="_blank" rel="noopener noreferrer">Contact the 9fin team</a>
        </Styled.Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
