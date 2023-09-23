import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./authContext";
import useAxios from "../utils/useAxios";

const ProfileContext = createContext();
export default ProfileContext;

export const ProfileProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  let [profile, setProfile] = useState(null);
  let api = useAxios();

  useEffect(() => {
    let getProfile = async () => {
      let response = await api.get(`/api/profile/${user.user_id}/`);
      if (response.status === 200) {
        setProfile(response.data);
      }
    };
    getProfile();
  }, [setProfile]);

  let contextData = {
    profile: profile,
    setProfile: setProfile,
  };

  return (
    <ProfileContext.Provider value={contextData}>
      {children}
    </ProfileContext.Provider>
  );
};
