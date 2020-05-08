const initialState = {
  filter: [],
  rating: 0,
  minPrice: 0,
  maxPrice: 0,
};

export default function filterReducer(filterState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_FILTER":
      return {
        ...filterState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "CHEKCBOX_CHECKED":
      return {
        ...filterState,
        filter: [...filterState.filter, action.payload.target.value],
      };
    case "CHEKCBOX_UNCHECKED":
      return {
        ...filterState,
        filter: [
          ...filterState.filter.filter(
            (item) => item !== action.payload.target.value
          ),
        ],
      };
    default:
      return filterState;
  }
}
