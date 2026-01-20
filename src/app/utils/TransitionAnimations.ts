import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import {
  markTransitionDone,
  markTransitionStart,
} from "@/stores/transitionStore";

export const animatePageIn = () => {
  markTransitionStart();

  const tiles = gsap.utils.toArray<HTMLElement>(".tile");

  const tl = gsap.timeline();

  gsap.set("#loading-container .masker", {
    scaleX: 0,
    transformOrigin: "left center",
  });

  tl.to("#loading-container .masker", {
    scaleX: 1,
    duration: 2.5,
    ease: "power2.out",
  })
    .to(
      "#loading-container #text-loader",
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.5"
    )
    .fromTo(
      tiles,
      {
        backgroundColor: "#000009",
      },
      {
        backgroundColor: "#775bc8",
        opacity: 0,
        duration: 0.5,
        stagger: {
          grid: [12, 12],
          each: 0.1,
          from: "start",
        },
      },
      "-=1"
    )
    .add(() => {
      markTransitionDone();
    }, "-=1")
    .set("#loading-container", { display: "none" });

  return tl;
};

type AnimatePageOutProps = {
  href?: string | { pathname: string; hash: string };
  router: AppRouterInstance;
};

export const animatePageOut = ({ href, router }: AnimatePageOutProps) => {
  markTransitionStart();

  const tiles = gsap.utils.toArray<HTMLElement>(".tile");

  const tl = gsap.timeline({
    onComplete: () => {
      if (href) {
        if (typeof href === "string") {
          router.push(href);
        } else {
          const path = href.pathname + (href.hash ? `#${href.hash}` : "");
          router.push(path);
        }
      } else {
        router.back();
      }
    },
  });

  gsap.set("#loading-container", { display: "grid" });
  gsap.set("#loading-container #text-loader", { opacity: 0 });
  gsap.set("#loading-container .masker", {
    scaleX: 0,
    transformOrigin: "left center",
  });

  tl.fromTo(
    tiles,
    {
      backgroundColor: "#775bc8",
      opacity: 0,
    },
    {
      backgroundColor: "#000009",
      opacity: 1,
      duration: 0.5,
      stagger: {
        grid: [12, 12],
        each: 0.1,
        from: "end",
      },
    }
  ).to("#loading-container #text-loader", {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });

  return tl;
};
