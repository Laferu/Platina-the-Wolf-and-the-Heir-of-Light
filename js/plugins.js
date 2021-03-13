// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"HIME_PreTitleEvents","status":true,"description":"Build your own sequence of events that should occur before\nthe title screen begins","parameters":{"Pre-Title Map ID":"34","Use As Title":"false"}},
{"name":"Community_Basic","status":false,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"animatedSVEnemies","status":true,"description":"Version: 1.15.5.1 - The Re-Remake\n- Lets enemies be animated!","parameters":{"Debug":"true","No Movement":"false","Enemies Celebrate":"true","SV Enemies Collapse":"false","Static Enemies Breathe":"true","AGI Effects Breathing":"true","Scale Statics by Distance":"true","Damage Slows Down Breathing":"true"}},
{"name":"animatedSVEnemiesYanflyEnginePatch","status":true,"description":"Version: 1.016\n- Makes animatedSVEnemies compatible with Yanfly's plugins.","parameters":{}},
{"name":"Moogle_X_PassiveSkill","status":false,"description":"v1.14 Adds passive skills functionality to actors.","parameters":{"Default Hide in Battle":"0","Hidden Skill Type ID in Battle":"0"}},
{"name":"GALV_CharacterAnimations","status":false,"description":"(v.1.7) Make the player and follower characters use different\r\ngraphics for idle, walk and run. View HELP for more info.","parameters":{"Use Jump Graphic":"true","Common Event ID":"0","Common Event Time":"0","Repeat Common Event":"0"}},
{"name":"DreamX_RunSprite","status":false,"description":"v1.0 Change sprites when dashing.","parameters":{}},
{"name":"MOG_CharPoses","status":false,"description":"(v2.1) Ativa poses de movimento no character.","parameters":{"Poses for Followers":"true","Dash Pose":"true","Jump Pose":"true","Idle Pose":"true","Idle Start Time":"60"}},
{"name":"HIME_ActorBattleCommands","status":true,"description":"v1.4 - Provides you with tools to customize and manage actor\r\nbattle commands.","parameters":{}},
{"name":"HIME_BattleCommandUseSkill","status":true,"description":"v1.2 - Allows you to use a skill directly from the command menu\r\nrather than going to the skill menu.","parameters":{}},
{"name":"state","status":false,"description":"","parameters":{}},
{"name":"Galv_DynamicTraits","status":true,"description":"(v.1.0) Add traits to an actor during game or gain traits on level up.","parameters":{"Display Trait On Level":"true","Trait Gained Text":"Gained Trait:"}},
{"name":"BattleCommonEvents","status":true,"description":"Calls common events during battle","parameters":{"battleStartEventID":"-1","battleWinEventID":"-1","battleEscapeEventID":"-1","partyWipeEventID":"-1","turnStartEventID":"-1","turnEndEventID":"7","actionEndEventID":"-1"}},
{"name":"ActorVoicesInBattle","status":false,"description":"v1.0.3 Grants you the ability to have your actors talk throughout\r\nbattle","parameters":{}},
{"name":"ActorVoicesInBattleConfig","status":false,"description":"","parameters":{}},
{"name":"changeTileSize","status":false,"description":"Allows maps based on a grid size other than 48x48\r\n<ChangeTileSize> v1.1","parameters":{"Tile Size":"24","Tileset Image Folder":"img/tilesets/","Parallax Image Folder":"img/parallaxes/"}},
{"name":"YEP_StatusMenuCore","status":true,"description":"v1.04 Changes the Status menu for your characters into\na hub that displays more character information.","parameters":{"---Settings---":"","Command Order":"General Parameters Elements States Attributes Custom Cancel","Command Window Width":"240","Command Window Rows":"4","Command Alignment":"center","---General---":"","General Command":"General","Parameters Text":"Parameters","Experience Text":"Experience","Total Format":"Total %1 for Next %2","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","---Parameters---":"","Parameters Command":"Parameters","Graph Text":"Parameter Graph","ATK Color":"#ed1c24 #f26c4f","DEF Color":"#f7941d #fdc689","MAT Color":"#605ca8 #bd8cbf","MDF Color":"#448ccb #a6caf4","AGI Color":"#39b54a #82ca9c","LUK Color":"#fff568 #fffac3","---Resist Colors---":"","Above 300%":"10","200% to 300%":"20","150% to 200%":"14","120% to 150%":"6","100% to 120%":"0","80% to 100%":"24","50% to 80%":"29","1% to 50%":"23","Exactly 0%":"31","Below 0%":"27","---Elements---":"","Elements Command":"Elements","Elements Decimal":"2","Element Column 1":"1","Element Column 2":"2 3 4 5 6 7 8 9","Element Column 3":"","Element Column 4":"","---States---":"","States Command":"States","States Decimal":"2","States Column 1":"1 4 5 6","States Column 2":"7 8 9 10","States Column 3":"","States Column 4":"","---Attributes---":"","Attributes Command":"Attributes","Attribute Font Size":"20","Attribute Decimal":"0","Attributes Column 1":"exr hit eva cri cev mev mrf cnt","Attributes Column 2":"mcr tcr pdr mdr fdr grd rec pha","Attributes Column 3":"hrg mrg trg tgr","Attributes Column 4":"","---XParam Names---":"","hit Name":"Hit Rate","eva Name":"Evasion Rate","cri Name":"Critical Hit Rate","cev Name":"Critical Evasion Rate","mev Name":"Magic Evasion Rate","mrf Name":"Magic Reflect Rate","cnt Name":"Counter Rate","hrg Name":"HP Regen Rate","mrg Name":"MP Regen Rate","trg Name":"TP Regen Rate","tgr Name":"Aggro Rate","grd Name":"Guard Effect","rec Name":"Recovery Effect","pha Name":"Pharmacology Effect","mcr Name":"MP Cost Rate","tcr Name":"TP Charge Rate","pdr Name":"Physical Damage Rate","mdr Name":"Magical Damage Rate","fdr Name":"Floor Damage Rate","exr Name":"Experience Rate"}},
{"name":"YEP_X_ProfileStatusPage","status":true,"description":"v1.03 (Requires YEP_StatusMenuCore.js) Places a Profile\nStatus Page in the status menu for your actors.","parameters":{"Command Name":"Profile","Default Profile":"true","Image Align":"right"}},
{"name":"BattleVoice","status":true,"description":"play voice SE at battle when actor does spcified action","parameters":{"pitch":"100","volume":"90"}},
{"name":"JKL_PersistentData","status":true,"description":"Jackkel's Persistent Data Plugin (v5)","parameters":{"Persistent Switches":"19","Save Switches when Set":"true","Persistent Variables":"14, 22","Save Variables when Set":"true"}},
{"name":"DisableMapRegen","status":true,"description":"Disables regeneration on maps.","parameters":{"Disable HP regen":"true","Disable MP regen":"true","Disable TP regen":"true"}},
{"name":"YEP_MoveRouteCore","status":true,"description":"v1.04 Expand the number of movement options for the move\nroute events using this plugin.","parameters":{}},
{"name":"YEP_ImprovedBattlebacks","status":false,"description":"v1.02 Changes how RPG Maker MV handles battlebacks.\nBattlebacks are now more flexible with what they can do.","parameters":{"Scale Battlebacks":"true","Battleback Margin":"32"}},
{"name":"Hirion_Core","status":false,"description":"Hirion - Core. (v1.4)","parameters":{"Main Settings":"","Debug Mode":"false"}},
{"name":"Hirion_Swim","status":false,"description":"Hirion - Swim. (v1.3)","parameters":{"Main Settings":"","Enable Switch":"44","Terrain Tag":"7","Splash Animation":"81","Required Item":"0","Graphic":"img/characters/Light_Swimming2","Swim Damage":"","Damage":"true","Gameover Damage":"false","Formula":"$gameParty.leader().mhp * 0.10","Character Effects":"","Fade":"true","Fade Time":"60","Blink":"true","Blink Time":"20"}},
{"name":"YEP_StopMapMovement","status":true,"description":"v1.02 A utility plugin to stop events from automatically\nmoving by themselves all across your map.","parameters":{"Stop During Events":"true","Stop During Message":"true"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.50 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"atb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_BattleSysATB","status":true,"description":"v1.28 (Requires YEP_BattleEngineCore.js) Add ATB (Active\nTurn Battle) into your game using this plugin!","parameters":{"---ATB Settings---":"","Per Tick":"user.agi","Initial Speed":"0","Full Gauge":"Math.max(5000, BattleManager.highestBaseAgi() * 100)","Charge Gauge":"Math.max(2000, BattleManager.highestBaseAgi() * 20)","Pre-Emptive Bonuses":"0.8","Surprise Bonuses":"0.8","---Escape---":"","Escape Ratio":"0.125 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.025","Full Turn":"Math.min(200, BattleManager.lowestBaseAgi() * 8)","Flash Enemy":"true","---Turn---":"","---Rubberband---":"","Enable Rubberband":"true","Minimum Speed":"0.5 * BattleManager.highestBaseAgi()","Maximum Speed":"1.5 * BattleManager.highestBaseAgi()","---Sound---":"","Ready Sound":"Decision1","Ready Volume":"90","Ready Pitch":"120","Ready Pan":"0","---Options---":"","ATB Speed Text":"Velocidade de Iniciativa","Default ATB Speed":"10","---Windows---":"","Lock Status Window":"true","Gauge Style":"1","Gauge Text":"Turn","Gauge Text Align":"center","ATB Gauge Color 1":"13","ATB Gauge Color 2":"5","Slow Gauge Color 1":"12","Slow Gauge Color 2":"4","Fast Gauge Color 1":"26","Fast Gauge Color 2":"27","Stop Gauge Color 1":"7","Stop Gauge Color 2":"8","Full Gauge Color 1":"14","Full Gauge Color 2":"6","Charge Gauge Color 1":"2","Charge Gauge Color 2":"10"}},
{"name":"VE_BasicModule","status":false,"description":"v1.23 - Plugin with base code required for all Victor Engine plugins.","parameters":{"== Trait Names ==":"","Hit Rate Name":"Hit","Evasion Rate Name":"Evasion","Critical Rate Name":"Critical","Critical Evasion Name":"C. Evasion","Magic Evasion Name":"M. Evasion","Magic Reflection Name":"M. Reflection","Counter Attack Name":"Counter","HP Regeneration Name":"HP Regen","MP Regeneration Name":"MP Regen","TP Regeneration Name":"TP Regen","Target Rate Name":"Target Rate","Guard Rate Name":"Guard Rate","Recovery Effect Name":"Recovery","Pharmacology Name":"Pharmacology","MP Cost Rate Name":"MP Cost","TP Charge Rate Name":"TP Charge","Physical Damage Name":"Physical Damage","Magical Damage Name":"Magical Damage","Floor Damage Name":"Floor Damage","Experience Rate Name":"Exp. Rate\r"}},
{"name":"VE_BattlerGraphicSetup","status":false,"description":"v1.09 - Use different models for battler graphics.","parameters":{"Actor Sprite Mode":"Animated","Enemy Sprite Mode":"Static","Enemy Graphic Sufix":"","Mirror Animations":"true","Animated Enemy State":"icon","== Custom Frames ==":"==============================","Actor Frame Setup":"","Enemy Frame Setup":"","== Motion Setup ==":"==============================","Idle Motion Setup":"index: 1, loop: true, speed: 12","Walk Motion Setup":"index: 2, loop: true, speed: 12","Wait Motion Setup":"index: 2, loop: true, speed: 12","Chant Motion Setup":"index: 3, loop: true, speed: 12","Guard Motion Setup":"index: 4, loop: true, speed: 12","Damage Motion Setup":"index: 5, loop: false, speed: 12","Evade Motion Setup":"index: 6, loop: true, speed: 12","Thrust Motion Setup":"index: 7, loop: false, speed: 12","Swing Motion Setup":"index: 8, loop: false, speed: 12","Missile Motion Setup":"index: 9, loop: false, speed: 12","Skill Motion Setup":"index: 10, loop: false, speed: 12","Spell Motion Setup":"index: 11, loop: false, speed: 12","Item Motion Setup":"index: 12, loop: false, speed: 12","Escape Motion Setup":"index: 13, loop: true, speed: 12","Return Motion Setup":"index: 13, loop: true, speed: 12","Victory Motion Setup":"index: 14, loop: true, speed: 12","Dying Motion Setup":"index: 15, loop: true, speed: 12","Abnormal Motion Setup":"index: 16, loop: true, speed: 12","Sleep Motion Setup":"index: 17, loop: true, speed: 12","Dead Motion Setup":"index: 18, loop: true, speed: 12\r"}},
{"name":"YEP_ImprovedBattlebacks","status":true,"description":"v1.02 Changes how RPG Maker MV handles battlebacks.\nBattlebacks are now more flexible with what they can do.","parameters":{"Scale Battlebacks":"true","Battleback Margin":"32"}},
{"name":"mv3d","status":false,"description":"3D rendering in RPG Maker MV with babylon.js\r\nversion 0.6.4.2","parameters":{"options":"","3dMenu":"SUBMENU","renderDistOptionName":"Render Distance","renderDist":"25","renderDistOption":"true","renderDistMin":"10","renderDistMax":"100","fovOptionName":"FOV","fov":"65","fovOption":"true","fovMin":"50","fovMax":"100","invertYOptionName":"Invert Y Axis","invertYOption":"true","lookSensitivityOptionName":"Look Sensitivity","lookSensitivityOption":"true","spacer|graphics":"","graphics":"","antialiasing":"true","edgefix":"0.5","alphatest":"0.51","lightLimit":"8","backfaceCulling":"true","cameraCollision":"Type2 Smoothed","resScale":"1","spacer|map":"","map":"","cellSize":"10","unloadCells":"false","eventsUpdateNear":"true","mapDefaults":"\"enable(true)\\nsun(white)\\nambient(default)\\nfog(black|20,30)\\nceiling(backface:true)\"","spacer|input":"","input":"","inputCameraMouse":"false","inputCameraGamepad":"false","inputGamepadTurnButton":"Bumpers","WASD":"true","dir8Movement":"Diagonal Smart","keyboardPitch":"true","keyboardTurn":"QE","keyboardStrafe":"QE","turnIncrement":"90","yawSpeed":"180","pitchSpeed":"90","stairThresh":"0.1","walkOffEdge":"false","walkOnEvents":"true","gravity":"8","spacer|tileconfig":"","tileconfig":"","wallHeight":"2.0","tableHeight":"0.33","fringeHeight":"2.0","ceilingHeight":"2.0","layerDist":"0.0100","animDelay":"333","regions":"[\"{\\\"regionId\\\":\\\"1\\\",\\\"conf\\\":\\\"height(1)\\\"}\",\"{\\\"regionId\\\":\\\"2\\\",\\\"conf\\\":\\\"height(2)\\\"}\",\"{\\\"regionId\\\":\\\"3\\\",\\\"conf\\\":\\\"height(3)\\\"}\",\"{\\\"regionId\\\":\\\"4\\\",\\\"conf\\\":\\\"height(4)\\\"}\",\"{\\\"regionId\\\":\\\"5\\\",\\\"conf\\\":\\\"height(5)\\\"}\",\"{\\\"regionId\\\":\\\"6\\\",\\\"conf\\\":\\\"height(6)\\\"}\",\"{\\\"regionId\\\":\\\"7\\\",\\\"conf\\\":\\\"height(7)\\\"}\"]","ttags":"[\"{\\\"terrainTag\\\":\\\"1\\\",\\\"conf\\\":\\\"shape(xcross),height(1),fringe(0)\\\"}\",\"{\\\"terrainTag\\\":\\\"2\\\",\\\"conf\\\":\\\"shape(fence),height(1)\\\"}\"]","spacer|characters":"","characters":"","heightTrigger":"true","eventCharDefaults":"\"shadow(0.8,4)\\nshape(sprite)\\nscale(1)\"","eventObjDefaults":"\"shadow(0)\\nshape(sprite)\\nscale(1)\"","eventTileDefaults":"\"shadow(0)\\nshape(flat)\\nscale(1)\"","eventHeight":"2.0","boatSettings":"{\"conf\":\"shadow(0.8,4),shape(sprite),scale(1),bush(false)\"}","shipSettings":"{\"conf\":\"shadow(0.8,4),shape(sprite),scale(1),bush(false)\"}","airshipSettings":"{\"conf\":\"shadow(1,6),shape(sprite),scale(1),bush(false)\",\"height\":\"2.0\",\"bushLanding\":\"false\"}","allowGlide":"true","spriteOffset":"0.9","spacer|assets":"","assets":"","diagSymbol":"{d}","shadowTexture":"shadow","alphaMask":"bushAlpha","errorTexture":"errorTexture","requiredImages":""}},
{"name":"CustomClassChange","status":true,"description":"v1.0.0 This plugin allows you to customize the Change Class command to some extent.","parameters":{"--Class Change--":"","Keep Exp":"true","Forget Old Skills":"true","Get New Skils":"true"}},
{"name":"YEP_X_ChangeBattleEquip","status":false,"description":"v1.05 (Requires YEP_BattleEngineCore & YEP_EquipCore)\nAllow your actors to change equipment mid-battle.","parameters":{"Command Name":"Equip","Equip Cooldown":"0"}}
];
