import React from "react";

export default function LogOut() {
  const style = {
    marginTop: "50px",
    width: "100px",
    height: "30px",
  };
  return (
    <div>
      <form>
        <button style={style} type="submit">
          Log Out
        </button>
      </form>
    </div>
  );
}
