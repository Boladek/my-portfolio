import React from 'react';
import './Home.css';
import Welcome from '../../components/Welcome/Welcome';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

export default function Home() {
    return (
        <>
        <NavigationBar />
        <div className="home">
            <Welcome />
        </div>
        </>
    )
}
