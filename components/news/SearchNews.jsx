import { baseUrl } from '@/config/config'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import SimpleDetailsNewCard from './item/SimpleDetailsNewCard'

const SearchNews = () => {
  const [news, setNews] = useState([])

  const searchValue = useSearchParams()

  const value = searchValue.get('value')

  const getNews = async () => {
    if (!value) return

    try {
      const res = await fetch(`${baseUrl}/api/search/news?value=${value}`)

      const { news } = await res.json()

      setNews(news)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNews()
  }, [value])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {news && news.length > 0 ? (
        news.map((item, i) => (
          <SimpleDetailsNewCard
            news={item}
            key={i}
            type="details_news"
            height={200}
          />
        ))
      ) : (
        <p>No News Found </p>
      )}
    </div>
  )
}

export default SearchNews
