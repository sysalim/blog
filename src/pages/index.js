import HeadComponents from "@/components/Head";
import HomePage from "@/components/HomePage";
import { globalData } from "@/data/dataHome";
export default function Home() {
  return (
    <div>
      <HeadComponents title={globalData.title} />
      <HomePage />
    </div>
  );
}
