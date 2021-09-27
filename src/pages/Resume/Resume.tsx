import React from 'react'
import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Pdf from '../../components/Pdf/Pdf';

export default function Resume() {
    return (
        <div className="resume-container">
            <NavigationBar />
            <Pdf />
            <Footer />
        </div>
    )
}
