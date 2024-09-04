

import { useContext, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';
import Navbar from './pages/shared/Navbar';
import FooterMain from './pages/shared/FooterMain';

function App() {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {
        setCartItems([...cartItems, book]);
    };

    return (
        <>
            <Navbar cartItems={cartItems} />
            <div className='min-h-screen'>
                <Outlet context={{ addToCart }} />
            </div>
            <FooterMain />
        </>
    );
}

export default App;
