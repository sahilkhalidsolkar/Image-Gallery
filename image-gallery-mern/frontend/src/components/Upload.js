import React, { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone'

import ImageContext from "../context/image/ImageContext";

const Upload = () => {
    const { uploadImage } = useContext(ImageContext);
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length > 1) {
            let error = "we can accept only one file at a time"
            alert(error)
        } else {
            console.log(acceptedFiles[0])
            let formdata = new FormData()
            formdata.append('file', acceptedFiles[0])
            uploadImage(formdata)
        }

        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div>
            <div {...getRootProps()} className="upload">
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
        </div>
    )
}

export default Upload
