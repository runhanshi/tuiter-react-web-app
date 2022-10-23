import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

import WhoToFollowList from "../who-to-follow-list";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
        <div className="col-10 col-lg-7 col-xl-6">
            <div className="col">
                <div className="row">
                    <div className="col-10">
                        <div className="position-relative">
                            <i className="fa-sharp fa-solid fa-magnifying-glass position-absolute text-black wd-magnifying-glass"></i>
                            <input className="ps-5 form-control rounded-pill bg-white text-black"
                                   placeholder="Search Twitter"/>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-end pe-2">
                        <div className="text-primary fs-5 pt-1">
                            <a href="/tuiter/search" className="text-decoration-none">
                                <i className="fa-solid fa-gear text-blue"></i></a>
                        </div>
                    </div>
                </div>

                <ul className="nav nav-tabs navbar-expand mb-2 mt-2">
                    <li className="nav-item">
                        <a className="nav-link px-md-2 active bg-primary text-white" href="#for-you.html">For You</a>
                    </li>
                    <li className="nav-item pe-md-0 me-md-0">
                        <a className="nav-link px-md-2 px-sm-1" href="#trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-md-2 px-sm-1" href="#news.html">News</a>
                    </li>
                </ul>
            </div>
            <div className="position-relative mb-2">
                <img src="/images/spaceX.jpg" className="w-100"  alt="spacex starship"/>
                <div className="position-absolute bottom-0 start-0 ps-2 pb-2 text-white w-100 pe-5">
                    <div className="text-white fw-bolder fs-3 w-100">SpaceX's Starship</div>
                </div>
            </div>
            <PostSummaryList/>
        </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
                </div>
        </>
    );
};
export default ExploreComponent;
