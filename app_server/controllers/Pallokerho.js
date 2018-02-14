
const playerlist = function(req, res){
    res.render('pallokerho',{
        players:
        [
            {number:'1', player:'Ukko-Pekka Luukkonen', nation: 'FIN', position: 'Goalie'},
            {number:'3', player:'Joonas Lehtivuori', nation: 'FIN', position: 'Defender'},
            {number:'5', player:'Jesper Lindgren', nation: 'SWE', position: 'Defender'},
            {number:'6', player:'Niklas Friman', nation: 'FIN', position: 'Defender'},
            {number:'7', player:'Otto Paajanen', nation: 'FIN', position: 'Center'},
            {number:'10', player:'Matthias Porseland', nation: 'SWE', position: 'Defender'},
            {number:'11', player:'Oula Palve', nation: 'FIN', position: 'Center'},
            {number:'16', player:'Harri Kainulainen', nation: 'FIN', position: 'Right Wing'},
            {number:'19', player:'Juho Keränen', nation: 'FIN', position: 'Right Wing'},
            {number:'21', player:'Jere Innala', nation: 'FIN', position: 'Left Wing'},
            {number:'25', player:'Roope Laavanainen', nation: 'FIN', position: 'Defender'},
            {number:'27', player:'Filip Krivosik', nation: 'SVK', position: 'Right Wing'},
            {number:'28', player:'Jaakko Turtiainen', nation: 'FIN', position: 'Left Wing'},
            {number:'29', player:'Miro Ruokonen', nation: 'FIN', position: 'Left Wing'},
            {number:'33', player:'Emil Larmi', nation: 'FIN', position: 'Goalie'},
            {number:'34', player:'Erkka Seppälä', nation: 'FIN', position: 'Left Wing'},
            {number:'35', player:'Antti Karjalainen', nation: 'FIN', position: 'Goalie'},
            {number:'37', player:'Niclas Almari', nation: 'FIN', position: 'Defender'},
            {number:'38', player:'Miro Karjalainen', nation: 'FIN', position: 'Defender'},
            {number:'39', player:'Ville Viitaluoma', nation: 'FIN', position: 'Center'},
            {number:'42', player:'Otto Latvala', nation: 'FIN', position: 'Defender'},
            {number:'47', player:'Janne Lahti', nation: 'FIN', position: 'Right Wing'},
            {number:'56', player:'Markus Niemeläinen', nation: 'FIN', position: 'Defender'},
            {number:'62', player:'Robert Leino', nation: 'FIN', position: 'Center'},
            {number:'67', player:'Severi Sillanpää', nation: 'FIN', position: 'Center'},
            {number:'74', player:'Petteri Nikkilä', nation: 'FIN', position: 'Defender'},
            {number:'75', player:'Jaakko Kuusisto', nation: 'FIN', position: 'Left Wing'},
            {number:'80', player:'Teemu Turunen', nation: 'FIN', position: 'Right Wing'},
            {number:'82', player:'Eetu Tuulola', nation: 'FIN', position: 'Right Wing'},
            {number:'93', player:'Kristian Vesalainen', nation: 'FIN', position: 'Left Wing'}


        ]});
};

module.exports = {
    playerlist
};