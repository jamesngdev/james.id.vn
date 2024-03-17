import Title from "@/components/atoms/Title";
import PostItem from "@/components/molecules/PostItem";

export default function RecentPost() {
  return (
    <div>
      <Title className="text-5xl">
        <span className="block text-accent">Recent Posts</span>
        <span className="text-sm text-gray-300 font-light block mt-2 border-b-gray-500 border-b border-solid pb-4 w-fit mb-6 italic">
          I write about web development, cloud computing, and more.
        </span>
      </Title>

      <div className="grid grid-cols-3 gap-6">
        {new Array(14).fill(0).map((_, index) => (
          <PostItem key={index} />
        ))}
      </div>
    </div>
  );
}
