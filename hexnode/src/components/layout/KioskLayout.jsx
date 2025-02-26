
import { useState } from "react";
import { kioskTabData } from "../../mock/home-mock";

const KioskLayout = () => {
  const [activeTab, setActiveTab] = useState("single");

  return (
    <div className="bg-white grid place-items-center py-[60px] lg:py-[120px]" role="region" aria-labelledby="specific-kiosk-modes">
      <div className="container">
        <h2 className="font-bold text-center text-[28px] leading-[1.25] antialiased sm:text-[36px] text-blue">
          Specific kiosk modes for unique use cases
        </h2>

        {/* Tabs */}
        <div className="flex flex-col lg:flex-row flex-wrap pt-[40px] sm:pt-[60px] w-full" role="tablist">
          {kioskTabData.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              role="list"
              aria-selected={activeTab === id}
              aria-controls={`tab-content-${id}`}
              className={`grow px-[30px] rounded-b-sm font-semibold transition-all duration-500 ease-in p-[26px_0] text-[22px] leading-[24px] border border-white-tab ${
                activeTab === id ? "bg-blue text-white" : "bg-white text-blue/50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white-tab p-10">
          {kioskTabData.map(({ id, title, content, image, label }) =>
            activeTab === id ? (
              <div
                key={id}
                className="grid lg:gap-10 grid-cols-12 transition-all duration-[700ms] delay-200 ease-in"
                role="listitem"
                id={`tab-content-${id}`}
                aria-labelledby={`tab-${id}`}
              >
                <div className="col-span-12 lg:col-span-6 order-4 lg:order-1">
                  <h3 className="max-w-xs lg:max-w-xl text-blue font-bold text-[20px] leading-[26px] antialiased pb-[15px] lg:pb-[40px] sm:text-[28px] sm:leading-[40px]" aria-label={title}>
                    {title}
                  </h3>
                  <ul className="list-none space-y-2">
                    {content.map((point, index) => (
                      <li key={index} className="flex items-start max-w-xs lg:max-w-xl">
                        <div className="mt-2">
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden='true' width="14.393" height="10.111">
                            <path fill="none" stroke="#60c458" strokeWidth="2" d="M.697 4.107 5.45 8.718l8.247-8" />
                          </svg>
                        </div>
                        <p className=" inline-flex break-words text-base sm:text-[18px] font-normal sm:leading-[28px] text-text-gray pl-[25px] sm:pl-[30px]" aria-label={point}>
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-12 lg:col-span-6 order-3 lg:order-2 flex justify-center lg:block">
                  <div className="max-sm:h-[210px] max-w-[308px] max-sm:mt-[15px] mb-[20px] lg:mb-0 sm:max-w-[460px]">
                    <img loading="lazy"  className="w-full h-full rounded-[10px]" src={image} alt={label} />
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default KioskLayout;

