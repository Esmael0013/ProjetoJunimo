/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ImageRemovebgPreview extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "image-removebg-preview",
        "./ImageRemovebgPreview/costumes/image-removebg-preview.png",
        { x: 150, y: 141 }
      ),
      new Costume(
        "image-removebg-preview4",
        "./ImageRemovebgPreview/costumes/image-removebg-preview4.png",
        { x: 150, y: 141 }
      ),
      new Costume(
        "image-removebg-preview3",
        "./ImageRemovebgPreview/costumes/image-removebg-preview3.png",
        { x: 150, y: 141 }
      )
    ];

    this.sounds = [
      new Sound("Connect", "./ImageRemovebgPreview/sounds/Connect.wav"),
      new Sound("G Ukulele", "./ImageRemovebgPreview/sounds/G Ukulele.wav"),
      new Sound(
        "Video Game 2",
        "./ImageRemovebgPreview/sounds/Video Game 2.wav"
      ),
      new Sound("Bonk", "./ImageRemovebgPreview/sounds/Bonk.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6)
    ];
  }

  *whenKeySpacePressed() {
    while (true) {
      yield* this.wait(0.5);
      this.costumeNumber += 1;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    yield* this.playSoundUntilDone("Connect");
    this.goto(0, 0);
    this.size = 60;
    this.stage.costume = "cenário1";
    yield* this.wait(1);
    yield* this.askAndWait("Qual o seu nome?");
    yield* this.startSound("Connect");
    yield* this.wait(1);
    this.say("Legal!");
    yield* this.wait(1);
    yield* this.askAndWait("Vamos começar?");
    if ("Sim" == this.answer) {
      yield* this.startSound("Connect");
      this.say("Objetivo; Encontre todas as frutas estrelas do mapa!");
      yield* this.wait(5);
      this.stage.costume = "cenário2";
      this.size = 20;
      this.goto(-122, -171);
      yield* this.startSound("Connect");
      yield* this.wait(4);
      this.say("Não encoste nas paredes vermelhas pois você....");
      yield* this.wait(4);
      this.say("");
      while (!null) {
        yield* this.playSoundUntilDone("Video Game 2");
        yield;
      }
    } else {
      yield* this.playSoundUntilDone("G Ukulele");
      this.stage.costume = "cenário3";
      this.say('Você deve responder "Sim" para continuar!');
      yield* this.wait(4);
      this.say('Pressione "Bandeira Verde"');
    }
  }

  *whenGreenFlagClicked2() {
    while (!this.touching(Color.rgb(255, 0, 0))) {
      yield;
    }
    this.stage.costume = "Game over!";
    yield* this.startSound("Bonk");
    this.say('Clique "Bandeira verde" para reiniciar');
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.keyPressed("w")) {
        this.y += 4;
      }
      if (this.keyPressed("s")) {
        this.y += -4;
      }
      if (this.keyPressed("a")) {
        this.x += -4;
      }
      if (this.keyPressed("d")) {
        this.x += 4;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      while (!this.touching(Color.rgb(202, 132, 255))) {
        yield;
      }
      this.goto(-190, -170);
      this.stage.costume = "nivel 2";
      yield* this.startSound("Connect");
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      while (!this.touching(Color.rgb(1, 199, 255))) {
        yield;
      }
      this.goto(-190, -170);
      this.stage.costume = "Nivel 3";
      yield* this.startSound("Connect");
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      while (!this.touching(Color.rgb(207, 255, 0))) {
        yield;
      }
      this.goto(-190, -170);
      this.stage.costume = "Parabens";
      yield* this.startSound("Connect");
      yield* this.wait(3);
      yield;
    }
  }
}
