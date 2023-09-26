
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { SkinsAndAnimationBoundsProvider } from "@esotericsoftware/spine-phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";
import StartAnimationComp from "../components/StartAnimationComp";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// text
		const text = this.add.text(640, 576, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser 3 + Spine + Phaser Editor 2D\nWebpack + TypeScript";
		text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

		// goblin
		const goblin = this.add.spine(454, 480, "goblins", "goblins-atlas", new SkinsAndAnimationBoundsProvider(null, ["goblin"]));
		goblin.skeleton.setSkinByName("goblin");

		// goblinGirl
		const goblinGirl = this.add.spine(800, 480, "goblins", "goblins-atlas", new SkinsAndAnimationBoundsProvider(null, ["goblingirl"]));
		goblinGirl.skeleton.setSkinByName("goblingirl");
		goblinGirl.scaleX = -1;

		// goblin (components)
		const goblinStartAnimationComp = new StartAnimationComp(goblin);
		goblinStartAnimationComp.animationName = "walk";

		// goblinGirl (components)
		const goblinGirlStartAnimationComp = new StartAnimationComp(goblinGirl);
		goblinGirlStartAnimationComp.animationName = "walk";

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
