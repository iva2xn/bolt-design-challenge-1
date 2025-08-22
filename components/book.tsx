import React from 'react';
import HTMLFlipBook from "react-pageflip";
import { Figtree, Instrument_Serif } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

interface PageContent {
  id: string;
  title: string;
  description: string;
}

const Book: React.FC = () => {
  const boltTips: PageContent[] = [
    {
      id: "001",
      title: "Quick Start",
      description: "Type bolt.new in your browser to instantly open a coding workspace. No installation required."
    },
    {
      id: "002",
      title: "Use AI Prompts Wisely",
      description: "Describe what you want clearly. The more context you provide, the better the AI can generate accurate code."
    },
    {
      id: "003",
      title: "Experiment Fast",
      description: "bolt.new is perfect for prototyping. Test ideas quickly without worrying about setup overhead."
    },
    {
      id: "004",
      title: "Learn by Example",
      description: "Ask the AI to explain snippets of code. bolt.new isn’t just a tool for building—it’s also a great way to learn."
    },
    {
      id: "005",
      title: "Collaborate Instantly",
      description: "Share your workspace link with teammates. You can brainstorm and fix issues together in real time."
    },
    {
      id: "006",
      title: "Deploy Faster",
      description: "Since it’s made by Vercel, bolt.new integrates seamlessly with deployment workflows. Take projects from idea to live app quickly."
    }
  ];

  return (
    <div className="w-[370px] h-[500px] md:w-[740px]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&display=swap');
          
          .page {
            border-radius: 8px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            position: relative;
            overflow: hidden;
          }

          .page-content {
            width: 100%;
            height: 100%;
            position: relative;
          }

          .cover {
            background: linear-gradient(135deg, #3399FF 0%, #66b2ff 50%, #99ccff 100%);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 40px 30px;
            text-align: center;
            position: relative;
          }

          .cover::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
              linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%);
            pointer-events: none;
          }

          .cover::after {
            content: '';
            position: absolute;
            top: 8px;
            left: 8px;
            right: 8px;
            bottom: 8px;
            border: 2px solid rgba(255,255,255,0.2);
            border-radius: 6px;
            pointer-events: none;
          }

          .cover-content {
            position: relative;
            z-index: 2;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }

          .notebook-page {
            background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);
            position: relative;
            padding: 40px 20px 40px 60px;
          }

          .notebook-page::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              linear-gradient(to right, #fca5a5 40px, transparent 40px),
              repeating-linear-gradient(
                to bottom,
                transparent 0px,
                transparent 23px,
                #e5e7eb 23px,
                #e5e7eb 24px
              );
            pointer-events: none;
          }

          .notebook-content {
            position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding-top: 20px;
          }

          .page-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 1rem;
            line-height: 1.2;
          }

          .page-description {
            font-size: 1rem;
            color: #374151;
            line-height: 1.6;
            font-weight: 400;
          }
        `,
        }}
      />
      <HTMLFlipBook
        width={370}
        height={500}
        size="fixed"
        minWidth={0}
        maxWidth={0}
        minHeight={0}
        maxHeight={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        className=""
        style={{}}        // 👈 required for typing
        startPage={0}     // 👈 required for typing
      >
        {/* Front Cover */}
        <div className="page">
          <div className="page-content cover">
            <div className="cover-content">
              <div className="flex flex-col items-center">
                <img 
                  src="https://assets.vercel.com/image/upload/v1662130559/front/bolt/bolt-new-logo.svg" 
                  alt="bolt.new Logo" 
                  className="w-32 h-auto mb-6 filter brightness-0 invert"
                />
                <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                  bolt.tips
                </h1>
                <p className={`text-lg ${instrumentSerif.className}`} style={{ fontStyle: 'italic', opacity: 0.9 }}>
                  Code instantly. Powered by AI.
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-sm opacity-70">
                  Made with ❤️ and AI
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Pages */}
        {boltTips.map((page) => (
          <div className="page" key={page.id}>
            <div className="page-content notebook-page">
              <div className={`notebook-content ${figtree.className}`}>
                <h2 className="page-title">{page.title}</h2>
                <p className="page-description">{page.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Back Cover */}
        <div className="page">
          <div className="page-content cover">
            <div className="cover-content">
              <div className="flex flex-col items-center justify-center flex-1">
                <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                  Thanks for Reading
                </h1>
                <p className={`text-lg ${instrumentSerif.className}`} style={{ fontStyle: 'italic', opacity: 0.9 }}>
                  Start building at <strong>bolt.new</strong>
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-sm opacity-70">
                  Happy coding! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Book;