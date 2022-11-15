import { createStyles, Table } from "@mantine/core";
import React from 'react'

interface HistoryData {
  inputHistory: number[];
  hintArray: string[];
}
const useStyles = createStyles(theme => ({
  table: {
    width:'60%', 
    backgroundColor:'#c8cff2'
  },
  capt: {
    color:'black !important',
    fontSize:'15px !important',
    fontWeight:700
  },
  thead1:{
    fontSize:'18px !important'
  },
  td:{
    height:'17px'
  }
}));

const HistoryChart: React.FC<HistoryData> = ({ inputHistory, hintArray }: HistoryData) => {
  const { classes } = useStyles();


  const ths = (
    <tr>
      <th className={classes.thead1}>Input history</th>
      <th className={classes.thead1}>Hint</th>
    </tr>
  );

  const rows = inputHistory.concat(new Array(10-inputHistory.length).fill('')).map((item, ind) => (
    <tr key={ind}>
      <td className={classes.td}>{item}</td>
      <td>{hintArray[ind]}</td>
    </tr>
  ));
  return (
      <Table withBorder captionSide="bottom" className={classes.table} horizontalSpacing="lg">
        <caption className={classes.capt}>Attempts left: {10 - inputHistory.length} </caption>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
  );
};

export default HistoryChart;
