import NadiyaPP from "./assets/nadiya.jpeg";
import MailIcon from "./assets/mail.svg";
import PhoneIcon from "./assets/phone.svg";
import LocationIcon from "./assets/location.svg";
import InstagramIcon from "./assets/instagram.png";
import LinkedInIcon from "./assets/linkedin.png";
import USAIcon from "./assets/usa.png";
import IndonesiaIcon from "./assets/indonesia.png";
import BNIIcon from "./assets/bni.png";
import KominfoIcon from "./assets/kominfo.png";
import UnilaIcon from "./assets/unila.png";
import BudgetIcon from "./assets/budget.png";
import { useState } from "react";

const App = () => {
  const [isProjectOpen, setIsProjectOpen] = useState(true);
  const [isExperienceOpen, setIsExperienceOpen] = useState(true);
  const [isEducationOpen, setIsEducationOpen] = useState(true);
  // const [isSkillsOpen, setIsSkillsOpen] = useState(true);
  // const [isToolsOpen, setIsToolsOpen] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row  w-screen h-screen font-outfit">
      <aside className="bg-iceGrey lg:w-1/4 lg:pb-4 lg:overflow-y-auto">
        <header className="flex first:flex-col justify-center items-center pb-6">
          <div className="w-full h-32 bg-gradient-to-r from-[#A478E8] to-[#516CF7] rounded-b-lg"></div>
          <img
            src={NadiyaPP}
            className="w-32 h-32 object-cover rounded-full relative -top-16 border-8 border-white shadow"
            alt="Nadiya's Profile Picture"
          />
          <div className="-mt-12">
            <h1 className="text-2xl font-medium text-iceBlack">Nadiya</h1>
            <h2 className="text-lg font-medium text-highlight">
              IT Financial Controller
            </h2>
          </div>
        </header>
        <hr />
        <h3 className="px-4 pt-2 pb-1 text-sm text-[#79819A] lg:mb-2">Infos</h3>
        <section className="flex lg:flex-wrap items-center pb-4 gap-4 overflow-x-auto px-4 lg:px-8">
          <div className="flex gap-4 font-dmSan min-w-48">
            <aside>
              <div className="bg-[#E2E6EE] p-2 rounded-full">
                <img src={MailIcon} className="w-6" alt="Mail's icon" />
              </div>
            </aside>
            <main>
              <h1 className="mb-1 text-xs text-[#79819A]">Email</h1>
              <h2 className="text-sm text-[#47516B] font-medium">
                nadiya@bni.co.id
              </h2>
            </main>
          </div>
          <div className="flex font-dmSan gap-4 min-w-48">
            <aside>
              <div className="bg-[#E2E6EE] p-2 rounded-full">
                <img src={PhoneIcon} className="w-6" alt="Mail's icon" />
              </div>
            </aside>
            <main>
              <h1 className="mb-1 text-xs text-[#79819A]">Phone</h1>
              <h2 className="text-sm text-[#47516B] font-medium">
                +62 813 7792 2330
              </h2>
            </main>
          </div>
          <div className="flex font-dmSan gap-4 min-w-48">
            <aside>
              <div className="bg-[#E2E6EE] p-2 rounded-full">
                <img src={LocationIcon} className="w-6" alt="Mail's icon" />
              </div>
            </aside>
            <main>
              <h1 className=" mb-1 text-xs text-[#79819A]">Address</h1>
              <h2 className="text-sm text-[#47516B] font-medium">
                Jakarta, Indonesia
              </h2>
            </main>
          </div>
        </section>
        <hr />
        <h3 className="px-4 pt-2 pb-1 text-sm text-[#79819A] lg:mb-2">
          Socials
        </h3>
        <section className="flex lg:flex-wrap justify-center lg:justify-start items-center pb-3 gap-4 px-4 lg:px-8">
          <div className="flex gap-4 font-dmSan min-w-40">
            <aside>
              <img
                src={InstagramIcon}
                className="w-10"
                alt="Instagram's icon"
              />
            </aside>
            <main>
              <h1 className="mb-1 text-xs text-[#79819A]">Instagram</h1>
              <h2 className="text-sm text-[#47516B] font-medium">@nacil</h2>
            </main>
          </div>
          <div className="flex gap-4 font-dmSan min-w-40">
            <aside>
              <img src={LinkedInIcon} className="w-10" alt="Instagram's icon" />
            </aside>
            <main>
              <h1 className="mb-1 text-xs text-[#79819A]">LinkedIn</h1>
              <h2 className="text-sm text-[#47516B] font-medium">@nadiyanay</h2>
            </main>
          </div>
        </section>
        <hr />
        <h3 className="px-4 pt-2 pb-1 text-sm text-[#79819A] lg:mb-2">
          Languages
        </h3>
        <section className="flex lg:flex-wrap items-center pb-3 gap-4 px-4 lg:px-8">
          <div className="flex gap-4 font-dmSan min-w-40">
            <aside>
              <img src={USAIcon} className="w-10" alt="Instagram's icon" />
            </aside>
            <main>
              <h1 className="mb-1 text-xs text-[#79819A]">English</h1>
              <h2 className="text-sm text-[#47516B] font-medium">
                Professional Working
              </h2>
            </main>
          </div>
          <div className="flex gap-4 font-dmSan min-w-40">
            <aside>
              <img
                src={IndonesiaIcon}
                className="w-10"
                alt="Instagram's icon"
              />
            </aside>
            <main>
              <h1 className="mb-1 text-xs text-[#79819A]">Indonesia</h1>
              <h2 className="text-sm text-[#47516B] font-medium">
                Native Language
              </h2>
            </main>
          </div>
        </section>
      </aside>
      <main className="xl:w-3/4 p-4 lg:overflow-y-auto">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-2">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#A478E8] to-[#516CF7]"></div>
                  </div>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-2">
              <p
                className="mb-2 font-outfit text-xl font-medium"
                onClick={() => setIsProjectOpen(!isProjectOpen)}
              >
                Projects
              </p>
              {isProjectOpen && (
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 lg:flex-wrap text-gray-700">
                  <div className="flex flex-col lg:w-[350px] gap-2 text-gray-700 bg-iceGrey font-dmSan px-4 py-4 rounded-xl">
                    <div className="flex items-start gap-2">
                      <div className="bg-white p-2 rounded-xl shadow-lg shrink-0">
                        <img src={BudgetIcon} className="w-6" alt="" />
                      </div>
                      <div className="font-dmSan">
                        <h1 className="text-sm">
                          Preparation of the 2025 OPEX Budget
                        </h1>
                        <h2 className="text-xs font-semibold">
                          Division ADV, WDL, & CISO
                        </h2>
                        <p className="mt-2 text-xs text-justify">
                          The preparation of the 2025 OPEX budget for Division
                          ADV, CISO, and WDL focuses on optimizing operational
                          costs, enhancing digital capabilities, and aligning
                          security initiatives with corporate strategy. This
                          includes detailed forecasting, cost management, and
                          resource allocation to support division-specific goals
                          and overall business growth.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:w-[350px] gap-2 text-gray-700 bg-iceGrey font-dmSan px-4 py-4 rounded-xl">
                    <div className="flex items-start gap-2">
                      <div className="bg-white p-2 rounded-xl shadow-lg shrink-0">
                        <img src={BudgetIcon} className="w-6" alt="" />
                      </div>
                      <div className="font-dmSan">
                        <h1 className="text-sm">
                          Realization of the 2024 OPEX Budge 2024
                        </h1>
                        <h2 className="text-xs font-semibold">
                          Division ADV, RDL, & WDL
                        </h2>
                        <p className="mt-2 text-xs text-justify">
                          The realization of the 2025 OPEX budget for Division
                          ADV, RDL, and WDL reflects efficient execution of
                          planned expenditures, supporting key operational and
                          strategic initiatives. The divisions successfully
                          managed costs while enhancing digital infrastructure,
                          streamlining processes, and achieving their business
                          targets within the allocated budget
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:w-[350px] gap-2 text-gray-700 bg-iceGrey font-dmSan px-4 py-4 rounded-xl">
                    <div className="flex items-start gap-2">
                      <div className="bg-white p-2 rounded-xl shadow-lg shrink-0">
                        <img src={BudgetIcon} className="w-6" alt="" />
                      </div>
                      <div className="font-dmSan">
                        <h1 className="text-sm">
                          Preparation of the 2024 OPEX Budget
                        </h1>
                        <h2 className="text-xs font-semibold">
                          Division ADV, RDL, & WDL
                        </h2>
                        <p className="mt-2 text-xs text-justify">
                          The preparation of the 2024 OPEX budget for Division
                          ADV, RDL, and WDL focuses on optimizing operational
                          costs, enhancing digital capabilities, and aligning
                          security initiatives with corporate strategy. This
                          includes detailed forecasting, cost management, and
                          resource allocation to support division-specific goals
                          and overall business growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-2">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#A478E8] to-[#516CF7]"></div>
                  </div>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-2">
              <p
                className="mb-2 font-outfit text-xl font-medium"
                onClick={() => setIsExperienceOpen(!isExperienceOpen)}
              >
                Experience
              </p>
              {isExperienceOpen && (
                <div className="text-gray-700">
                  <div className="flex">
                    <div className="flex flex-col items-center mt-2 mr-2">
                      <div>
                        <div className="flex items-center justify-center w-5 h-5 border rounded-full">
                          <div className="flex items-center justify-center w-5 h-5 border rounded-full">
                            <div className="h-2 w-2 rounded-full bg-[#47516B]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="pt-2 pb-4 font-dmSan text-sm">
                      <div className="flex items-center gap-3 font-medium">
                        <p className="mb-2">Jun 2023 - Present</p>
                        <div className="flex mb-2">
                          <img
                            src={LocationIcon}
                            className="w-4"
                            alt="Location's Icon"
                          />
                          <span>Jakarta</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="border border-[#eee] p-2 rounded-lg shadow-lg shrink-0">
                          <img src={BNIIcon} className="w-4" alt="BNI Icon" />
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <h1>Senior Staff - IT Financial Controller</h1>
                            <h2 className="text-xs font-semibold">
                              PT Bank Negara Indonesia (Persero) Tbk.
                            </h2>
                          </div>
                          <div className="text-xs mt-2 text-justify">
                            As a Senior Staff - IT Financial Controller, i
                            oversee the financial planning, budgeting, and cost
                            management of IT operations. My role involves
                            ensuring efficient allocation of resources,
                            monitoring expenditures, and providing financial
                            insights to support strategic decision-making in the
                            IT division
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center mt-2 mr-2">
                      <div>
                        <div className="flex items-center justify-center w-5 h-5 border rounded-full">
                          <div className="flex items-center justify-center w-5 h-5 border rounded-full">
                            <div className="h-2 w-2 rounded-full bg-[#47516B]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="pt-2 pb-4 font-dmSan text-sm">
                      <div className="flex items-center gap-3 font-medium">
                        <p className="mb-2">May 2023 - Jun 2023</p>
                        <div className="flex mb-2">
                          <img
                            src={LocationIcon}
                            className="w-4"
                            alt="Location's Icon"
                          />
                          <span>Jakarta</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="border border-[#eee] p-2 rounded-lg shadow-lg shrink-0">
                          <img src={BNIIcon} className="w-4" alt="BNI Icon" />
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <h1>AMGR - IT Innovation</h1>
                            <h2 className="text-xs font-semibold">
                              PT Bank Negara Indonesia (Persero) Tbk.
                            </h2>
                          </div>
                          <div className="text-xs mt-2 text-justify">
                            As an Assistant Manager - IT Innovation, i lead
                            initiatives focused on driving technological
                            advancements and innovative solutions within the IT
                            division. My role involves identifying emerging
                            trends, managing projects that enhance operational
                            efficiency, and implementing cutting-edge
                            technologies to support the organization’s strategic
                            goals
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center mt-2 mr-2">
                      <div>
                        <div className="flex items-center justify-center w-5 h-5 border rounded-full">
                          <div className="flex items-center justify-center w-5 h-5 border rounded-full">
                            <div className="h-2 w-2 rounded-full bg-[#47516B]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="pt-2 pb-4 font-dmSan text-sm">
                      <div className="flex items-center gap-3 font-medium">
                        <p className="mb-2">May 2022 - May 2023</p>
                        <div className="flex mb-2">
                          <img
                            src={LocationIcon}
                            className="w-4"
                            alt="Location's Icon"
                          />
                          <span>Jakarta</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="border border-[#eee] p-2 rounded-lg shadow-lg shrink-0">
                          <img src={BNIIcon} className="w-4" alt="BNI Icon" />
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <h1>IT Officer Development Program</h1>
                            <h2 className="text-xs font-semibold">
                              PT Bank Negara Indonesia (Persero) Tbk.
                            </h2>
                          </div>
                          <div className="text-xs mt-2 text-justify">
                            As part of the IT Officer Development Program, I
                            gained comprehensive training in IT systems,
                            processes, and management, developing key technical
                            and leadership skills. This program equipped me with
                            a strong foundation in IT operations, preparing you
                            for advanced roles within the organization
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center mt-2 mr-2">
                      <div>
                        <div className="flex items-center justify-center w-5 h-5 border rounded-full">
                          <div className="flex items-center justify-center w-5 h-5 border rounded-full">
                            <div className="h-2 w-2 rounded-full bg-[#47516B]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 pb-4 font-dmSan text-sm">
                      <div className="flex items-center gap-3 font-medium">
                        <p className="mb-2">Feb 2018 - Mar 2018</p>
                        <div className="flex mb-2">
                          <img
                            src={LocationIcon}
                            className="w-4"
                            alt="Location's Icon"
                          />
                          <span>Lampung</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="border border-[#eee] p-2 rounded-lg shadow-lg shrink-0">
                          <img
                            src={KominfoIcon}
                            className="w-4"
                            alt="Kominfo's Icon"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <h1>Intership Program</h1>
                            <h2 className="text-xs font-semibold">
                              Ministry of Communication & Information
                            </h2>
                          </div>
                          <div className="text-xs mt-2 text-justify">
                            As an intern at the Ministry of Communication &
                            Information Indonesia, I gained practical experience
                            in government-led IT and communication initiatives.
                            I contributed to projects that supported the
                            development of national information infrastructure
                            and policies, enhancing my understanding of the
                            public sector's role in technology
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-2">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#A478E8] to-[#516CF7]"></div>
                </div>
              </div>
              {/* <div className="w-px h-full bg-gray-300" /> */}
            </div>
            <div className="pt-1 pb-2">
              <p
                className="mb-2 font-outfit text-xl font-medium"
                onClick={() => setIsEducationOpen(!isEducationOpen)}
              >
                Education
              </p>
              {isEducationOpen && (
                <div className="flex flex-col gap-2 text-gray-700 bg-iceGrey font-dmSan px-6 py-4 rounded-xl w-full">
                  <div className="flex gap-4 items-center">
                    <img src={UnilaIcon} className="w-16" alt="Unila's Icon" />
                    <span className="font-medium">Universitas Lampung</span>
                  </div>
                  <div>
                    <h1 className="text-sm font-medium">
                      Bachelor of Informatics Engineering
                    </h1>
                    <h2 className="text-xs text-[#79819A]">
                      Aug 2015 - Dec 2020
                    </h2>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#A478E8] to-[#516CF7]"></div>
                  </div>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-2">
              <p
                className="mb-2 font-outfit text-xl font-medium"
                onClick={() => setIsSkillsOpen(!isSkillsOpen)}
              >
                Skills
              </p>
              {isSkillsOpen && (
                <p className="text-gray-700">
                  Tell them I hate them. Is the Space Pope reptilian!? Tell her
                  she looks thin. Hello, little man. I will destroy you!
                </p>
              )}
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#A478E8] to-[#516CF7]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-1 pb-2">
              <p
                className="mb-2 font-outfit text-xl font-medium"
                onClick={() => setIsToolsOpen(!isToolsOpen)}
              >
                Tools
              </p>
              {isToolsOpen && (
                <p className="text-gray-700">
                  If one examines precultural libertarianism, one is faced with
                  a choice: either accept rationalism or conclude that context
                  is a product.
                </p>
              )}
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default App;
