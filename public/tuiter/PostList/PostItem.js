const PostSummaryItem = (post) => {
    return(`
        <div class="row border-bottom border-light p-2 rounded-top">
            <div class="col-1 wd-author-avatar">
                <img src=${post.avatar} class="rounded-circle">
            </div>
            <section class="col-11 ps-4">
              <div class="row position-relative">
                <div class="col-11">
                  <span class="text-white fw-bold small">${post.userName}<i class="fa-solid fa-circle-check text-white ps-2"></i></span>
                  <span class="small text-secondary">${post.handle}</span>
                  <span class="small text-secondary">- ${post.time}</span>
                </div>
                <div class="float-end col-1"><i class="fa-solid fa-ellipsis"></i></div>
              </div>
              <p class="small">${post.message}</p>
              <div class="border border-light rounded-bottom rounded-top">
                <img src=${post.image} class="w-100 rounded-bottom rounded-top border-bottom border-light">
                <div> 
                  <h5 class="pt-2 small fw-bold">${post.contentTitle}</h5>
                  <div class="small text-secondary">${post.content}</div>
                  <div>${hasLink(post.link)}</div>
                </div>
              </div>
              
              <div class="row pt-2 pb-2">
                <div class=" col-3 align-content-center text-secondary">
                  <a href="#" class="text-decoration-none text-secondary small">
                  <i class="fa-regular fa-comment pe-2 text-decoration-none text-secondary fa-1x"></i>${post.numComments}</a>
                </div>
                <div class="col-3 align-content-center text-secondary">
                  <a href="#" class="text-decoration-none text-secondary small">
                  <i class="fa-solid fa-retweet pe-2 text-decoration-none text-secondary fa-1x"></i>${post.numRetweets}</a>
                </div>
                <div class="col-3  text-decoration-none text-secondary">
                  <a href="#" class="text-decoration-none text-secondary small">
                  <i class="fa-solid fa-heart pe-2 text-secondary fa-1x"></i>${post.numLikes}</a>
                </div>
                <div class="col-3 text-decoration-none text-secondary">
                  <a href="#"><i class="fa-solid fa-arrow-up-from-bracket pe-2 text-secondary fa-1x"></i></a>
                </div>
            </div>
          </div>
 `);
}
export default PostSummaryItem;

const hasLink = (link) => {
    return (link !== "" ? `
           <div class="small text-secondary">
             <i class="fa-solid fa-link mb-2"></i>${link}
           </div>` : ` `
    );
}
