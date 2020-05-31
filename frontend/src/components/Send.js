import React, { useState, useRef } from "react";
import "./Send.css";
import Axios from "axios";

export default function Send() {
  const [recipient, setrecipient] = useState("");
  const file = useRef(null);
  const [docType, setdocType] = useState("notice");
  const [userList, setuserList] = useState([]);

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(recipient);
    console.log(docType);
  }

  async function get_users(event) {
    setrecipient(event.target.value);
    const param = { params: { username: event.target.value } };
    const res = await Axios.get("http://localhost:3001/api/users", param);
    setuserList(res.data.result);
  }

  return (
    <div className="send-form">
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Recipient &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;</label>
          <input
            type="text"
            list="test"
            value={recipient}
            autoComplete="off"
            onChange={(e) => get_users(e)}
            onClick={(e) => setrecipient(e.target.value)}
          />
          <datalist id="test">
            {userList.map((user, key) => (
              <option key={key} value={user} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="file">Document &nbsp;: &nbsp;&nbsp;&nbsp;</label>
          <input type="file" name="file" id="file" ref={file} />
        </div>
        <div>
          <label htmlFor="docType">
            Doc Type &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;
          </label>
          <select value={docType} onChange={(e) => setdocType(e.target.value)}>
            <option value="notice">Notice</option>
            <option value="request">Request</option>
          </select>
        </div>
        <div>
          <button type="submit" value="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
