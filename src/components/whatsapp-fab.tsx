import { whatsappLink } from "@/lib/site";
import { WhatsappIcon } from "./whatsapp-icon";

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink("Hi, I want to know more about Billphora.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <WhatsappIcon size={30} />
    </a>
  );
}
