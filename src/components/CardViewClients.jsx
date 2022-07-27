import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";
import ViewIcon from "./icons/viewIcon";

const CardViewClients = ({ client, handleDelete }) => {
  const { name, company, email, telephone, id } = client;
  const navigate = useNavigate();
  return (
    <div className='border border-slate-200 shadow-xl p-3 mb-10 rounded-xl flex gap-4 items-center justify-between'>
      <div>
        <div className='capitalize font-medium text-sm'>{name}</div>
        <div className='text-gray-500 text-sm font-normal pt-1'>
          <p> {email}</p>
          <p> {telephone}</p>
        </div>
        <div className='bg-sky-500 py-1 px-3 rounded-full text-xs  text-white font-bold mt-2'>
          {company}
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <button type='button' onClick={() => navigate(`${id}`)}>
          <ViewIcon classes='h-4 w-4 text-gray-500' />
        </button>
        <button type='button' onClick={() => navigate(`edit/${id}`)}>
          <EditIcon classes='h-4 w-4 text-gray-500' />
        </button>
        <button type='button' onClick={() => handleDelete(id)}>
          <DeleteIcon classes='h-4 w-4 text-gray-500' />
        </button>
      </div>
    </div>
  );
};

export default CardViewClients;
