import Link from "next/link";
import { Button } from "./ui/button";
import { Phone } from "@phosphor-icons/react/dist/ssr";

function HireMeButton() {
  return (
    <Link href="https://cal.com/diprajgirase" target="_blank">
      <Button className="flex items-center gap-2">
        Hire Me
        <Phone size={20} />
      </Button>
    </Link>
  );
}

export default HireMeButton;