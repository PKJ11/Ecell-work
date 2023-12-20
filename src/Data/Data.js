// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Home",
    navigate: "/"
  },
  {
    icon: UilClipboardAlt,
    heading: "All Products",
    navigate: "/AllProducts"
  },
  {
    icon: UilUsersAlt,
    heading: "All Users",
    navigate: "/AllUsers"
  },
  // {
  //   icon: UilPackage,
  //   heading: 'Budget and Prioritization',
  //   navigate: "/Budget"
  // },
  {
    icon: UilChart,
    heading: 'SEO Prototype',
    navigate: "/seoprototype"
  },
  {
    icon: UilChart,
    heading: 'E-Mail Marketing',
    navigate: "/emailmarketing"
  }, 
  {
    icon: UilChart,
    heading: 'E-Commerce Manager',
    navigate: "/Ecom"
  }, 
  {
    icon: UilChart,
    heading: 'Advertisement',
    navigate: "/Advertising"
  }, 
  {
    icon: UilChart,
    heading: 'Content Marketing',
    navigate: "/ContentMarketing"
  },
  {
    icon: UilChart,
    heading: 'Employement News ',
    navigate: "/EmployementNews"
  },
];

export const emailMaarketing = [
 {
  heading:"Templates"
 },
 {
  heading:"Integration"
 },
 {
  heading:"Database"
 },
 {
  heading:"Report"
 }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
