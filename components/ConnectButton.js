import Link from "next/link";
import { Button } from "./ui/button";
import { Phone } from "@phosphor-icons/react/dist/ssr";

function ConnectButton() {
  return (
    <Link href="https://cal.com/diprajgirase" target="_blank">
      <Button className="flex items-center gap-2">
        Let&apos;s Connect
        <Phone size={20} />
      </Button>
    </Link>
  );
}

export default ConnectButton;
