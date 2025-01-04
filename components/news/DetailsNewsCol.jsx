import PropTypes from 'prop-types'
import Title from '../Title'
import NewsCard from './item/NewsCard'
import SimpleDetailsNewCard from './item/SimpleDetailsNewCard'

const DetailsNewsCol = ({ news, category }) => {
  return (
    <div className="w-full flex flex-col gap-[14px] pl-2">
      <Title title={category} />
      <div className="grid grid-cols-1 gap-y-6">
        <SimpleDetailsNewCard news={news[0]} type="details_news" height={300} />
      </div>
      <div className="grid grid-cols-1 gap-y-[8px]">
        {news.map((item, i) => {
          if (i < 4) {
            return <NewsCard item={item} key={i} />
          }
        })}
      </div>
    </div>
  )
}

export default DetailsNewsCol

DetailsNewsCol.propTypes = {
  news: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
}
