input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("B E G D G E C F ", 120), music.PlaybackMode.UntilDone)
    basic.showString("Hackt")
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("Eror")
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(404)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        . # # # .
        . # # # .
        `)
    basic.clearScreen()
    basic.pause(1000)
    basic.showIcon(IconNames.Skull)
    basic.clearScreen()
    basic.pause(1000)
    basic.showIcon(IconNames.Skull)
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("Crack Eror 404 ")
    basic.pause(1000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("404")
    basic.clearScreen()
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.clearScreen()
})
