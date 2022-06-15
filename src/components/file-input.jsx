import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./file-input.css";
import ImageMarker from "react-image-marker";
import { checkIfEmailInString, extactEmail, placeholder } from "../const/utils";
const FileUpload = ({
  uploadedFile,
  acceptedFileFormat,
  supportedFileFormat,
  ...props
}) => {
  const [file, setFiles] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [value, setValue] = useState({ body: "" });

  const CustomMarker = (props) => {
    return <div className="custom-marker"></div>;
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFiles(
          Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0]),
          })
        );
      } else {
        console.log(`Please upload a file with a valid format`);
      }
    },
  });

  const handleSubmit = (event) => {
    if (checkIfEmailInString(value.body)) {
      // send email
      const sendEmailTo = extactEmail(value.body);
      console.log(sendEmailTo);
    }
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue({ body: event.target.value });
  };

  const handleDelete = () => {
    setValue({ body: "" });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        {...getRootProps()}
        style={{ margin: "0 auto" }}
        className="container"
      >
        <div className="card">
          <input {...getInputProps()} />
          {Object.keys(file).length > 0 ? (
            <div className="imageBox">
              <button>Re-upload</button>
              <div> Uploaded image</div>
            </div>
          ) : (
            <div className="placeholder">
              <img src={placeholder} />
              <div>
                Drag files to upload or <span>browse</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="imageDiscussion">
        {Object.keys(file).length > 0 ? (
          <div className="image">
            <ImageMarker
              src={file.preview}
              markers={markers}
              onAddMarker={(Marker) => setMarkers([...markers, Marker])}
              markerComponent={CustomMarker}
            />
          </div>
        ) : (
          <></>
        )}

        {markers.length > 0 ? (
          <div className="chatSection">
            <div style={{ padding: "1rem" }}>Chat Section</div>
            <form>
              <textarea
                className="textArea"
                value={value.body}
                onChange={handleChange}
              />
            </form>
            <div
              style={{
                padding: "1rem",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <div>
                <button onClick={handleSubmit}>Comment</button>
              </div>
              <div>
                <button onClick={handleDelete}>Cancel</button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default FileUpload;
