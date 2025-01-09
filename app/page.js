import HeadLines from '@/components/HeadLines'
import DetailsNews from '@/components/news/DetailsNews'
import DetailsNewsCol from '@/components/news/DetailsNewsCol'
import DetailsNewsRow from '@/components/news/DetailsNewsRow'
import SimpleNewsCard from '@/components/news/item/SimpleNewsCard'
import LatestNews from '@/components/news/LatestNews'
import PopularNews from '@/components/news/PopularNews'
import RecentNews from '@/components/news/Recentnews'
import Title from '@/components/Title'
import { baseUrl } from '@/config/config'

export default async function Home() {
  const newsData = await fetch(`${baseUrl}/api/all/news`, {
    next: {
      revalidate: 5,
    },
  })

  let news = await newsData?.json()

  news = news.news

  return (
    <div>
      <main>
        <HeadLines news={news} />
        <div className="bg-slate-100">
          <div className="px-4 md:px-8 py-8">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12">
                <LatestNews />
              </div>
              {news['Technology'] && (
                <div className="w-full lg:w-6/12 mt-5 lg:mt-5">
                  <div className="flex w-full flex-col gap-y-[14px] pl-0 lg:pl-2">
                    <Title title="Technology" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                      {news['Technology'].map((item, i) => {
                        if (i < 4) {
                          return <SimpleNewsCard item={item} key={i} />
                        }
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <PopularNews type="Popular News" />
            <div className="w-full">
              <div className="flex flex-wrap">
                {news['Sports'] && (
                  <div className="w-full lg:w-8/12">
                    <DetailsNewsRow
                      category="Sports"
                      type="details_news"
                      news={news['Sports']}
                    />
                    {news['Health'] && (
                      <DetailsNews category="Health" news={news['Health']} />
                    )}
                  </div>
                )}
                {news['Education'] && (
                  <div className="w-full lg:w-4/12">
                    <DetailsNewsCol
                      news={news['Education']}
                      category="Education"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-wrap">
                {news['Business'] && (
                  <div className="w-full lg:w-4/12">
                    <div className="pl-3">
                      <DetailsNewsCol
                        category="Business"
                        news={news['Business']}
                      />
                    </div>
                  </div>
                )}
                <div className="w-full lg:w-8/12">
                  <div className="pl-3">
                    {news['Travel'] && (
                      <DetailsNewsRow
                        category="Travel"
                        type="details_news"
                        news={news['Travel']}
                      />
                    )}
                    {news['International'] && (
                      <DetailsNews
                        category="International"
                        news={news['International']}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-wrap">
                {news['Technology'] && (
                  <div className="w-full lg:w-8/12">
                    <DetailsNewsRow
                      category="Technology"
                      news={news['Technology']}
                      type="details_news"
                    />
                  </div>
                )}
                <div className="w-full lg:w-4/12">
                  <div className="pl-3">
                    <RecentNews />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
