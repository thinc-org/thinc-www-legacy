import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

const Profile = ({ avatarURL, profileURL, username, imageAlt }) => (
  <>
    <style jsx>{`
      img {
        width: 30px;
        height: 30px;
      }
      #profile {
        transform: scale(1);
        opacity: 1;
        transition: 0.2s all cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      #profile:active {
        opacity: 0.5;
        transform: scale(0.95);
      }
    `}</style>
    <div className="inline-block m-2">
      <a className="no-underline" alt={username} title={username} href={profileURL} target="_blank">
        <div id="profile" className="bg-gray-100 text-gray-600 hover:bg-gray-200 px-4 py-3 rounded-lg">
          <div className="flex flex-row items-center">
            <img alt={imageAlt} className="rounded-full mr-3" src={avatarURL} />
            <p className="text-sm">
              <span className="opacity-25">@ </span>
              {username}
            </p>
          </div>
        </div>
      </a>
    </div>
  </>
)

const Members = () => {
  const [members, setMembers] = useState([])
  useEffect(() => {
    ;(async function fetchAPI() {
      const data = await (await fetch(`https://api.github.com/orgs/thinc-org/public_members`)).json()
      data.sort((a, b) => a.login.localeCompare(b.login))
      setMembers(data)
    })()
  }, [])
  const renderProfiles = () => {
    if (members.length === 0) {
      return <p className="text-xs tracking-widest text-gray-600">CHOTTO MATTE KUDASAI ~ {'<3'}</p>
    } else {
      return (
        <>
          {members.map((value, index) => {
            return (
              <Profile
                username={value.login}
                avatarURL={value.avatar_url + '&s=30'}
                profileURL={value.html_url}
                imageAlt={`member_$index`}
                key={index}
              />
            )
          })}
        </>
      )
    }
  }
  return (
    <section className="w-full bg-white py-20">
      <div className="container">
        <div className="mx-8">
          <div className="w-full flex items-center flex-col">
            <div className="w-full md:w-2/3 mb-20">
              <p className="text-4xl text-center font-headline font-semibold leading-none text-black mb-10">Members</p>
              <p className="text-base text-center font-normal leading-relaxed">
                <span className="font-bold">Thinc.</span> is community consisted of more than 100 members. All members
                displayed are public members from our GitHub organization.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <div className="inline-block text-center">{renderProfiles()}</div>
            </div>
            <a href="https://github.com/orgs/thinc-org/people" className="inline-block m-2">
              <div className="bg-gray-200 text-gray-600 hover:bg-gray-300 hover:underline px-4 py-3 rounded-lg">
                <div className="flex flex-row items-center">
                  <p className="text-sm">All Members -></p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Members
