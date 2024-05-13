import React, { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, timeRemaining, onResult },
  ref
) {
  const dialog = useRef()
  const userLost = timeRemaining <= 0
  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2)
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })
  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stoppped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onResult}>
        <button>Close</button>
      </form>
    </dialog>
  )
})
export default ResultModal
