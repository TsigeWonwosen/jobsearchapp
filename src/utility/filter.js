export const getfiltered = (arrayOfData, text1 = "", text2 = "") => {
  let newFilteredJobs = [];
  if (text1.length < 1 && text2.length < 1) {
    return arrayOfData;
  } else {
    newFilteredJobs = arrayOfData?.filter(({ type, location }) => {
      return (
        location.toLowerCase().includes(text1.toLowerCase()) ||
        type.toLowerCase().includes(text2.toLowerCase())
      );
    });
  }
  return newFilteredJobs;
};
