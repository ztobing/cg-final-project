import React, { Component } from 'react';
import * as BABYLON from "babylonjs";
import Globals from './Globals';

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.boxMesh = undefined;
        this.state = {  }
    }

    componentDidMount() {
        this.addModels();
    }

    componentWillUnmount() {
        this.boxMesh.dispose();
    }

    addModels = () => {
        let posX = this.props.posX ? this.props.posX : 0;
        let posY = this.props.posY ? this.props.posY : 0;
        let posZ = this.props.posZ ? this.props.posZ : 0;

        // Add BOX
        this.boxMesh = BABYLON.MeshBuilder.CreateBox(
            `testComponent_${posX},${posY},${posZ}`,
            { height: 1, width: 1, depth: 1 },
            Globals.scene
        );

        // Position the mesh based on the component props
        this.boxMesh.position.x = posX;
        this.boxMesh.position.y = posY;
        this.boxMesh.position.z = posZ;

        var woodMaterial = new BABYLON.StandardMaterial("wood", Globals.scene);
        woodMaterial.diffuseTexture = new BABYLON.Texture(
            "./assets/portal_cube.png",
            Globals.scene
        );
        this.boxMesh.material = woodMaterial;

        const frameRate = 60;
        const spawnAnimation = new BABYLON.Animation(
            "spawnAnimationspawnAnimation", 
            "scaling", 
            frameRate, 
            BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
        );
        
        const keyFrames = [];
        keyFrames.push({
            frame: 0,
            value: new BABYLON.Vector3(0, 0, 0),
        });
        keyFrames.push({
            frame: 0.3 * frameRate,
            value: new BABYLON.Vector3(1, 1 ,1),
        });
        spawnAnimation.setKeys(keyFrames);

        this.boxMesh.animations.push(spawnAnimation);
        Globals.scene.beginAnimation(this.boxMesh, 0, 0.3 * frameRate, false);
    };

    render() { 
        return ( 
            <div className="TestComponent"></div>
         );
    }
}
 
export default TestComponent;