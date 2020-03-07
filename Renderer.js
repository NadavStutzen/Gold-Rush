class Renderer{
    constructor(){
        this.boardTemplate = Handlebars.compile($("#board-template").html());
        this.scoreTemplate = Handlebars.compile($("#score-template").html());
        this.startTemplate = Handlebars.compile($("#start-template").html());
        this.overTemplate = Handlebars.compile($("#over-template").html());
    }

    renderBoard(board){
        const newHtml = this.boardTemplate(board)
        $('#board').empty().append(newHtml)
    }
    gameOver(player){
        const newHtml = this.overTemplate({'player' : player})
        $('#score').empty()
        $('#board').empty().append(newHtml)   
    }
    renderStart(){
        const newHtml = this.startTemplate()
        $('#board').empty().append(newHtml)
    }

    renderScore(board){
        const newHtml = this.scoreTemplate(board)
        $('#score').empty().append(newHtml)
    }
}