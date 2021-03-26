import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotos} from "../../store/actions/actionCreators";
import Loader from "../loader/Loader";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FullPhotoView from "../fullPhotoView/FullPhotoView";
import PhotosList from "../photosList/PhotosList";


export default () => {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos.photos)
    const loading = useSelector(state => state.app.loading)

    useEffect(() => {
        dispatch(fetchPhotos())
    }, [])

    if (loading) {
        return <Loader/>
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <PhotosList photos={photos}/>
                </Route>
                <Route path="/:id" children={<FullPhotoView/>}/>
            </Switch>
        </Router>
    )
}
