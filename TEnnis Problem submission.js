var Total_No_of_Players = 16
var Players_List = [                                                                            // Players List
    {
        Name: 'Daniil Medvedev_1',
        Country: 'Russia',
        Rank: 1,
        No_of_Matches_Played: 365,
        Tournament_Played: 19,
        Player_ID: "ATR001"
    },
    {
        Name: 'Alexander Zverev_2',
        Country: 'Germany',
        Rank: 2,
        No_of_Matches_Played: 365,
        Tournament_Played: 19,
        Player_ID: "ATR002"
    },
    {
        Name: 'Rafael Nadal_3',
        Country: 'Spain',
        Rank: 3,
        No_of_Matches_Played: 365,
        Tournament_Played: 9,
        Player_ID: "ATR003"
    },
    {
        Name: 'Carlos Alcaraz_4',
        Country: 'Spain',
        Rank: 4,
        No_of_Matches_Played: 365,
        Tournament_Played: 17,
        Player_ID: "ATR004"
    },
    {
        Name: 'Stefanos Tsitsipas_5',
        Country: 'Greece',
        Rank: 5,
        No_of_Matches_Played: 365,
        Tournament_Played: 22,
        Player_ID: "ATR005"
    },
    {
        Name: 'Novak Djokovic_6',
        Country: 'Serbia',
        Rank: 6,
        No_of_Matches_Played: 365,
        Tournament_Played: 11,
        Player_ID: "ATR006"
    },
    {
        Name: 'Casper Ruud_7',
        Country: 'Norway',
        Rank: 7,
        No_of_Matches_Played: 365,
        Tournament_Played: 23,
        Player_ID: "ATR007"
    },
    {
        Name: 'f_Auger Aliassime_8',
        Country: 'Canada',
        Rank: 8,
        No_of_Matches_Played: 365,
        Tournament_Played: 24,
        Player_ID: "ATR008"
    },
    {
        Name: 'Cameron Norrie_9',
        Country: 'England',
        Rank: 9,
        No_of_Matches_Played: 365,
        Tournament_Played: 24,
        Player_ID: "ATR009"
    },
    {
        Name: 'Hubert Hurkacz_10',
        Country: 'Poland',
        Rank: 10,
        No_of_Matches_Played: 365,
        Tournament_Played: 22,
        Player_ID: "ATR010"
    },
    {
        Name: 'Andrey Rublev_11',
        Country: 'Russia',
        Rank: 11,
        No_of_Matches_Played: 365,
        Tournament_Played: 24,
        Player_ID: "ATR011"
    },
    {
        Name: 'Taylor Fritz_12',
        Country: 'United States of America',
        Rank: 12,
        No_of_Matches_Played: 365,
        Tournament_Played: 23,
        Player_ID: "ATR012"
    },
    {
        Name: 'Jannik Sinner_13',
        Country: 'Italy',
        Rank: 13,
        No_of_Matches_Played: 365,
        Tournament_Played: 21,
        Player_ID: "ATR013"
    },
    {
        Name: 'Matteo Berrettini_14',
        Country: 'Italy',
        Rank: 14,
        No_of_Matches_Played: 365,
        Tournament_Played: 18,
        Player_ID: "ATR014"
    },
    {
        Name: 'Pablo Carreno Busta_15',
        Country: 'Spain',
        Rank: 15,
        No_of_Matches_Played: 365,
        Tournament_Played: 23,
        Player_ID: "ATR015"
    },
    {
        Name: 'Djego Schwartzman_16',
        Country: 'Argentina',
        Rank: 16,
        No_of_Matches_Played: 365,
        Tournament_Played: 24,
        Player_ID: "ATR016"
    }
]
len = Players_List.length
console.log('len:',len)                                                     // Dispalys the No. of Players paticipating in the Tournament
console.log(" ---------------------------------------------------------------------------------------------------------------------------------------------------------------- ");

Players_Name = []
for (i of Players_List) {
    Players_Name.push(i.Name)
}
// console.log('Name:', Players_Name)

Top_Rankers = []
Next_Rankers = []
for (j of Players_List) {
    if (j.Rank <= 8) {
        Top_Rankers.push(j.Name)
    }
    else{
        Next_Rankers.push(j.Name)
    }
}

Reversed_Next = Next_Rankers.reverse()

array4=[]
// for(i in Top_Rankers){
//     for(j in Next_Rankers){
        // n = Top_Rankers.map((e,i) => `${e} , ${Next_Rankers[i]}`)
        // array4.push([n])
//     }
// }
// array4=array4[0]
// console.log(array4,'array4')
for(i in Top_Rankers){
             array4.push([Top_Rankers[i],Reversed_Next[i]])
 }
 // console.log(array4,'array4')

 // Dividing the Name list based on their Index
