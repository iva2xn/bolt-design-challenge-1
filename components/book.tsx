import React from 'react';
import HTMLFlipBook from "react-pageflip";
import { Figtree, Instrument_Serif } from "next/font/google";
import Image from 'next/image';

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
      title: "How it's made",
      description: "To make this project possible, I used react-pageflip for the book, and mesh-gradient for the background. The content is styled with Tailwind CSS and custom fonts from Google Fonts. The book contains tips for using bolt.new effectively."
    },
    {
      id: "002",
      title: "Good Prompts",
      description: "A well-crafted prompt is essential for getting the best results from any LLM. Personally, I like to start with a rough, unstructured prompt and let ChatGPT suggest relevant libraries and frameworks. From there, I refine the prompt step by step until I achieve the most effective outcome."
    },
    {
      id: "003",
      title: "Clean Fonts",
      description: "Typography plays a huge role in design. When choosing fonts, look for readability first—clean, modern typefaces often work best. Use Google Fonts as a starting point, and combine no more than two typefaces for consistency. Balance headings with bold styles and keep body text simple for better clarity."
    },
    {
      id: "004",
      title: "Color Schemes",
      description: "AI tools often generate the same purple gradients, which can make projects feel repetitive. Instead, plan your colors carefully—tweakcn.com is a great resource for exploring unique palettes and even testing font pairings. A thoughtful color scheme helps your design stand out and stay consistent."
    },
    {
      id: "005",
      title: "Version Control",
      description: "Always commit your work to GitHub or another version control system. AI and LLMs can still hallucinate or suggest unstable code, so keeping a record of stable versions is essential. Frequent commits ensure you don't lose progress and make it easier to roll back when something breaks."
    },
    {
      id: "006",
      title: "Learning",
      description: "AI can generate code quickly, but the real value comes from studying it. Use code generation as a way to learn—read through the output, break it down, and understand why it works. Treat every snippet as both a tool for building and an opportunity to improve your skills."
    }
  ];

  return (
    <div className="w-[370px] h-[500px] md:w-[740px]"> 
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&display=swap');

          .page {
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          }

          .page-content {
            width: 100%;
            height: 100%;
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
            border-radius: 12px;
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
              repeating-linear-gradient(
                to bottom,
                transparent 0px,
                transparent 28px,
                #e5e7eb 28px,
                #e5e7eb 29px
              );
            pointer-events: none;
            z-index: 0;
          }

          .notebook-content {
            position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding-top: 30px;
          }

          .page-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 1rem;
            line-height: 29px;
          }

          .page-description {
            font-size: 1rem;
            color: #374151;
            line-height: 29px;
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
        style={{}}        //  required for typing
        startPage={0}     //  required for typing
      >
        {/* Front Cover */}
        <div className="page">
          <div className="page-content cover">
            <div className="cover-content">
              <div className="flex flex-col items-center">
                <img 
                  src="bolt-logo.png" 
                  alt="bolt.new Logo" 
                  className="w-32 h-auto mb-6 filter brightness-0 invert"
                />
                <h1 className={`text-4xl font-bold mb-2 ${figtree.className}`}>
                  bolt101
                </h1>
              </div>
              
              <div className="text-center">
                <p className="text-sm opacity-70">
                  Made with BOLT and Love
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
                  Start building with Bolt!
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