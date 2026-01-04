import localFont from "next/font/local";

export const claytonia = localFont({
  src: [
    {
      path: "../../public/fonts/Claytonia/Claytonia.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-claytonia",
  display: "swap",
});

export const proximaNova = localFont({
  src: [
    {
      path: "../../public/fonts/Proxima_Nova/ProximaNovaExCn-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Proxima_Nova/ProximaNovaExCn-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-proxima-nova-black",
  display: "swap",
});
