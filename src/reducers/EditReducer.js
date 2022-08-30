const EditReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_EDIT":
      return (state = true);
    case "CLOSE_EDIT":
      return (state = false);
    default:
      return (state = false);
  }
};
export default EditReducer;
