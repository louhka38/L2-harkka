import About from "./about";
import HexConverter from "./hex-converter";
import Counter from './counter';
import Fade from "./fade";
import { OS } from "./os";
import { Counter2 } from "./counter2";
import Calc from "./calc";
import Counter3 from "./counter3";

export const screens = [
    {
        name: 'About',
        component: About
    },
    {
        name: 'Hex-converter',
        component: HexConverter
    },
    {
        name: 'Counter',
        component: Counter
    },
    {
        name: 'Counter2',
        component: Counter2
    },
    {
        name: 'Fade',
        component: Fade
    },
    {
        name: 'OS',
        component: OS
    },
    {
        name: 'Calc',
        component: Calc
    },
    {
        name: 'Counter3',
        component: Counter3
    }
];