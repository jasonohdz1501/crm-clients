import { useNavigate, useParams } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import useGetApi from "../customHooks/useGetApi";

const EditClient = () => {
  const params = useParams();
  const [client, loading] = useGetApi(
    `${import.meta.env.VITE_APP_API_URL}/${params.id}`
  );
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900"> Edit Client</h1>
      <p className="mt-3">Edit your client</p>
      {client?.name ? (
        <LoginForm client={client} loading={loading} />
      ) : (
        <div className="bg-white shadow-md p-10 mt-4 rounded-md font-bold text-center uppercase block">
          <p>Theres no valid cllient</p>
          <button
            type="button"
            className="bg-blue-700 hover:bg-blue-800 text-white p-4 mt-10 cursor-pointer"
            onClick={() => navigate("/clients")}
          >
            Return to clients
          </button>
        </div>
      )}
    </>
  );
};

export default EditClient;
