import { useNavigate } from "react-router-dom";

const Client = ({ client, handleDelete }) => {
  const { name, telephone, email, company, id } = client;

  const navigate = useNavigate();
  return (
    <>
      <tr className="border hover:bg-gray-50">
        <td className="p-3">{name}</td>
        <td className="p-3">
          <p>
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {email}
          </p>
          <p>
            <span className="text-gray-800 uppercase font-bold">Tel: </span>
            {telephone}
          </p>
        </td>
        <td className="p-3">{company}</td>
        <td className="p-3">
          <button
            className={`bg-yellow-500 hover:bg-yellow-600
            block w-full text-white p-2 text-sm mt-3`}
            onClick={() => navigate(`${id}`)}
          >
            View
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-600
            block w-full text-white p-2 text-sm mt-3`}
            onClick={() => navigate(`edit/${id}`)}
          >
            Edit
          </button>
          <button
            className={`bg-red-500 hover:bg-red-600
            block w-full text-white p-2 text-sm mt-3`}
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Client;
