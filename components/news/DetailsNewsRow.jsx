import PropTypes from 'prop-types'
import Title from '../Title'
import NewsCard from './item/NewsCard'
import SimpleDetailsNewCard from './item/SimpleDetailsNewCard'

const DetailsNewsRow = ({ news, category, type }) => {
  console.log(news);

  return (
    <div className="w-full flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md">
      <Title title={category} />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <SimpleDetailsNewCard news={news[0]} type={type} height={300} />
        <div className="grid grid-cols-1 gap-2">
          {news.map((item, i) => {
            if (i < 4) {
              return <NewsCard item={item} key={i} />
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default DetailsNewsRow

DetailsNewsRow.propTypes = {
  news: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
