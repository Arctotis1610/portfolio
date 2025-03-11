import "./App.css";
import MusicPlayer from "./components/MusicPlayer";
import AgeDisplay from "./components/AgeDisplay";
import DarkMode from "./components/DarkMode";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="text-gray-700 border-b border-gray-200 dark:border-gray-700 fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50">
          <div className="container flex mx-auto p-5 flex-col md:flex-row items-center justify-between">
            <a
              href="#"
              className="font-medium text-gray-900 dark:text-white mb-4 md:mb-0"
            >
              <span className="text-xl ml-3 font-bold">Hiroto Murakami</span>
            </a>

            {/* ナビゲーション + ナイトモード切り替えボタン */}
            <div className="flex items-center space-x-6">
              <nav className="text-base">
                <a
                  href="#home"
                  className="mr-5 hover:text-blue-500 duration-300 dark:text-white"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="mr-5 hover:text-blue-500 duration-300 dark:text-white"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="hover:text-blue-500 duration-300 dark:text-white"
                >
                  Skills
                </a>
              </nav>
              <DarkMode />
            </div>
          </div>
        </header>

        <section className="text-gray-700 pt-20" id="home">
          <div className="flex container mx-auto py-20 px-5 flex-col items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 relative overflow-hidden rounded-full mb-8">
              <img
                src="./img/icon.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white aspect-square"
              />
            </div>
            <div>
              <MusicPlayer />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hiroto Murakami
              </h1>
              <p className="text-2xl md:text-3xl text-blue-500 font-bold mb-8">
                Frontend Engineer
              </p>
              <a
                href="https://github.com/Arctotis1610"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 duration-300 text-lg"
              >
                <FaGithub className="w-6 h-6 mr-2" />
                GitHub
              </a>

              {/* <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
              <DarkMode />
            </div> */}
            </div>
          </div>
        </section>

        <section
          className="text-gray-700 dark:text-gray-300 py-20 bg-gray-50 dark:bg-gray-800"
          id="about"
        >
          <div className="container mx-auto px-5">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              About Me
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-500">
                    Education & Career
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-24 flex-shrink-0 text-gray-500 dark:text-gray-400">
                        2001.3.3
                      </div>
                      <div>
                        <p className="font-medium dark:text-white">誕生</p>
                        <div className="text-gray-600 dark:text-gray-300">
                          <AgeDisplay />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-24 flex-shrink-0 text-gray-500 dark:text-gray-400">
                        2019
                      </div>
                      <div>
                        <p className="font-medium dark:text-white">
                          坂出商業高校 情報処理学科
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">卒業</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-24 flex-shrink-0 text-gray-500 dark:text-gray-400">
                        2020
                      </div>
                      <div>
                        <p className="font-medium dark:text-white">
                          ビジュアルアーツ専門学校
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">中退</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-24 flex-shrink-0 text-gray-500 dark:text-gray-400">
                        2025.1
                      </div>
                      <div>
                        <p className="font-medium dark:text-white">
                          Robust Engine inc. Frontend Engineer (Beginner)
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          〜 現在
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-700 py-20" id="skills">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { name: "HTML", icon: "/svg/html.svg" },
                { name: "CSS", icon: "/svg/css.svg" },
                { name: "JavaScript", icon: "/svg/js.svg" },
                { name: "TypeScript", icon: "/svg/ts.svg" },
                { name: "React", icon: "/svg/react.svg" },
                { name: "Next.js", icon: "/svg/nextjs.svg" },
                { name: "Tailwind CSS", icon: "/svg/tailwindcss.svg" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg duration-300"
                >
                  <div className="flex flex-col items-center">
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 mb-4"
                      />
                    )}
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <footer className="text-gray-700 border-t border-gray-200">
          <div className="container mx-auto p-5 text-center">
            <p>&copy; 2025 Hiroto Murakami. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
