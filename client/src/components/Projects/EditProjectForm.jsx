import { UPDATE_PROJECT } from "@/mutations/projectMutations";
import { GET_PROJECTS } from "@/queries/projectQueries";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FaEdit, FaUser } from "react-icons/fa";

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState(project.status);
  console.log(description);
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status,
    },
    refetchQueries: [{ query: GET_PROJECTS, variables: { id: project.id } }],
    // update(cache, { data: { updateProject } }) {
    //   const { projects } = cache.readQuery({ query: GET_PROJECTS });
    //   cache.writeQuery({
    //     query: GET_PROJECTS,
    //     data: {
    //       projects: projects.map((project) =>
    //         project.id === updateProject.id ? updateProject : project
    //       ),
    //     },
    //   });
    // },
  });
  console.log(status);
  const onSubmit = (e) => {
    e.preventDefault();
    updateProject({ name, description, status });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-light me-3"
        data-bs-toggle="modal"
        data-bs-target="#editProject"
      >
        <FaEdit className="icon" /> Edit Project
      </button>
      <form onSubmit={onSubmit}>
        <div
          className="modal fade"
          id="editProject"
          aria-labelledby="editProjectLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="editProjectLabel">
                  Add Client
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
                  type="textarea"
                  className="form-control"
                ></textarea>
                {/* Status */}
                <label className="form-label">Status:</label>
                <select
                  id="status"
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                  className="form-select"
                  selected={status}
                >
                  <option value="new">Not started</option>
                  <option value="progress">In Progress</option>
                  <option value="completed">Completed</option>
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
export default EditProjectForm;
