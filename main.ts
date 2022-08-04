input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        basic.pause(750)
        Timer += -1
        basic.showNumber(Timer)
    }
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Square)
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Chessboard)
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
        }
    }
})
let Timer = 0
Timer = 10
