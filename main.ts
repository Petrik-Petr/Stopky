let T = 0
let P = 0
let C = 0
basic.forever(function() {
    console.log(C / 100)
    if (T === 1){
        basic.pause(10)
        C += 1
    }
    if (P === 2) {
        P = 0
    }
    if (P === 1){
        input.onButtonPressed(Button.A, function (){
            basic.clearScreen()
            music.setVolume(255)
            music.ringTone(Note.E)
            basic.pause(75)
            music.ringTone(Note.G3)
            basic.pause(75)
            music.ringTone(Note.C)
            basic.pause(100)
            music.setVolume(0)
            T = 0
            P = 2
            basic.showNumber(C / 100)
        }
    )}
    if (P === 0){
        input.onButtonPressed(Button.A, function(){
            music.setVolume(255)
            music.ringTone(Note.C)
            basic.pause(75)
            music.ringTone(Note.G3)
            basic.pause(75)
            music.ringTone(Note.E)
            basic.pause(100)
            music.setVolume(0)
            T = 1
            P = 1
            C = 0
            basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . . # #
            . # # # .
            `)
        })
    }
})