import { useNavigate } from "react-router-dom";
import CardViewClients from "../components/CardViewClients";
import Client from "../components/Client";
import useGetApi from "../customHooks/useGetApi";

const Home = () => {
  const [clients, loading] = useGetApi(import.meta.env.VITE_APP_API_URL);
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    await response.json();
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <div>
      <h1 className='font-black text-4xl text-blue-900'> Clients</h1>
      <p className='mt-3'>Manage your clients</p>
      {clients.length === 0 ? (
        <div
          className='bg-white text-center font-bold 
        p-10 mt-2 uppercase shadow-md rounded-md'
        >
          There are no results
          <button
            className='bg-blue-500 hover:bg-blue-600
            block w-1/2 text-white p-2 text-sm mt-3 mx-auto uppercase'
            onClick={() => navigate("new")}
          >
            Add new Client
          </button>
        </div>
      ) : (
        <>
          <div className='hidden lg:block w-full'>
            <table className=' mt-5 table-auto shadow bg-white w-full'>
              <thead>
                <tr className='bg-blue-900 text-white'>
                  <th className='p-2'>Name</th>
                  <th className='p-2'>Contact</th>
                  <th className='p-2'>Company</th>
                  <th className='p-2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients &&
                  clients.map((client) => (
                    <Client
                      key={client.id}
                      client={client}
                      handleDelete={handleDelete}
                    />
                  ))}
              </tbody>
            </table>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:hidden mt-5'>
            {clients.length > 0 &&
              clients.map((client) => (
                <CardViewClients
                  key={client.id}
                  handleDelete={handleDelete}
                  client={client}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
