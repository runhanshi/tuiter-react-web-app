import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];

    return (
        <div className="list-group">
            <Link to="/tuiter" className="list-group-item">Tuiter</Link>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="fa-solid fa-house-chimney pe-2 pt-1 float-start"></i>Home</Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="fa-solid fa-hashtag pe-2 pt-1 float-start"></i>Explore</Link>
            <a href="/tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="fa-solid fa-bell pe-2 pt-1 float-start"></i>Notifications</a>
            <a href="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="fa-solid fa-envelope pe-2 pt-1 float-start"></i>Messages</a>
            <a href="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="fa-solid fa-bookmark pe-2 pt-1 float-start"></i>Bookmarks</a>
            <a href="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="fa-solid fa-list-ul pe-2 pt-1 float-start"></i>Lists</a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="fa-solid fa-user pe-2 pt-1 float-start"></i>Profile</Link>
            <a href="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="fa-solid fa-circle pe-2 pt-1 float-start"></i>More</a>
        </div>
    );
};
export default NavigationSidebar;