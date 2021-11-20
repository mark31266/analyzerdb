
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBJspFr6QSvhEAmONVu3Tl7lZrRFQSA-8I",
    authDomain: "analyzerdb.firebaseapp.com",
    databaseURL: "https://analyzerdb-default-rtdb.firebaseio.com",
    projectId: "analyzerdb",
    storageBucket: "analyzerdb.appspot.com",
    messagingSenderId: "326480477399",
    appId: "1:326480477399:web:2b7cf4d69a4895daeb8492",
    measurementId: "G-NHM4EMZ8HS"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig);
  import {
    getFirestore, query, doc, getDoc, where ,getDocs, onSnapshot, collection 
  }
  from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js"
const db = getFirestore(); 
var auto_inc = 0; 
var logresultstable = document.getElementById("logresults"); 
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var user = firebase.auth().currentUser;
      if(user != null){ 
        var io= user.email;

      }
    } 

     function AddItemToTable (activity,date,machine,sid,testdate,username)
     {
       let tr_data = document.createElement('tr'); 
       let td1 = document.createElement('td');
       let td2 = document.createElement('td'); 
       let td3 = document.createElement('td'); 
       let td4 = document.createElement('td'); 
       let td5 = document.createElement('td'); 
       let td6 = document.createElement('td'); 
       let td7 = document.createElement('td'); 
       td1.innerHTML = ++auto_inc; 
       td2.innerHTML = activity; 
       td3.innerHTML = date; 
       td4.innerHTML = machine; 
       td5.innerHTML = sid; 
       td6.innerHTML = testdate; 
       td7.innerHTML = username;  
       tr_data.appendChild(td1); 
       tr_data.appendChild(td2); 
       tr_data.appendChild(td3); 
       tr_data.appendChild(td4); 
       tr_data.appendChild(td5); 
       tr_data.appendChild(td6); 
       tr_data.appendChild(td7); 
       logresultstable.appendChild(tr_data); 
     }

     function AddAllItemsToTable(auditlog) {
      auto_inc = 0 ; 
      logresultstable.innerHTML=""; 
      auditlog.forEach(element => {
        AddItemToTable(element.Activity, element.DateDid, element.Machine, element.SID, element.Test_Run_Date,element.id); 
      }); 
     }
     async function GetAllDataOnce() {
      const q = query(collection(db, "auditlog"));
       const querySnapshot = await getDocs(q); 
       var datalog = []; 
       querySnapshot.forEach(doc => {
      datalog.push(doc.data()); 
       }); 

       AddAllItemsToTable(datalog);
     }

     async function RealTimeData() {
       
      const dbRef = collection(db,"auditlog"); 
        onSnapshot(dbRef, (querySnapshot) => {
          var datalog = []; 
        querySnapshot.forEach(doc => {
datalog.push(doc.data()); 
        });  

      AddAllItemsToTable(datalog);
      
    })
  }
  RealTimeData(); 
  setTimeout(function() {
    $(document).ready(function () {
     
       $('#example').dataTable({
        iDisplayLength : 5,
        pagingType: "full_numbers",
        searching: true,
        paginate : true,
        select: true,
        sorting: true,
        order: true,
        lengthChange: false,
        pageLength: 12,
        scrollY: "260px",
        columnDefs: [
          { width: "10px", targets: 0 },
          { width: "25px", targets: 1 },
          { width: "150px", targets: 2 },
          { width: "10px", targets: 3 },
          { width: "20px", targets: 4 },
          { width: "130px", targets: 5 },
          { width: "200px", targets: 6 },
      ],
      fixedColumns: false,
      "dom": '<lf<t>ip>',
        info: true,
        scrollCollapse: true,
        processing: false,
        language: { 
          
            paginate: {first: "First", last: "Last", next: "Next", previous: "Previous"}
           
        },
        
        serverSide: false,
         select: {
           style: 'os',
           items: 'cell'
         }
       });

     });
    },1200);

   document.getElementById("advancedbtn").addEventListener('click',function ()
{
  setTimeout(function(){ 
    
  }, 1000);
 
   }); 
 
}); 

var barcode = '';
var interval;
document.addEventListener('keydown', function(evt) {
    if (interval)
        clearInterval(interval);
    if (evt.code == 'Enter') {
        if (barcode)
            handleBarcode(barcode);
        barcode = '';
        return;
    }
    if (evt.key != 'Shift')
        barcode += evt.key;
    interval = setInterval(() => barcode = '', 20);
});

function handleBarcode(scanned_barcode) {
    document.querySelector('#last-barcode').innerHTML = scanned_barcode;

    
}

// var table = "#dtBasicExample"; 
// $('#maxRows').on('change', function()
// {
//   $(".pagination").html('')
// var trnum = 0; 
// var maxRows = parseInt($(this).val()) 
// var totalRows = $(table+' tbody tr').length
// $(table+' tr:gt(0)').each(function()
// {
//   trnum++
//   if(trnum > maxRows)
//   {
//     $(this).hide()
//   }
//   if(trnum <= maxRows)
//   {
//     $(this).show()
//   }
// })
// if (totalRows > maxRows)
// {
//   var pagenum = Math.ceil(totalRows/maxRows)
//   for(var i=1; i<=pagenum;) {
//     $('.pagination').append('<li data-page="'+i+'">\<span>'+ i++ + '<span class="sr-only">(current)</span></span>\</li>').show()

//   }

// }
// $('.pagination li:first-child').addClass('active')
// $('.pagination li').on('click', function()
// {
//   var pageNum = $(this).attr('data-page')
//   var trIndex = 0; 
//   $('.pagination li').removeClass('active')
//   $(this).addClass('active')
//   $(table+' tr: gt(0)').each(function()
//   {
//     trIndex++
//     if(trIndex > (maxRows*pageNum) || trIndex <= ((maxRows*pageNum)-maxRows))
//     {
// $(this).hide()
//     } 
//     else {
//       $(this).show()
//     }
//   })
// })
// })
// $(function(){
// $('table tr:eq(0)').prepend ('<th>ID</th>')
// var id = 0; 
// $('table tr:gt(0)').each(function()
// {
//   id++
//   $(this).prepend('<td>'+id+'</td>')
// })
// }) 

