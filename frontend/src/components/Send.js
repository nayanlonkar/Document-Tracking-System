import React, { useState } from "react";
import "./Send.css";
import Axios from "axios";

export default function Send(props) {
  const [recipient, setrecipient] = useState("");
  let [document, setdocument] = useState(null);
  const [docType, setdocType] = useState("notice");
  const [userList, setuserList] = useState([]);
  // const [error, seterror] = useState(null);
  // let [msg, setmsg] = useState(null);
  const [status, setstatus] = useState(0);

  function submit_checker() {
    if (recipient === "") return 1;
    if (document === null) return 1;
    return 0;
  }

  async function onSubmitHandler(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("sender", props.user.username);
    formData.append("receiver", recipient);
    formData.append("doc_type", docType);
    formData.append("file", document, document.name);

    const res = await Axios.post("http://localhost:3001/api/file", formData);
    if (res.status === 201) {
      console.log(document);
      console.log(res);
      // console.log(res.data.message);
    }
  }

  async function get_users(event) {
    setrecipient(event.target.value);
    const param = { params: { username: event.target.value } };
    const res = await Axios.get("http://localhost:3001/api/users", param);
    setuserList(res.data.result);
  }

  function upload_handler(event) {
    setdocument(event.target.files[0]);
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
          <input type="file" onChange={upload_handler} />
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
          <button type="submit" value="submit" disabled={submit_checker()}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
