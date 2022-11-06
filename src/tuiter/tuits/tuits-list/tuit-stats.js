import React from "react";

const TuitStats = (
    {
        tuit = {
        "_id": 100,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.jpeg",
        "liked": false,
        "replies": 1,
        "retuits": 2,
        "likes": 5,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return (
        <div className="row pt-2 pb-2">
            <div className="col-3 align-content-center text-secondary">
                <a href="/tuiter/replies" className="text-decoration-none text-secondary small">
                    <i className="fa-regular fa-comment pe-2 text-decoration-none text-secondary fa-1x"></i>
                    {tuit.replies}
                </a>
            </div>
            <div className="col-3 align-content-center text-secondary">
                <a href="/tuiter/retuits" className="text-decoration-none text-secondary small">
                    <i className="fa-solid fa-retweet pe-2 text-decoration-none text-secondary fa-1x"></i>
                    {tuit.retuits}
                </a>
            </div>
            <div className="col-3  text-decoration-none text-secondary">
                <a href="/tuiter/likes" className="text-decoration-none text-secondary small">
                    { tuit.liked &&<i className="fa-solid fa-heart pe-2 text-danger text-decoration-none text-secondary fa-1x"></i>}
                    { !tuit.liked && <i className="fa-regular fa-heart pe-2 text-decoration-none text-secondary fa-1x"></i> }
                    {tuit.likes}
                </a>
            </div>
            <div className="col-3 text-decoration-none">
                <a href="/tuiter/arrowup" className="text-secondary">
                    <i class="fa-solid fa-arrow-up-from-bracket pe-2 text-secondary fa-1x"></i></a>
            </div>
        </div>
    );
};
export default TuitStats;