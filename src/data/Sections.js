import React from 'react';
import Card from '../components/Card';
import CardReveal from '../components/CardReveal';
import CardPanel from '../components/CardPanel';
import Bar from '../components/Bar';

import works from './Works';
import skils from './Skils';
import courses from './Courses';
import projects from './Projects';

function renderAbout() {
    return <CardPanel />;
}

function renderWorks() {
    return works.map((v, k) => {
        return (
            <Card
                key={k}
                title={v.company + ' - ' + v.position}
                startDate={v.startDate}
                endDate={v.endDate}
                link={v.companyLink}
                desc1={'Projects: ' + v.projects}
                desc2={'Used Tech: ' + v.usedTech}
            />
        );
    });
}

function renderSkils() {
    return skils.map((v, k) => {
        return (
            <Bar
                key={k}
                title={v.skil}
                percent={v.percent}
            />
        )
    });
}

function renderCourses() {
    return courses.map((v, k) => {
        return (
            <Card
                key={k}
                title={v.company}
                startDate={v.startDate}
                endDate={v.endDate}
                link={v.companyLink}
                desc1={'Projects: '}
                desc1Data={v.projects}
                desc2={'Learned Tech: ' + v.learnedTech}
            />
        );
    });
}

function renderProjects() {
    return projects.map((v, k) => {
        return (
            <CardReveal
                key={k}
                title={v.title}
                link={v.projectLink}
                image={v.imageLink}
                desc1={'Used Tech: ' + v.tech}
                desc2={v.description}
            />
        )
    });
}

export default [
    {
        id: 'about',
        title: 'About',
        func: renderAbout
    },
    {
        id: 'works',
        title: 'Recently Works',
        func: renderWorks
    },
    {
        id: 'skils',
        title: 'Skils',
        func: renderSkils
    },
    {
        id: 'courses',
        title: 'Courses',
        func: renderCourses
    },
    {
        id: 'projects',
        title: 'Projects',
        func: renderProjects
    }
]