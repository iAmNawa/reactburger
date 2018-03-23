import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import DifferentOne from '../DifferentPaths/DifferentOne';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide'},
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' },
            { id: 4, title: 'PWA - The Complete Guide' },
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <Link to={'/courses/' + course.id} key={course.id}><article key={course.id} className="Course">{course.title}</article></Link>;
                        } )
                    }
                </section>
                <Route path="/courses/1/" component={DifferentOne} />
                <Route path="/courses/2/" component={DifferentOne} />
                <Route path="/courses/3/" component={DifferentOne} />
                <Route path="/courses/4/" component={DifferentOne} />
            </div>
        );
    }
}

export default Courses;
