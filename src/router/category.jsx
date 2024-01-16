import HomeWoman from "@/views/category/woman/HomeWoman";
import HomeMan from "@/views/category/man/HomeMan";

export const routesCategory = [
  {
    path: "man",
    element: <HomeMan />,
  },
  {
    path: "woman",
    element: <HomeWoman />,
  },
];
