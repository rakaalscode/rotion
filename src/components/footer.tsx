import { Logo } from "./logo"
import { Button } from "./ui/button"

export const Footer = () => {
  return (
    <div className="z-50 flex items-center w-full p-6 bg-background dark:bg-[#1f1f1f]">
      <div className="hidden md:flex">
        <Logo />
      </div>
      <div className="flex items-center justify-between w-full gap-x-2 text-muted-foreground md:ml-auto md:justify-end">
        <Button variant="ghost">Privacy Policy</Button>
        <Button variant="ghost">Terms & Conditions</Button>
      </div>
    </div>
  )
}
