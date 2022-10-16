import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {

    return(`
    <ul class="list-group lh-1">
        <li class="list-group-item fw-bolder fs-12">Who to follow</li>
      ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
         }
      </ul>
   `);
}
export default WhoToFollowList;