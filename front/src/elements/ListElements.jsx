import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Delete from '@mui/icons-material/Delete';
import Show from '@mui/icons-material/ShowChart';



export default function ListElements({ data, del }) {

  


  const columns = [
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'username', headerName: 'User name', width: 130 },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 190,
    },
    {
      field: 'science',
      headerName: 'Science',

      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 260,
    },
    {
      field: 'actions',
      headerName: "Actions",
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <>
            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", color: 'red' }}>
              <Delete color='red' onClick={() => del(params.row.id)} index={params.row.id} />
            </div>
            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", color: 'blue' }}>
              <Show color='red' index={params.row.id} />
            </div>
          </>
        );
      }
    }
  ];
  let rows = data.map(x => {
    return {
      id: x._id,
      lastName: x.lastName,
      firstName: x.firstName,
      username: x.username,
      phone: x.phone,
      science: x.science.scienceName
    }
  })


  

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
