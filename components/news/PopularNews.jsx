import { baseUrl } from '@/config/config'
import PropTypes from 'prop-types'
import Title from '../Title'
import SimpleDetailsNewCard from './item/SimpleDetailsNewCard'

const PopularNews = async ({ type }) => {
  const res = await fetch(`${baseUrl}/api/popular/news`, {
    next: {
      revalidate: 1,
    },
  })

  const { popularNews } = await res.json()

  return (
    <div className="w-full pb-8 mt-5">
      <div className="flex flex-col w-full gap-y-[14px]">
        <Title title="Popular News" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3">
          {popularNews.length > 0 &&
            popularNews.map((item, i) => (
              <SimpleDetailsNewCard
                type={type}
                news={item}
                key={i}
                height={230}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default PopularNews

PopularNews.propTypes = {
  type: PropTypes.string.isRequired,
}
