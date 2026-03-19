"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// Enregistre les plugins GSAP nécessaires pour les animations
gsap.registerPlugin(ScrollTrigger, SplitText);

type LineBlockRevealProps = {
  children: React.ReactNode;
  // Si true, l'animation se déclenche lors du scroll
  animateOnScroll?: boolean;
  // Délai avant le début de l'animation (en secondes)
  delay?: number;
  // Couleur du bloc de révélation
  blockColor?: string;
  // Délai entre chaque ligne animée (en secondes)
  stagger?: number;
  // Durée de chaque animation de ligne (en secondes)
  duration?: number;
};

export function LineBlockReveal({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#775bc8",
  stagger = 0.15,
  duration = 0.75,
}: LineBlockRevealProps) {
  // Référence au container div qui enveloppe les enfants
  const containerRef = useRef<HTMLDivElement>(null);
  // Stocke les instances SplitText pour les éléments texte
  const splitRefs = useRef<SplitText[]>([]);
  // Stocke les éléments de ligne texte créés par SplitText
  const lines = useRef<HTMLElement[]>([]);
  // Stocke les blocs de révélation (divs colorées)
  const blocks = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Réinitialise les références pour éviter les doublons
      splitRefs.current = [];
      lines.current = [];
      blocks.current = [];

      // Récupère les éléments à animer
      const elements: Element[] = [];

      // Si le container a l'attribut "data-copy-wrapper", utilise les enfants directs
      // Sinon, utilise le container lui-même
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements.push(...Array.from(containerRef.current.children));
      } else {
        elements.push(containerRef.current);
      }

      // Traite chaque élément pour le diviser en lignes
      elements.forEach((el) => {
        // SplitText divise le texte en lignes individuelles
        const split = SplitText.create(el, {
          type: "lines",
          linesClass: "block-line",
        });

        splitRefs.current.push(split);

        // Pour chaque ligne créée par SplitText
        split.lines.forEach((line) => {
          // Crée un wrapper qui contiendra la ligne et le bloc de révélation
          const wrapper = document.createElement("div");
          wrapper.className = "block-line-wrapper";
          line.parentNode!.insertBefore(wrapper, line);
          wrapper.appendChild(line);

          // Crée le bloc coloré qui révèle le texte en se rétractant
          const block = document.createElement("div");
          block.className = "block-revealer";
          block.style.backgroundColor = blockColor;
          wrapper.insertBefore(block, line);

          // Stocke les références pour l'animation
          lines.current.push(line as HTMLElement);
          blocks.current.push(block);
        });
      });

      // Définit l'état initial : texte invisible et blocs à l'échelle 0
      gsap.set(lines.current, { opacity: 0 });
      gsap.set(blocks.current, { scaleX: 0, transformOrigin: "left center" });

      // Crée une timeline maître qui orchestrera toutes les animations
      const master = gsap.timeline({ paused: true });

      // Anime chaque ligne avec son bloc de révélation
      blocks.current.forEach((block, index) => {
        const line = lines.current[index];
        // Crée une timeline pour cette ligne
        const tl = gsap.timeline();

        // 1. Le bloc s'étend de gauche à droite (révèle le texte)
        tl.to(block, {
          scaleX: 1,
          ease: "power4.inOut",
          duration,
        })
          // 2. Rend le texte visible pendant que le bloc est présent
          .set(line, { opacity: 1 })
          // 3. Change la position du pivot pour la prochaine animation
          .set(block, { transformOrigin: "right center" })
          // 4. Le bloc se rétracte de droite à gauche (ferme la révélation)
          .to(block, {
            scaleX: 0,
            duration,
            ease: "power4.inOut",
          });

        // Ajoute cette timeline à la timeline maître avec un délai et un stagger
        master.add(tl, delay + index * stagger);
      });

      let st: ScrollTrigger | undefined;

      // Configure l'animation basée sur le scroll ou la joue immédiatement
      if (animateOnScroll) {
        // Déclenche l'animation quand l'élément rentre dans la vue
        st = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 80%", // L'animation commence quand le haut atteint 80% de la fenêtre
          onEnter: () => master.restart(true),
          //   onLeave: () => master.reverse(),
          onEnterBack: () => master.restart(true),
          onLeaveBack: () => master.reverse(),
          markers: false,
        });
      } else {
        // Lance l'animation immédiatement si pas de scroll
        master.play();
      }

      // Fonction de nettoyage pour éviter les fuites mémoire
      return () => {
        // Arrête le ScrollTrigger et les animations GSAP
        st?.kill();
        master.kill();

        // Reverts les changements SplitText
        splitRefs.current.forEach((split) => split.revert());

        // Restaure la structure DOM originale en enlevant les wrappers et blocs
        const wrapper = containerRef.current?.querySelectorAll(
          ".block-line-wrapper",
        );

        wrapper?.forEach((w) => {
          const parent = w.parentNode;
          if (!parent) return;

          // Récupère la ligne texte du wrapper
          const line = w.querySelector(".block-line") ?? w.lastElementChild;
          if (line) parent.insertBefore(line, w);
          // Supprime le wrapper
          parent.removeChild(w);
        });
      };
    },
    {
      scope: containerRef,
      // Re-crée l'animation si l'une de ces dépendances change
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    },
  );

  // Retourne le container avec l'attribut "data-copy-wrapper" pour le système de reconnaissance
  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
