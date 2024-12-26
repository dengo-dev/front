import {Link} from "react-router-dom";


const BasicMenu=()=>{
    return (
        <nav id='navbar' className="flex bg-blue-600 py-4 px-6 shadow-lg">
            <div className="w-full md:w-4/5 flex justify-between items-center">
                <ul className="flex space-x-8 text-white font-semibold">
                    <li className="text-lg hover:text-blue-100 transition-colors">
                        <Link to={'/'}>Main</Link>
                    </li>
                    <li className="text-lg hover:text-blue-100 transition-colors">
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li className="text-lg hover:text-blue-100 transition-colors">
                        <Link to={'/todo/'}>Todo</Link>
                    </li>
                    <li className="text-lg hover:text-blue-100 transition-colors">
                        <Link to={'/products/'}>Products</Link></li>
                </ul>
                <div className="flex justify-end items-center">
                <div
                        className="bg-orange-500 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-orange-400 transition-colors">
                        Login
                    </div>
                </div>
            </div>
        </nav>

    )

}
export default BasicMenu;