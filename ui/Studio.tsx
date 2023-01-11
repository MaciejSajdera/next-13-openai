import React from 'react';
import Track from './Track';

type WAV = {
  [key: string]: any;
};

type Artists = string;

type Props = {
  vibes: {};
  host: string;
  guest: string;
  vocals: WAV;
  beat: WAV;
  drums: WAV;
  bass: WAV;
  chords: WAV;
};

const mix = (vocals: WAV, beat: WAV) => {
  const mixed = new Audio();
  return mixed;
};

const getVocals = async () => {
  const response = await fetch('https://saiyan161.pl/wokale/1');
  const data = await response.json();
  const saiyan161Vocals = new Audio(data);
  return saiyan161Vocals;
};

const getBeat = async () => {
  const response = await fetch(
    'https://soundcloud.com/well_unknown/dojebany-beat-1',
  );
  const wellUnknownBeat = await response.json();
  return wellUnknownBeat;
};

// Path: ui\studio.tsx
const Studio = ({ vibes }: Props) => {
  const [dojebanyBeat, setBeat] = React.useState<WAV>(new Audio());
  const [vocals, setVocals] = React.useState<WAV>(new Audio());
  const [collabo, setCollabo] = React.useState<Artists>();

  React.useEffect(() => {
    setCollabo('Saiyan161 feat. JB Lamond (prod.WellUnknown)');
    getBeat().then((beat) => {
      setBeat(beat);
    });
    getVocals().then((vocals) => {
      setVocals(vocals);
    });
  }, [vibes]);

  mix(vocals, dojebanyBeat);

  return <h1>Stay tuned for this {collabo} xx</h1>;
};

export default Studio;
