import { useState } from "react";
import "./App.css";
import Modal from "react-modal";

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

Modal.setAppElement("#root");

function App() {
  const [history, setHistory] = useState<string[]>([]);
  const [ticket, setTicket] = useState<string>("");
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "black";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function handleChange(e) {
    setTicket(e.target.value);
  }
  function addTicket() {
    setHistory([ticket, ...history]);
  }
  return (
    <>
      <h1>Ticket System</h1>
      <div className="card">
        <div className="submit">
          <h2>Home Page</h2>
          <button onClick={openModal}>Add Ticket</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="modal-content">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
              <input
                type="text"
                placeholder="Ticket"
                onChange={handleChange}
              ></input>
              <div className="button-holder">
                <button onClick={addTicket}>Add</button>
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
          </Modal>
        </div>
        <div className="history-section">
          <div className="container">
            {history.length === 0 ? (
              <p>No Tickets</p>
            ) : (
              <>
                {history.map((old) => {
                  return <p>{old}</p>;
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
