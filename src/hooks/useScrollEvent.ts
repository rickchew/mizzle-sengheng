import { useEffect, useState } from 'react'

const useScrollEvent = () => {
  const [scrollPassed, setScrollPassed] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    // Read offsetHeight once; update only on resize — not on every scroll
    let bodyHeight = document.body.offsetHeight

    const handleScroll = () => {
      const y = window.scrollY
      setScrollY(y)
      setScrollPassed(((y + window.innerHeight) * 100) / bodyHeight)
    }

    const handleResize = () => {
      bodyHeight = document.body.offsetHeight
      setScrollHeight(bodyHeight)
    }

    setScrollY(window.scrollY)
    setScrollHeight(bodyHeight)

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    scrollPassed,
    scrollY,
    scrollHeight,
  }
}

export default useScrollEvent
