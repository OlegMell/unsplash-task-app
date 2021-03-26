import React from "react";
import {Link} from "react-router-dom";
import './SmallPhotoPreview.scss';

export default ({ photo }) => {
    const { user } = photo;

    return (
        <div className="photo-preview">
            <div className="photo-wrapper">
                <Link to={`/${photo.id}`}>
                    <img src={photo.urls.small}
                         alt={photo.alt_description}/>
                </Link>
            </div>
            <div className="info">
                <div className="photo-title">
                    {photo.description || 'No photo description'}
                </div>
                <div className="photo-author">
                    <div className="avatar">
                        <img src={user.profile_image.small}
                             alt={user.username}/>
                    </div>
                    <div className="text">
                        {user.first_name}
                    </div>
                </div>
            </div>
        </div>
    )
}