oddArray = []
evenArray = []
for(k in array4){
    if(k % 2 ==0){
        evenArray.push(array4[k])
    }
    else{
        oddArray.push(array4[k])
    }
}
oddArray = oddArray.reverse()
// console.log('odd', oddArray)
// console.log('even', evenArray);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Function for Round_1 Matches
round1={}
Round_1=[]
count=0
function Round1(){
    count=0
    for(l in evenArray){
        Round_1.push(evenArray[l])
        Round_1.push(oddArray[l])
    }
}
Round1()
console.log('Round1 Schedule:',Round_1)


winner_round1 = []
for(m of Round_1){
    if((Math.round(Math.random(m[0])* 100)) > (Math.round(Math.random(m[1] * 100)))){
        winner_round1.push(m[0])
    }
    else{
        winner_round1.push(m[1])
    }
}
console.log('Winners of First Round:', winner_round1)
console.log(" ----------------------------------------------------------------------------------------------------------------------------------------------------------------- ")

// --------------------------------------------------------------------- ROUND 1 ---------------------------------------------------------------------------------------------- 


// Function for Round 2

round2={}
Round_2 = []
oddArray1 = []
evenArray1 = []

function Round2(){
    for(o in winner_round1){
        if(o %2 ==0){
            evenArray1.push(winner_round1[o])
        }
        else{
            oddArray1.push(winner_round1[o])
        }
    }

    for(p in oddArray1){
        Round_2.push([evenArray1[p],oddArray1[p]])
    }
}
Round2()
// console.log('evenArray1:',evenArray1)
// console.log('oddArray1:',oddArray1)
console.log('Round2 Schedule:',Round_2)

//Function for winner of Round2

winner_round2 = []
function winnerRound2(){
for(q of Round_2){
    if((Math.round(Math.random(q[0])* 100)) > (Math.round(Math.random(q[1] * 100)))){
        winner_round2.push(q[0])
    }
    else{
        winner_round2.push(q[1])
    }
}
}
winnerRound2()
console.log('Winners of Second Round:', winner_round2)
console.log(" ----------------------------------------------------------------------------------------------------------------------------------------------------------------- ")

// --------------------------------------------------------------------- ROUND 2 ---------------------------------------------------------------------------------------------- 


// Function for Round 3

round3={}
Round_3=[]
oddArray2=[]
evenArray2=[]

function Round3(){
    for(r in winner_round2){
        if(r % 2 == 0){
            evenArray2.push(winner_round2[r])
        }
        else{
            oddArray2.push(winner_round2[r])
        }
    }

    oddArray2 = oddArray2.reverse()                                             // Reversing the oddArray

    for(s in oddArray2){
        Round_3.push([evenArray2[s],oddArray2[s]])
    }
}
Round3()


// console.log('oddArray2:', oddArray2);
// console.log('evenArray2:', evenArray2)
console.log('Round3 Schedule:', Round_3);


// Function for Winner of Round 3 

winner_round3 = []
function winnerRound3(){
    for(t of Round_3){
        if((Math.round(Math.random(t[0]) * 100)) > (Math.round(Math.random(t[1]) * 100))) 
        {
            winner_round3.push(t[0])
        }
        else{
            winner_round3.push(t[1])
        }
    }
}
winnerRound3()
console.log('Winners of Third Round:', winner_round3)
console.log(" ----------------------------------------------------------------------------------------------------------------------------------------------------------------- ")

// --------------------------------------------------------------------- ROUND 3 ---------------------------------------------------------------------------------------------- 

// Function for Round 4:

round4={}
Round_4 = []
oddArray3=[]
evenArray3=[]

function Round4(){
    for(u in winner_round3){
        if(u % 2 == 0){
            evenArray3.push(winner_round3[u])
        }
        else{
            oddArray3.push(winner_round3[u])
        }
    }

    for(v in oddArray3){
        Round_4.push(oddArray3[v],evenArray3[v])
    }
}
Round4()

// console.log('oddArray3:', oddArray3);
// console.log('evenArray3:', evenArray3)
console.log('Round4 Schedule:', Round_4);

// Function for winner of Round4
winner_round4 = []
function winnerRound4(){
    for(w=0; w<Round_4.length/2;w++){
        if((Math.round(Math.random(Round_4[w][0]) * 100)) < (Math.round(Math.random(Round_4[w][1] * 100))) )
        {
            winner_round4.push(Round_4[w])
        }
        else{
            winner_round4.push(Round_4[w])
        }
    }
}
winnerRound4()
console.log('Winner of Fourth Round:', winner_round4)
console.log(" ---------------------------------------------------------------------------------------------------------------------------------------------------------------- ")


console.log('THE WINNER OF THE TOURNAMENT IS:', winner_round4)

