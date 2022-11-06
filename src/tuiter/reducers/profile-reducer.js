import { createSlice } from "@reduxjs/toolkit";

const profile =   {
    firstName: "Rafael",
    lastName: "Nadal",
    handle: "@rafaelnadal",
    profilePicture: "../images/nadalicon.webp",
    bannerPicture: "../images/banner.png",
    bio: "Rafael Nadal Parera (Catalan: [rəf(ə)ˈɛl nəˈðal pəˈɾeɾə], Spanish: [rafaˈel naˈðal paˈɾeɾa];[4] born 3 June 1986) is a Spanish professional tennis player. He is currently ranked world No. 2 in singles by the Association of Tennis Professionals (ATP).[1] He has been ranked world No. 1 for 209 weeks, and has finished as the year-end No. 1 five times. Nadal has won an all-time record 22 Grand Slam men's singles titles, including a record 14 French Open titles. He has won 92 ATP singles titles, including 36 Masters titles, with 63 of these on clay courts. Nadal is one of only two men to complete the Career Golden Slam in singles.[b] His 81 consecutive wins on clay is the longest single-surface win streak in the Open Era.",
    website: "https://en.wikipedia.org/wiki/Rafael_Nadal",
    location: "NewYorkCity, US",
    dateOfBirth: "06/03/1986",
    dateJoined: "11/2022",
    numberOfTweets: "123",
    followingCount: "345",
    followersCount: "456k"
}


const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            return action.payload;
        },
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;