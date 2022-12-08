export const handleAdd = (payload) => {
    return {
      type: "ADD",
      payload: payload
    };
  };
  
  export const handleSub = (payload) => {
    return {
      type: "REMOVE",
      payload: payload
    };
  };
  