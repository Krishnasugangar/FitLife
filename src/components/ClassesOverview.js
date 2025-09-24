import React from 'react';
import ClassesSplitSection from './ClassesSplitSection';
import './ClassesOverview.css';
import ClassFeature from './ClassFeature';
import BoxingClassFeature from './BoxingClassFeature';
import YogaClassFeature from './YogaClassFeature';
import StrengthTrainingFeature from './StrengthTrainingFeature';

const ClassesOverview = () => (
  <>
    <section className="classes-hero">
      <h1 className="classes-title">CLASSES OVERVIEW</h1>
      <img
        src="/class-hero.jpg" // put your hero image in public folder
        alt="Fitness class hero"
        className="hero-img"
      />
    </section>
    <ClassesSplitSection />
    <ClassFeature />
    <BoxingClassFeature />
    <YogaClassFeature />
    <StrengthTrainingFeature />
  </>
);

export default ClassesOverview;
