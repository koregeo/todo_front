import React from 'react';
import SingleContent from './SingleContent';

const Content = () => {


    return(
        <section className="content-section">
            <div className="recent-tasks">
                <h3>Recent Tasks (7)</h3>
                <button className="task-btn">+ New Task</button>
            </div>
            <div className="grid-container">
                <SingleContent />
                <SingleContent />
                <SingleContent />
                <SingleContent />
                <SingleContent />
                <SingleContent />
            </div>
        </section>
    );
}


export default Content;