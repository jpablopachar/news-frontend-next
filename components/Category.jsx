import { baseUrl } from '@/config/config'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Category = async ({ titleStyle }) => {
  const res = await fetch(`${baseUrl}/api/category/all`, {
    next: {
      revalidate: 5,
    },
  })

  const { categories } = await res.json()

  return (
    <div className="w-full flex flex-col gap-y-[14px]">
      <div
        className={`text-xl font-bold ${titleStyle} relative before:absolute before:w-[4px] before:bg-[#5271ff] before:h-full before:-left-0 pl-3`}
      >
        Category
      </div>
      <div
        className={`flex flex-col justify-start items-start text-sm gap-y-3 ${titleStyle} pt-1 `}
      >
        {categories &&
          categories.length > 0 &&
          categories.map((item, i) => (
            <li className="list-none font-semibold" key={i}>
              <Link href={`/news/category/${item.category}`}>
                {' '}
                {item.category} ({item.count})
              </Link>
            </li>
          ))}
      </div>
    </div>
  )
}

export default Category

Category.propTypes = {
  titleStyle: PropTypes.string,
}