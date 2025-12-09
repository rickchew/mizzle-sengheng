import { useEffect, useState } from 'react'

const useScrollEvent = () => {
  const [scrollPassed, setScrollPassed] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
    setScrollPassed(((window.scrollY + window.innerHeight) * 100) / document.body.offsetHeight)
  }

  useEffect(() => {
    const handleEffect = () => {
      setScrollY(window.scrollY)
      setScrollHeight(document.body.offsetHeight)
    }
    
    handleEffect() // Set initial values
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    scrollPassed,
    scrollY,
    scrollHeight,
  }
}

export default useScrollEvent
