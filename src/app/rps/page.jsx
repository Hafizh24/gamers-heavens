import NavbarRPS from "@/components/RPS/navbar";
import RPS from "@/components/RPS/rps";

export const metadata = {
  title: "Rock Paper Scissors",
};

export default function Page() {
  return (
    <>
      <NavbarRPS />
      <RPS />
    </>
  );
}
