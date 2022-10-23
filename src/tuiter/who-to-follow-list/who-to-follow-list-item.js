import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" alt="avatar" height={48} src={who.avatarIcon}/>
                </div>
                <div className="col-8">
                    <span className="fw-bold text-black small">{who.userName}<i
                        className="fa-solid fa-circle-check text-black ps-2"></i></span>
                    <div className="text-black small">@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;
