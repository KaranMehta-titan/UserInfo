import { useCallback, useContext, useEffect } from "react";
import UserInfoContext from "../appContext/userInfoContext";
import UserInfo from "./UserInfo";

const UserTable = () => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const fetchUserInfo = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUserInfo(data);
    } catch (err) {
      setUserInfo({ error: true });
    }
  }, [setUserInfo]);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);
  if (!userInfo) return <h1>Loading...!!</h1>;
  if (userInfo.error) return <h1>Fetching user info failed!!</h1>;
  else
    return (
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              NAME
            </th>
            <th scope="col" class="px-6 py-3">
              EMAIL
            </th>
            <th scope="col" class="px-6 py-3">
              COMPANY NAME
            </th>
            <th scope="col" class="px-6 py-3">
              ADDRESS
            </th>
            <th scope="col" class="px-6 py-3">
              PHONE
            </th>
            <th scope="col" class="px-6 py-3">
              WEBSITE
            </th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((info) => (
            <UserInfo key={info.id} info={info} />
          ))}
        </tbody>
      </table>
    );
};

export default UserTable;
