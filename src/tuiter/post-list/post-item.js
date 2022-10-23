import React from "react";

const PostItem = (
    {
        post = {
            "_id": 100,
            "avatar": "../../public/images/elon_profile.jpeg",
            "userName": "Elon Musk",
            "handle": "@elonmusk",
            "time": "23h",
            "message": "Amazing show about @inspiration4x mission!",
            "image": "../../images/inspiration4.jpeg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "content": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space...",
            "link": "netflix.com",
            "numComments": "4.2K",
            "numRetweets": "3.5K",
            "numLikes": "37.5K"
        }
    }
) => {
    return (
        <article className="row border border-light p-2 rounded-top">
            <div className="col-1  wd-author-avatar img-fluid">
                <img src={post.avatar} className="rounded-circle"  alt="avatar"></img>
            </div>
            <section className="col-11 ps-4">
                <div className="row position-relative">
                    <div className="col-11">
                        <span className="fw-bold small">{post.userName}</span>
                        <span className="small text-secondary">{post.handle}</span>
                        <span className="small text-secondary">- {post.time}</span>
                    </div>
                    <div className="float-end col-1"><i
                        className="fa-solid fa-circle-check text-white ps-2"></i></div>
                </div>
                <p className="small">{post.message}</p>
                <div className="border border-light rounded-bottom rounded-top">
                    <img src={post.image} className="w-100 rounded-top border-bottom border-light" alt="image"></img>
                    <div className="">
                        <h5 className="pt-2 small fw-bold">{post.title}</h5>
                        <div className="small text-secondary">{post.content}</div>
                        <div>{post.link}</div>
                    </div>
                </div>
                <div className="row pt-2 pb-2">
                    <div className="col-3 align-content-center text-secondary">
                        <a href="/tuiter/numComments" className="text-decoration-none text-secondary small">
                            <i className="fa-regular fa-comment pe-2 text-decoration-none text-secondary fa-1x"></i>
                            {post.numComments}
                        </a>
                    </div>
                    <div className="col-3 align-content-center text-secondary">
                        <a href="/tuiter/numRetweets" className="text-decoration-none text-secondary small">
                            <i className="fa-solid fa-retweet pe-2 text-decoration-none text-secondary fa-1x"></i>
                            {post.numRetweets}
                        </a>
                    </div>
                    <div className="col-3  text-decoration-none text-secondary">
                        <a href="/tuiter/numLists" className="text-decoration-none text-secondary small">
                            <i className="fa-solid fa-heart pe-2 text-secondary fa-1x"></i>
                            {post.numLikes}</a>
                    </div>
                    <div className="col-3 text-decoration-none text-secondary">
                        <a href="/tuiter/num"><i className="fa-solid fa-arrow-up-from-bracket pe-2 text-secondary fa-1x"></i></a>
                    </div>
                </div>
            </section>
        </article>
    );
};
export default PostItem;