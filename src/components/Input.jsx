const Input = ({type, placeholder}) => {
  return (
   <input type={type} className="border-[2px] border-red-400 rounded-4 px-3 py-2 focus:border-yellow-500 outline-none" placeholder= {placeholder}/>

  )
}

export default Input