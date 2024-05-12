let gameResultCallback;

RegisterNuiCallback("skillchecks:minigameResult", (data, cb) => {
  SetNuiFocus(false, false);
  console.log(data.result);
  emit("check:minigameResult", data.result);

  if (gameResultCallback) {
    gameResultCallback(data.result);
  }

  cb("ok");
});

on('check:minigameResult', (result) => {
  if (result) {
    console.log('Minigame was successful');
  } else {
    console.log('Minigame failed');
  }
});

exports('startAlphabetGame', (gameTimeoutDuration, numKeys, cb) => {
  SetNuiFocus(true, true);
  SendNUIMessage({
    action: "skillchecks:settings",
    data: {
      active: "alphabet",
      show: true,
      name: "Alphabet",
      description: "This is the alphabet",
      gameTimeoutDuration: gameTimeoutDuration,
      numKeys: numKeys,
    },
  });
  gameResultCallback = cb;
});

exports('startDirectionGame', (gameTimeoutDuration, requiredCorrectChoices, minGridSize, maxGridSize, cb) => {
  SetNuiFocus(true, true);
  SendNUIMessage({
    action: "skillchecks:settings",
    data: {
      active: "direction",
      show: true,
      name: "direction",
      description: "This is the direction",
      gameTimeoutDuration: gameTimeoutDuration,
      requiredCorrectChoices: requiredCorrectChoices,
      minGridSize: minGridSize,
      maxGridSize: maxGridSize,
    },
  });
  gameResultCallback = cb;
});

exports('startFlipGame', (gameTimeoutDuration, gridSize, cb) => {
  SetNuiFocus(true, true);
  SendNUIMessage({
    action: "skillchecks:settings",
    data: {
      active: "flip",
      show: true,
      name: "flip",
      description: "This is the flip",
      gameTimeoutDuration: gameTimeoutDuration,
      gridSize: gridSize,
    },
  });
  gameResultCallback = cb;
});

exports('startLockpickingGame', (gameTimeoutDuration, numLocks, numLevels, cb) => {
  SetNuiFocus(true, true);
  SendNUIMessage({
    action: "skillchecks:settings",
    data: {
      active: "lockpicking",
      show: true,
      name: "lockpicking",
      description: "This is the lockpicking",
      gameTimeoutDuration: gameTimeoutDuration,
      numLocks: numLocks,
      numLevels: numLevels,
    },
  });
  gameResultCallback = cb;
});

exports('startSameGame', (gameTimeoutDuration, gridSizeX, gridSizeY, cb) => {
  SetNuiFocus(true, true);
  SendNUIMessage({
    action: "skillchecks:settings",
    data: {
      active: "same",
      show: true,
      name: "same",
      description: "This is the same",
      gameTimeoutDuration: gameTimeoutDuration,
      gridSizeX: gridSizeX,
      gridSizeY: gridSizeY,
    },
  });
  gameResultCallback = cb;
});

exports('startUntangleGame', (gameTimeoutDuration, numPoints, cb) => {
  SetNuiFocus(true, true);
  SendNUIMessage({
    action: "skillchecks:settings",
    data: {
      active: "untangle",
      show: true,
      name: "untangle",
      description: "This is the untangle",
      gameTimeoutDuration: gameTimeoutDuration,
      numPoints: numPoints,
    },
  });
  gameResultCallback = cb;
});

exports('startWordsGame', (gameTimeoutDuration, requiredCorrectChoices, cb) => {
  SetNuiFocus(true, true);
  SendNUIMessage({
    action: "skillchecks:settings",
    data: {
      active: "words",
      show: true,
      name: "words",
      description: "This is the words",
      gameTimeoutDuration: gameTimeoutDuration,
      requiredCorrectChoices: requiredCorrectChoices,
    },
  });
  gameResultCallback = cb;
});

exports('startFloodGame', (gameTimeoutDuration, moveCountLeniency, gridSize, cb) => {
  SetNuiFocus(true, true);
  SendNUIMessage({
    action: "skillchecks:settings",
    data: {
      active: "flood",
      show: true,
      name: "flood",
      description: "This is the flood",
      gameTimeoutDuration: gameTimeoutDuration,
      moveCountLeniency: moveCountLeniency,
      gridSize: gridSize,
    },
  });
  gameResultCallback = cb;
});

/* EXAMPLE -> exports['skillchecks'].startAlphabetGame(gameTimeoutDuration, numKeys); */
/* EXAMPLE -> exports['skillchecks'].startDirectionGame(gameTimeoutDuration, requiredCorrectChoices, minGridSize, maxGridSize); */
/* EXAMPLE -> exports['skillchecks'].startFlipGame(gameTimeoutDuration, gridSize); */
/* EXAMPLE -> exports['skillchecks'].startLockpickingGame(gameTimeoutDuration, numLocks, numLevels); */
/* EXAMPLE -> exports['skillchecks'].startSameGame(gameTimeoutDuration, gridSizeX, gridSizeY); */
/* EXAMPLE -> exports['skillchecks'].startUntangleGame(gameTimeoutDuration, numPoints); */
/* EXAMPLE -> exports['skillchecks'].startWordsGame(gameTimeoutDuration, requiredCorrectChoices); */
/* EXAMPLE -> exports['skillchecks'].startFloodGame(gameTimeoutDuration, moveCountLeniency, gridSize); */

/* FOR LUA JUST ADD : INSTEAD OF . */
/* EXPORTS FIXED BY UNKNOWNJOHN */