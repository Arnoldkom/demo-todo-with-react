import { useState } from "react";
import { getAuth } from "firebase/auth";
import { appwrite, github, react } from "../icons";
import { useHistory } from "react-router-dom";
import * as Stripe from "../../stripe/stripe-client";
import Alert from "../../pages/Alert/Alert";
import firebase from "../../firebase/firebase-config";

const auth = getAuth(firebase.app());
const Landing = () => {
  const history = useHistory();
  const [status, setStatus] = useState(false);

  const handleClick = async () => {
    const session = await Stripe.checkout('price_1LuGQaA5CgLxn7YpV2emzz2m');
    console.log(session.url);
    if(session.url){
      setStatus(true);
      history.push(session.url);
    }
  };

  const links = [
    {
      href: "https://github.com/Groupe-Beaucage/vente-en-ligne/issues/636",
      icon: github(10),
    },
    {
      href: "https://kia.ca/",
      icon: appwrite(10),
    },
  ];

  return (
    <>
      <section className="container h-screen mx-auto flex">
          {status && <Alert color="green" message="Redirection vers le checkOut de stripe ..." />}
        <div className="flex flex-col mx-auto justify-center p-6 text-center">
          <p className="my-8 text-xl md:text-2xl lg:text-3xl font-medium">Introducing</p>
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold">Stripe Payment</h1>
          <p className="my-8 text-xl md:text-2xl lg:text-3xl font-medium">
            A Simple To-do App built with {appwrite(8)} Appwrite and {react(8)}{" "}
            React
          </p>
          <button
            onClick={handleClick}
            className="mx-auto mt-4 py-3 lg:py-5 px-10 lg:px-24 text-lg md:text-2xl font-semibold  rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
          >
            Get Started
          </button>
        </div>
      </section>

      <section className="absolute bottom-0 right-0 py-3 px-6 mr-8 mb-8 flex">
        {links.map((item, key) => (
          <div key={key} className="rounded-full mx-4 transition duration-200 ease-in-out transform hover:-translate-y-3 hover:scale-125 hover:shadow-4xl">
            <a href={item["href"]}>{item["icon"]}</a>
          </div>
        ))}
      </section>
    </>
  );
};

export default Landing;
