import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ENVIRONMENT from '../gameObjects/_ENVIRONMENT';
import Globals from '../../Globals';

// Babylon Objects
import StoneBlock from '../gameObjects/StoneBlock';
import GrassBlock from '../gameObjects/GrassBlock';
import PathBlock from '../gameObjects/PathBlock';
import TreeOne from '../gameObjects/TreeOne';
import TreeTwo from '../gameObjects/TreeTwo';
import RockOne from '../gameObjects/RockOne';
import RockTwo from '../gameObjects/RockTwo';
import Campfire from '../gameObjects/Campfire';
import Tent from '../gameObjects/Tent';
import Fence from '../gameObjects/Fence';
import Character from '../gameObjects/Character';

// UI and Code Engine
import ObjectivePoint from '../gameObjects/ObjectivePoint';

class MainMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            environmentSpawned: false
        }

        // Update allowed functions
        this.allowedBlocks = ["WALK", "TURN"];

        // level[y][x][z]
        this.level = [ 
            [   // First Layer
                [0, 0, 1, 0, 0],
                [0, 1, 1, 1, 0],
                [1, 1, 1, 1, 1],
                [0, 1, 1, 1, 0],
                [0, 0, 1, 0, 0],
            ],
            [   // Second Layer
                [0, 1, 1, 1, 0],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [0, 1, 1, 1, 0],
            ],
            [   // ...
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
            ],
            [
                [2, 2, 2, 2, 2],
                [2, 3, 3, 3, 2],
                [2, 2, 2, 3, 2],
                [2, 2, 2, 3, 2],
                [2, 2, 2, 2, 2],
            ],
            [
                [0, 13, 0, 0, 11],
                [0, 0, 0, 0, 0],
                [0, 18, 0, 0, 19],
                [0, 0, 0, 99, 0],
                [0, 10, 0, 12, 0],
            ]
        ]
        this.yOffset = 3;
        Globals.currentLevel = this;
    }

    componentDidMount() {
        Globals.babylonCanvas.disableCameraControl();
    }

    spawnEnvironmentItem(x, y, z, type) {
        // Apply y spawn offset
        y -= this.yOffset;

        switch(type) {
            case ENVIRONMENT.NONE:
                return <div></div>
            case ENVIRONMENT.STONE:
                return <StoneBlock posX={x} posY={y} posZ={z} yOffset={this.yOffset}/>;
            case ENVIRONMENT.GRASS:
                return <GrassBlock posX={x} posY={y} posZ={z} yOffset={this.yOffset}/>;
            case ENVIRONMENT.PATH:
                return <PathBlock posX={x} posY={y} posZ={z} yOffset={this.yOffset}/>;
            case ENVIRONMENT.OBJECTIVE:
                return <ObjectivePoint posX={x} posY={y} posZ={z} yOffset={this.yOffset}/>;
            case ENVIRONMENT.TREE_1:
                return <TreeOne posX={x} posY={y} posZ={z} yOffset={this.yOffset}/>;
            case ENVIRONMENT.TREE_2:
                return <TreeTwo posX={x} posY={y} posZ={z} yOffset={this.yOffset}/>;
            case ENVIRONMENT.ROCK_1:
                return <RockOne posX={x} posY={y} posZ={z} yOffset={this.yOffset}/>;
            case ENVIRONMENT.ROCK_2:
                return <RockTwo posX={x} posY={y} posZ={z} yOffset={this.yOffset}/>;
            case ENVIRONMENT.CAMPFIRE:
                return <Campfire posX={x} posY={y} posZ={z} yOffset={this.yOffset}/>;
            case ENVIRONMENT.TENT:
                return <Tent posX={x} posY={y} posZ={z} yOffset={this.yOffset}/>;
            case ENVIRONMENT.FENCE:
                return <Fence posX={x} posY={y} posZ={z} yOffset={this.yOffset}/>;
            default:
                return <div></div>;
        }
    }

    render() {
        return (
            <div>
                {/* Level Details */}
                <div className="levelPanel mainMenuPanel">
                    <h1>
                        Learn<br/>
                        to<br/>
                        Code
                    </h1>
                    <p>
                        Learn the concepts of coding by helping the orange guy
                        walk to the checkpoint.
                    </p>
                    <Link
                        className="btn btn-lg btn-primary btn-block"
                        to="/cg-final-project/level-1"
                    >
                        Start Game
                    </Link>
                </div>

                {/* Spawn map environment */}
                {
                    // Spawn the map according to this.level
                    this.level.map((yData, yIndex) => {
                        return <div className={`env_y_${yIndex}`} key={yIndex}> {
                            yData.map((xData, xIndex) => {
                                return <div className={`env_x_${xIndex}`} key={xIndex}> {
                                    xData.map((zData, zIndex) => {
                                        return <div className={`env_z_${zIndex}`} key={zIndex}> {
                                            this.spawnEnvironmentItem(
                                                xIndex, yIndex, zIndex, zData
                                            )
                                        } </div>
                                    })
                                } </div>
                            })
                        } </div>
                    })
                }

                {/* Spawn player object */}
                <Character posX={1} posY={1} posZ={1} yOffset={this.yOffset} faceDirection={2}/>
            </div>
        )
    }
}

export default MainMenu
