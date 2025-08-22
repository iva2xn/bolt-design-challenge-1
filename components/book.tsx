"use client"

import React from "react";
import HTMLFlipBook from "react-pageflip";

interface PageContent {
  id: string;
  title: string;
  description: string;
}

export default function Book() {
  const boltTips: PageContent[] = [
    {
      id: "001",
      title: "Quick Start",
      description: "Get started instantly with Bolt by simply describing what you want to build. The AI will generate a complete project structure for you."
    },
    {
      id: "002", 
      title: "Use AI Prompts Wisely",
      description: "Be specific and detailed in your prompts. The more context you provide, the better Bolt can understand and implement your vision."
    },
    {
      id: "003",
      title: "Iterate and Refine",
      description: "Don't hesitate to ask for modifications and improvements. Bolt excels at iterating on existing code to perfect your project."
    },
    {
      id: "004",
      title: "Leverage Modern Frameworks",
      description: "Take advantage of Bolt's knowledge of modern frameworks like React, Next.js, and Vue to build cutting-edge applications."
    },
    {
      id: "005",
      title: "Deploy with Confidence",
      description: "Use Bolt's built-in deployment features to get your projects live quickly and efficiently with minimal configuration."
    },
    {
      id: "006",
      title: "Learn as You Build",
      description: "Study the generated code to improve your own development skills. Bolt creates clean, well-structured code you can learn from."
    }
  ];

  return (
    <div className="w-[370px] h-[500px] md:w-[740px]">
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');
          
          .page {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          
          .page-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 2rem;
            text-align: center;
            font-family: 'Bricolage Grotesque', sans-serif;
          }
          
          .cover {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            color: white;
            font-weight: bold;
          }
        `
      }} />
      
      <HTMLFlipBook
        width={370}
        height={500}
        size="fixed"
        minWidth={0}
        maxWidth={0}
        minHeight={0}
        maxHeight={0}
        flippingTime={1000}
        showCover={true}
        mobileScrollSupport={true}
        showPageCorners={true}
        className=""
        style={{}}
        startPage={0}
      >
        {/* Front Cover */}
        <div className="page" style={{ background: 'transparent' }}>
          <div className="page-content cover">
            <img 
              src="https://bolt.new/logo.svg" 
              alt="Bolt Logo" 
              className="w-16 h-16 mb-4"
            />
            <h1 className="text-4xl font-bold mb-4">bolt.tips</h1>
            <p className="text-lg">Code instantly. Powered by AI.</p>
          </div>
        </div>

        {/* Dynamic Content Pages */}
        {boltTips.map((tip) => (
          <div key={tip.id} className="page">
            <div className="page-content">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{tip.title}</h2>
              <p className="text-base text-gray-800">{tip.description}</p>
            </div>
          </div>
        ))}

        {/* Back Cover */}
        <div className="page" style={{ background: 'transparent' }}>
          <div className="page-content cover">
            <h1 className="text-3xl font-bold mb-4">Thanks for Reading</h1>
            <p className="text-lg">Visit bolt.new to start building your next project with AI.</p>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}