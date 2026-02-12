import Popular from './Popular';

const popularHOC = (Component) => {
  const WrappedComponent = (props) => {
    return(
      <Popular>
        <Component {...props} />
      </Popular>
    );
  }

  return WrappedComponent;
};

export default popularHOC;