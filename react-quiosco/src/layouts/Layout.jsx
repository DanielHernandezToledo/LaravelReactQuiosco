import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Sidebar from "../components/Sidebar";
import Resumen from "../components/Resumen";
import useQuiosco from "../hooks/useQuiosco";
import ModalProducto from "../components/ModalProducto";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root');

export default function Layout() {

  const { modal } = useQuiosco()

  return (
    <>
      <div className="md:flex">
        <Sidebar />
        <div className="flex-1 h-screen p-3 overflow-y-scroll bg-gray-100">
          <Outlet />
        </div>
        <Resumen />
      </div>


        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <ModalProducto />
        </Modal>

        <ToastContainer/>
    </>
  )
}
