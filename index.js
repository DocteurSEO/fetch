
let perso = [ 
    { name: 'Ahmed', age: 100 } , 
     { name: 'eric', age: 8 } ,
     { name: 'Ahmed', age: 18 }, 
     { name: 'Rome', age: 20 },
     { name: 'Doris', age: 28 },
     { name: 'Jerome', age: 158 },
     { name: 'Harry', age: 58 , type : 'humain' },
  ]


 


function easyFilter(data,filters) {


    let killOperators = {
        'includes': function(a, b) { 
          
         
          return a.toString().includes(b)  },
        '<': function(a, b) { return a < b },
        '>' :  function(a, b) { return a > b },
        '<=' :  function(a, b) { return a <= b },
        '>=' :  function(a, b) { return a >= b },
        '==' :  function(a, b) { return a == b },
        '!=' :  function(a, b) { return a != b },
    }

    
    
    return data.filter(function(val) {


        
        if (typeof filters[2]== 'string' && typeof val[filters[0]]== 'string' ){
            filters[2] = filters[2].toLowerCase()
            val[filters[0]] = val[filters[0]].toLowerCase()
        }
      
      return killOperators[filters[1]](val[filters[0]]   ,filters[2] )
     
    })
  }

 

 
 const result = easyFilter(perso , ['name', 'includes' , 'm'] );


 console.log(result)

// function easyDom (selector , html, mode) {

//   if(mode == true){
//     document.querySelector(selector).innerHTML += html
   
//   }
//   else {
//     document.querySelector(selector).innerHTML = html
//   }


// }


// easyDom('div','<p>salut</p>', true)