/*************************************** 
 * Visual Aesthetic Emotion Study Test *
 ***************************************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Visual Aesthetic Emotion Study';  // from the Builder filename that created this script
let expInfo = {'session': '001', 'participant': '', 'Gender': ['Male', 'Female', 'Non-binary', 'Rather not say'], 'Age (years)': ['19-25', '26-35', '36-45', '46-55', '56-65', '66 and up']};

// Start code blocks for 'Before Experiment'
var downloadCount;
//Make a list of 500 * 4 in length
var groups = Array(500).fill(['A', 'B', 'C', 'D']).flat();



// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 0.388), (- 0.388), (- 0.388)]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);
const loadingLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loadingLoopLoopBegin(loadingLoopLoopScheduler));
flowScheduler.add(loadingLoopLoopScheduler);
flowScheduler.add(loadingLoopLoopEnd);
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
const consentSkipLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(consentSkipLoopBegin(consentSkipLoopScheduler));
flowScheduler.add(consentSkipLoopScheduler);
flowScheduler.add(consentSkipLoopEnd);
const consentMsgShowLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(consentMsgShowLoopBegin(consentMsgShowLoopScheduler));
flowScheduler.add(consentMsgShowLoopScheduler);
flowScheduler.add(consentMsgShowLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/circle.png', 'path': 'images/circle.png'},
    {'name': 'images/no_consent_button.png', 'path': 'images/no_consent_button.png'},
    {'name': 'images/consent.png', 'path': 'images/consent.png'},
    {'name': 'bot_checker/223941.png', 'path': 'bot_checker/223941.png'},
    {'name': 'images/circle5.png', 'path': 'images/circle5.png'},
    {'name': 'images/instruction_12.png', 'path': 'images/instruction_12.png'},
    {'name': 'bot_checker/red_canna.png', 'path': 'bot_checker/red_canna.png'},
    {'name': 'images/circle3.png', 'path': 'images/circle3.png'},
    {'name': 'images/instruction_10.png', 'path': 'images/instruction_10.png'},
    {'name': 'images/consent_button_gray.png', 'path': 'images/consent_button_gray.png'},
    {'name': 'conditionsFiles/conditionsB.xlsx', 'path': 'conditionsFiles/conditionsB.xlsx'},
    {'name': 'instruction_text.xlsx', 'path': 'instruction_text.xlsx'},
    {'name': 'images/no_consent_button_gray.png', 'path': 'images/no_consent_button_gray.png'},
    {'name': 'conditionsFiles/conditionsD.xlsx', 'path': 'conditionsFiles/conditionsD.xlsx'},
    {'name': 'images/instruction_6.png', 'path': 'images/instruction_6.png'},
    {'name': 'images/secondary_text.png', 'path': 'images/secondary_text.png'},
    {'name': 'images/circle2.png', 'path': 'images/circle2.png'},
    {'name': 'misc/circle_params.csv', 'path': 'misc/circle_params.csv'},
    {'name': 'images/consent_button.png', 'path': 'images/consent_button.png'},
    {'name': 'images/primary_circle.png', 'path': 'images/primary_circle.png'},
    {'name': 'images/Next2.png', 'path': 'images/Next2.png'},
    {'name': 'images/Next1.png', 'path': 'images/Next1.png'},
    {'name': 'images/likability_text.png', 'path': 'images/likability_text.png'},
    {'name': 'images/Back1.png', 'path': 'images/Back1.png'},
    {'name': 'images/instruction_11.png', 'path': 'images/instruction_11.png'},
    {'name': 'images/circle1.png', 'path': 'images/circle1.png'},
    {'name': 'images/circle4.png', 'path': 'images/circle4.png'},
    {'name': 'conditionsFiles/conditionsC.xlsx', 'path': 'conditionsFiles/conditionsC.xlsx'},
    {'name': 'images/instruction_4.png', 'path': 'images/instruction_4.png'},
    {'name': 'images/instruction_5.png', 'path': 'images/instruction_5.png'},
    {'name': 'question_images.xlsx', 'path': 'question_images.xlsx'},
    {'name': 'conditionsFiles/conditionsA.xlsx', 'path': 'conditionsFiles/conditionsA.xlsx'},
    {'name': 'images/instruction_2.png', 'path': 'images/instruction_2.png'},
    {'name': 'images/instruction_14.png', 'path': 'images/instruction_14.png'},
    {'name': 'images/instruction_7.png', 'path': 'images/instruction_7.png'},
    {'name': 'images/instruction_1.png', 'path': 'images/instruction_1.png'},
    {'name': 'images/instruction_8.png', 'path': 'images/instruction_8.png'},
    {'name': 'images/primary_text.png', 'path': 'images/primary_text.png'},
    {'name': 'images/instruction_3.png', 'path': 'images/instruction_3.png'},
    {'name': 'images/instruction_9.png', 'path': 'images/instruction_9.png'},
    {'name': 'images/secondary_circle.png', 'path': 'images/secondary_circle.png'},
    {'name': 'images/instruction_13.png', 'path': 'images/instruction_13.png'},
    {'name': 'images/Wheel V6_clear.png', 'path': 'images/Wheel V6_clear.png'},
    {'name': 'images/Neutral V6.png', 'path': 'images/Neutral V6.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=5ECB713B', '');

  return Scheduler.Event.NEXT;
}


var circle_setupClock;
var circle_array;
var neutral_pos;
var consent_andloadClock;
var consent_img_2;
var consent_yes_2;
var consent_no_2;
var downloadCount;
var downloadTxt;
var consentClock;
var consent_img;
var consent_yes;
var consent_no;
var mouse_input;
var assign_groups_automatically;
var thisGroup;
var groupTrialFile;
var globalClock;
var blank500Clock;
var textblank500;
var Wheel_instrClock;
var instructionN;
var backX;
var instruction_image;
var instruction_key;
var next_button;
var back_button;
var instruction_mouse;
var EmotionRatingClock;
var imageStudy;
var instr_txt;
var image_next_off;
var image_next2;
var imageEmo;
var image_none;
var mouse_emo;
var primaryEmotion;
var progressText;
var AestheticRatingClock;
var instr;
var imageRating;
var rating;
var text_title;
var scale_labels;
var image_next;
var next_off;
var progressText_2;
var mouse;
var checksClock;
var bot_count;
var answer_highlight;
var QuestionText;
var Ans1;
var Ans2;
var Ans3;
var image_bot_check;
var ansMouse;
var img_next_on;
var img_next_off;
var endTask;
var textBoxClock;
var instr_TextBox;
var TextBox;
var mouse_3;
var image_next_3;
var EndScreenClock;
var text_end1;
var key_text_end;
var consentEndClock;
var consentEndTxt;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "circle_setup"
  circle_setupClock = new util.Clock();
  circle_array = [];
  neutral_pos = [0.42, (- 0.02)];
  
  // Initialize components for Routine "consent_andload"
  consent_andloadClock = new util.Clock();
  consent_img_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_img_2', units : undefined, 
    image : 'images/consent.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  consent_yes_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_yes_2', units : undefined, 
    image : 'images/consent_button_gray.png', mask : undefined,
    ori : 0.0, pos : [0.1, (- 0.4)], size : [0.09, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  consent_no_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_no_2', units : undefined, 
    image : 'images/no_consent_button_gray.png', mask : undefined,
    ori : 0.0, pos : [0.22, (- 0.4)], size : [0.152, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  downloadCount = 0
  downloadTxt = new visual.TextStim({
    win: psychoJS.window,
    name: 'downloadTxt',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.4)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('#DC143C'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  consent_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_img', units : undefined, 
    image : 'images/consent.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  consent_yes = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_yes', units : undefined, 
    image : 'images/consent_button.png', mask : undefined,
    ori : 0.0, pos : [0.1, (- 0.4)], size : [0.09, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  consent_no = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_no', units : undefined, 
    image : 'images/no_consent_button.png', mask : undefined,
    ori : 0.0, pos : [0.22, (- 0.4)], size : [0.152, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouse_input = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_input.mouseClock = new util.Clock();
  assign_groups_automatically = false;
  if (assign_groups_automatically) {
      thisGroup = groups[Number.parseInt(expInfo["participant"])];
      expInfo["Group"] = thisGroup;
      psychoJS.experiment.addData("Group", thisGroup);
      psychoJS.experiment.addData("Group Auto", 1);
  } else {
      psychoJS.experiment.addData("Group", expInfo["Group"]);
      psychoJS.experiment.addData("Group Auto", 0);
  }
  console.log(expInfo["Group"]);
  window.expInfo = expInfo;
  groupTrialFile = (("conditionsFiles/conditions" + expInfo["Group"]) + ".xlsx");
  
  globalClock = new util.Clock();
  
  psychoJS.experiment.addData("window_size_start", psychoJS.window.size);
  
  // Initialize components for Routine "blank500"
  blank500Clock = new util.Clock();
  textblank500 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textblank500',
    text: ' ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Wheel_instr"
  Wheel_instrClock = new util.Clock();
  instructionN = 0;
  backX = (- 500);
  
  instruction_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruction_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.6, 1],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  instruction_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  next_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_button', units : undefined, 
    image : 'images/Next1.png', mask : undefined,
    ori : 0.0, pos : [0.7, (- 0.4)], size : [0.07, 0.07],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  back_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'back_button', units : undefined, 
    image : 'images/Back1.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.07, 0.07],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  instruction_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  instruction_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "EmotionRating"
  EmotionRatingClock = new util.Clock();
  imageStudy = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageStudy', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.39), 0], size : [0.85, 0.85],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  instr_txt = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instr_txt', units : undefined, 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0.4, 0.41], size : [0.65, 0.65],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_next_off = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_next_off', units : undefined, 
    image : 'images/Next2.png', mask : undefined,
    ori : 0.0, pos : [0.7, (- 0.4)], size : [0.07, 0.07],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_next2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_next2', units : undefined, 
    image : 'images/Next1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.07, 0.07],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  imageEmo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageEmo', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.42, (- 0.02)], size : [0.75, 0.75],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  image_none = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_none', units : undefined, 
    image : 'images/Neutral V6.png', mask : undefined,
    ori : 0.0, pos : [0.42, (- 0.02)], size : [0.134, 0.134],
    color : new util.Color([1, 1, 1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  mouse_emo = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_emo.mouseClock = new util.Clock();
  primaryEmotion = "Unset";
  
  progressText = new visual.TextStim({
    win: psychoJS.window,
    name: 'progressText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.7, (- 0.35)], height: 0.015,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  // Initialize components for Routine "AestheticRating"
  AestheticRatingClock = new util.Clock();
  instr = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instr', units : undefined, 
    image : 'images/likability_text.png', mask : undefined,
    ori : 0.0, pos : [0.4, 0.41], size : [0.65, 0.65],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  imageRating = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageRating', units : undefined, 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [0.85, 0.85],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  rating = new visual.Slider({
    win: psychoJS.window, name: 'rating',
    size: [0.4, 0.025], pos: [0.4, (- 0.01)], units: 'height',
    labels: ["1", "2", "3", "4", "5"], ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('#20B2AA'), lineColor: new util.Color('White'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  text_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_title',
    text: 'Aesthetic Likability',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('#20B2AA'),  opacity: 1,
    depth: -3.0 
  });
  
  scale_labels = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_labels',
    text: 'Do Not Like             Neutral             Like A Lot',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, (- 0.11)], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  image_next = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_next', units : undefined, 
    image : 'images/Next1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.07, 0.07],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  next_off = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_off', units : undefined, 
    image : 'images/Next2.png', mask : undefined,
    ori : 0.0, pos : [0.7, (- 0.4)], size : [0.07, 0.07],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  progressText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'progressText_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.7, (- 0.35)], height: 0.015,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "checks"
  checksClock = new util.Clock();
  bot_count = 0;
  
  answer_highlight = new visual.Rect ({
    win: psychoJS.window, name: 'answer_highlight', 
    width: [0.2, 0.08][0], height: [0.2, 0.08][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 4.0, lineColor: new util.Color('#20B2AA'),
    fillColor: new util.Color([(- 0.388), (- 0.388), (- 0.388)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  QuestionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'QuestionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.385], height: 0.03,  wrapWidth: 0.7, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  Ans1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Ans1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.39, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Ans2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Ans2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.39, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  Ans3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Ans3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.39, (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  image_bot_check = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_bot_check', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.39), 0], size : [0.85, 0.85],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  ansMouse = new core.Mouse({
    win: psychoJS.window,
  });
  ansMouse.mouseClock = new util.Clock();
  img_next_on = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_next_on', units : undefined, 
    image : 'images/Next1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.07, 0.07],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -8.0 
  });
  img_next_off = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_next_off', units : undefined, 
    image : 'images/Next2.png', mask : undefined,
    ori : 0.0, pos : [0.7, (- 0.4)], size : [0.07, 0.07],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  endTask = false;
  
  // Initialize components for Routine "textBox"
  textBoxClock = new util.Clock();
  instr_TextBox = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_TextBox',
    text: 'If you have any comments, please let us know!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  TextBox = new visual.TextBox({
    win: psychoJS.window,
    name: 'TextBox',
    text: ' ',
    font: 'Arial',
    pos: [(- 0.35), 0.1], letterHeight: 0.03,
    size: [0.7, 0.3],  units: undefined, 
    color: [(- 1.0), (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: [0.506, 0.506, 0.506], borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    bold: false, italic: false,
    opacity: 1,
    padding: 0.015,
    editable: true,
    multiline: true,
    anchor: 'top-left',
    depth: -1.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  image_next_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_next_3', units : undefined, 
    image : 'images/Next1.png', mask : undefined,
    ori : 0, pos : [0.7, (- 0.4)], size : [0.085, 0.085],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "EndScreen"
  EndScreenClock = new util.Clock();
  text_end1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end1',
    text: 'Thank you very much for participating in our study!\n\nPress the spacebar to exit.',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.01), 0.1], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_text_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  psychoJS.experiment.addData("window_size_end", psychoJS.window.size);
  
  // Initialize components for Routine "consentEnd"
  consentEndClock = new util.Clock();
  consentEndTxt = new visual.TextStim({
    win: psychoJS.window,
    name: 'consentEndTxt',
    text: 'Thank you for considering taking part. \n\nGoodbye',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.01), 0.1], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials_4;
var currentLoop;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'misc/circle_params.csv',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      const snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(circle_setupRoutineBegin(snapshot));
      trials_4LoopScheduler.add(circle_setupRoutineEachFrame());
      trials_4LoopScheduler.add(circle_setupRoutineEnd());
      trials_4LoopScheduler.add(endLoopIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);

  return Scheduler.Event.NEXT;
}


var loadingLoop;
function loadingLoopLoopBegin(loadingLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loadingLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: groupTrialFile,
      seed: undefined, name: 'loadingLoop'
    });
    psychoJS.experiment.addLoop(loadingLoop); // add the loop to the experiment
    currentLoop = loadingLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoadingLoop of loadingLoop) {
      const snapshot = loadingLoop.getSnapshot();
      loadingLoopLoopScheduler.add(importConditions(snapshot));
      loadingLoopLoopScheduler.add(consent_andloadRoutineBegin(snapshot));
      loadingLoopLoopScheduler.add(consent_andloadRoutineEachFrame());
      loadingLoopLoopScheduler.add(consent_andloadRoutineEnd());
      loadingLoopLoopScheduler.add(endLoopIteration(loadingLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loadingLoopLoopEnd() {
  psychoJS.experiment.removeLoop(loadingLoop);

  return Scheduler.Event.NEXT;
}


var consentSkip;
function consentSkipLoopBegin(consentSkipLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    consentSkip = new TrialHandler({
      psychoJS: psychoJS,
      nReps: consentReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'consentSkip'
    });
    psychoJS.experiment.addLoop(consentSkip); // add the loop to the experiment
    currentLoop = consentSkip;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisConsentSkip of consentSkip) {
      const snapshot = consentSkip.getSnapshot();
      consentSkipLoopScheduler.add(importConditions(snapshot));
      consentSkipLoopScheduler.add(blank500RoutineBegin(snapshot));
      consentSkipLoopScheduler.add(blank500RoutineEachFrame());
      consentSkipLoopScheduler.add(blank500RoutineEnd());
      const instruction_loopLoopScheduler = new Scheduler(psychoJS);
      consentSkipLoopScheduler.add(instruction_loopLoopBegin(instruction_loopLoopScheduler, snapshot));
      consentSkipLoopScheduler.add(instruction_loopLoopScheduler);
      consentSkipLoopScheduler.add(instruction_loopLoopEnd);
      consentSkipLoopScheduler.add(blank500RoutineBegin(snapshot));
      consentSkipLoopScheduler.add(blank500RoutineEachFrame());
      consentSkipLoopScheduler.add(blank500RoutineEnd());
      const StudytrialsLoopScheduler = new Scheduler(psychoJS);
      consentSkipLoopScheduler.add(StudytrialsLoopBegin(StudytrialsLoopScheduler, snapshot));
      consentSkipLoopScheduler.add(StudytrialsLoopScheduler);
      consentSkipLoopScheduler.add(StudytrialsLoopEnd);
      consentSkipLoopScheduler.add(textBoxRoutineBegin(snapshot));
      consentSkipLoopScheduler.add(textBoxRoutineEachFrame());
      consentSkipLoopScheduler.add(textBoxRoutineEnd());
      consentSkipLoopScheduler.add(blank500RoutineBegin(snapshot));
      consentSkipLoopScheduler.add(blank500RoutineEachFrame());
      consentSkipLoopScheduler.add(blank500RoutineEnd());
      consentSkipLoopScheduler.add(EndScreenRoutineBegin(snapshot));
      consentSkipLoopScheduler.add(EndScreenRoutineEachFrame());
      consentSkipLoopScheduler.add(EndScreenRoutineEnd());
      consentSkipLoopScheduler.add(endLoopIteration(consentSkipLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var instruction_loop;
function instruction_loopLoopBegin(instruction_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instruction_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 200, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instruction_loop'
    });
    psychoJS.experiment.addLoop(instruction_loop); // add the loop to the experiment
    currentLoop = instruction_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstruction_loop of instruction_loop) {
      const snapshot = instruction_loop.getSnapshot();
      instruction_loopLoopScheduler.add(importConditions(snapshot));
      instruction_loopLoopScheduler.add(Wheel_instrRoutineBegin(snapshot));
      instruction_loopLoopScheduler.add(Wheel_instrRoutineEachFrame());
      instruction_loopLoopScheduler.add(Wheel_instrRoutineEnd());
      instruction_loopLoopScheduler.add(endLoopIteration(instruction_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instruction_loopLoopEnd() {
  psychoJS.experiment.removeLoop(instruction_loop);

  return Scheduler.Event.NEXT;
}


var Studytrials;
function StudytrialsLoopBegin(StudytrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Studytrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: groupTrialFile,
      seed: undefined, name: 'Studytrials'
    });
    psychoJS.experiment.addLoop(Studytrials); // add the loop to the experiment
    currentLoop = Studytrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStudytrial of Studytrials) {
      const snapshot = Studytrials.getSnapshot();
      StudytrialsLoopScheduler.add(importConditions(snapshot));
      const trials_3LoopScheduler = new Scheduler(psychoJS);
      StudytrialsLoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      StudytrialsLoopScheduler.add(trials_3LoopScheduler);
      StudytrialsLoopScheduler.add(trials_3LoopEnd);
      StudytrialsLoopScheduler.add(AestheticRatingRoutineBegin(snapshot));
      StudytrialsLoopScheduler.add(AestheticRatingRoutineEachFrame());
      StudytrialsLoopScheduler.add(AestheticRatingRoutineEnd());
      StudytrialsLoopScheduler.add(blank500RoutineBegin(snapshot));
      StudytrialsLoopScheduler.add(blank500RoutineEachFrame());
      StudytrialsLoopScheduler.add(blank500RoutineEnd());
      const bot_trialsLoopScheduler = new Scheduler(psychoJS);
      StudytrialsLoopScheduler.add(bot_trialsLoopBegin(bot_trialsLoopScheduler, snapshot));
      StudytrialsLoopScheduler.add(bot_trialsLoopScheduler);
      StudytrialsLoopScheduler.add(bot_trialsLoopEnd);
      StudytrialsLoopScheduler.add(endLoopIteration(StudytrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'instruction_text.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      const snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(EmotionRatingRoutineBegin(snapshot));
      trials_3LoopScheduler.add(EmotionRatingRoutineEachFrame());
      trials_3LoopScheduler.add(EmotionRatingRoutineEnd());
      trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


var bot_trials;
function bot_trialsLoopBegin(bot_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    bot_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'question_images.xlsx',
      seed: undefined, name: 'bot_trials'
    });
    psychoJS.experiment.addLoop(bot_trials); // add the loop to the experiment
    currentLoop = bot_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBot_trial of bot_trials) {
      const snapshot = bot_trials.getSnapshot();
      bot_trialsLoopScheduler.add(importConditions(snapshot));
      bot_trialsLoopScheduler.add(checksRoutineBegin(snapshot));
      bot_trialsLoopScheduler.add(checksRoutineEachFrame());
      bot_trialsLoopScheduler.add(checksRoutineEnd());
      bot_trialsLoopScheduler.add(endLoopIteration(bot_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function bot_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(bot_trials);

  return Scheduler.Event.NEXT;
}


async function StudytrialsLoopEnd() {
  psychoJS.experiment.removeLoop(Studytrials);

  return Scheduler.Event.NEXT;
}


async function consentSkipLoopEnd() {
  psychoJS.experiment.removeLoop(consentSkip);

  return Scheduler.Event.NEXT;
}


var consentMsgShow;
function consentMsgShowLoopBegin(consentMsgShowLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    consentMsgShow = new TrialHandler({
      psychoJS: psychoJS,
      nReps: consentMsg, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'consentMsgShow'
    });
    psychoJS.experiment.addLoop(consentMsgShow); // add the loop to the experiment
    currentLoop = consentMsgShow;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisConsentMsgShow of consentMsgShow) {
      const snapshot = consentMsgShow.getSnapshot();
      consentMsgShowLoopScheduler.add(importConditions(snapshot));
      consentMsgShowLoopScheduler.add(consentEndRoutineBegin(snapshot));
      consentMsgShowLoopScheduler.add(consentEndRoutineEachFrame());
      consentMsgShowLoopScheduler.add(consentEndRoutineEnd());
      consentMsgShowLoopScheduler.add(endLoopIteration(consentMsgShowLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function consentMsgShowLoopEnd() {
  psychoJS.experiment.removeLoop(consentMsgShow);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var thisCircle;
var circle_setupComponents;
function circle_setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'circle_setup'-------
    t = 0;
    circle_setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // making circle as image in JS so that edges do not appear pixelated
    thisCircle = new visual.ImageStim({
        win : psychoJS.window,
        name : 'image', units : undefined, 
        image : 'images/' + thisImage, mask : undefined,
        ori : 0.0, pos : [thisX + neutral_pos[0], thisY + neutral_pos[1]], size : thisSize,
        color : new util.Color([1, 1, 1]), opacity : 0.9,
        flipHoriz : false, flipVert : false,
        texRes : 128.0, interpolate : true, depth : -1.0 
      });
    
    //Assign the emotion and intensity to this circle object
    thisCircle.emotion =  trials_4.trialList[trials_4.thisN]['thisEmotion'];
    thisCircle.startImage =  trials_4.trialList[trials_4.thisN]['thisImage'];
    thisCircle.intensity = trials_4.trialList[trials_4.thisN]['thisIntensity'];
    //by default this circle is not clicked
    thisCircle.clicked = false
    // add this circle tot he array of circles to be drawn
    circle_array.push(thisCircle);
    //pass to window for debugging only
    window.circle_array = circle_array;
    // keep track of which components have finished
    circle_setupComponents = [];
    
    for (const thisComponent of circle_setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function circle_setupRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'circle_setup'-------
    // get current time
    t = circle_setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of circle_setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function circle_setupRoutineEnd() {
  return async function () {
    //------Ending Routine 'circle_setup'-------
    for (const thisComponent of circle_setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "circle_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var selectedResource;
var additionalResourceStep;
var consent_andloadComponents;
function consent_andloadRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'consent_andload'-------
    t = 0;
    consent_andloadClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    selectedResource = ImageFile;
    psychoJS.serverManager.prepareResources([
        {
          'name': selectedResource,
          'path': selectedResource,
          'download': true
        }
    ]);
    additionalResourceStep = 'DOWNLOAD_STARTED';
    
    
    
    downloadTxt.setText((("Buttons will enable \nwhen download complete\n please read the information\nDownloading " + downloadCount.toString()) + "/50"));
    // keep track of which components have finished
    consent_andloadComponents = [];
    consent_andloadComponents.push(consent_img_2);
    consent_andloadComponents.push(consent_yes_2);
    consent_andloadComponents.push(consent_no_2);
    consent_andloadComponents.push(downloadTxt);
    
    for (const thisComponent of consent_andloadComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_andloadRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'consent_andload'-------
    // get current time
    t = consent_andloadClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_img_2* updates
    if (t >= 0.0 && consent_img_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_img_2.tStart = t;  // (not accounting for frame time here)
      consent_img_2.frameNStart = frameN;  // exact frame index
      
      consent_img_2.setAutoDraw(true);
    }

    
    // *consent_yes_2* updates
    if (t >= 0.0 && consent_yes_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_yes_2.tStart = t;  // (not accounting for frame time here)
      consent_yes_2.frameNStart = frameN;  // exact frame index
      
      consent_yes_2.setAutoDraw(true);
    }

    
    // *consent_no_2* updates
    if (t >= 0.0 && consent_no_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_no_2.tStart = t;  // (not accounting for frame time here)
      consent_no_2.frameNStart = frameN;  // exact frame index
      
      consent_no_2.setAutoDraw(true);
    }

    if (t >= 0.1)
        {
          if (additionalResourceStep === 'DOWNLOAD_STARTED')
          {
            console.log('waiting for ', selectedResource, ' to download');
            additionalResourceStep = 'WAITING_FOR_DOWNLOAD';
            }
    
          if (additionalResourceStep === 'WAITING_FOR_DOWNLOAD')
          {
            const additionalResourceStatus = psychoJS.serverManager.getResourceStatus(selectedResource);
            
            // not downloaded yet: flip
            if (additionalResourceStatus !== core.ServerManager.ResourceStatus.DOWNLOADED)
            {
              return Scheduler.Event.FLIP_REPEAT;
            }
            else
            {
                console.log(selectedResource,  ' is downloaded: present it');
                additionalResourceStep = 'DOWNLOADED';
                continueRoutine = false;
            }
        }
    }
    
    
    // *downloadTxt* updates
    if (t >= 0.0 && downloadTxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      downloadTxt.tStart = t;  // (not accounting for frame time here)
      downloadTxt.frameNStart = frameN;  // exact frame index
      
      downloadTxt.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_andloadComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_andloadRoutineEnd() {
  return async function () {
    //------Ending Routine 'consent_andload'-------
    for (const thisComponent of consent_andloadComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    downloadCount += 1
    // the Routine "consent_andload" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'consent'-------
    t = 0;
    consentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_input
    // current position of the mouse:
    mouse_input.x = [];
    mouse_input.y = [];
    mouse_input.leftButton = [];
    mouse_input.midButton = [];
    mouse_input.rightButton = [];
    mouse_input.time = [];
    mouse_input.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(consent_img);
    consentComponents.push(consent_yes);
    consentComponents.push(consent_no);
    consentComponents.push(mouse_input);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function consentRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'consent'-------
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_img* updates
    if (t >= 0.0 && consent_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_img.tStart = t;  // (not accounting for frame time here)
      consent_img.frameNStart = frameN;  // exact frame index
      
      consent_img.setAutoDraw(true);
    }

    
    // *consent_yes* updates
    if (t >= 0.0 && consent_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_yes.tStart = t;  // (not accounting for frame time here)
      consent_yes.frameNStart = frameN;  // exact frame index
      
      consent_yes.setAutoDraw(true);
    }

    
    // *consent_no* updates
    if (t >= 0.0 && consent_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_no.tStart = t;  // (not accounting for frame time here)
      consent_no.frameNStart = frameN;  // exact frame index
      
      consent_no.setAutoDraw(true);
    }

    // *mouse_input* updates
    if (t >= 0.0 && mouse_input.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_input.tStart = t;  // (not accounting for frame time here)
      mouse_input.frameNStart = frameN;  // exact frame index
      
      mouse_input.status = PsychoJS.Status.STARTED;
      mouse_input.mouseClock.reset();
      prevButtonState = mouse_input.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_input.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_input.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_input.getPos();
          mouse_input.x.push(_mouseXYs[0]);
          mouse_input.y.push(_mouseXYs[1]);
          mouse_input.leftButton.push(_mouseButtons[0]);
          mouse_input.midButton.push(_mouseButtons[1]);
          mouse_input.rightButton.push(_mouseButtons[2]);
          mouse_input.time.push(mouse_input.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [consent_yes, consent_no]) {
            if (obj.contains(mouse_input)) {
              gotValidClick = true;
              mouse_input.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var consentReps;
var consentMsg;
function consentRoutineEnd() {
  return async function () {
    //------Ending Routine 'consent'-------
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_input.x) {  psychoJS.experiment.addData('mouse_input.x', mouse_input.x[0])};
    if (mouse_input.y) {  psychoJS.experiment.addData('mouse_input.y', mouse_input.y[0])};
    if (mouse_input.leftButton) {  psychoJS.experiment.addData('mouse_input.leftButton', mouse_input.leftButton[0])};
    if (mouse_input.midButton) {  psychoJS.experiment.addData('mouse_input.midButton', mouse_input.midButton[0])};
    if (mouse_input.rightButton) {  psychoJS.experiment.addData('mouse_input.rightButton', mouse_input.rightButton[0])};
    if (mouse_input.time) {  psychoJS.experiment.addData('mouse_input.time', mouse_input.time[0])};
    if (mouse_input.clicked_name) {  psychoJS.experiment.addData('mouse_input.clicked_name', mouse_input.clicked_name[0])};
    
    consentReps = 1;
    consentMsg = 0;
    if ((mouse_input.clicked_name[0] === "consent_no")) {
        consentReps = 0;
        consentMsg = 1;
    }
    
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blank500Components;
function blank500RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'blank500'-------
    t = 0;
    blank500Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    for (var circle, _pj_c = 0, _pj_a = circle_array, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        circle = _pj_a[_pj_c];
        circle.setImage(("images/" + circle.startImage));
        circle.clicked = false;
    }
    image_none.opacity = 0;
    
    // keep track of which components have finished
    blank500Components = [];
    blank500Components.push(textblank500);
    
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blank500RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'blank500'-------
    // get current time
    t = blank500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textblank500* updates
    if (t >= 0.0 && textblank500.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textblank500.tStart = t;  // (not accounting for frame time here)
      textblank500.frameNStart = frameN;  // exact frame index
      
      textblank500.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textblank500.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textblank500.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank500RoutineEnd() {
  return async function () {
    //------Ending Routine 'blank500'-------
    for (const thisComponent of blank500Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _instruction_key_allKeys;
var Wheel_instrComponents;
function Wheel_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Wheel_instr'-------
    t = 0;
    Wheel_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((instructionN === 0)) {
        instructionN = 1;
    } else {
        if ((instructionN === 15)) {
            instructionN = 14;
        }
    }
    if ((instructionN === 1)) {
        backX = (- 500);
    }
    
    instruction_image.setImage((("images/instruction_" + instructionN.toString()) + ".png"));
    instruction_key.keys = undefined;
    instruction_key.rt = undefined;
    _instruction_key_allKeys = [];
    back_button.setPos([backX, (- 0.4)]);
    // setup some python lists for storing info about the instruction_mouse
    instruction_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Wheel_instrComponents = [];
    Wheel_instrComponents.push(instruction_image);
    Wheel_instrComponents.push(instruction_key);
    Wheel_instrComponents.push(next_button);
    Wheel_instrComponents.push(back_button);
    Wheel_instrComponents.push(instruction_mouse);
    
    for (const thisComponent of Wheel_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Wheel_instrRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Wheel_instr'-------
    // get current time
    t = Wheel_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_image* updates
    if (t >= 0.0 && instruction_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_image.tStart = t;  // (not accounting for frame time here)
      instruction_image.frameNStart = frameN;  // exact frame index
      
      instruction_image.setAutoDraw(true);
    }

    
    // *instruction_key* updates
    if (t >= 0.0 && instruction_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_key.tStart = t;  // (not accounting for frame time here)
      instruction_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      instruction_key.clock.reset();
      instruction_key.start();
      instruction_key.clearEvents();
    }

    if (instruction_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_key.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_key_allKeys = _instruction_key_allKeys.concat(theseKeys);
      if (_instruction_key_allKeys.length > 0) {
        instruction_key.keys = _instruction_key_allKeys[0].name;  // just the first key pressed
        instruction_key.rt = _instruction_key_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *next_button* updates
    if (t >= 0.0 && next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_button.tStart = t;  // (not accounting for frame time here)
      next_button.frameNStart = frameN;  // exact frame index
      
      next_button.setAutoDraw(true);
    }

    
    // *back_button* updates
    if (t >= 0.0 && back_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      back_button.tStart = t;  // (not accounting for frame time here)
      back_button.frameNStart = frameN;  // exact frame index
      
      back_button.setAutoDraw(true);
    }

    // *instruction_mouse* updates
    if (t >= 0.0 && instruction_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_mouse.tStart = t;  // (not accounting for frame time here)
      instruction_mouse.frameNStart = frameN;  // exact frame index
      
      instruction_mouse.status = PsychoJS.Status.STARTED;
      instruction_mouse.mouseClock.reset();
      prevButtonState = instruction_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (instruction_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = instruction_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_button, back_button]) {
            if (obj.contains(instruction_mouse)) {
              gotValidClick = true;
              instruction_mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Wheel_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Wheel_instrRoutineEnd() {
  return async function () {
    //------Ending Routine 'Wheel_instr'-------
    for (const thisComponent of Wheel_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    console.log(instruction_mouse.clicked_name);
    if ((instruction_mouse.clicked_name[0] === "back_button")) {
        instructionN -= 1;
    } else {
        instructionN += 1;
    }
    if ((instructionN > 14)) {
        instruction_loop.finished = true;
    }
    backX = 0.63;
    
    psychoJS.experiment.addData('instruction_key.keys', instruction_key.keys);
    if (typeof instruction_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_key.rt', instruction_key.rt);
        routineTimer.reset();
        }
    
    instruction_key.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "Wheel_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var clicked_circles;
var color;
var image_tag;
var thisEmotion;
var thisIntensity;
var emotion_list;
var intensity_list;
var progressMsg;
var EmotionRatingComponents;
function EmotionRatingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'EmotionRating'-------
    t = 0;
    EmotionRatingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    imageStudy.setImage(ImageFile);
    instr_txt.setOri(0.0);
    instr_txt.setImage(instruction_im);
    image_next_off.setOpacity(1.0);
    image_next2.setPos([(- 500), (- 0.4)]);
    imageEmo.setImage('images/Wheel V6_clear.png');
    // setup some python lists for storing info about the mouse_emo
    // current position of the mouse:
    mouse_emo.x = [];
    mouse_emo.y = [];
    mouse_emo.leftButton = [];
    mouse_emo.midButton = [];
    mouse_emo.rightButton = [];
    mouse_emo.time = [];
    gotValidClick = false; // until a click is received
    for (var circle, _pj_c = 0, _pj_a = circle_array, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        circle = _pj_a[_pj_c];
        circle.setAutoDraw(true);
    }
    image_none.opacity = 0;
    clicked_circles = [];
    if ((trials_3.thisN === 0)) {
        color = "#F88379";
        image_tag = "primary_";
    } else {
        color = "#40E0D0";
        image_tag = "secondary_";
    }
    thisEmotion = "None";
    thisIntensity = 0;
    emotion_list = [];
    intensity_list = [];
    
    progressMsg = (((Studytrials.thisN + 1).toString() + "/") + Studytrials.nTotal.toString());
    
    progressText.setText(progressMsg);
    // keep track of which components have finished
    EmotionRatingComponents = [];
    EmotionRatingComponents.push(imageStudy);
    EmotionRatingComponents.push(instr_txt);
    EmotionRatingComponents.push(image_next_off);
    EmotionRatingComponents.push(image_next2);
    EmotionRatingComponents.push(imageEmo);
    EmotionRatingComponents.push(image_none);
    EmotionRatingComponents.push(mouse_emo);
    EmotionRatingComponents.push(progressText);
    
    for (const thisComponent of EmotionRatingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EmotionRatingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'EmotionRating'-------
    // get current time
    t = EmotionRatingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imageStudy* updates
    if (t >= 0.0 && imageStudy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageStudy.tStart = t;  // (not accounting for frame time here)
      imageStudy.frameNStart = frameN;  // exact frame index
      
      imageStudy.setAutoDraw(true);
    }

    
    // *instr_txt* updates
    if (t >= 0.0 && instr_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_txt.tStart = t;  // (not accounting for frame time here)
      instr_txt.frameNStart = frameN;  // exact frame index
      
      instr_txt.setAutoDraw(true);
    }

    
    // *image_next_off* updates
    if (t >= 0.0 && image_next_off.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_next_off.tStart = t;  // (not accounting for frame time here)
      image_next_off.frameNStart = frameN;  // exact frame index
      
      image_next_off.setAutoDraw(true);
    }

    
    // *image_next2* updates
    if (t >= 0.0 && image_next2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_next2.tStart = t;  // (not accounting for frame time here)
      image_next2.frameNStart = frameN;  // exact frame index
      
      image_next2.setAutoDraw(true);
    }

    
    // *imageEmo* updates
    if (t >= 0.0 && imageEmo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageEmo.tStart = t;  // (not accounting for frame time here)
      imageEmo.frameNStart = frameN;  // exact frame index
      
      imageEmo.setAutoDraw(true);
    }

    
    // *image_none* updates
    if (t >= 0.0 && image_none.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_none.tStart = t;  // (not accounting for frame time here)
      image_none.frameNStart = frameN;  // exact frame index
      
      image_none.setAutoDraw(true);
    }

    // *mouse_emo* updates
    if (t >= 0.0 && mouse_emo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_emo.tStart = t;  // (not accounting for frame time here)
      mouse_emo.frameNStart = frameN;  // exact frame index
      
      mouse_emo.status = PsychoJS.Status.STARTED;
      mouse_emo.mouseClock.reset();
      prevButtonState = mouse_emo.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_emo.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_emo.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_emo.getPos();
          mouse_emo.x.push(_mouseXYs[0]);
          mouse_emo.y.push(_mouseXYs[1]);
          mouse_emo.leftButton.push(_mouseButtons[0]);
          mouse_emo.midButton.push(_mouseButtons[1]);
          mouse_emo.rightButton.push(_mouseButtons[2]);
          mouse_emo.time.push(mouse_emo.mouseClock.getTime());
        }
      }
    }
    window.primaryEmotion = primaryEmotion;
    window.thisEmotion = thisEmotion;
    for (var circle, _pj_c = 0, _pj_a = circle_array, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        circle = _pj_a[_pj_c];
        circle.refresh();
        if ((circle.contains(mouse_emo) && (! circle.start_opacity))) {
            if ((circle.emotion !== primaryEmotion)) {
                circle.start_opacity = circle.opacity;
                circle.opacity += (circle.start_opacity / 2);
            }
        }
        if (((! circle.contains(mouse_emo)) && circle.start_opacity)) {
            circle.opacity = circle.start_opacity;
            circle.start_opacity = false;
        }
        if ((mouse_emo.isPressedIn(circle) && (! circle.clicked))) {
            if ((primaryEmotion !== circle.emotion)) {
                if ((clicked_circles.length > 0)) {
                    clicked_circles.slice((- 1))[0].clicked = false;
                    clicked_circles.slice((- 1))[0].setImage(("images/" + clicked_circles.slice((- 1))[0].startImage));
                }
                circle.setImage((("images/" + image_tag) + "circle.png"));
                if ((thisEmotion === "neutral")) {
                    image_none.opacity = 0;
                }
                clicked_circles.push(circle);
                image_next2.setPos(image_next_off.pos);
                thisEmotion = clicked_circles.slice((- 1))[0].emotion;
                thisIntensity = clicked_circles.slice((- 1))[0].intensity;
                circle.clicked = true;
                emotion_list.push(thisEmotion);
                intensity_list.push(thisIntensity);
            }
        }
    }
    if (mouse_emo.isPressedIn(image_none)) {
        if ((clicked_circles.length > 0)) {
            clicked_circles.slice((- 1))[0].clicked = false;
            clicked_circles.slice((- 1))[0].setImage(("images/" + clicked_circles.slice((- 1))[0].startImage));
        }
        thisEmotion = "neutral";
        thisIntensity = "none";
        image_none.opacity = 1;
        image_next2.setPos(image_next_off.pos);
    }
    if (mouse_emo.isPressedIn(image_next2)) {
        if ((trials_3.thisN === 0)) {
            psychoJS.experiment.addData("primary_emotion", thisEmotion);
            psychoJS.experiment.addData("primary_intensity", thisIntensity);
            primaryEmotion = thisEmotion;
        } else {
            psychoJS.experiment.addData("secondary_emotion", thisEmotion);
            psychoJS.experiment.addData("secondary_intensity", thisIntensity);
            primaryEmotion = "Unset";
        }
        continueRoutine = false;
    }
    
    
    // *progressText* updates
    if (t >= 0.0 && progressText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progressText.tStart = t;  // (not accounting for frame time here)
      progressText.frameNStart = frameN;  // exact frame index
      
      progressText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EmotionRatingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EmotionRatingRoutineEnd() {
  return async function () {
    //------Ending Routine 'EmotionRating'-------
    for (const thisComponent of EmotionRatingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_emo.x', mouse_emo.x);
    psychoJS.experiment.addData('mouse_emo.y', mouse_emo.y);
    psychoJS.experiment.addData('mouse_emo.leftButton', mouse_emo.leftButton);
    psychoJS.experiment.addData('mouse_emo.midButton', mouse_emo.midButton);
    psychoJS.experiment.addData('mouse_emo.rightButton', mouse_emo.rightButton);
    psychoJS.experiment.addData('mouse_emo.time', mouse_emo.time);
    
    for (var circle, _pj_c = 0, _pj_a = circle_array, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        circle = _pj_a[_pj_c];
        circle.setAutoDraw(false);
    }
    if ((trials_3.thisN === 0)) {
        psychoJS.experiment.addData("primary_time", t);
    } else {
        psychoJS.experiment.addData("secondary_time", t);
    }
    psychoJS.experiment.addData("all_emotions", emotion_list);
    psychoJS.experiment.addData("all_intensities", intensity_list);
    psychoJS.experiment.addData("all_times", mouse_emo.time);
    console.log(emotion_list);
    console.log(mouse_emo.time);
    
    // the Routine "EmotionRating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var AestheticRatingComponents;
function AestheticRatingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'AestheticRating'-------
    t = 0;
    AestheticRatingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    imageRating.setOpacity(1);
    imageRating.setPos([(- 0.39), 0]);
    imageRating.setOri(0);
    imageRating.setImage(ImageFile);
    rating.reset()
    image_next.setOpacity(1);
    image_next.setPos([(- 500), (- 0.4)]);
    next_off.setOpacity(1.0);
    progressText_2.setText(progressMsg);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    AestheticRatingComponents = [];
    AestheticRatingComponents.push(instr);
    AestheticRatingComponents.push(imageRating);
    AestheticRatingComponents.push(rating);
    AestheticRatingComponents.push(text_title);
    AestheticRatingComponents.push(scale_labels);
    AestheticRatingComponents.push(image_next);
    AestheticRatingComponents.push(next_off);
    AestheticRatingComponents.push(progressText_2);
    AestheticRatingComponents.push(mouse);
    
    for (const thisComponent of AestheticRatingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AestheticRatingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'AestheticRating'-------
    // get current time
    t = AestheticRatingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr* updates
    if (t >= 0.0 && instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr.tStart = t;  // (not accounting for frame time here)
      instr.frameNStart = frameN;  // exact frame index
      
      instr.setAutoDraw(true);
    }

    
    // *imageRating* updates
    if (t >= 0.0 && imageRating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageRating.tStart = t;  // (not accounting for frame time here)
      imageRating.frameNStart = frameN;  // exact frame index
      
      imageRating.setAutoDraw(true);
    }

    
    // *rating* updates
    if (t >= 0.0 && rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating.tStart = t;  // (not accounting for frame time here)
      rating.frameNStart = frameN;  // exact frame index
      
      rating.setAutoDraw(true);
    }

    
    // *text_title* updates
    if (t >= 0.0 && text_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_title.tStart = t;  // (not accounting for frame time here)
      text_title.frameNStart = frameN;  // exact frame index
      
      text_title.setAutoDraw(true);
    }

    
    // *scale_labels* updates
    if (t >= 0.0 && scale_labels.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scale_labels.tStart = t;  // (not accounting for frame time here)
      scale_labels.frameNStart = frameN;  // exact frame index
      
      scale_labels.setAutoDraw(true);
    }

    
    // *image_next* updates
    if (t >= 0 && image_next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_next.tStart = t;  // (not accounting for frame time here)
      image_next.frameNStart = frameN;  // exact frame index
      
      image_next.setAutoDraw(true);
    }

    
    // *next_off* updates
    if (t >= 0.0 && next_off.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_off.tStart = t;  // (not accounting for frame time here)
      next_off.frameNStart = frameN;  // exact frame index
      
      next_off.setAutoDraw(true);
    }

    
    // *progressText_2* updates
    if (t >= 0.0 && progressText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progressText_2.tStart = t;  // (not accounting for frame time here)
      progressText_2.frameNStart = frameN;  // exact frame index
      
      progressText_2.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_next]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    if (rating.rating) {
        image_next.setPos(next_off.pos);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AestheticRatingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AestheticRatingRoutineEnd() {
  return async function () {
    //------Ending Routine 'AestheticRating'-------
    for (const thisComponent of AestheticRatingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
    psychoJS.experiment.addData("Likability", rating.getRating());
    
    // the Routine "AestheticRating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _pj;
var bot_trial;
var checksComponents;
function checksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'checks'-------
    t = 0;
    checksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    bot_trial = false;
    if ((! _pj.in_es6(Studytrials.thisN, [9, 29]))) {
        bot_trials.finished = true;
        continueRoutine = false;
    } else {
        bot_trial = true;
        thisQ = bot_trials.trialList[bot_count]["thisQ"];
        A1 = bot_trials.trialList[bot_count]["A1"];
        A2 = bot_trials.trialList[bot_count]["A2"];
        A3 = bot_trials.trialList[bot_count]["A3"];
        CorrAns = bot_trials.trialList[bot_count]["CorrAns"];
        thisBot_check_image = bot_trials.trialList[bot_count]["thisBot_check_image"];
        bot_count += 1;
    }
    
    answer_highlight.setPos([(- 500), 0.145]);
    QuestionText.setText(thisQ);
    Ans1.setText(A1);
    Ans2.setText(A2);
    Ans3.setText(A3);
    image_bot_check.setImage(thisBot_check_image);
    // setup some python lists for storing info about the ansMouse
    // current position of the mouse:
    ansMouse.x = [];
    ansMouse.y = [];
    ansMouse.leftButton = [];
    ansMouse.midButton = [];
    ansMouse.rightButton = [];
    ansMouse.time = [];
    ansMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    img_next_on.setOpacity(1);
    img_next_on.setPos([(- 500), (- 0.4)]);
    img_next_off.setOpacity(1.0);
    // keep track of which components have finished
    checksComponents = [];
    checksComponents.push(answer_highlight);
    checksComponents.push(QuestionText);
    checksComponents.push(Ans1);
    checksComponents.push(Ans2);
    checksComponents.push(Ans3);
    checksComponents.push(image_bot_check);
    checksComponents.push(ansMouse);
    checksComponents.push(img_next_on);
    checksComponents.push(img_next_off);
    
    for (const thisComponent of checksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var Answers;
function checksRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'checks'-------
    // get current time
    t = checksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *answer_highlight* updates
    if (t >= 0.0 && answer_highlight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_highlight.tStart = t;  // (not accounting for frame time here)
      answer_highlight.frameNStart = frameN;  // exact frame index
      
      answer_highlight.setAutoDraw(true);
    }

    
    // *QuestionText* updates
    if (t >= 0.0 && QuestionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      QuestionText.tStart = t;  // (not accounting for frame time here)
      QuestionText.frameNStart = frameN;  // exact frame index
      
      QuestionText.setAutoDraw(true);
    }

    
    // *Ans1* updates
    if (t >= 0.0 && Ans1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ans1.tStart = t;  // (not accounting for frame time here)
      Ans1.frameNStart = frameN;  // exact frame index
      
      Ans1.setAutoDraw(true);
    }

    
    // *Ans2* updates
    if (t >= 0.0 && Ans2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ans2.tStart = t;  // (not accounting for frame time here)
      Ans2.frameNStart = frameN;  // exact frame index
      
      Ans2.setAutoDraw(true);
    }

    
    // *Ans3* updates
    if (t >= 0.0 && Ans3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ans3.tStart = t;  // (not accounting for frame time here)
      Ans3.frameNStart = frameN;  // exact frame index
      
      Ans3.setAutoDraw(true);
    }

    
    // *image_bot_check* updates
    if (t >= 0.0 && image_bot_check.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_bot_check.tStart = t;  // (not accounting for frame time here)
      image_bot_check.frameNStart = frameN;  // exact frame index
      
      image_bot_check.setAutoDraw(true);
    }

    // *ansMouse* updates
    if (t >= 0.0 && ansMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ansMouse.tStart = t;  // (not accounting for frame time here)
      ansMouse.frameNStart = frameN;  // exact frame index
      
      ansMouse.status = PsychoJS.Status.STARTED;
      ansMouse.mouseClock.reset();
      prevButtonState = ansMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (ansMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = ansMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = ansMouse.getPos();
          ansMouse.x.push(_mouseXYs[0]);
          ansMouse.y.push(_mouseXYs[1]);
          ansMouse.leftButton.push(_mouseButtons[0]);
          ansMouse.midButton.push(_mouseButtons[1]);
          ansMouse.rightButton.push(_mouseButtons[2]);
          ansMouse.time.push(ansMouse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [Ans1, Ans2, Ans3]) {
            if (obj.contains(ansMouse)) {
              gotValidClick = true;
              ansMouse.clicked_name.push(obj.name)
            }
          }
        }
      }
    }
    
    // *img_next_on* updates
    if (t >= 0.0 && img_next_on.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_next_on.tStart = t;  // (not accounting for frame time here)
      img_next_on.frameNStart = frameN;  // exact frame index
      
      img_next_on.setAutoDraw(true);
    }

    
    // *img_next_off* updates
    if (t >= 0.0 && img_next_off.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_next_off.tStart = t;  // (not accounting for frame time here)
      img_next_off.frameNStart = frameN;  // exact frame index
      
      img_next_off.setAutoDraw(true);
    }

    Answers = [Ans1, Ans2, Ans3];
    for (var Ans, _pj_c = 0, _pj_a = Answers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        Ans = _pj_a[_pj_c];
        if (ansMouse.isPressedIn(Ans)) {
            answer_highlight.setPos(Ans.pos);
            Ans.refresh();
            img_next_on.setPos(img_next_off.pos);
        }
    }
    if (ansMouse.isPressedIn(img_next_on)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of checksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function checksRoutineEnd() {
  return async function () {
    //------Ending Routine 'checks'-------
    for (const thisComponent of checksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    bot_trials.finished = true;
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('ansMouse.x', ansMouse.x);
    psychoJS.experiment.addData('ansMouse.y', ansMouse.y);
    psychoJS.experiment.addData('ansMouse.leftButton', ansMouse.leftButton);
    psychoJS.experiment.addData('ansMouse.midButton', ansMouse.midButton);
    psychoJS.experiment.addData('ansMouse.rightButton', ansMouse.rightButton);
    psychoJS.experiment.addData('ansMouse.time', ansMouse.time);
    psychoJS.experiment.addData('ansMouse.clicked_name', ansMouse.clicked_name);
    
    if ((bot_trial && (ansMouse.clicked_name.slice((- 1))[0] === CorrAns))) {
        psychoJS.experiment.addData("bot_check", "passed");
        console.log("passed");
        console.log(ansMouse.clicked_name);
    } else {
        if ((bot_trial && (! (ansMouse.clicked_name.slice((- 1))[0] === CorrAns)))) {
            psychoJS.experiment.addData("bot_check", "failed");
            console.log("failed");
            console.log(ansMouse.clicked_name);
        }
    }
    psychoJS.experiment.addData("thisQ_", thisQ);
    psychoJS.experiment.addData("A1_", A1);
    psychoJS.experiment.addData("A2_", A2);
    psychoJS.experiment.addData("A3_", A3);
    
    // the Routine "checks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var last_winsize;
var textBoxComponents;
function textBoxRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'textBox'-------
    t = 0;
    textBoxClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    TextBox.setText(' ');
    // setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    window.TextBox = TextBox;
    last_winsize = psychoJS.window.size;
    
    // keep track of which components have finished
    textBoxComponents = [];
    textBoxComponents.push(instr_TextBox);
    textBoxComponents.push(TextBox);
    textBoxComponents.push(mouse_3);
    textBoxComponents.push(image_next_3);
    
    for (const thisComponent of textBoxComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function textBoxRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'textBox'-------
    // get current time
    t = textBoxClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_TextBox* updates
    if (t >= 0.0 && instr_TextBox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_TextBox.tStart = t;  // (not accounting for frame time here)
      instr_TextBox.frameNStart = frameN;  // exact frame index
      
      instr_TextBox.setAutoDraw(true);
    }

    
    // *TextBox* updates
    if (t >= 0.0 && TextBox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TextBox.tStart = t;  // (not accounting for frame time here)
      TextBox.frameNStart = frameN;  // exact frame index
      
      TextBox.setAutoDraw(true);
    }

    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_next_3,]) {
            if (obj.contains(mouse_3)) {
              gotValidClick = true;
              mouse_3.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *image_next_3* updates
    if (t >= 0.0 && image_next_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_next_3.tStart = t;  // (not accounting for frame time here)
      image_next_3.frameNStart = frameN;  // exact frame index
      
      image_next_3.setAutoDraw(true);
    }

    if ((psychoJS.window.size !== last_winsize)) {
        TextBox.refresh();
        last_winsize = psychoJS.window.size;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of textBoxComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function textBoxRoutineEnd() {
  return async function () {
    //------Ending Routine 'textBox'-------
    for (const thisComponent of textBoxComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TextBox.text',TextBox.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "textBox" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_text_end_allKeys;
var EndScreenComponents;
function EndScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'EndScreen'-------
    t = 0;
    EndScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    key_text_end.keys = undefined;
    key_text_end.rt = undefined;
    _key_text_end_allKeys = [];
    // keep track of which components have finished
    EndScreenComponents = [];
    EndScreenComponents.push(text_end1);
    EndScreenComponents.push(key_text_end);
    
    for (const thisComponent of EndScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndScreenRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'EndScreen'-------
    // get current time
    t = EndScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end1* updates
    if (t >= 0.0 && text_end1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end1.tStart = t;  // (not accounting for frame time here)
      text_end1.frameNStart = frameN;  // exact frame index
      
      text_end1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_end1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_end1.setAutoDraw(false);
    }
    
    // *key_text_end* updates
    if (t >= 0.0 && key_text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_text_end.tStart = t;  // (not accounting for frame time here)
      key_text_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_text_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_text_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_text_end.clearEvents(); });
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_text_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_text_end.status = PsychoJS.Status.FINISHED;
  }

    if (key_text_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_text_end.getKeys({keyList: ['space'], waitRelease: false});
      _key_text_end_allKeys = _key_text_end_allKeys.concat(theseKeys);
      if (_key_text_end_allKeys.length > 0) {
        key_text_end.keys = _key_text_end_allKeys[_key_text_end_allKeys.length - 1].name;  // just the last key pressed
        key_text_end.rt = _key_text_end_allKeys[_key_text_end_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndScreenRoutineEnd() {
  return async function () {
    //------Ending Routine 'EndScreen'-------
    for (const thisComponent of EndScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_text_end.stop();
    psychoJS.experiment.addData("TotalExperimentTime", globalClock.getTime());
    
    return Scheduler.Event.NEXT;
  };
}


var consentEndComponents;
function consentEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'consentEnd'-------
    t = 0;
    consentEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    consentEndComponents = [];
    consentEndComponents.push(consentEndTxt);
    
    for (const thisComponent of consentEndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consentEndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'consentEnd'-------
    // get current time
    t = consentEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consentEndTxt* updates
    if (t >= 0.0 && consentEndTxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentEndTxt.tStart = t;  // (not accounting for frame time here)
      consentEndTxt.frameNStart = frameN;  // exact frame index
      
      consentEndTxt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (consentEndTxt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      consentEndTxt.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentEndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentEndRoutineEnd() {
  return async function () {
    //------Ending Routine 'consentEnd'-------
    for (const thisComponent of consentEndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
