export const getfiltered = (arrayOfData, filters) => {
  if (filters?.jobType.length < 1 && filters?.location.length < 1) {
    return arrayOfData;
  }

  const filtered = arrayOfData.filter((job) => {
    const locationMatch = job.location
      .toLowerCase()
      .includes(filters.location.toLowerCase());
    const typeMatch = filters.jobType
      ? job.type.toLowerCase() === filters.jobType.toLocaleLowerCase()
      : true;
    return locationMatch && typeMatch;
  });
  return filtered;
};
