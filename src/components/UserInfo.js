import { useState } from "react";

const UserInfo = ({ info }) => {
  const [collapse, toggleCollapse] = useState(true);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td>{info.id}</td>
      <td>{info.name}</td>
      <td>{info.email}</td>
      <td>{info.company.name}</td>
      {!collapse ? (
        <>
          <td>{info.address.street}</td>
          <td>{info.phone}</td>
          <td>{info.website}</td>
        </>
      ) : (
        <>
          <td></td>
          <td></td>
          <td></td>
        </>
      )}
      <td>
        {
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-4 rounded-full"
            onClick={() => toggleCollapse(!collapse)}
          >
            {collapse ? "EXPAND TO SEE MORE INFO" : "COLLAPSE"}
          </button>
        }
      </td>
    </tr>
  );
};

export default UserInfo;
