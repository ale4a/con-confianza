"use client";

// import { useAccount } from "wagmi";
import Home from "~~/components/Home";

// import Home from '@/components/Home';

/**
 * Use the page component to wrap the components
 * that you want to render on the page.
 */
export default function HomePage() {
  // const account = useAccount();

  return (
    <>
      {/* <main className="container mx-auto flex flex-col px-8 py-16">
        <div>
          <h2 className="text-xl">Developer information</h2>
          <br />
          <h3 className="text-lg">Account</h3>
          <ul>
            <li>
              <b>status</b>: {account.status}
            </li>
            <li>
              <b>addresses</b>: {JSON.stringify(account.addresses)}
            </li>
            <li>
              <b>chainId</b>: {account.chainId}
            </li>
          </ul>
        </div>
      </main>
      <Footer /> */}
      {/* <HeaderHome /> */}
      <Home />
    </>
  );
}
