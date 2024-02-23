import { useAppContext } from "../contexts/AppContexts"
import { Link } from "react-router-dom";
import { SignOutButton } from "./SignOutButton";
//import { Link } from "react-router-dom"
const Header = () => {
  const {isLoggedIn} = useAppContext();
  return (
    <div className="bg-blue-800 py-6">
        <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking tight">
            <Link to="/">MernHolidays.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? <>
          <Link className="flex items-center text-white px-3 font-bold hover:bg-blue-600" to="/my-bookings">My Bookings</Link>
          <Link className="flex items-center text-white px-3 font-bold hover:bg-blue-600" to="/my-hotels">My Hotels</Link>
          <SignOutButton />
          </>: <Link to="/sign-in" className="bg-white flex items-center text-blue-600 px-3 font-bold hover:bg">Sign In</Link>}  
        </span>
        </div>
    </div>
  )
}

export default Header