import { useEffect } from 'react'

export default function ProfileModal ({isModalOpen, setIsModalOpen}) {

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  function handlecloseModal(e) {
    e.stopPropagation();
    closeModal(e);
  }

  function closeModal (e) {
    e.stopPropagation();
    setIsModalOpen(false);
  }

  useEffect(() => {
    //
  }, [isModalOpen])

  return (
    <>

    {isModalOpen && (
      <div style={{ cursor: "default", position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 , zIndex: "1000" }} onClick={handlecloseModal}>
        <div
          style={{ cursor: "default", position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, background: 'rgba(0, 0, 0, 0.25)' }}
        />
        <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, overflowY: 'auto', zIndex: "1003" }}>
          <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div onClick={openModal} style={{ maxWidth: '20rem', transform: 'scale(1)', overflow: 'hidden', borderRadius: '1rem', background: 'white', padding: '1.5rem', textAlign: 'left', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', transition: 'all 0.3s' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#374151' }}>
                Payment successful
              </h3>
              <div style={{ marginTop: '0.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                  Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
                </p>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <button
                  type="button"
                  style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    borderRadius: '0.375rem',
                    border: '1px solid transparent',
                    background: '#EFF6FF',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#1E3A8A',
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'background-color 0.3s',
                  }}
                  onClick={handlecloseModal}
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}
