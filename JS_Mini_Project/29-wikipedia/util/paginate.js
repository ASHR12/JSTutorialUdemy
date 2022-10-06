const paginate = (data) => {
  console.log(`paginate`);
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);
  // console.log(numberOfPages);
  const paginateData = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return paginateData;
};

export { paginate };
