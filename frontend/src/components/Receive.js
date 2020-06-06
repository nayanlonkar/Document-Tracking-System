import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Receive.css";

export default function Receive(props) {
  const [receivedFilesList, setreceivedFilesList] = useState(null);
  const [filter, setfilter] = useState("all");

  async function get_received_files() {
    console.log(filter);
    console.log(props.user.username);
    const param = { params: { username: props.user.username, filter: filter } };
    const res = await Axios.get("http://localhost:3001/api/received", param);
    setreceivedFilesList(res.data.result);
  }

  useEffect(() => {
    console.log("This is something");
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
      <div className="Receive-List">{}</div>
    </div>
  );
}
