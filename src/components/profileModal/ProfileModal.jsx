import { useEffect } from "react";
import "./ProfileModal.css";

export default function ProfileModal({ isModalOpen, setIsModalOpen }) {
  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  function handlecloseModal(e) {
    e.stopPropagation();
    closeModal(e);
  }

  function closeModal(e) {
    e.stopPropagation();
    setIsModalOpen(false);
  }

  useEffect(() => {
    //
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div
          style={{
            cursor: "default",
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: "1000",
          }}
          onClick={handlecloseModal}
        >
          <div
            style={{
              cursor: "default",
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              background: "rgba(0, 0, 0, 0.25)",
            }}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              overflowY: "auto",
              zIndex: "1003",
            }}
          >
            <div
              style={{
                display: "flex",
                minHeight: "100vh",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <div
                onClick={openModal}
                style={{
                  maxWidth: "70%",
                  transform: "scale(1)",
                  overflow: "hidden",
                  borderRadius: "1rem",
                  background: "white",
                  padding: "1.5rem",
                  textAlign: "left",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s",
                }}
              >
                <form className="inforForm">
                  <h3>Your info</h3>

                  <div className="input-Container">
                    <input
                      type="text"
                      name="firstName"
                      className="infoInput"
                      placeholder="First Name"
                    />

                    <input
                      type="text"
                      name="lastName" 
                      className="infoInput"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="input-Container">
                    <input
                        type="text"
                        className="infoInput"
                        name="worksAt" 
                        placeholder="Works at"
                    />
                  </div>

                  <div className="input-Container">
                      <input
                        type="text"
                        className="infoInput"
                        name="livesIn" 
                        placeholder="Lives in"
                      />
                      <input
                        type="text"
                        className="infoInput"
                        name="country" 
                        placeholder="Country"
                      />
                  </div>

                  <div className="input-Container">
                    <input
                        type="text"
                        className="infoInput"
                        name="relationship" 
                        placeholder="Relationship Status"
                    />
                  </div>

                  <div>
                    Profile Image
                    <input type="file" name="profileImg" />
                    Cover Image
                    <input type="file" name="coverImg" />
                  </div>

                  <div className="infoButton">
                    <button className="button">Update</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
