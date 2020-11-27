export const changeLocation = (obj) => {
  return {
    type: "CHANGE",
    payload: obj,
  };
};
export const deleteLocation = (obj) => {
  return {
    type: "DELETE",
    payload: obj,
  };
};
