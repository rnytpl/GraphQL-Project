import { Link, useParams } from "react-router-dom";
import { GET_PROJECT } from "@/queries/projectQueries";
import { useQuery } from "@apollo/client";
import Spinner from "@/components/Spinner";
import ClientInfo from "@/components/Clients/ClientInfo";

const Project = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_PROJECT, { variables: { id } });
  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className="mt-3">
            Project Status: <strong>{data.project.status}</strong>
          </h5>
          <p className="lead">{data.project.status}</p>
          <ClientInfo client={data.project.client} />
        </div>
      )}
    </>
  );
  {
    !loading;
  }
};
export default Project;
