import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "@/mutations/mutationQueries";
import { GET_CLIENTS } from "@/queries/clientQueries";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
    // refetchQueries: [{ query: GET_CLIENTS }],
  });

  return (
    <tr key={client.id}>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm">
          <FaTrash onClick={deleteClient} />
        </button>
      </td>
    </tr>
  );
};
export default ClientRow;
