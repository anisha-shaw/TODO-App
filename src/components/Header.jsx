

const Header = ({text, bg, count}) => {
  return (
    <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-emerald-50`}>
      {text} <div className="ml-2 bg-white h-5 w-5 text-black rounded-full items-center justify-center flex">{count}</div>
    </div>
  )
}

export default Header
