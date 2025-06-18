import { useEffect, useState } from "react"

export function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false)

  useEffect(() => {
    const check = () => setIsLarge(window.innerWidth >= 1068) // md breakpoint
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return isLarge
}
