import React, { useState } from "react";
import "./Forward.css";
import Axios from "axios";

export default function Forward(props) {
  const [recipient, setrecipient] = useState("");
  const [userList, setuserList] = useState([]);
  const [fileList, setfileList] = useState([]);
  const [filename, setfilename] = useState("");
  // const [docType, setdocType] = useState("");

  async function get_users(event) {
    setrecipient(event.target.value);
    const param = { params: { username: event.target.value } };
    const res = await Axios.get("http://localhost:3001/api/users", param);
    setuserList(res.data.result);
  }

  async function get_userFiles(event) {
    event.preventDefault();
    const param = { params: { username: props.user.username } };
    const res = await Axios.get("http://localhost:3001/api/userfile", param);
    setfileList(res.data.result);
  }

  async function forward(event) {
    event.preventDefault();
    const param = { params: { filename: filename } };
    const res = await Axios.get("http://localhost:3001/api/fileinfo", param);
    const fileObj = res.data.result;

    const obj = {
      file_name: filename,
      doc_type: fileObj.doc_type,
      sender: props.user.username,
      receiver: recipient,
    };

    await Axios.post("http://localhost:3001/api/forward", obj);
  }

  return (
    <div className="forward-form">
      <form onSubmit={forward}>
        <div>
          <label>Recipient &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;</label>
          <input
            type="text"
            list="test"
            value={recipient}
            autoComplete="off"
            onChange={(e) => {
              get_users(e);
              get_userFiles(e);
            }}
            onClick={(e) => setrecipient(e.target.value)}
          />
          <datalist id="test">
            {userList.map((user, key) => (
              <option key={key} value={user} />
            ))}
          </datalist>
        </div>
        <div>
          <PrintList
            list={fileList}
            filename={filename}
            setfilename={setfilename}
          />
        </div>
        <button type="submit">Forward</button>
      </form>
    </div>
  );
}

function PrintList(props) {
  const list = props.list;
  return (
    <div className="print-list">
      <label>Document &nbsp;: &nbsp;&nbsp;&nbsp;</label>
      <select
        value={props.filename}
        onChange={(e) => props.setfilename(e.target.value)}
      >
        <option>Select File</option>
        {list.map((value, index) => {
          return (
            <option key={index} value={value.file_name}>
              {value.file_name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
