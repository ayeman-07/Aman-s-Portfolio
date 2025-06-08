"use client"; 
import Link, { LinkProps} from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className? : string ; 
  nav? : boolean ; 
}

function sleep ( ms : number) : Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink = ({
  children, 
  href,
  className,
  nav, 
  ...props
}: TransitionLinkProps) => {

  const router = useRouter();
  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");
    const section = document.querySelector("section");
    if( nav === false  ) {
      body?.classList.add("page-transition"); 
      await sleep(500); 
      router.push(href);
      await sleep(500);
      body?.classList.remove("page-transition");
    } else {
      section?.classList.add("section-transition");
      await sleep(500);
      router.push(href);
      await sleep(500);
      section?.classList.remove("section-transition");
    }
  }

  return (
    <Link onClick={handleTransition} href={href} {...props} className={className}>
      {children}
    </Link>
  )
}

export default TransitionLink
