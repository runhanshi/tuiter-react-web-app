const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
    <div class="row mt-2">
        <div class="col-10">
            <div class="row ">
                <span class="text-secondary ps-2 small">
                    ${post.topic}
                </span>
                <div class="col-11 ms-0 ps-0 border-start-0">
                    <span class="text-white fw-bolder ps-2 mt-1">${post.userName}</span>
                    <i class="fa-solid fa-circle-check text-white mt-1"></i>
                    <span class="text-secondary"> - ${post.time}</span>
                </div>
            </div>
            <div class="row text-white fw-bolder ps-2 mt-2">
                ${post.title}
            </div>
        </div>
        <div class="col-2 align-self-center float-right">
            <img src=${post.image} class="rounded-3 w-100"/>
        </div>
    </div>
    </li>
 `);
}
export default PostSummaryItem;

