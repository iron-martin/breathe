import React from 'react';
import './Home.css';
import { TitleScreen } from '../Sections/TitleScreen';
import { VirtueSlider } from '../Sections/VirtueSlider';
import { PlaygroundScreen } from '../Sections/PlaygroundScreen';

export const Home = () => {
  return (
    <div className="home-container">
      {/* Sección 1: Title Screen */}
      <section id="home" className="title-screen-section fullscreen-section">
        <TitleScreen />
      </section>

      {/* Sección 2: Slider de Virtudes */}
      <section id="virtues" className="slider-section fullscreen-section">
        <VirtueSlider />
      </section>

      {/* Sección 3: Playground Screen */}
      <section id="playground" className="playground-section fullscreen-section">
        <PlaygroundScreen />
      </section>
    </div>
  );
};