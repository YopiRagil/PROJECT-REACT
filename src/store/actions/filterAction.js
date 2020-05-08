import Axios from "axios";

export const checkedFilter = (e) => {
  if (e.target.checked) {
    return {
      type: "CHEKCBOX_CHECKED",
      payload: e,
    };
  } else {
    return {
      type: "CHEKCBOX_UNCHECKED",
      payload: e,
    };
  }
};

export const changeInputFilter = (e) => {
  return {
    type: "CHANGE_INPUT_FILTER",
    payload: e,
  };
};

// export const filteringProductCategory = (
//   data,
//   filter,
//   minPrice,
//   maxPrice,
//   rate
// ) => {
//   return async (dispatch) => {
//     const filterProductCategory = () => {
//       if (filter) {
//         const filterCategory = data.filter((item) => {
//           if (
//             item.title
//               .toLowerCase()
//               .split(/\s+|\.|-/)
//               .includes(...filter)
//           ) {
//             return item;
//           } else {
//             return false;
//           }
//         });
//         return filterCategory;
//       } else {
//         return data;
//       }
//     };
//     const filterProductRate = () => {
//       if (rate) {
//         const filterRate = filterProductCategory().filter((item) => {
//           if (item.rating >= rate) {
//             return item;
//           } else {
//             return false;
//           }
//         });
//         return filterRate;
//       } else {
//         return filterProductCategory();
//       }
//     };
//     const filterProductPriceMin = () => {
//       if (minPrice) {
//         const filterPriceMin = filterProductRate().filter((item) => {
//           if (item.price.substr(1) >= minPrice) {
//             return item;
//           } else {
//             return false;
//           }
//         });
//         return filterPriceMin;
//       } else {
//         return filterProductRate();
//       }
//     };
//     const filterProductPriceMax = () => {
//       if (maxPrice) {
//         const filterPriceMax = filterProductPriceMin().filter((item) => {
//           if (item.price.substr(1) <= maxPrice) {
//             return item;
//           } else {
//             return false;
//           }
//         });
//         dispatch({
//           type: "FILTER_PRODUCT",
//           payload: filterPriceMax,
//         });
//       } else {
//         dispatch({
//           type: "FILTER_PRODUCT",
//           payload: filterProductRate(),
//         });
//       }
//     };
//   };
// };
