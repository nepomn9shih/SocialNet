const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
        return {
          ...state,
          users: action.users
        };
      }
    case SET_CURRENT_PAGE: {
        return {
          ...state,
          currentPage: action.currentPage
        };
      }
      case SET_TOTAL_USERS_COUNT: {
        return {
          ...state,
          totalUsersCount: action.totalUsersCount
        };
      }
      case TOGGLE_IS_FETCHING: {
        return {
          ...state,
          isFetching: action.isFetching
        };
      }
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
        return {
          ...state,
          followingInProgress: action.isFetching 
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
        };
      }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId});

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

export const setIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });

export const setFollowingInProgressAC = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export default usersReducer;
