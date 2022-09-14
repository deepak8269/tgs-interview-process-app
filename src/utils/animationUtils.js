// import { urlNavigationConfig } from "./navigationConfigs";
// import { getItemFromLocalStorage } from "./localStorageUtils";

export const getTransition = (direction) => {
  let initialPosition = { y: 100, opacity: 0 };
  let animateTo = { y: 0, opacity: 1 };
  switch (direction) {
    case "top-bottom":
      initialPosition = { y: -100, opacity: 0 };
      break;
    case "bottom-top":
      break;
    case "left-right":
      initialPosition = { x: -100, opacity: 0 };
      animateTo = { x: 0, opacity: 1 };
      break;
    case "right-left":
      initialPosition = { x: 100, opacity: 0 };
      animateTo = { x: 0, opacity: 1 };
      break;
    default:
      break;
  }

  const transConfig = {
    initialPosition,
    animateTo
  };
  return transConfig;
};

// export const getNavigationTransition = (newUrl) => {
// console.log(newUrl);
// const length = getItemFromLocalStorage("history");
// const prevUrl = getItemFromLocalStorage("prev_url") || "/login";
// console.log("prevUrl :", prevUrl);
// console.log("newUrl :", newUrl);
// const prevNav = urlNavigationConfig.find((nav) => nav.endpoint.trim() === prevUrl.trim());
// const newNav = urlNavigationConfig.find((nav) => nav.endpoint.trim() === newUrl.trim());
// let newTrans = "translate3d(0,100%,0)";
// if (length <= window.history.length) {
//   newTrans = "translate3d(0,-100%,0)";
// }

//   if (prevNav && newNav && prevNav.index >= newNav.index) {
//     newTrans = "translate3d(0,-100%,0)";
//   }

//   console.log("newTrans :", newTrans);

//   const transConfig = {
//     from: { opacity: 0, transform: newTrans },
//     enter: { opacity: 1, transform: "translate3d(0,0,0)" }
//   };
//   return transConfig;
// };
