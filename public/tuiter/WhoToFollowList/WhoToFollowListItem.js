const WhoToFollowListItem = (who) => {
    return(`
      <li  class="list-group-item">
   <div class ="row">
    <div class="col-2">
       <img src=${who.avatarIcon}  class="wd-rounded-corners">
       </div>
       <div class="col-7">
       <span class="fw-bold text-white small">${who.userName}<i class="fa-solid fa-circle-check text-white ps-2"></i></span>
       <div class="mt-2 text-white small">@${who.handle}</div>
       </div>
       <div class="col-3 mt-1">
       <button type="button" class="btn btn-primary rounded-pill float-end">Follow</button>
       </div>
   </div>
   </li>
 `);
}
export default WhoToFollowListItem;