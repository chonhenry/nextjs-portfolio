"use client";

import Image from "next/image";

const imageStyle = {
  objectFit: "contain",
  position: "static",
  // width: "auto",
  height: "auto",
};

const items = [
  "html",
  "css",
  "javascript",
  "react",
  "angular",
  "nextjs",
  "tailwindcss",
];

const HorizontalBar = () => {
  return (
    <div className="bg-orange w-screen my-6 relative">
      <div className="w-full overflow-hidden lg:w-[1440px] lg:m-auto h-[120px] whitespace-nowrap">
        <div className="inline-block h-full animate-move">
          <div className="h-full w-[90px] inline-block mr-10">
            <div className="h-full flex">
              <Image
                src="/images/logo/html.png"
                style={imageStyle}
                width={90}
                height={100}
                alt="html"
              />
            </div>
          </div>
          <div className="h-full w-[90px] inline-block mr-10">
            <div className="h-full flex">
              <Image
                src="/images/logo/css.png"
                style={imageStyle}
                width={90}
                height={100}
                alt="css"
              />
            </div>
          </div>
          <div className="h-full w-[90px] inline-block mr-10">
            <div className="h-full flex">
              <Image
                src="/images/logo/javascript.png"
                style={imageStyle}
                width={90}
                height={100}
                alt="javascript"
              />
            </div>
          </div>

          <div className="h-full w-[120px] inline-block mr-10">
            <div className="h-full flex">
              <Image
                src="/images/logo/typescript.png"
                style={imageStyle}
                width={120}
                height={100}
                alt="typescript"
              />
            </div>
          </div>
          <div className="h-full w-[120px] inline-block mr-2">
            <div className="h-full flex">
              <Image
                src="/images/logo/bootstrap.svg"
                style={imageStyle}
                width={90}
                height={100}
                alt="bootstrap"
              />
            </div>
          </div>
          <div className="h-full w-[90px] inline-block mr-10">
            <div className="h-full flex">
              <Image
                src="/images/logo/react_.png"
                style={imageStyle}
                width={90}
                height={100}
                alt="react"
              />
            </div>
          </div>
          <div className="h-full w-[250px] inline-block mr-14">
            <div className="h-full flex">
              <Image
                src="/images/logo/angular_.png"
                style={imageStyle}
                width={250}
                height={100}
                alt="angular"
              />
            </div>
          </div>
          <div className="h-full w-[220px] inline-block mr-14">
            <div className="h-full flex">
              <Image
                src="/images/logo/nextjs.png"
                style={imageStyle}
                width={220}
                height={100}
                alt="nextjs"
              />
            </div>
          </div>
          <div className="h-full w-[300px] inline-block mr-10">
            <div className="h-full flex">
              <Image
                src="/images/logo/tailwindcss.png"
                style={imageStyle}
                width={300}
                height={100}
                alt="tailwindcss"
              />
            </div>
          </div>
        </div>

        <div className="inline-block h-full animate-move">
          <div className="h-full w-[90px] inline-block mr-10">
            <div className="h-full flex">
              <Image
                src="/images/logo/html.png"
                style={imageStyle}
                width={90}
                height={100}
                alt="html"
              />
            </div>
          </div>
          <div className="h-full w-[90px] inline-block mr-10">
            <div className="h-full flex">
              <Image
                src="/images/logo/css.png"
                style={imageStyle}
                width={90}
                height={100}
                alt="css"
              />
            </div>
          </div>
          <div className="h-full w-[90px] inline-block mr-10">
            <div className="h-full flex">
              <Image
                src="/images/logo/javascript.png"
                style={imageStyle}
                width={90}
                height={100}
                alt="javascript"
              />
            </div>
          </div>
          <div className="h-full w-[120px] inline-block mr-10">
            <div className="h-full flex">
              <Image
                src="/images/logo/typescript.png"
                style={imageStyle}
                width={120}
                height={100}
                alt="typescript"
              />
            </div>
          </div>
          <div className="h-full w-[120px] inline-block mr-2">
            <div className="h-full flex">
              <Image
                src="/images/logo/bootstrap.svg"
                style={imageStyle}
                width={90}
                height={100}
                alt="bootstrap"
              />
            </div>
          </div>
          <div className="h-full w-[90px] inline-block mr-10">
            <div className="h-full flex">
              <Image
                src="/images/logo/react_.png"
                style={imageStyle}
                width={90}
                height={100}
                alt="react"
              />
            </div>
          </div>
          <div className="h-full w-[250px] inline-block mr-14">
            <div className="h-full flex">
              <Image
                src="/images/logo/angular_.png"
                style={imageStyle}
                width={250}
                height={100}
                alt="angular"
              />
            </div>
          </div>
          <div className="h-full w-[220px] inline-block mr-14">
            <div className="h-full flex">
              <Image
                src="/images/logo/nextjs.png"
                style={imageStyle}
                width={220}
                height={100}
                alt="nextjs"
              />
            </div>
          </div>
          <div className="h-full w-[300px] inline-block mr-10">
            <div className="h-full flex">
              <Image
                src="/images/logo/tailwindcss.png"
                style={imageStyle}
                width={300}
                height={100}
                alt="tailwindcss"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBar;
