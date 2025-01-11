interface NavLink {
  id: number;
  title: string;
  route: string;
}

export const navlinks: NavLink[] = [
  {
    id: 0,
    title: "Home",
    route: "/",
  },
  {
    id: 1,
    title: "Featured blogs",
    route: "/",
  },
  {
    id: 2,
    title: "Events",
    route: "/",
  },
  {
    id: 3,
    title: "Contact",
    route: "/",
  },
  {
    id: 4,
    title: "About",
    route: "/",
  },
];
