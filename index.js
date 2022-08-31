import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import ImageRemovebgPreview from "./ImageRemovebgPreview/ImageRemovebgPreview.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  ImageRemovebgPreview: new ImageRemovebgPreview({
    x: -122,
    y: -171,
    direction: 90,
    costumeNumber: 2,
    size: 20,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
