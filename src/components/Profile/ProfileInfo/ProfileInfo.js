import React from "react";
import Preloader from "../../Preloader/Preloader";
import RandomAvatar from "../../RandomAvatar/RandomAvatar";
import FollowUnfollowButton from "../../Users/FollowUnfollowButton";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileAvatarWithName from "./ProfileAvatarWithName";
import ProfileContacts from "./ProfileContacts";
import "./ProfileInfo.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  console.log(props)
  if (!props.profile) {
    return <Preloader />;
  }
  const chosenUser = props.users.filter(user => user.id === props.profile.userId)
  console.log(props.users)
  console.log(chosenUser)
  return (
    <div>
      <div className="card bg-dark m-3">
        <div className="row no-gutters">
          <div className="col-4">
            <ProfileAvatarWithName profile={props.profile}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            {chosenUser[0] 
            ? <div className="mx-2 mb-2">
                <FollowUnfollowButton 
                  user={chosenUser[0]} 
                  followingInProgress={props.followingInProgress} 
                  unfollow={props.unfollow} 
                  follow={props.follow}
                />
              </div>
            : ""}
          </div>
          <div className="col-8">
            <ProfileAboutMe profile={props.profile}/>
            <ProfileContacts profile={props.profile}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
