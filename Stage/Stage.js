/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cenário1", "./Stage/costumes/cenário1.svg", {
        x: 359.7859271625142,
        y: 269.5863144294024
      }),
      new Costume("cenário2", "./Stage/costumes/cenário2.svg", {
        x: 363.1232489508552,
        y: 269.1734428245384
      }),
      new Costume("cenário3", "./Stage/costumes/cenário3.svg", {
        x: 381.54057081382047,
        y: 271.29106573299424
      }),
      new Costume("Game over!", "./Stage/costumes/Game over!.jpg", {
        x: 360,
        y: 360
      }),
      new Costume("nivel 2", "./Stage/costumes/nivel 2.svg", {
        x: 359.31767644108953,
        y: 285.05069858677035
      }),
      new Costume("Nivel 3", "./Stage/costumes/Nivel 3.svg", {
        x: 360.819177942591,
        y: 286.5522000882719
      }),
      new Costume("Parabens", "./Stage/costumes/Parabens.svg", {
        x: 233.0688209409703,
        y: 47.11719365021776
      })
    ];

    this.sounds = [new Sound("saltar", "./Stage/sounds/saltar.wav")];

    this.triggers = [];

    this.vars.minhaVariVel = 0;
  }
}
