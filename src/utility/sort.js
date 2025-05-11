function sort(arrayData, text) {
  let sortedArray =
    text.length && text === "title"
      ? arrayData?.sort((a, b) => {
          const sortStringA = a.title?.toLowerCase();
          const sortStringB = b.title?.toLowerCase();

          if (sortStringA < sortStringB) {
            return -1;
          }
          if (sortStringA > sortStringB) {
            return 1;
          }

          return 0;
        })
      : arrayData?.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
  return sortedArray;
}

export default sort;
