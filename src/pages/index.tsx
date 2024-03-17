import Overview from "@/components/organisms/home/overview";
import RecentPost from "@/components/organisms/home/recentPost";

const HomePage = () => {
  return (
    <div>
      <Overview />
      <div className="block mt-[120px]"></div>
      <RecentPost />
    </div>
  );
};

export default HomePage;
