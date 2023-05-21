import { Pagination, Stack } from "@mui/material";

function Paginate({ currentPage, setCurrentPage, count }) {
  const changePage = (_, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        color="primary"
        page={currentPage}
        onChange={changePage}
      />
    </Stack>
  );
}

export default Paginate;
