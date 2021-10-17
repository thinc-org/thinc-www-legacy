import format from 'date-fns/format'

import { MediumFeed } from '@/types/medium'

import NavigationButton from '../navigation-button'

interface MediumProps {
  feeds: MediumFeed[]
}

const Medium: React.FC<MediumProps> = ({ feeds }) => {
  const mediumFeed = feeds.map((feed) => {
    const creatorFirstLetter = feed.creator[0]
    const date = format(new Date(feed.date), 'MMM dd, yyyy')
    return (
      <div key={feed.link}>
        <style jsx>{`
          .medium-article-img {
            max-width: 330px;
            height: 174px;
            background-size: cover;
            background-position: center;
          }
          @media only screen and (max-width: 768px) {
            .medium-article-img {
              max-width: 100vw;
            }
          }
        `}</style>
        {feed.imgSrc ? (
          <a
            href={feed.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border flex medium-article-img"
            style={{
              backgroundImage: `url(${feed.imgSrc})`,
            }}
          />
        ) : (
          <a
            href={feed.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border flex medium-article-img bg-gray-700 items-center justify-center text-white text-2xl"
          >
            <span>Thinc.</span>
          </a>
        )}
        <a href={feed.link} target="_blank" rel="noopener noreferrer">
          <h6 className="mt-4 text-2xl font-bold ">{feed.title}</h6>
        </a>
        <div className="text-gray-600 text-lg mt-2 break-normal">{feed.text}</div>
        <div className="flex items-center mt-5">
          <div
            className="rounded-full border bg-teal-500 text-white text-center p-1"
            style={{ width: '36px', height: '36px' }}
          >
            {creatorFirstLetter}
          </div>
          <div className="ml-2 flex flex-col">
            <p className="text-yellow-800">{feed.creator}</p>
            <p className="text-gray-600 text-sm">{date}</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <style jsx>{`
        .medium-article-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          column-gap: 24px;
          row-gap: 45px;
        }
        @media only screen and (max-width: 768px) {
          .medium-article-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <section className="w-full bg-white py-20">
        <div className="container">
          <div className="mx-8">
            <div className="w-full flex items-center flex-col">
              <div className="w-full md:w-2/3 mb-20">
                <p className="text-4xl text-center font-headline font-semibold leading-none text-black mb-10">Medium</p>
                <div className="flex flex-col bg-gray-100 p-10 rounded-lg">
                  <div className="flex flex-row items-center">
                    <img
                      width="36"
                      height="36"
                      src="https://cdn-images-1.medium.com/fit/c/50/50/1*8ddLbmSK4fwLH5bVcO7ITQ.jpeg"
                      alt="Thinc. medium logo"
                    />
                    <a href="https://medium.com/thinc-org" target="_blank" rel="noopener noreferrer">
                      <h6 className="text-gray-600 text-lg ml-2">Thinc.</h6>
                    </a>
                  </div>
                  <p className="text-gray-600 text-base font-normal leading-relaxed my-4">
                    Thinc. is a student run organization whose aim is to incubate students for making impact to society
                    using IT development.
                  </p>
                  <a href="https://medium.com/thinc-org/about" target="_blank" rel="noopener noreferrer">
                    <h6 className="text-yellow-800">More information</h6>
                  </a>
                </div>
              </div>
              <h6 className="text-2xl self-start font-bold">Publications</h6>
              <div className="medium-article-container mt-4">{mediumFeed}</div>
              <a
                href="https://medium.com/thinc-org"
                className="inline-block mx-2 mt-12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NavigationButton>All Publications {'->'}</NavigationButton>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Medium
