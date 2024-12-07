
const Button = ({btnText, bgColor}) => {
  return (
    // <button className="bg-white w-24 rounded-md focus:ring-2">clear</button>
        <button className={`${bgColor} w-24 rounded-md focus:ring-2`}>{btnText}</button>


  );
}

export default Button

// Button types ={
//   bgColor: PropTypes.string
//   btnText: PropTypes.string


// }