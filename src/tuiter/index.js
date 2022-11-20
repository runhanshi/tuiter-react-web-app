import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";

import ProfileComponent from "./profile";
import EditProfileComponent from "./edit-profile";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";

import profileReducer from "./reducers/profile-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({
    reducer: {
        who: whoReducer,
        tuitsData: tuitsReducer,

        profile: profileReducer
    }
});


function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-11 col-xl-10"
                     style={{"position": "relative"}}>
                    <Routes>
                         <Route index element={<HomeComponent/>}/>
                         <Route path="home"    element={<HomeComponent/>}/>
                         <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    )
}

export default Tuiter