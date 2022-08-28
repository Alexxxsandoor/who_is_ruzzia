export const initialState = {
  stalyn: 0,
  khrushchev: 0,
  brezhnev: 0,
  andropovChernenkoGorbachev: 0,
  yeltsin: 0,
  putin: 0,
  total: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "stalyn":
      return {
        ...state,
        stalyn: state.stalyn + action.value,
      };
    case "khrushchev":
      return {
        ...state,
        khrushchev: state.khrushchev + action.value,
      };
    case "brezhnev":
      return {
        ...state,
        brezhnev: state.brezhnev + action.value,
      };
    case "andropovChernenkoGorbachev":
      return {
        ...state,
        andropovChernenkoGorbachev:
          state.andropovChernenkoGorbachev + action.value,
      };
    case "yeltsin":
      return {
        ...state,
        yeltsin: state.yeltsin + action.value,
      };
    case "putin":
      return {
        ...state,
        putin: state.putin + action.value,
      };
    case "total":
      return {
        ...state,
        total: state.total + action.value,
      };
    default:
      return state;
  }
};
