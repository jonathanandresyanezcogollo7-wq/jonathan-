basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showIcon(IconNames.Asleep)
        basic.clearScreen()
    }
})
