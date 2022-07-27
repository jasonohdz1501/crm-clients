import LoginForm from "../components/LoginForm";

const NewClient = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900"> New Client</h1>
      <p className="mt-3">Fill out next form in order to add a new client</p>
      <LoginForm />
    </>
  );
};

export default NewClient;
