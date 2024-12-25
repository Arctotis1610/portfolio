import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <header className="text-gray-700 border-b border-red-100">
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>hiroCode</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home"className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#about"className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href="#skills"className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href="#blog"className='hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>

      </header>
      
      <section className='text-gray-700' id='home'>
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-14'>
            <h1>
              こんにちは！
              <br />
              私はArctotisです
              <br />
              ビギナーです
            </h1>
            <p>将来フロントエンドエンジニアとして活躍することを目指し、日々スキルを磨いています。現在、HTML、CSS、JavaScript、React、Tailwind CSS を学習中で、直感的で魅力的なウェブ体験を作ることに情熱を持っています。

ユーザーにとって使いやすく、美しいウェブアプリケーションを開発するため、レスポンシブデザインやインタラクティブな機能の実装に力を入れています。これからも新しい技術に挑戦しながら、成長し続けたいと考えています。</p>
            <button>Contact</button>
            </div>
            <div className='md:w-5/6'>
              <img src="./img/icon.png" alt="" />
            </div>
        </div>
       
      </section>
    </>
  )
      
  
}

export default App
