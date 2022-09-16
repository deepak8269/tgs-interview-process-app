export const getStatus = (data, check) => {
  const values = Object.values(check).reduce((acc, curr) => acc || curr, false);
  if (values) {
    const filterByStatus = data.filter((item) => check[item?.candidateStatus]);
    return filterByStatus;
  }
  return data;
};
