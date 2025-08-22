import React from 'react';
import HTMLFlipBook from "react-pageflip";

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
          @import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600&display=swap");

          .page {
            background: linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%);
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .page-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            text-align: center;
            font-family: 'Bricolage Grotesque', sans-serif;
          }

          .cover {
            background: linear-gradient(135deg, #000000 0%, #4b5563 100%);
            color: white;
            font-weight: bold;
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
        <div className="page" style={{ background: 'transparent' }}>
          <div className="page-content cover">
            <img 
              src="https://assets.vercel.com/image/upload/v1662130559/front/bolt/bolt-new-logo.svg" 
              alt="bolt.new Logo" 
              style={{ maxWidth: '200px', marginBottom: '20px' }}
            />
            <h1>bolt.tips</h1>
            <p>Code instantly. Powered by AI.</p>
          </div>
        </div>

        {/* Content Pages */}
        {boltTips.map((page) => (
          <div className="page" key={page.id}>
            <div className="page-content">
              <h2 className="text-xl font-semibold mb-2">{page.title}</h2>
              <p className="text-base text-gray-800">{page.description}</p>
            </div>
          </div>
        ))}

        {/* Back Cover */}
        <div className="page" style={{ background: 'transparent' }}>
          <div className="page-content cover">
            <h1>Thanks for Reading</h1>
            <p>Start building at <strong>bolt.new</strong></p>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Book;