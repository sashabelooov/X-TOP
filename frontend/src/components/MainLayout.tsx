import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Categories from './Categories';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Navigation />
            <Categories />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
