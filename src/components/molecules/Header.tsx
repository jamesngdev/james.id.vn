import Logo from "../atoms/Logo";
import Menu from "../atoms/Menu";
import Social from "../atoms/Social";

export default function HomePage() {
  return (
    <header className="content-wrapper grid grid-cols-[170px_1fr_1fr] gap-6 fixed p-6 text-white items-center w-full top-0 left-0 right-0 backdrop-blur	">
      <Logo />
      <Menu />
      <Social />
    </header>
  );
}
