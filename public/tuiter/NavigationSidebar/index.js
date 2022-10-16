const NavigationSidebar = (active) => {
    return(`
    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action ">
                    <i class="fab fa-twitter"></i></a>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-house-chimney pe-2 pt-1 float-start"></i>
                    <span class="d-none d-xl-block ${isActive("Home", active)}">Home</span>
                </a>
                <a href="../explore/index.html" class="list-group-item list-group-item-action  ${isActive("Explore", active)}">
                    <i class="fa-solid fa-hashtag pe-2 pt-1 float-start"></i>
                    <span class="d-none d-xl-block">Explore</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${isActive("Notifications", active)}">
                    <i class="fa-solid fa-bell pe-2 pt-1 float-start"></i>
                    <span class="d-none d-xl-block">Notifications</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${isActive("Messages", active)}">
                    <i class="fa-solid fa-envelope pe-2 pt-1 float-start"></i>
                    <span class="d-none d-xl-block">Messages</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${isActive("Bookmarks", active)}">
                    <i class="fa-solid fa-bookmark pe-2 pt-1 float-start"></i>
                    <span class="d-none d-xl-block">Bookmarks</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${isActive("List", active)}">
                    <i class="fa-solid fa-list-ul pe-2 pt-1 float-start"></i>
                    <span class="d-none d-xl-block">List</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${isActive("Profile", active)}">
                    <i class="fa-solid fa-user pe-2 pt-1 float-start"></i>
                    <span class="d-none d-xl-block">Profile</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action rounded-bottom">
                    <i class="fa-solid fa-circle pe-2 pt-1 float-start"></i>
                    <span class="d-none d-xl-block">More</span>
                </a>
                <button class="btn btn-primary mt-2 rounded-pill w-100" type="submit">Tweet</button>
                </div>
             
 `);
}
export default NavigationSidebar;

const isActive = (navItem, active) => {
    return (navItem === active ? `active` : null)
}