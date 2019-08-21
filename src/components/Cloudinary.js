import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios'

const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_COUDINARY_UPLOAD_PRESET;
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

  onImageDrop(files) {
    this.setState({
      uploadedFile: files
    });

    this.handleImageUpload(files);
  }

  handleImageUpload = async(file) =>{
    const uploads = file.map(image => {
      // our formdata
      const formData = new FormData();
      formData.append("file", image);
      formData.append("tags", '{TAGS}'); // Add tags for the images - {Array}
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own
      formData.append("api_key", REACT_APP_CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary API key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Replace cloudinary upload URL with yours
      return axios.post(
        `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData, 
        { headers: { "X-Requested-With": "XMLHttpRequest" }})
        .then(response => {
          console.log(response.data)
          this.setState({
            images: [...this.state.images, response.data.url]
          })
        })
    })

    console.log(uploads)

  
  };
    
  render() {
    let images = this.state.images.map(image => {
      return(
        <figure key={image} >
          <img src={image} alt=""/>
        </figure>
      )
    })
    console.log(this.state)
    return (
      <div className="App">
        <div className="dropzone">
          <Dropzone
            style={{border: "1px solid black"}}
            multiple={true} //allows multiple images to be uploaded
            accept="image/*" //allows any image type. You can be more explicit to limit only certain file types, e.g. accept="image/jpg,image/png"
            onDrop={this.onImageDrop.bind(this)} //method fired when image is uploaded
          >
            {({ getRootProps, getInputProps }) => {
              return (
                <div {...getRootProps()} >
                  <input {...getInputProps()} />
                  {
                    <p>
                      Try dropping some files here, or click to select files to
                      upload.
                    </p>
                  }
                </div>
              );
            }}
          </Dropzone>
        </div>
        {images}
      </div>
    );
  }
}

export default Cloudinary;
