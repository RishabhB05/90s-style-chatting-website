import React from 'react';

const TheFacebookLanding = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#EDF0F5]" style={{ imageRendering: 'pixelated' }}>
      {/* Header */}
      <header className="bg-[#3B5998] text-white px-4 py-5">
        <div className="max-w-6xl mx-auto flex justify-end items-center">
          <div className="flex flex-col items-end">
            <h1 className="text-5xl font-bold text-blue-400" style={{
              fontFamily: "'Times New Roman', serif",
              WebkitFontSmoothing: 'none',
              textRendering: 'optimizeSpeed'
            }}>[ thefacebook ]</h1>
            <nav className="space-x-4 mt-3">
              <a href="#" className="hover:underline font-bold" style={{
                fontFamily: "'Times New Roman', serif",
                WebkitFontSmoothing: 'none',
                textRendering: 'optimizeSpeed'
              }}>
                login
              </a>
              <a href="#" className="hover:underline font-bold" style={{
                fontFamily: "'Times New Roman', serif",
                WebkitFontSmoothing: 'none',
                textRendering: 'optimizeSpeed'
              }}>
                register
              </a>
              <a href="#" className="hover:underline font-bold" style={{
                fontFamily: "'Times New Roman', serif",
                WebkitFontSmoothing: 'none',
                textRendering: 'optimizeSpeed'
              }}>
                about
              </a>
            </nav>
          </div>
        </div>
      </header>
     <hr className="my-1 border-t border-white" />

      <div className="flex flex-1">
        {/* Left Sidebar with Login Form */}
        <div className="w-64 p-5 bg-[#EDF0F5] flex-shrink-0">
          <div className="space-y-4 border-2 border-dashed border-gray-400 p-4 rounded">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-right block mb-1" style={{
                fontFamily: "'Times New Roman', serif",
                WebkitFontSmoothing: 'none',
                textRendering: 'optimizeSpeed'
              }}>
                Email:
              </label>
              <input 
                id="email" 
                type="email" 
                className="w-full text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                placeholder="" 
                style={{
                  fontFamily: "'Times New Roman', serif",
                  WebkitFontSmoothing: 'none',
                  textRendering: 'optimizeSpeed'
                }}
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-right block mb-1" style={{
                fontFamily: "'Times New Roman', serif",
                WebkitFontSmoothing: 'none',
                textRendering: 'optimizeSpeed'
              }}>
                Password:
              </label>
              <input 
                id="password" 
                type="password" 
                className="w-full text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                placeholder="" 
                style={{
                  fontFamily: "'Times New Roman', serif",
                  WebkitFontSmoothing: 'none',
                  textRendering: 'optimizeSpeed'
                }}
              />
            </div>

            <div className="flex space-x-2">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs"
                style={{
                  fontFamily: "'Times New Roman', serif",
                  WebkitFontSmoothing: 'none',
                  textRendering: 'optimizeSpeed'
                }}
              >
                register
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs"
                style={{
                  fontFamily: "'Times New Roman', serif",
                  WebkitFontSmoothing: 'none',
                  textRendering: 'optimizeSpeed'
                }}
              >
                login
              </button>
            </div>
          </div>
        </div>
     

        {/* Main Content Area */}
        <div className="flex-1 relative border border-[#3B5998] m-4 flex flex-col">
          {/* Background Image */}
          <div
            className="absolute left-0 top-0 w-48 h-full opacity-20 bg-cover bg-center"
            style={{
              backgroundImage: "url('/face-background.png')",
              filter: "blur(1px)",
              imageRendering: 'pixelated'
            }}
          />

          {/* Blue Welcome Bar */}
          <div className="bg-[#3B5998] text-white px-4 py-2 text-lg font-medium" style={{
            fontFamily: "'Times New Roman', serif",
            WebkitFontSmoothing: 'none',
            textRendering: 'optimizeSpeed'
          }}>Welcome to Thefacebook!</div>

          {/* Main Content */}
          <div className="flex-1 relative z-10 bg-[#EDF0F5] bg-opacity-95 p-6">
            <div className="max-w-5xl">
              <h2 className="text-4xl font-bold mb-4 text-center" style={{
                fontFamily: "'Times New Roman', serif",
                WebkitFontSmoothing: 'none',
                textRendering: 'optimizeSpeed'
              }}>[ Welcome to Thefacebook ]</h2>

              <div className="space-y-3 text-lg leading-relaxed" style={{
                fontFamily: "'Times New Roman', serif",
                WebkitFontSmoothing: 'none',
                textRendering: 'optimizeSpeed'
              }}>
                <p>Thefacebook is an online directory that connects people through social networks at colleges.</p>

                <p>
                  We have opened up Thefacebook for popular consumption at <strong>Harvard University</strong>.
                </p>

                <p>You can use Thefacebook to:</p>

                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Search for people at your school</li>
                  <li>Find out who are in your classes</li>
                  <li>Look up your friends' friends</li>
                  <li>See a visualization of your social network</li>
                </ul>

                <p className="pt-2">
                  To get started, click below to register. If you have already registered, you can log in.
                </p>

                <div className="flex justify-center space-x-4 pt-2">
                  <button className="bg-[#3B5998] hover:bg-blue-700 text-white px-5 py-1 font-bold border-b-4 border-r-2 border-blue-800 text-sm shadow-md hover:shadow-lg active:border-b-2 active:translate-y-1" style={{
                    fontFamily: "'Times New Roman', serif",
                    WebkitFontSmoothing: 'none',
                    textRendering: 'optimizeSpeed'
                  }}>
                    Register
                  </button>
                  <button className="bg-[#3B5998] hover:bg-blue-700 text-white px-5 py-1 font-bold border-b-4 border-r-2 border-blue-800 text-sm shadow-md hover:shadow-lg active:border-b-2 active:translate-y-1" style={{
                    fontFamily: "'Times New Roman', serif",
                    WebkitFontSmoothing: 'none',
                    textRendering: 'optimizeSpeed'
                  }}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-gray-300 bg-[#EDF0F5] px-4 py-4">
        <div className="max-w-6xl mx-auto text-center text-blue-600 space-x-4">
          <a href="#" className="hover:underline text-lg" style={{
            fontFamily: "'Times New Roman', serif",
            WebkitFontSmoothing: 'none',
            textRendering: 'optimizeSpeed'
          }}>
            about
          </a>
          <a href="#" className="hover:underline text-lg" style={{
            fontFamily: "'Times New Roman', serif",
            WebkitFontSmoothing: 'none',
            textRendering: 'optimizeSpeed'
          }}>
            contact
          </a>
          <a href="#" className="hover:underline text-lg" style={{
            fontFamily: "'Times New Roman', serif",
            WebkitFontSmoothing: 'none',
            textRendering: 'optimizeSpeed'
          }}>
            faq
          </a>
          <a href="#" className="hover:underline text-lg" style={{
            fontFamily: "'Times New Roman', serif",
            WebkitFontSmoothing: 'none',
            textRendering: 'optimizeSpeed'
          }}>
            terms
          </a>
          <a href="#" className="hover:underline text-lg" style={{
            fontFamily: "'Times New Roman', serif",
            WebkitFontSmoothing: 'none',
            textRendering: 'optimizeSpeed'
          }}>
            privacy
          </a>
        </div>
        <div className="text-center text-sm text-gray-600 mt-2" style={{
          fontFamily: "'Times New Roman', serif",
          WebkitFontSmoothing: 'none',
          textRendering: 'optimizeSpeed'
        }}>
          <p>a Rishabh Baruah production</p>
          <p>Thefacebook © 2004</p>
        </div>
      </footer>
    </div>
  );
};

export default TheFacebookLanding;