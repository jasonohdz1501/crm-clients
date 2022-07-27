import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import useGetApi from "../customHooks/useGetApi";

const ViewClient = () => {
  const params = useParams();
  const [client, loading] = useGetApi(
    `${import.meta.env.VITE_APP_API_URL}/${params.id}`
  );

  const { name, email, company, notes } = client;

  const clientInfo = [
    { id: 1, label: "Client: ", data: name },
    { id: 2, label: "Email: ", data: email },
    { id: 3, label: "Company: ", data: company },
    { id: 4, label: "Notes: ", data: notes },
  ];

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : Object.keys(client).length === 0 ? (
        <p>There's no results</p>
      ) : (
        <>
          <h1 className="font-black text-4xl text-blue-900">
            See client: {name}
          </h1>
          <p className="mt-3">Detailed client information</p>
          {clientInfo.map((c) => (
            <p key={c.id} className="text-2xl text-gray-500 mt-4">
              <span className=" uppercase font-bold">{c.data && c.label} </span>
              {c.data && c.data}
            </p>
          ))}
        </>
      )}
    </div>
  );
};

export default ViewClient;
