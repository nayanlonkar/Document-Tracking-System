import React, { useState } from "react";
import "./Track.css";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core";

export default function Track(props) {
  const [filename, setfilename] = useState(null);
  const [fileList, setfileList] = useState(null);

  async function track(event) {
    event.preventDefault();
    const param = { params: { filename: filename } };
    const res = await Axios.get("http://localhost:3001/api/track", param);
    setfileList(res.data.result);
    console.log(res.data.result);
  }

  return (
    <div className="track-page">
      <div>
        <form onSubmit={track}>
          <input type="text" onChange={(e) => setfilename(e.target.value)} />
          <button type="submit">Track</button>
        </form>
      </div>

      <hr />
      <div>{fileList != null ? <PrintTable fileList={fileList} /> : null}</div>
    </div>
  );
}

/************************************************* */
const useStyles = makeStyles({
  table: {
    width: "60%",
    marginLeft: "20%",
    marginRight: "20%",
  },
});

function PrintTable(props) {
  const classes = useStyles();
  const list = props.fileList;
  let counter = 0;
  return (
    <div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Sender</TableCell>
            <TableCell>Receiver</TableCell>
            <TableCell>Date Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((value, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{(counter += 1)}</TableCell>
                <TableCell>{value.sender}</TableCell>
                <TableCell>{value.receiver}</TableCell>
                <TableCell>{value.date_time}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
