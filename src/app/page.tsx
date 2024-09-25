import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <ul>
      <li>
        <Link href="/connect-embed">Connect Embed State bug</Link>
      </li>
    </ul>
  );
};

export default Home;
