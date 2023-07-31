export const collectionsReducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE":
      const newStates = structuredClone(state);
      newStates[action.name] = action.value;
      return newStates;
    default:
      return state;
  }
};

export const COLLECTIONS_STATES = {
  showModal: false,
  formError: "",
  collections: [],
};
