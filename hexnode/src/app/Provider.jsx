import * as React from 'react';
import PropTypes from "prop-types";
import { MainErrorFallback } from '../components/errors/main';
import { ErrorBoundary } from 'react-error-boundary';


 export const AppProvider = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <div>
         loading...
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback} >
      {children}
      </ErrorBoundary>
    </React.Suspense>
  );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired, // Define children prop type
  };