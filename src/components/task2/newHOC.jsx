import New from './New';

const newHOC = (Component) => {
  const WrappedComponent = (props) => {
    return(
      <New>
        <Component {...props} />
      </New>
    );
  }

  return WrappedComponent;
};

export default newHOC;