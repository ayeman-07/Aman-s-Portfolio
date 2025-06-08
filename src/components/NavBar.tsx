import Image from "next/image";
import { aman, whitelink } from "@/constants/images";
import TransitionLink from "@/components/TransitionLink";

type NavBarProps = {
  section: string;
  children: React.ReactNode;
};

export default function NavBar({ section, children }: NavBarProps) {
  return (
    <div className="p-5 flex flex-col md:flex-row justify-center h-full w-full gap-5 md:p-2 md:pt-24">
      <div className="flex flex-col items-center md:mr-4 md:w-[20%] md:items-end font-spaceGrotesk">
        <div className="mb-3 relative group">
          <div className="absolute inset-0 bg-gradient-accent rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity"></div>
          <Image
            src={aman}
            alt="Aman"
            width={100}
            height={100}
            priority
            className="rounded-full relative z-10"
          />
        </div>
        <div className="font-medium text-3xl mb-3 text-text-primary">
          Aman Kumar Singh<span className="text-accent-purple">,</span>
        </div>
        <div className="font-light text-right md:mt-4 text-xl cursor-pointer text-text-secondary">
          <nav>
            <ul>
              <li className="mt-4">
                <TransitionLink href="/" nav={true}>
                  <div
                    className={`flex items-center justify-end gap-2 transition-colors hover:text-accent-purple ${
                      section === "About" ? "text-accent-blue" : ""
                    }`}
                  >
                    <span className="underline">About</span>
                    <span>
                      <Image src={whitelink} alt="link" className="filter invert opacity-70" />
                    </span>
                  </div>
                </TransitionLink>
              </li>
              <li className="mt-4">
                <TransitionLink href="/projects" nav={true}>
                  <div
                    className={`flex items-center justify-end gap-2 transition-colors hover:text-accent-purple ${
                      section === "Projects" ? "text-accent-blue" : ""
                    }`}
                  >
                    <span className="underline">Projects</span>
                    <span>
                      <Image src={whitelink} alt="link" className="filter invert opacity-70" />
                    </span>
                  </div>
                </TransitionLink>
              </li>
              <li className="mt-4">
                <TransitionLink href="/skills" nav={true}>
                  <div
                    className={`flex items-center justify-end gap-2 transition-colors hover:text-accent-purple ${
                      section === "Skills" ? "text-accent-blue" : ""
                    }`}
                  >
                    <span className="underline">Skills</span>
                    <span>
                      <Image src={whitelink} alt="link" className="filter invert opacity-70" />
                    </span>
                  </div>
                </TransitionLink>
              </li>
              <li className="mt-4">
                <TransitionLink href="/profiles" nav={true}>
                  <div
                    className={`flex items-center justify-end gap-2 transition-colors hover:text-accent-purple ${
                      section === "Profiles" ? "text-accent-blue" : ""
                    }`}
                  >
                    <span className="underline">Profiles</span>
                    <span>
                      <Image src={whitelink} alt="link" className="filter invert opacity-70" />
                    </span>
                  </div>
                </TransitionLink>
              </li>
              <li className="mt-4">
                <TransitionLink href="/education" nav={true}>
                  <div
                    className={`flex items-center justify-end gap-2 transition-colors hover:text-accent-purple ${
                      section === "Education" ? "text-accent-blue" : ""
                    }`}
                  >
                    <span className="underline">Education</span>
                    <span>
                      <Image src={whitelink} alt="link" className="filter invert opacity-70" />
                    </span>
                  </div>
                </TransitionLink>
              </li>
              <li className="mt-4">
                <TransitionLink href="/contact" nav={true}>
                  <div
                    className={`flex items-center justify-end gap-2 transition-colors hover:text-accent-purple ${
                      section === "Contact" ? "text-accent-blue" : ""
                    }`}
                  >
                    <span className="underline">Contact</span>
                    <span>
                      <Image src={whitelink} alt="link" className="filter invert opacity-70" />
                    </span>
                  </div>
                </TransitionLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex items-center justify-center md:mx-4 md:w-[1%]">
        <div className="h-0.5 w-full bg-gradient-accent md:w-[3px] md:h-[80vh] rounded-sm"></div>
      </div>

      <section className="flex flex-col items-start justify-start md:ml-4 md:w-[60%] font-openSans text-text-primary">
        {children}
      </section>
    </div>
  );
}