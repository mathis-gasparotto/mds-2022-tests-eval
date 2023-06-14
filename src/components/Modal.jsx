import { useEffect } from 'react'

export default function Modal({ onClose, open, children }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal-bg" onClick={() => onClose()}></div>
          <div className="modal-content">{children}</div>
        </div>
      )}
    </>
  )
}
