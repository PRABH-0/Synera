// // ErrorBoundary.tsx
// import React from "react";

// interface Props {
//   children: React.ReactNode;
// }

// interface State {
//   hasError: boolean;
// }

// class ErrorBoundary extends React.Component<Props, State> {
//   state: State = { hasError: false };

//   static getDerivedStateFromError(error: any) {
//     return { hasError: true };
//   }

//   componentDidCatch(error: any, info: any) {
//     console.error("Error caught by ErrorBoundary:", error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>⚠️ Oops! Something went wrong.</h1>;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;

