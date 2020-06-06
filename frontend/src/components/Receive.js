import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Receive.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

export default function Receive(props) {
  const [receivedFilesList, setreceivedFilesList] = useState(null);
  const [filter, setfilter] = useState("all");

  async function get_received_files() {
    const param = { params: { username: props.user.username, filter: filter } };
    const res = await Axios.get("http://localhost:3001/api/received", param);
    setreceivedFilesList(res.data.result);
  }

  useEffect(() => {
    console.log(receivedFilesList);
  }, [receivedFilesList]);

  return (
    <div className="Receive">
      <div className="Menubar">
        <select value={filter} onChange={(e) => setfilter(e.target.value)}>
          <option value="all">All</option>
          <option value="notice">Notice</option>
          <option value="request">Request</option>
        </select>
        <button onClick={get_received_files}>Submit</button>
        <hr />
      </div>
      <div className="Receive-List">
        {receivedFilesList === null ? null : (
          <PrintTable list={receivedFilesList}></PrintTable>
        )}
      </div>
    </div>
  );
}

/***************************************************/
const useStyles = makeStyles({
  table: {
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
  },
});

function PrintTable(props) {
  const classes = useStyles();
  const list = props.list;
  let counter = 0;
  return (
    <div className="PrintTable">
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>File Id</TableCell>
            <TableCell>File Name</TableCell>
            <TableCell>Sender</TableCell>
            <TableCell>Doc. Type</TableCell>
            <TableCell>Date-Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((value, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{(counter += 1)}</TableCell>
                <TableCell>{value.id}</TableCell>
                <TableCell>{value.file_name}</TableCell>
                <TableCell>{value.sender}</TableCell>
                <TableCell>{value.doc_type}</TableCell>
                <TableCell>{value.date_time}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
