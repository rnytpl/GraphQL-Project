import AddClientModal from "@/components/Clients/AddClientModal";
import AddProjectModal from "@/components/Projects/AddProjectModal";
import Clients from "@/components/Clients/Clients";
import Projects from "@/components/Projects/Projects";

const HomePage = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>

      <Projects />
      <hr />
      <Clients />
    </>
  );
};
export default HomePage;
