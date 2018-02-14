
const scorerlist = function(req, res){
    res.render('stats',{
        scorers:
        [
            {number:'#7', goals:'16'},
            {number:'#11', goals:'12'},
            {number:'#16', goals:'1'},
            {number:'#19', goals:'3'},
            {number:'#21', goals:'4'},
            {number:'#27', goals:'0'},
            {number:'#28', goals:'3'},
            {number:'#29', goals:'4'},
            {number:'#34', goals:'0'},
            {number:'#39', goals:'1'},
            {number:'#47', goals:'5'},
            {number:'#62', goals:'2'},
            {number:'#67', goals:'1'},
            {number:'#80', goals:'16'},
            {number:'#82', goals:'14'},
            {number:'#93', goals:'19'}

        ]});
};
module.exports = {
    scorerlist
};