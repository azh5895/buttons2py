input.onButtonPressed(Button.A, function () {
    if (true) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
	
})
