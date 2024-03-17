import CalendarIcon from "@/components/atoms/CalendarIcon";
import Image from "next/image";

export default function PostItem() {
  const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const imageId = randomInt(1, 1000);

  return (
    <div
      className="pointer-events-none w-full select-none rounded-xl text-sm cursor-pointer"
      role="presentation"
    >
      <Image
        src={`https://picsum.photos/id/${imageId}/200/300`}
        width={300}
        height={200}
        alt="Create Documentations"
        className="rounded-t-lg object-cover w-full h-[200px]"
      />

      <div className="mb-1 text-lg font-bold text-slate-700 dark:text-slate-300 mt-2">
        Create Documentations
      </div>

      <div className="flex items-center gap-1 text-xs font-medium">
        <div className="flex gap-2 text-xs font-bold">
          <div className="rounded-full px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
            Docs
          </div>
          <div className="rounded-full px-2 py-0.5 bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300">
            Support
          </div>
        </div>

        <div className="flex items-center gap-1  text-xs font-medium">
          <CalendarIcon />
          <div className="text-slate-600 dark:text-slate-400">
            10:00 AM · Tomorrow
          </div>
        </div>
      </div>
    </div>
  );
}
