export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <img 
        src="/rotion.svg" 
        alt="rotion-logo"
        width={30}
        height={30}
        className="dark:hidden"
      />
      <img 
        src="/rotion-dark.svg" 
        alt="rotion-logo"
        width={30}
        height={30}
        className="hidden dark:block"
      />
      <p className="font-semibold">Rotion</p>
    </div>
  )
}
