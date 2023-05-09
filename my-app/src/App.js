import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, withStyles, Icon } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteIcon from '@material-ui/icons/Delete';
import ReplayIcon from '@material-ui/icons/Replay';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  flex: {
    display: "flex",
  },

}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function createData(icon, no, name, Vendor, Density, Viscosity, Packaging, packSize, Unit, Quantity) {
  return { icon, no, name, Vendor, Density, Viscosity, Packaging, packSize, Unit, Quantity };
}

const rows = [
  createData(<DoneIcon />, 1, 'Ammonium Persulfate', 'LG Chem', 3525.92, 60.63, "Bag", 100.00, "Kg", 6495.18),
  createData(<DoneIcon />, 2, 'Caustic Potash', 'Formosa', 3172.15, 48.22, "Bag", 100.00, "Kg", 8751.90),
  createData(<DoneIcon />, 3, 'Dimethylaminopropylamino', 'LG Chem', 12.62, 8435.37, "Barrel", 75.00, "L", 5964.61),
  createData(<DoneIcon />, 4, 'Mono Ammonium Phosphate', 'Sinopec', 76.51, 1597.65, "Bag", 105.00, "Kg", 8183.73),
  createData(<DoneIcon />, 5, 'Ferric Nitrate', 'DowDuPont', 364.04, 14.90, "Bag", 105.00, "Kg", 4154.33),
  createData(<DoneIcon />, 6, 'n-Pentane', 'Sinopec', 4535.26, "N/A", 66.76, "N/A", "t", 6272.34),
  createData(<DoneIcon />, 7, 'Glycoll Ether PM', 'LG Chem', 6495.18, 72.12, "Bag", 250.00, "Kg", 8749.54),
];

const App = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <div className={classes.flex}>
        <div>
          <h1>Chemical Supplies</h1>
        </div>
        <div align="end">
          <AddCircleIcon style={{ color: 'blue' }} />
          <ArrowDownwardIcon style={{ color: 'blue' }} />
          <ArrowUpwardIcon style={{ color: '#eeeee4' }} />
          <DeleteIcon style={{ color: 'red' }} />
          <ReplayIcon style={{ color: 'blue' }} />
          <PhoneAndroidIcon style={{ color: 'blue' }} />
        </div>
      </div>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>

            <StyledTableCell><DoneIcon /></StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Chemical name</StyledTableCell>
            <StyledTableCell align="right">Vendor</StyledTableCell>
            <StyledTableCell align="right">Density&nbsp;g/m3</StyledTableCell>
            <StyledTableCell align="right">Viscosity&nbsp;m2/s</StyledTableCell>
            <StyledTableCell align="right">Packaging&nbsp;</StyledTableCell>
            <StyledTableCell align="right">pack Size&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Unit&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Quantity&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow >
              <StyledTableCell>
                {row.icon}
              </StyledTableCell>
              <StyledTableCell>
                {row.no}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Vendor}</StyledTableCell>
              <StyledTableCell align="right">{row.Density}</StyledTableCell>
              <StyledTableCell align="right">{row.Viscosity}</StyledTableCell>
              <StyledTableCell align="right">{row.Packaging}</StyledTableCell>
              <StyledTableCell align="right">{row.packSize
              }</StyledTableCell>
              <StyledTableCell align="right">{row.Unit}</StyledTableCell>
              <StyledTableCell align="right">{row.Quantity}</StyledTableCell>


            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default App