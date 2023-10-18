import { Outlet } from 'react-router-dom';
import BookHeader from '../BookHeader/BookHeader';

const Layout = () => {



    return (
        <div>
            <BookHeader />
            <Outlet />
        </div>
    )
}

export default Layout