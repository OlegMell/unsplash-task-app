import React from "react";
import SmallPhotoPreview from "../smallPhotoPreview/SmallPhotoPreview";
import './PhotosList.scss'


export default ({photos}) => (
    <div className="photos-list">
        {photos.length && photos.map(photo => <SmallPhotoPreview key={photo.id} photo={photo}/>)}
    </div>
)

