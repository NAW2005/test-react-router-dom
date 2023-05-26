import { Navigate } from 'react-router-dom'
import "../pages/page.css"

const Admin = () => {

    if (localStorage.getItem("token")) {
        return (
            <h1 className='container'>Welcome to Admin Page</h1>
        )
    } else {
        return <Navigate to={-1} />
    }
}
 
export default Admin