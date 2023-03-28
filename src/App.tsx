import React from "react";
import "./App.css";
import axios from "axios";
function App() {
  const uploadpic = (file: any) => {
    try {
      console.log(file.files[0].name);
      let formdata = new FormData();
      formdata.append("image", file.files[0]);
      formdata.append("imagename", file.files[0].name);
      axios
        .post(
          "http://localhost:5500/image",
          formdata,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res: any) => console.log(res))
        .catch((err: any) => console.log(err));
    } catch (error) {}
  };
  return (
    <div className="App">
      <input type={"file"} onChange={(e) => uploadpic(e.target)}></input>
    </div>
  );
}

export default App;
