import { useState } from "react";
import { FaList, FaUser } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROJECT } from "@/mutations/projectMutations";
import { GET_PROJECTS } from "@/queries/projectQueries";
import { GET_CLIENTS } from "@/queries/clientQueries";
import Spinner from "../Spinner";

const AddProjectModal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("new");

  const { data, loading, error } = useQuery(GET_CLIENTS);

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status, clientId },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: projects.concat([addProject]) },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addProject({ name, description, status });
    setName("");
    setDescription("");
    setStatus("");
  };

  if (loading) return <Spinner />;

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addProject"
      >
        <div className="d-flex align-items-center">
          <FaList className="icon" />
          <div>New Project</div>
        </div>
      </button>
      <form onSubmit={onSubmit}>
        <div
          className="modal fade"
          id="addProject"
          aria-labelledby="addProjectLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="addProjectLabel">
                  Add Project
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Name */}
                <label className="form-label">Name:</label>
                <input
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  className="form-control"
                />
                {/* Description */}
                <label className="form-label">Description:</label>
                <textarea
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  type="description"
                  className="form-control"
                ></textarea>
                {/* Status */}
                <label htmlFor="status" className="form-label">
                  Status:
                </label>
                <select
                  id="status"
                  key="status"
                  className="form-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="new">Not Started</option>
                  <option value="progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                <label htmlFor="client" className="form-label">
                  Client:
                </label>
                <select
                  id="client"
                  key="client"
                  style={{ display: "block", width: "100%" }}
                  className="form-select"
                  onChange={(e) => setClientId(e.target.value)}
                >
                  {data.clients.map((client) => (
                    <>
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    </>
                  ))}
                </select>
                <button
                  type="submit"
                  className="btn btn-secondary btn-lg mt-2"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default AddProjectModal;
