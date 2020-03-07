
const renderer = new Renderer()
let board

const load = function(){
   renderer.renderStart()
}
$('#board').on('click','#start-btn',function(){
    const rows = parseInt($('#row-num').val())
    const cols = parseInt($('#col-num').val())   
    if(rows > 3 && cols > 3 && rows < 13 && cols < 13){
        board = new GoldRush(rows,cols)
        board.generateCoins(Math.floor(rows*cols /2))
        board.generateWalls(Math.floor(rows*cols /4))
        $('#board').css(`grid-template-rows` , `repeat(${rows},1fr)`)
        $('#board').css(`grid-template-columns`, `repeat(${cols},1fr)`)
        renderer.renderBoard(board)
        renderer.renderScore(board)
    }else{
        alert('Rows and columns must be positive and larger then 3(each)')
        renderer.renderStart()
    }
})
$('#board').on('click','#restart',function(){
    renderer.renderStart()
})


$(document).keypress(function (e) {
    switch(e.which){
        case 119 :
            board.movePlayer(1, "up")
            
            break;
            
            case 97 :
            board.movePlayer(1, "left")
            
            break;
            case 115 : 
            board.movePlayer(1, "down")
            
            break;
            case 100 :
            board.movePlayer(1, "right")
            
            break;
            case 105 :
            board.movePlayer(2, "up")
            
            break;
            case 106 :
            board.movePlayer(2, "left")
            
            break;
            case 107 :
            board.movePlayer(2, "down")
            
            break;
            case 108 :
            board.movePlayer(2, "right")
            break;
            default:
                return
    }
    console.log(board.coins);
    
    if(board.p1.score > board.coins /2){
        renderer.gameOver(1)
    }else if(board.p2.score > board.coins /2){
        renderer.gameOver(2)
    }else{
        renderer.renderBoard(board)
        renderer.renderScore(board)
    }
})

Handlebars.registerHelper('isWall', function (value) {
    return value == 'wall';
  });
Handlebars.registerHelper('isCoin', function (value) {
    return value == 'C';
  });
  Handlebars.registerHelper('isPlayer1', function (value) {
    return value == '1'
  })
  Handlebars.registerHelper('isPlayer2', function (value) {
    return value == '2'
  })  
load()


