import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import "../App.css";

const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_COUDINARY_UPLOAD_PRESET; //how to grab .env info on the front end
const REACT_APP_CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const REACT_APP_CLOUDINARY_API_KEY = process.env.REACT_APP_CLOUDINARY_API_KEY;

class Cloudinary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: "",
      images: []
    };
  }

  onImageDrop(files) { //handles when files are chosen
    this.setState({
      uploadedFile: files
    });

    this.handleImageUpload(files); 
  }

  handleImageUpload = async file => { 
    const uploads = file.map(image => {
      // our formdata
      const formData = new FormData();
      formData.append("file", image);
      formData.append("tags", "{TAGS}"); // Add tags for the images - {Array}
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own
      formData.append("api_key", REACT_APP_CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary API key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      return axios
        .post(
          `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData,
          { headers: { "X-Requested-With": "XMLHttpRequest" } }
        )
        .then(response => {
          // console.log(response.data); //comment in to console.log response data
          this.setState({
            images: [...this.state.images, response.data.url]
          });
        });
    });

    console.log(uploads);
  };

  render() {
    let images = this.state.images.map(image => { //maps over images array in State and displays urls in img tags
      return (
        <div key={image} className="image">
          <figure>
            <img src={image} alt="" />
          </figure>
          <p>{image}</p>
        </div>
      );
    });
    console.log(this.state);
    return (
      <div className="App">
        <div className="dropzone">
          <Dropzone
            style={{ border: "1px solid black" }}
            multiple={true} //allows multiple images to be uploaded
            accept="image/*" //allows any image type. You can be more explicit to limit only certain file types, e.g. accept="image/jpg,image/png"
            onDrop={this.onImageDrop.bind(this)} //method fired when image is uploaded
          >
            {({ getRootProps, getInputProps }) => { //Dropzone code I really don't understand
              return (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    <p>
                      Click to select files to upload.
                    </p>
                  }
                </div>
              );
            }}
          </Dropzone>
        </div>
        {images} //mapped images
      </div>
    );
  }
}

export default Cloudinary;
