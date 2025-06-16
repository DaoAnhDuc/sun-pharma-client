export const SERVER = {
  API: null,
  URL: "",
};
export const getLinkImage = (data) => {
  return SERVER.URL + "/" + data;
};