import React from 'react';
import './Home.css';
import { TitleScreen } from '../HomeSections/TitleScreen';
import { VirtueSlider } from '../HomeSections/VirtueSlider';
import { PlaygroundScreen } from '../HomeSections/PlaygroundScreen';

export const Home = () => {
  return (
    <div className="home-container">
      <section id="home" className="title-screen-section fullscreen-section">
        <TitleScreen />
      </section>

      <section id="playground" className="playground-section fullscreen-section">
        <PlaygroundScreen />
      </section>
    </div>
  );
};