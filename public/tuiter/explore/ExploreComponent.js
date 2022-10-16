import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="col">
             <div class="row">
                    <div class="col-10">
                        <div class="position-relative">
                            <i class="fa-sharp fa-solid fa-magnifying-glass position-absolute text-black wd-magnifying-glass"></i>
                            <input class="ps-5 form-control rounded-pill bg-white text-black"
                                   placeholder="Search Twitter"/>
                        </div>
                    </div>
                    <div class="col-2 d-flex justify-content-end pe-2">
                        <div class="text-primary fs-5 pt-1">
                            <a href="#" class="text-decoration-none">
                                <i class="fa-solid fa-gear text-blue"></i></a>
                        </div>
                    </div>
                </div>

                <ul class="nav nav-tabs navbar-expand mb-2 mt-2">
                    <li class="nav-item">
                        <a class="nav-link px-md-2 active" href="#for-you.html">For You</a>
                    </li>
                    <li class="nav-item pe-md-0 me-md-0">
                        <a class="nav-link px-md-2 px-sm-1" href="#trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-md-2 px-sm-1" href="#news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-md-2 px-sm-1" href="#sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-sm-none d-md-block">
                        <a class="nav-link px-md-2" href="#entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>

            <div class="position-relative">
                <img src="../../images/spaceX.jpg" class="w-100"/>
                <div class="position-absolute bottom-0 start-0 ps-2 pb-2 text-white w-100 pe-5">
                    <div class="text-secondary fw-bolder fs-3 w-100">SpaceX's Starship</div>
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;