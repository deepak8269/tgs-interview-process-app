// external imports
import React from "react";
import { Container, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../../components/Loader";
import { headerData } from "../../components/table/headerData";
// import { TableData } from "../../components/table/TableData";
// import { Container, Grid } from "@mui/material";
import Animate from "../../components/Animated";
import Header from "../../components/header";
// import { Link } from "react-router-dom";
import { useData } from "../../context/dataContext";
// import { MenuList } from "../../components/menuList/MenuList";
// import { getStatus } from "../../utility/getStatus";
import { NavigationLink } from "../../components/navigationLink/NavigationLink";

const Reports = () => {
  // const [showMenu, setShowMenu] = useState(false);
  const { data, loading, error } = useData();

  // console.log(data, "data");
  // const finalData = getStatus(data, check);

  // const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  //   { field: "firstName", headerName: "First name", width: 130 },
  //   { field: "lastName", headerName: "Last name", width: 130 },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     width: 90
  //   },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) => `${params.row.firstName || ""} ${params.row.lastName || ""}`
  //   }
  // ];

  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
  // ];

  return (
    <Animate>
      <Container>
        <Grid container direction="column">
          <Header fullHeader />
          <NavigationLink />
        </Grid>
      </Container>
      {loading && <Loader />}
      {error && <h3>{error.message}</h3>}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={data} columns={headerData} pageSize={5} rowsPerPageOptions={[5]} />
      </div>
      {/* <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow>
              {headerData.map((header) => (
                <TableCell align="center" key={header} >{header}</TableCell>
                ))}
                <TableCell onClick={()=>setShowMenu(!showMenu)} align="center" >Filter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         
            {finalData.map((item) => (
              <TableData key={item.candidateId} item={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      {/* {showMenu && <MenuList />} */}
    </Animate>
  );
};

export default Reports;
