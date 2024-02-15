import BaselineupText from "@/components/BaselineupText";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-black">
      <BaselineupText lineHeight={200} className="text-white font-semibold sm:text-9xl text-xl" easeType="easeInOut">
        Coming Soon
      </BaselineupText>    </main>
  );
}
