import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { SlPlane } from "react-icons/sl";

export const Images = [
  {
    image_1: require("./asset/image/Image 1.jpg"),
    image_2: require("./asset/image/Image 2.jpg"),
    image_3: require("./asset/image/Image 3.jpg"),
    image_4: require("./asset/image/Image 4.jpg"),
    image_5: require("./asset/image/Image 5.jpg"),
    image_6: require("./asset/image/Image 6.jpg"),
  },
];

export const cardsDetails = [
  {
    title: "Total Balance",
    amount: "$2256",
    time: "Updated hour ago",
  },
  {
    title: "Total Sales",
    amount: "$2256",
    time: "Updated hour ago",
  },
  {
    title: "Total Expenses",
    amount: "$2256",
    time: "Updated hour ago",
  },
  {
    title: "Total Visitors",
    amount: "$2256",
    time: "Updated hour ago",
  },
];

export const ratingDetails = [
  {
    percentage: 80,
    title: "Taylor Swift",
    Date: "24 April, 2023 | 04:00 PM",
    time: "2 days left",
  },
  {
    percentage: 85,
    title: "Well Smith",
    Date: "15 April, 2023 | 04:00 PM",
    time: "5 days left",
  },
  {
    percentage: 65,
    title: "Johnson",
    Date: "10 April, 2023 | 04:00 PM",
    time: "8 days left",
  },
];

export const icon = {
  cart_Icon: (
    <AiOutlineShoppingCart
      style={{
        fontSize: "40px",
        backgroundColor: "#FFEADA",
        padding: "8px",
        color: "#FDCF6F",
        borderRadius: "5px",
      }}
    />
  ),
  electronic_Icon: (
    <BsTruck
      style={{
        fontSize: "40px",
        backgroundColor: "#DDF9E4",
        padding: "8px",
        color: "#22A447",
        borderRadius: "5px",
      }}
    />
  ),
  travel_Icon: (
    <SlPlane
      style={{
        fontSize: "40px",
        backgroundColor: "#E4F0FF",
        padding: "8px",
        color: "#252B42",
        borderRadius: "5px",
      }}
    />
  ),
};

export const progressCategory = [
  {
    icon: icon.cart_Icon,
    percentage: 52,
    title: "Shopping",
  },
  {
    icon: icon.electronic_Icon,
    percentage: 70,
    title: "Electronics",
  },
  {
    icon: icon.travel_Icon,
    percentage: 94,
    title: "Travels",
  },
  {
    icon: icon.travel_Icon,
    percentage: 35,
    title: "Travels",
  },
  {
    icon: icon.travel_Icon,
    percentage: 95,
    title: "Travels",
  },
];

export const chartData = [
  {
    id: "Outcome Statistics",
    color: "#FDCF6F",
    data: [
      {
        x: "Jan",
        y: 10,
      },
      {
        x: "Fab",
        y: 30,
      },
      {
        x: "Mar",
        y: 40,
      },
      {
        x: "Apr",
        y: 50,
      },
      {
        x: "May",
        y: 60,
      },
      {
        x: "Jun",
        y: 75,
      },
      {
        x: "Jul",
        y: 80,
      },
      {
        x: "Aug",
        y: 95,
      },
      {
        x: "Sep",
        y: 100,
      },
      {
        x: "Oct",
        y: 90,
      },
      {
        x: "Nov",
        y: 80,
      },
      {
        x: "Dec",
        y: 70,
      },
    ],
  },
  {
    id: "Stocks Graph",
    color: "#252B42",
    data: [
      {
        x: "Jan",
        y: 30,
      },
      {
        x: "Fab",
        y: 10,
      },
      {
        x: "Mar",
        y: 50,
      },
      {
        x: "Apr",
        y: 60,
      },
      {
        x: "May",
        y: 30,
      },
      {
        x: "Jun",
        y: 60,
      },
      {
        x: "Jul",
        y: 100,
      },
      {
        x: "Aug",
        y: 70,
      },
      {
        x: "Sep",
        y: 10,
      },
      {
        x: "Oct",
        y: 90,
      },
      {
        x: "Nov",
        y: 70,
      },
      {
        x: "Dec",
        y: 55,
      },
    ],
  },
];

export const socialIconImage={
  Google:require('./asset/image/Google.png'),
  Foursquare:require('./asset/image/Foursquare.png'),
  Kickstarter:require('./asset/image/Kickstarter.png'),
  KakaoTalk:require('./asset/image/KakaoTalk.png'),
} 

export const socialIconDeatils=[
  {
    img:socialIconImage.Google,
    name:"Google",
  },
  {
    img:socialIconImage.Foursquare,
    name:"Foursquare",
  },
  {
    img:socialIconImage.Kickstarter,
    name:"Kickstarter",
  },
  {
    img:socialIconImage.KakaoTalk,
    name:"Talk",
  },
]
