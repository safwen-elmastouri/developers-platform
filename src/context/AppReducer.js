export default (state, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      
      return {
        ...state,
        user: [...state.user, action.payload],
      };

    
 
    default:
      return state;
  }
};
