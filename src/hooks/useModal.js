import { useState } from 'react'

const useModal = () => {
  const [isVisible, setModal] = useState(false)

  const toggle = () => {
    setModal(!isVisible)
  }


  return {
    isVisible,
    toggle
  }
};

export default useModal
