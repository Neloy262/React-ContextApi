class Context {
  constructor(value) {
    this.value = value;
  }

  Provider = ({ value, children }) => {
    this.value = value;
    return children;
  };

  Consumer = ({ children }) => children(this.value);
}

function getContext(value = null) {
  let context = new Context(value);

  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
}
let context = getContext();

export default context;
