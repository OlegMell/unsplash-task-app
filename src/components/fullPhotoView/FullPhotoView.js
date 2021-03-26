import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import './FullPhotoView.scss'

export default function FullPhotoView() {
    const {id} = useParams();

    const photos = useSelector(state => state.photos.photos)
    const photo = photos.find(photo => photo.id === id);

    return (
        <div className={'full-view'}>
            {!photo ?
                    <div className={'error'}>
                        <h2 className={'error-text'}>Not found!</h2>
                    </div> : (
                    <div className={'wrapper'}>
                        <img src={photo.urls.full}
                             alt={photo.alt_description}/>
                    </div>
                )
            }
        </div>
    )
}
