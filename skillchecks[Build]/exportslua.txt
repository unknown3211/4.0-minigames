/* EXAMPLE -> exports['skillchecks']:startAlphabetGame(gameTimeoutDuration, numKeys); */
/* EXAMPLE -> exports['skillchecks']:startDirectionGame(gameTimeoutDuration, requiredCorrectChoices, minGridSize, maxGridSize); */
/* EXAMPLE -> exports['skillchecks']:startFlipGame(gameTimeoutDuration, gridSize); */
/* EXAMPLE -> exports['skillchecks']:startLockpickingGame(gameTimeoutDuration, numLocks, numLevels); */
/* EXAMPLE -> exports['skillchecks']:startSameGame(gameTimeoutDuration, gridSizeX, gridSizeY); */
/* EXAMPLE -> exports['skillchecks']:startUntangleGame(gameTimeoutDuration, numPoints); */
/* EXAMPLE -> exports['skillchecks']:startWordsGame(gameTimeoutDuration, requiredCorrectChoices); */
/* EXAMPLE -> exports['skillchecks']:startFloodGame(gameTimeoutDuration, moveCountLeniency, gridSize); */

EXAMPLE SCRIPT:

RegisterCommand('skillchecks:alphabet', function()
    exports['skillchecks']:startAlphabetGame(10000, 20, function(success)
        if success then
            print("Success")
        else
            print("Failed")
        end
    end)
end)

