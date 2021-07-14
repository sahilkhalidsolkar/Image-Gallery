import React, { createContext, useReducer } from 'react'
import ImageContext from './ImageContext'
import imageReducer from './imageReducer'
import axios from '../../Axios'
import { LOAD_IMAGE, DELETE_IMAGE, ADD_IMAGE } from '../types'
const ImageState = props => {
    const initialState = {
        image: []
    }

    const [state, dispatch] = useReducer(imageReducer, initialState)

    // load image
    const loadImage = async () => {

        const data = await axios.get('/image')

        dispatch({
            type: LOAD_IMAGE,
            payload: data.data.data
        })

    }

    // add image
    const uploadImage = async (obj) => {
        const data = await axios.post('/image', obj)
        loadImage()
    }

    // delete image
    const deleteData = async (id) => {
        console.log('deleting...')
        const data = await axios.delete(`/image/delete/${id}`)
        loadImage()

    }

    return (
        <ImageContext.Provider
            value={{
                image: state.image,
                loadImage,
                uploadImage,
                deleteData,
            }}
        >
            {props.children}
        </ImageContext.Provider>
    )
}
export default ImageState