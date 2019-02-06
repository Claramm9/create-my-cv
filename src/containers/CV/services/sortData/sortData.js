/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
export const sortData = (data) => {
  const sortedData = data.sort((a, b) => {
    if (new Date(a.get('endDate')) < new Date(b.get('endDate'))) {
      return -1;
    }
    if (new Date(a.get('endDate')) > new Date(b.get('endDate'))) {
      return 1;
    }
    if (new Date(a.get('endDate')) === new Date(b.get('endDate'))) {
      return 0;
    }
  });

  return sortedData;
};