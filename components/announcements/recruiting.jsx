const Recruiting = () => (
  <section className="w-full bg-pink-100 py-20">
    <div className="container">
      <div className="mx-8">
        <div className="w-full flex justify-center flex-row">
          <div className="w-full flex flex-col items-center md:w-2/3">
            <p className="text-4xl text-center font-headline font-semibold leading-none text-black mb-10">
              Hello, CU105
            </p>
            <p className="text-base text-center font-normal leading-loose mb-10">
              Welcome to <span className="font-bold">Thinc.</span>! Please join
              our Facebook Group for updates on events and activities.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fb.com/groups/794863941175364"
              className="bg-pink-600 px-4 py-2 rounded text-white text-xs tracking-widest uppercase mb-5"
            >
              JOIN <span className="font-bold">FACEBOOK GROUP</span>
            </a>
            <p className="text-sm text-gray-600 text-center font-normal leading-loose">
              or search for "<span className="font-bold">Thinc. 9th Gen</span>"
              in your FB application!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
// null

export default Recruiting;
