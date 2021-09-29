import React from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Pdf from '../../components/Pdf/Pdf';

export default function Resume() {
    return (
        <div className="resume-container">
            <NavigationBar />
            <Pdf />
        </div>
    )
}
