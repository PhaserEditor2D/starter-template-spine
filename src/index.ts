import Phaser from "phaser";
import Level from "./scenes/Level";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";
import { SpinePlugin } from "@esotericsoftware/spine-phaser";

class Boot extends Phaser.Scene {

	constructor() {
		super("Boot");
	}

	preload() {

		this.load.pack("pack", preloadAssetPackUrl);
	}

	create() {

		this.scene.start("Preload");
	}
}

window.addEventListener('load', function () {

	const game = new Phaser.Game({
		width: 1280,
		height: 720,
		backgroundColor: "#2f2f2f",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		plugins: {
			scene: [{
				key: "spine.SpinePlugin",
				plugin: SpinePlugin,
				mapping: "spine"
			}]
		},
		scene: [Boot, Preload, Level]
	});

	game.scene.start("Boot");
});