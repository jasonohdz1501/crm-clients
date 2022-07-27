import { useNavigate } from "react-router-dom";
import BtnAction from "./BtnAction";

const Client = ({ client, handleDelete }) => {
  const { name, telephone, email, company, id } = client;

  const navigate = useNavigate();
  return (
    <>
      <tr className='border hover:bg-gray-50'>
        <td className='p-3'>{name}</td>
        <td className='p-3'>
          <p>
            <span className='text-gray-800 uppercase font-bold'>Email: </span>
            {email}
          </p>
          <p>
            <span className='text-gray-800 uppercase font-bold'>Tel: </span>
            {telephone}
          </p>
        </td>
        <td className='p-3'>{company}</td>
        <td className='p-3'>
          <BtnAction
            classes='hover:bg-gray-200 hover:text-sky-900'
            onClick={() => navigate(`${id}`)}
            title='Details'
          />
          <BtnAction
            classes='hover:bg-gray-200 hover:text-sky-900'
            onClick={() => navigate(`edit/${id}`)}
            title='Edit'
          />
          <BtnAction
            classes='hover:bg-red-200 hover:text-red-900'
            onClick={() => handleDelete(id)}
            title='Delete'
          />
        </td>
      </tr>
    </>
  );
};

export default Client;
