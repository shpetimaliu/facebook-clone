export function userReducer(state = "Miresevini ne facebook clone", action) {
  switch (action.type) {
    case "Login":
      return action.payload;

    default:
      return state;
  }
}
