import { useState, useEffect } from 'react'

export const useFetchData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch(url)
      .then(res => res.json())
      .then(response => {
        setData(response)
        setLoading(false)
      })
  }, [url])
  return { data, loading }
}
