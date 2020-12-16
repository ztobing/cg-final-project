(this["webpackJsonpcg-final-project"]=this["webpackJsonpcg-final-project"]||[]).push([[0],{30:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a,i,o=n(0),r=n(1),c=n.n(r),s=n(21),l=n.n(s),d=n(3),u=n(10),h=n(5),p=n(4),m=n(15),f=n(6),b=(n(28),n(2)),j=new function e(){Object(d.a)(this,e),this.scene=void 0,this.engine=void 0,this.framerate=60,this.character=void 0,this.addBlockModal=void 0},O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).componentDidMount=function(){o.engine=new b.Engine(o.canvas,!0),j.scene=new b.Scene(o.engine),o.addLight(),o.addCamera(),o.addSkybox(),window.addEventListener("resize",o.onWindowResize,!1),window.addEventListener("keydown",o.onKeydownEvent),o.engine.runRenderLoop((function(){j.scene.render()})),j.scene.registerBeforeRender((function(){}))},o.onWindowResize=function(e){o.engine.resize()},o.onKeydownEvent=function(e){switch(e.keyCode){case 219:j.scene.debugLayer.show();break;case 221:j.scene.debugLayer.hide()}},o.addLight=function(){o.hemisphericLight=new b.HemisphericLight("hemisphericLight",new b.Vector3(0,1,0),j.scene),o.underMapLighting=new b.SpotLight("underMapLight",new b.Vector3(2,-10,2),new b.Vector3(0,1,0),Math.PI,8,j.scene)},o.addSkybox=function(){var e=b.Mesh.CreateSphere("skybox",16,50,a),t=new b.StandardMaterial("skyboxMaterial",a);t.emissiveTexture=new b.Texture("assets/other/skybox.png",j.scene,1,0),t.diffuseColor=new b.Color3(0,0,0),t.specularColor=new b.Color3(0,0,0),t.emissiveTexture.uOffset=-Math.PI/2,t.emissiveTexture.uOffset=.1,t.backFaceCulling=!1,e.material=t},o.addCamera=function(){o.arcRotateCamera=new b.ArcRotateCamera("MainCamera",Math.PI/2,Math.PI/4,10,new b.Vector3(2,0,2),j.scene),o.arcRotateCamera.panningSensibility=0,o.arcRotateCamera.lowerRadiusLimit=o.arcRotateCamera.upperRadiusLimit=10,o.arcRotateCamera.attachControl(o.canvas,!0),o.arcRotateCamera.setPosition(new b.Vector3(7,7,7)),o.arcRotateCamera.beta=Math.PI/2.5},o.addGround=function(){var e=b.MeshBuilder.CreateGround("ground1",{height:6,width:6,subdivisions:2},a),t=new b.StandardMaterial("grass0",a);t.diffuseTexture=new b.Texture("./assets/ground.jpeg",a),e.material=t},o.addModels=function(){(i=b.MeshBuilder.CreateBox("box",{height:1,width:1,depth:1},a)).position.y=1;var e=new b.StandardMaterial("wood",a);e.diffuseTexture=new b.Texture("./assets/portal_cube.png",a),i.material=e},o.state={useWireFrame:!1,shouldAnimate:!1},o.hemisphericLight=void 0,o.underMapLighting=void 0,o.arcRotateCamera=void 0,o}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onWindowResize,!1)}},{key:"render",value:function(){var e=this;return Object(o.jsx)("canvas",{className:"renderCanvas",ref:function(t){e.canvas=t}})}}]),n}(r.Component),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:"REEEE"})})}}]),n}(r.Component),g=n(12),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onChangeSelection=function(e){a.setState({selectedBlockType:e.target.value})},a.onCancelClicked=function(e){a.setState({selectedBlockType:null})},a.onAddButtonClicked=function(){console.log("Adding ".concat(a.state.selectedBlockType," block")),a.targetParent.addBlock(a.state.selectedBlockType)},a.state={selectedBlockType:null},a.targetParent=void 0,j.addBlockModal=Object(g.a)(a),a}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{id:"addBlockModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true",children:Object(o.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-lg",role:"document",children:Object(o.jsxs)("div",{className:"modal-content",children:[Object(o.jsxs)("div",{className:"modal-header",children:[Object(o.jsx)("h4",{className:"modal-title",id:"myModalLabel",children:"Add Function"}),"                        "]}),Object(o.jsx)("div",{className:"modal-body",children:Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{type:"radio",value:"WALK",checked:"WALK"===this.state.selectedBlockType,onChange:this.onChangeSelection}),Object(o.jsx)("label",{children:"Walk"}),Object(o.jsx)("input",{type:"radio",value:"TURN",checked:"TURN"===this.state.selectedBlockType,onChange:this.onChangeSelection}),Object(o.jsx)("label",{children:"Turn"}),Object(o.jsx)("input",{type:"radio",value:"LOOP",checked:"LOOP"===this.state.selectedBlockType,onChange:this.onChangeSelection}),Object(o.jsx)("label",{children:"Loop"}),Object(o.jsx)("input",{type:"radio",value:"IF",checked:"IF"===this.state.selectedBlockType,onChange:this.onChangeSelection}),Object(o.jsx)("label",{children:"If"})]})}),Object(o.jsxs)("div",{className:"modal-footer",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-success","data-dismiss":"modal",disabled:null===this.state.selectedBlockType,onClick:this.onAddButtonClicked,children:"Add"}),Object(o.jsx)("button",{type:"button",className:"btn btn-light","data-dismiss":"modal",onClick:this.onCancelClicked,children:"Cancel"})]})]})})})}}]),n}(r.Component),C=(n(29),n(30),Object.freeze(new function e(){Object(d.a)(this,e),this.NONE=0,this.STONE=1,this.GRASS=2,this.PATH=3,this.WALKABLE_BLOCKS=[this.PATH]})),A=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.createMesh(),a.applyMaterial(),a.startSpawnAnimation()},a.componentWillUnmount=function(){a.mesh.dispose()},a.createMesh=function(){var e=a.props.posX?a.props.posX:0,t=a.props.posY?a.props.posY:0,n=a.props.posZ?a.props.posZ:0;a.mesh=b.MeshBuilder.CreateBox("stoneBlock_".concat(e,",").concat(t,",").concat(n),{height:1,width:1,depth:1},j.scene),a.mesh.position.x=e,a.mesh.position.y=t,a.mesh.position.z=n},a.applyMaterial=function(){var e=new b.StandardMaterial("StoneBlockMaterial",j.scene);e.diffuseTexture=new b.Texture("assets/textures/stone.png",j.scene),e.diffuseTexture.updateSamplingMode(b.Texture.NEAREST_NEAREST_MIPLINEAR),e.specularColor=new b.Color3(0,0,0),e.backFaceCulling=!1,a.mesh.material=e},a.startSpawnAnimation=function(){var e=new b.Animation("spawnAnimation","scaling",j.framerate,b.Animation.ANIMATIONTYPE_VECTOR3,b.Animation.ANIMATIONLOOPMODE_CYCLE),t=.2*((a.props.yOffset?a.props.yOffset:0)+(a.props.posY?a.props.posY:0))+1,n=[];n.push({frame:0,value:b.Vector3.Zero()}),n.push({frame:t*j.framerate,value:b.Vector3.Zero()}),n.push({frame:t*j.framerate+.3*j.framerate,value:b.Vector3.One()}),e.setKeys(n),a.mesh.animations.push(e),j.scene.beginAnimation(a.mesh,0,t*j.framerate+.3*j.framerate,!1)},a.render=function(){return Object(o.jsx)("div",{})},a.mesh=void 0,a}return n}(r.Component),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.createMesh(),a.applyMaterial(),a.startSpawnAnimation()},a.componentWillUnmount=function(){a.mesh.dispose()},a.createMesh=function(){var e=a.props.posX?a.props.posX:0,t=a.props.posY?a.props.posY:0,n=a.props.posZ?a.props.posZ:0;a.mesh=b.MeshBuilder.CreateBox("grassBlock_".concat(e,",").concat(t,",").concat(n),{height:1,width:1,depth:1},j.scene),a.mesh.position.x=e,a.mesh.position.y=t,a.mesh.position.z=n},a.applyMaterial=function(){var e=new b.StandardMaterial("GrassBlockMaterial",j.scene);e.reflectionTexture=new b.CubeTexture("assets/textures/grass/grass",j.scene),e.reflectionTexture.coordinatesMode=b.Texture.SKYBOX_MODE,e.reflectionTexture.updateSamplingMode(b.Texture.NEAREST_NEAREST_MIPLINEAR),e.diffuseColor=new b.Color3(0,0,0),e.specularColor=new b.Color3(0,0,0),e.backFaceCulling=!1,a.mesh.material=e},a.startSpawnAnimation=function(){var e=new b.Animation("spawnAnimation","scaling",j.framerate,b.Animation.ANIMATIONTYPE_VECTOR3,b.Animation.ANIMATIONLOOPMODE_CYCLE),t=.2*((a.props.yOffset?a.props.yOffset:0)+(a.props.posY?a.props.posY:0))+1,n=[];n.push({frame:0,value:b.Vector3.Zero()}),n.push({frame:t*j.framerate,value:b.Vector3.Zero()}),n.push({frame:t*j.framerate+.3*j.framerate,value:b.Vector3.One()}),e.setKeys(n),a.mesh.animations.push(e),j.scene.beginAnimation(a.mesh,0,t*j.framerate+.3*j.framerate,!1)},a.render=function(){return Object(o.jsx)("div",{})},a.mesh=void 0,a}return n}(r.Component),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.createMesh()},a.componentWillUnmount=function(){j.character=void 0,a.mesh.dispose(),a.idleAnimation=a.walkingAnimation=null},a.createMesh=function(){var e=a.props.posX?a.props.posX:0,t=a.props.posY?a.props.posY:0,n=a.props.posZ?a.props.posZ:0,i=a.props.faceDirection?a.props.faceDirection:0;a.mesh=b.MeshBuilder.CreateBox("character",{height:1,width:1,depth:1},j.scene);var o=new b.Material("characterParentMaterial");o.alpha=0,a.mesh.position=new b.Vector3(e,t,n),a.mesh.material=o,a.characterModel=b.SceneLoader.ImportMesh("","assets/obj/","character_running.glb",j.scene,(function(o,r,c,s){a.characterModelMeshes=o,a.idleAnimation=s[0],a.walkingAnimation=s[1],o.forEach((function(i){i.scaling=new b.Vector3(.1,.1,.1),i.position=new b.Vector3(e+a.xOffset,t+a.yOffset,n+a.zOffset);var o=new b.StandardMaterial("characterMaterial");o.specularColor=new b.Color3(1,1,1),o.diffuseColor=new b.Color3(1,.6,0),o.backFaceCulling=!1,o.ambientColor=new b.Color3(.23,.98,.53),i.material=o,i.setParent(a.mesh)})),a.characterFaceDirection=i,a.mesh.rotation.y+=.5*Math.PI*i}))},a.walk=function(){var e=a.characterFaceDirection%2===0?"z":"x",t=a.characterFaceDirection>=2?1:-1,n=new b.Animation("characterTurnleft","position.".concat(e),j.framerate,b.Animation.ANIMATIONTYPE_FLOAT,b.Animation.ANIMATIONLOOPMODE_CYCLE),i=[];i.push({frame:0,value:"x"===e?a.mesh.position.x:a.mesh.position.z}),i.push({frame:a.animationSpeed*j.framerate,value:("x"===e?a.mesh.position.x:a.mesh.position.z)+t}),n.setKeys(i),a.mesh.animations.length>0&&a.mesh.animations.pop(),a.mesh.animations.push(n),j.scene.beginAnimation(a.mesh,0,a.animationSpeed*j.framerate,!1),a.idleAnimation.stop(),a.walkingAnimation.start(!1,2,a.walkingAnimation.from,a.walkingAnimation.to,!1),setTimeout((function(){a.walkingAnimation.stop(),a.idleAnimation.start(!0,1,a.idleAnimation.from,a.idleAnimation.to,!1)}),1e3*a.animationSpeed)},a.turnLeft=function(){0===a.characterFaceDirection?a.characterFaceDirection=3:a.characterFaceDirection=Math.abs((a.characterFaceDirection-1)%4),console.log("Rotating player to ".concat(a.characterFaceDirection));var e=new b.Animation("characterTurnleft","rotation.y",j.framerate,b.Animation.ANIMATIONTYPE_FLOAT,b.Animation.ANIMATIONLOOPMODE_CYCLE),t=[];t.push({frame:0,value:a.mesh.rotation.y}),t.push({frame:a.animationSpeed*j.framerate,value:a.mesh.rotation.y-Math.PI/2}),e.setKeys(t),a.mesh.animations.length>0&&a.mesh.animations.pop(),a.mesh.animations.push(e),j.scene.beginAnimation(a.mesh,0,a.animationSpeed*j.framerate,!1)},a.turnRight=function(){a.characterFaceDirection=Math.abs((a.characterFaceDirection+1)%4),console.log("Rotating player to ".concat(a.characterFaceDirection));var e=new b.Animation("characterTurnleft","rotation.y",j.framerate,b.Animation.ANIMATIONTYPE_FLOAT,b.Animation.ANIMATIONLOOPMODE_CYCLE),t=[];t.push({frame:0,value:a.mesh.rotation.y}),t.push({frame:a.animationSpeed*j.framerate,value:a.mesh.rotation.y+Math.PI/2}),e.setKeys(t),a.mesh.animations.length>0&&a.mesh.animations.pop(),a.mesh.animations.push(e),j.scene.beginAnimation(a.mesh,0,a.animationSpeed*j.framerate,!1)},a.render=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:a.walk,children:"Move Forward"}),Object(o.jsx)("button",{onClick:a.turnLeft,children:"Turn Left"}),Object(o.jsx)("button",{onClick:a.turnRight,children:"Turn Right"})]})},a.mesh=void 0,a.characterModel=void 0,a.characterModelMeshes=void 0,a.characterFaceDirection=0,a.xOffset=0,a.yOffset=-.5,a.zOffset=0,a.animationSpeed=.5,a.turnLeftAnimation=void 0,a.idleAnimation=void 0,a.walkingAnimation=void 0,j.character=Object(g.a)(a),a}return n}(r.Component),M=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onButtonClicked=function(){j.addBlockModal.targetParent=a.props.targetParent},a.render=function(){return Object(o.jsx)("button",{className:"btnAddBlock","data-toggle":"modal","data-target":"#addBlockModal",onClick:a.onButtonClicked,children:"+"})},a.state={blockCountLimit:null},a.targetParent=e.targetParent,a}return n}(r.Component),k=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).onDeleteButtonClicked=function(){},e.render=function(){return Object(o.jsx)("div",{className:"block function",index:e.props.index,children:"Walk"})},e}return n}(r.Component),T=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){},a.startSimulation=function(){},a.addBlock=function(e){switch(e){case"WALK":a.setState((function(e){return{functions:e.functions.concat({type:"WALK"})}}));break;case"TURN":a.setState((function(e){return{functions:e.functions.concat({type:"TURN",direction:"LEFT"})}}));break;case"LOOP":a.setState((function(e){return{functions:e.functions.concat({type:"LOOP",loopCycles:1,children:[]})}}));break;default:console.error("Unknown code block type: ".concat(e))}},a.renderBlock=function(e,t){switch(e.type){case"WALK":return Object(o.jsx)(k,{index:t},t);default:return Object(o.jsxs)("div",{children:["Invalid data. Received ",JSON.stringify(e)]})}},a.render=function(){return Object(o.jsxs)("div",{className:"codeEngine",children:[a.state.functions.map((function(e,t){return a.renderBlock(e,t)})),Object(o.jsx)(M,{targetParent:Object(g.a)(a)})]})},a.state={functions:[],isRunning:!1},a.CODE_BLOCK_TYPE=Object.freeze({WALK:0,TURN:1,IF:2,LOOP:3}),a}return n}(r.Component),L=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"titlePanel",children:[Object(o.jsx)("h1",{children:this.props.heading}),Object(o.jsx)("p",{children:this.props.subheading})]})}}]),n}(r.Component),N=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).render=function(){return Object(o.jsxs)("div",{className:"instructionsPanel",children:[Object(o.jsx)("div",{className:"instructionsHeading",children:"Instructions"}),Object(o.jsx)("p",{children:e.props.children})]})},e}return n}(r.Component),S=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={environmentSpawned:!1},a.level=[[[0,0,1,0,0],[0,1,1,1,0],[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0]],[[0,1,1,1,0],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[0,1,1,1,0]],[[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]],[[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]]],a.yOffset=3,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"spawnEnvironmentItem",value:function(e,t,n,a){switch(t-=this.yOffset,a){case C.NONE:return Object(o.jsx)("div",{});case C.STONE:return Object(o.jsx)(A,{posX:e,posY:t,posZ:n,yOffset:this.yOffset});case C.GRASS:return Object(o.jsx)(w,{posX:e,posY:t,posZ:n,yOffset:this.yOffset});default:return Object(o.jsx)("div",{})}}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"levelPanel",children:[Object(o.jsx)(L,{heading:"Level One",subheading:"The Basics"}),Object(o.jsx)(T,{}),Object(o.jsxs)(N,{children:[Object(o.jsx)("b",{children:"Welcome to your first level!"}),Object(o.jsx)("br",{}),"To complete this level, you need to walk the character to the finish line using functions. To add a function, press the plus button above."]})]}),this.level.map((function(t,n){return Object(o.jsxs)("div",{className:"env_y_".concat(n),children:[" ",t.map((function(t,a){return Object(o.jsxs)("div",{className:"env_x_".concat(a),children:[" ",t.map((function(t,i){return Object(o.jsxs)("div",{className:"env_z_".concat(i),children:[" ",e.spawnEnvironmentItem(a,n,i,t)," "]},i)}))," "]},a)}))," "]},n)})),Object(o.jsx)(y,{posX:0,posY:1,posZ:0,faceDirection:2}),Object(o.jsx)("button",{"data-toggle":"modal","data-target":"#addBlockModal",className:"btn btn-sm text-white btn-success mr-2",children:"TEST ADD BLOCK MODAL"})]})}}]),n}(r.Component),E=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)(m.a,{children:[Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(v,{}),Object(o.jsxs)("ul",{style:{color:"white"},children:[Object(o.jsx)("li",{children:"Show Debugger: ["}),Object(o.jsx)("li",{children:"Hide Debugger: ]"}),Object(o.jsx)("li",{children:Object(o.jsx)(m.b,{to:"/cg-final-project/",children:"Load Main Menu"})}),Object(o.jsx)("li",{children:Object(o.jsx)(m.b,{to:"/cg-final-project/level-1",children:"Load Level 1"})})]}),Object(o.jsxs)("div",{className:"AppContainer",children:[Object(o.jsx)(O,{}),Object(o.jsx)(f.c,{className:"LevelContainer",children:Object(o.jsx)(f.a,{path:"/cg-final-project/level-1",children:Object(o.jsx)(S,{})})})]})]}),Object(o.jsx)(x,{})]})}}]),n}(r.Component),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),o(e),r(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root")),B()}},[[38,1,2]]]);
//# sourceMappingURL=main.fc2e2a5f.chunk.js.map