import { IndexContentContainer } from 'components/pages/index/IndexContentContainer';
import styles from 'styles/index.module.scss';
import type { NextPage } from 'next';
import { IndexNavbar } from 'components/pages/index/IndexNavbar';

const Home: NextPage = () => {
  return (
    <div>
      <title>Genesis</title>

      <main>
        <IndexNavbar />

        <IndexContentContainer className="py-36">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold leading-[4rem] text-blueGray">
              Quickstart your project ideas.
            </h1>

            <h2 className="mt-6 text-gray-600 leading-[2rem]">
              Genesis gives you the power to quickly get started on your ideas
              without all the boilerplate.
            </h2>

            <div className="flex flex-row mt-10 items-center">
              <button className="mr-6 shadow-lg px-8 py-4 rounded-full bg-blueB text-white text-sm font-semibold hover:bg-blueC transition">
                Bring your idea to life
              </button>

              <h2 className="uppercase text-gray-400 text-xs font-semibold">
                NO ACCOUNT NEEDED
              </h2>
            </div>
          </div>
        </IndexContentContainer>

        <IndexContentContainer usePadding verticalPadding>
          {({ paddingStyles }) => (
            <div
              style={paddingStyles}
              className="shadow-2xl rounded-2xl bg-[#f9f5ff] text-black flex flex-row h-max space-x-10"
            >
              <div className="flex-1">
                <h1 className="text-4xl font-bold max-w-md leading-[3.25rem]">
                  Generate an ExpressJS project template
                </h1>

                <h2 className="my-8 leading-[2rem] text-gray-700">
                  Generate all the basic API requirements for an ExpressJS
                  application without the setup and boilerplate.
                </h2>

                <button className="px-10 py-4 bg-fuchsia-300 rounded-full text-black text-xs transition hover:bg-fuchsia-400">
                  Explore an example
                </button>
              </div>

              <div className="flex flex-col flex-1 items-center">
                <div className="w-max">
                  <h1 className="font-semibold font-mono mb-2">User.ts</h1>

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/code/express-example.svg" alt="" />
                </div>
              </div>
            </div>
          )}
        </IndexContentContainer>

        <IndexContentContainer className="text-black">
          <h1 className="text-3xl font-semibold">Logistic Container</h1>
        </IndexContentContainer>
      </main>
    </div>
  );
};

export default Home;
