


const counterReducer = (state = 0, action) => {
    if (action.type === "ADD") {
      return state + 1;
    }
    if (action.type === "ADD10") {
      return state + 10;
    }
    if (action.type === "REMOVE") {
      return state - 1;
    }
    if (action.type === "REMOVE10") {
      return state - 10;
    }
    if (action.type === "RESET") {
      return 0;
    }
    return state;
  };
  export default counterReducer;