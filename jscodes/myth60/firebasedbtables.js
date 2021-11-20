//---------------------------firebase config---------------------------------------//
var firebaseConfig = {
  apiKey: "AIzaSyBJspFr6QSvhEAmONVu3Tl7lZrRFQSA-8I",
  authDomain: "analyzerdb.firebaseapp.com",
  databaseURL: "https://analyzerdb-default-rtdb.firebaseio.com",
  projectId: "analyzerdb",
  storageBucket: "analyzerdb.appspot.com",
  messagingSenderId: "326480477399",
  appId: "1:326480477399:web:2b7cf4d69a4895daeb8492",
  measurementId: "G-NHM4EMZ8HS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore(); 
let engineers = [];
firebase.auth().onAuthStateChanged(function(user) {
  var user = firebase.auth().currentUser;
  username = user.email;
})
var clicks = 0;



//--------------writing data---------------------//
document.getElementById("submitdata").addEventListener("click", function(event) {
     //--------------ID data---------------------//
  var date1 = document.getElementById("dateselect").value; 
  var sid1 = document.getElementById("sidselect").value; 
  db.collection("patientvalues").doc(username).collection("DATE").doc(date1).collection("SID").doc(sid1).collection("DATA")
  .get()  
  .then((snapshot) => {
    snapshot.docs.forEach(doc => {
      renderAccount(doc);    
   
 
    })
})
    //-----------------Tables--------------------/
const fn = document.querySelector('#fname1');
const ln = document.querySelector('#lname1') ;

const time1 = document.querySelector('#datetime');
const results1 = document.querySelector('#results');
    //-----------------Tables--------------------/
function renderAccount(doc){
   //-----------------First and Last Name--------------------/
   let trfn = document.getElementById('fnameinputs'); 
   let trln = document.getElementById('lnameinputs'); 
   //-----------------Age and Gender--------------------/
   let tra = document.getElementById('ageinputs');
   let trg = document.getElementById('genderinputs');
   let trb = document.getElementById('bloodselect');
    //-----------------Time--------------------/
   let tr_time = document.getElementById('timeinputs');
      //-----------------Attending Physician--------------------/
      let tr_aphys = document.getElementById('physicianinputs');
     //-----------------WBC--------------------/
     let tr_wbc = document.getElementById('wbc');
     let th_wbc = document.createElement('td');
     let th_wbcunit = document.createElement('td');
     let th_wbcnormal = document.createElement('td');
     //-----------------RBC--------------------/
     let tr_rbc = document.getElementById('rbc');
     let th_rbc = document.createElement('td');
     let th_rbcunit = document.createElement('td');
     let th_rbcnormal = document.createElement('td');
      //-----------------NEU--------------------/
      let tr_neu = document.getElementById('neu');
      let th_neu = document.createElement('td');
      let th_neuunit = document.createElement('td');
      let th_neunormal = document.createElement('td');
      //-----------------MON--------------------/
     //-----------------LYM--------------------/
     let tr_lym = document.getElementById('lym');
     let th_lym = document.createElement('td');
     let th_lymunit = document.createElement('td');
     let th_lymnormal = document.createElement('td');
     //-----------------MON--------------------/
     let tr_mon = document.getElementById('mon');
     let th_mon = document.createElement('td');
     let th_monunit = document.createElement('td');
     let th_monnormal = document.createElement('td');
     //-----------------EOS--------------------/
     let tr_eos = document.getElementById('eos');
     let th_eos = document.createElement('td');
     let th_eosunit = document.createElement('td');
     let th_eosnormal = document.createElement('td');
     //-----------------HGB--------------------/
     let tr_hgb = document.getElementById('hgb');
     let th_hgb = document.createElement('td');
     let th_hgbunit = document.createElement('td');
     let th_hgbnormal = document.createElement('td');
     //-----------------HCT--------------------/
     let tr_hct = document.getElementById('hct');
     let th_hct = document.createElement('td');
     let th_hctunit = document.createElement('td');
     let th_hctnormal = document.createElement('td');
     //-----------------MCV--------------------/
     let tr_mcv = document.getElementById('mcv');
     let th_mcv = document.createElement('td');
     let th_mcvunit = document.createElement('td');
     let th_mcvnormal = document.createElement('td');
     //-----------------MCH--------------------/
     let tr_mch = document.getElementById('mch');
     let th_mch = document.createElement('td');
     let th_mchunit = document.createElement('td');
     let th_mchnormal = document.createElement('td');
     //-----------------MCHC--------------------/
     let tr_mchc = document.getElementById('mchc');
     let th_mchc = document.createElement('td');
     let th_mchcunit = document.createElement('td');
     let th_mchcnormal = document.createElement('td');
         //-----------------BAS--------------------/
         let tr_bas = document.getElementById('bas');
         let th_bas = document.createElement('td');
         let th_basunit = document.createElement('td');
         let th_basnormal = document.createElement('td');
     //-----------------PLT--------------------/
     let tr_plt = document.getElementById('plt');
     let th_plt = document.createElement('td');
     let th_pltunit = document.createElement('td');
     let th_pltnormal = document.createElement('td');
            //-----------------Blood Type--------------------/
            let tr_blood = document.getElementById('bloodtype');
            let th_blood = document.createElement('td');
     event.stopPropagation; 
     
     //-----------------First and Last Name Get Data--------------------/
     trfn.value = doc.data().FirstName; 
     trln.value = doc.data().LastName; 
           //-----------------Age and Gender Get Data--------------------/
         tra.value = doc.data().Age;
         trg.value = doc.data().Gender;
         
            //-----------------APHY Get Data--------------------/
           var ab = tr_aphys.value = doc.data().Doctor; 
         if (ab == undefined)
         {
           tr_aphys.value = " "
         }
         else{
           tr_aphys.value = doc.data().Doctor; 
         }
         //-----------------Blood Type Get Data--------------------/
       var ad = trb.value = doc.data().BLOOD; 
       if (ad == undefined)
       {
         trb.value = " "
       }
       else{
         trb.value = doc.data().BLOOD; 
       }
    //-----------------Time Get Data--------------------/
    tr_time.value = doc.data().TIME;
      //-----------------WBC Data--------------------/ 
      var wbca = doc.data().WBC; 
      var wbcb = doc.data().WBCNORMAL.substr(6,6); 
      var wbcc = doc.data().WBCNORMAL.substr(0,3); 
      if (parseFloat(wbca) >= parseFloat(wbcb))
         {
          th_wbc.innerHTML += "</b>" + wbca + "&nbsp↑</b>" 
         }
        else if (parseFloat(wbca) < parseFloat(wbcc))
         {
          th_wbc.innerHTML += "<b>" + wbca + "&nbsp↓</b>" 
         }
         else 
         {
          th_wbc.innerHTML += "<b>" + wbca + "</b>" 
         }
      tr_wbc.appendChild(th_wbc);
      results1.appendChild(tr_wbc);
      th_wbcunit.innerHTML += "<b>" + doc.data().WBCUNIT + "</b>" ;
      tr_wbc.appendChild(th_wbcunit);
      results1.appendChild(tr_wbc);
      th_wbcnormal.innerHTML += "<b>" + doc.data().WBCNORMAL + "</b>";
      tr_wbc.appendChild(th_wbcnormal);
      results1.appendChild(tr_wbc);
      tr_wbc.setAttribute("id", "wbc")
        //-----------------NEU Data--------------------/
        var neua = doc.data().NEU; 
        var neub = doc.data().NEUNORMAL.substr(7,6); 
        var neuc = doc.data().NEUNORMAL.substr(0,3); 
        if (parseFloat(neua) >= parseFloat(neub))
        {
         th_neu.innerHTML += "" + neua + "&nbsp↑" 
        }
        else if (parseFloat(neua) < parseFloat(neuc))
        {
         th_neu.innerHTML += "" + neua + "&nbsp↓" 
        }
        else 
        {
         th_neu.textContent = neua; 
        }
        tr_neu.appendChild(th_neu);
        results1.appendChild(tr_neu);
        th_neuunit.innerHTML += doc.data().NEUUNIT;
        tr_neu.appendChild(th_neuunit);
        results1.appendChild(tr_neu);
        th_neunormal.innerHTML += doc.data().NEUNORMAL;
        tr_neu.appendChild(th_neunormal);
        results1.appendChild(tr_neu);
      //-----------------LYM Data--------------------/
      var lyma = doc.data().LYM; 
      var lymb = doc.data().LYMNORMAL.substr(7,6); 
      var lymc = doc.data().LYMNORMAL.substr(0,3); 
      if (parseFloat(lyma) > parseFloat(lymb))
         {
          th_lym.innerHTML += "" + lyma + "&nbsp↑" 
         }
       else if (parseFloat(lyma) < parseFloat(lymc))
         {
          th_lym.innerHTML += "" + lyma + "&nbsp↓" 
         }
         else 
         {
          th_lym.textContent = lyma; 
         }
       tr_lym.appendChild(th_lym);
       results1.appendChild(tr_lym);

       th_lymunit.innerHTML += doc.data().LYMUNIT;
       tr_lym.appendChild(th_lymunit);
       results1.appendChild(tr_lym);
       
       th_lymnormal.innerHTML += doc.data().LYMNORMAL;
       tr_lym.appendChild(th_lymnormal);
       results1.appendChild(tr_lym);
       
      //-----------------MON Data--------------------/
      var mona = doc.data().MON; 
      var monb = doc.data().MONNORMAL.substr(7,6); 
      var monc = doc.data().MONNORMAL.substr(0,3); 
      if (parseFloat(mona) >= parseFloat(monb))
         {
          th_mon.innerHTML += "" + mona + "&nbsp↑" 
         }
         else if (parseFloat(mona) < parseFloat(monc))
         {
          th_mon.innerHTML += "" + mona + "&nbsp↓" 
         }
         else 
         {
          th_mon.textContent = mona; 
         }
       tr_mon.appendChild(th_mon);
       results1.appendChild(tr_mon);

       th_monunit.innerHTML += doc.data().MONUNIT;
       tr_mon.appendChild(th_monunit);
       results1.appendChild(tr_mon);

       th_monnormal.innerHTML += doc.data().MONNORMAL;
       tr_mon.appendChild(th_monnormal);
       results1.appendChild(tr_mon);
      //-----------------EOS Data--------------------/
      var eosa = doc.data().EOS; 
      var eosb = doc.data().EOSNORMAL.substr(7,6); 
      var eosc = doc.data().EOSNORMAL.substr(0,3); 
      if (parseFloat(eosa) > parseFloat(eosb))
         {
          th_eos.innerHTML += "" + eosa + "&nbsp↑" 
         }
         else if (parseFloat(eosa) < parseFloat(eosc))
         {
          th_eos.innerHTML += "" + eosa + "&nbsp↓" 
         }
         else 
         {
          th_eos.textContent = eosa; 
         }
       tr_eos.appendChild(th_eos);
       results1.appendChild(tr_eos);
       
       th_eosunit.innerHTML += doc.data().EOSUNIT;
       tr_eos.appendChild(th_eosunit);
       results1.appendChild(tr_eos);

       th_eosnormal.innerHTML += doc.data().EOSNORMAL;
       tr_eos.appendChild(th_eosnormal);
       results1.appendChild(tr_eos);
        //-----------------BAS Data--------------------/
        var basa = doc.data().BAS; 
        var basb = doc.data().BASNORMAL.substr(7,6); 
        var basc = doc.data().BASNORMAL.substr(0,5); 
        if (parseFloat(basa) > parseFloat(basb))
           {
            th_bas.innerHTML += "" + basa + "&nbsp↑" 
           }
           else if (parseFloat(basa) < parseFloat(basc))
           {
            th_bas.innerHTML += "" + basa + "&nbsp↓" 
           }
           else 
           {
            th_bas.textContent = basa; 
           }
        tr_bas.appendChild(th_bas);
        results1.appendChild(tr_bas);
        th_basunit.innerHTML += doc.data().BASUNIT;
        tr_bas.appendChild(th_basunit);
        results1.appendChild(tr_bas);

        th_basnormal.innerHTML += doc.data().BASNORMAL;
        tr_bas.appendChild(th_basnormal);
        results1.appendChild(tr_bas);
      //-----------------RBC Data--------------------/
      var rbca = doc.data().RBC; 
      var rbcb = doc.data().RBCNORMAL.substr(7,6); 
      var rbcc = doc.data().RBCNORMAL.substr(0,3); 

      if (parseFloat(rbca) > parseFloat(rbcb))
         {
          th_rbc.innerHTML += "<b>" + rbca + "&nbsp↑ </b>" 
         }
         else if (parseFloat(rbca) < parseFloat(rbcc))
         {
          th_rbc.innerHTML += "<b>" + rbca + "&nbsp↓ </b>" 
         }
         else 
         {
          th_rbc.innerHTML += "<b>" + rbca + "</b>" 
         }
      tr_rbc.appendChild(th_rbc);
      results1.appendChild(tr_rbc);

      th_rbcunit.innerHTML +=  "<b>" +  doc.data().RBCUNIT  + "</b>" ;
      tr_rbc.appendChild(th_rbcunit);
      results1.appendChild(tr_rbc);
      
      th_rbcnormal.innerHTML +=  "<b>" + doc.data().RBCNORMAL + "</b>" ;
      tr_rbc.appendChild(th_rbcnormal);
      results1.appendChild(tr_rbc);
      //-----------------HGB Data--------------------/
      var hgba = doc.data().HGB; 
      var hgbb = doc.data().HGBNORMAL.substr(7,6); 
      var hgbc = doc.data().HGBNORMAL.substr(0,4); 
      if (parseFloat(hgba) > parseFloat(hgbb))
         {
          th_hgb.innerHTML += "<b>" + hgba + "&nbsp↑ </b>" 
         }
         else if (parseFloat(hgba) < parseFloat(hgbc))
         {
          th_hgb.innerHTML += "<b>" + hgba + "&nbsp↓ </b>" 
         }
         else 
         {
          th_hgb.innerHTML += "<b>" + hgba + "</b>" 
         }
      tr_hgb.appendChild(th_hgb);
      results1.appendChild(tr_hgb);

      th_hgbunit.innerHTML += "<b>" + doc.data().HGBUNIT + "</b>"; 
      tr_hgb.appendChild(th_hgbunit);
      results1.appendChild(tr_hgb);

      th_hgbnormal.innerHTML += "<b>" +  doc.data().HGBNORMAL + "</b>"; 
      tr_hgb.appendChild(th_hgbnormal);
      results1.appendChild(tr_hgb);
      //-----------------HCT Data--------------------/
      var hcta = doc.data().HCT; 
      var hctb = doc.data().HCTNORMAL.substr(7,6); 
      var hctc = doc.data().HCTNORMAL.substr(0,5); 
      if (parseFloat(hcta) > parseFloat(hctb))
         {
          th_hct.innerHTML += "<b>" + hcta + "&nbsp↑ </b>" 
         }
         else if (parseFloat(hcta) < parseFloat(hctc))
         {
          th_hct.innerHTML += "<b>" + hcta + "&nbsp↓ </b>" 
         }
         else 
         {
          th_hct.innerHTML += "<b>" + hcta + "</b>" 
         }
      tr_hct.appendChild(th_hct);
      results1.appendChild(tr_hct);

      th_hctunit.innerHTML += "<b>" + doc.data().HCTUNIT + "</b>" ; 
      tr_hct.appendChild(th_hctunit);
      results1.appendChild(tr_hct);
      
      th_hctnormal.innerHTML += "<b>" + doc.data().HCTNORMAL + "</b>" ; 
      tr_hct.appendChild(th_hctnormal);
      results1.appendChild(tr_hct);
      //-----------------MCV Data--------------------/
      var mcva = doc.data().MCV; 
      var mcvb = doc.data().MCVNORMAL.substr(7,6); 
      var mcvc = doc.data().MCVNORMAL.substr(0,5); 
      if (parseFloat(mcva) > parseFloat(mcvb))
         {
          th_mcv.innerHTML += "" + mcva + "&nbsp↑" 
         }
         else if (parseFloat(mcva) < parseFloat(mcvc))
         {
          th_mcv.innerHTML += "" + mcva + "&nbsp↓" 
         }
         else 
         {
          th_mcv.textContent = mcva; 
         }
      tr_mcv.appendChild(th_mcv);
      results1.appendChild(tr_mcv);

      th_mcvunit.innerHTML += doc.data().MCVUNIT; 
      tr_mcv.appendChild(th_mcvunit);
      results1.appendChild(tr_mcv);

      th_mcvnormal.innerHTML += doc.data().MCVNORMAL; 
      tr_mcv.appendChild(th_mcvnormal);
      results1.appendChild(tr_mcv);
      //-----------------MCH Data--------------------/
     var mcha = doc.data().MCH; 
      var mchb = doc.data().MCHNORMAL.substr(7,6); 
      var mchc = doc.data().MCHNORMAL.substr(0,5); 
      if (parseFloat(mcha) > parseFloat(mchb))
         {
          th_mch.innerHTML += "" + mcha + "&nbsp↑" 
         }
         else if (parseFloat(mcha) < parseFloat(mchc))
         {
          th_mch.innerHTML += "" + mcha + "&nbsp↓" 
         }
         else 
         {
          th_mch.textContent = mcha; 
         }
      tr_mch.appendChild(th_mch);
      results1.appendChild(tr_mch);
      th_mchunit.innerHTML += doc.data().MCHUNIT;
      tr_mch.appendChild(th_mchunit);
      results1.appendChild(tr_mch);
      th_mchnormal.innerHTML += doc.data().MCHNORMAL;
      tr_mch.appendChild(th_mchnormal);
      results1.appendChild(tr_mch);
      //-----------------MCHC Data--------------------/
      var mchca = doc.data().MCHC; 
      var mchcb = doc.data().MCHCNORMAL.substr(7,6); 
      var mchcc = doc.data().MCHCNORMAL.substr(0,5); 
      if (parseFloat(mchca) > parseFloat(mchcb))
         {
          th_mchc.innerHTML += "" + mchca + "&nbsp↑" 
         }
         else if (parseFloat(mchca) < parseFloat(mchcc))
         {
          th_mchc.innerHTML += "" + mchca + "&nbsp↓" 
         }
         else 
         {
          th_mchc.textContent = mchca; 
         }
      tr_mchc.appendChild(th_mchc);
      results1.appendChild(tr_mchc);

      th_mchcunit.innerHTML += doc.data().MCHCUNIT;
      tr_mchc.appendChild(th_mchcunit);
      results1.appendChild(tr_mchc);

      th_mchcnormal.innerHTML += doc.data().MCHCNORMAL;
      tr_mchc.appendChild(th_mchcnormal);
      results1.appendChild(tr_mchc);
      
      //-----------------PLT Data--------------------/
      var plta = doc.data().PLT; 
      var pltb = doc.data().PLTNORMAL.substr(7,6); 
      var pltc = doc.data().PLTNORMAL.substr(0,5); 
      if (parseFloat(plta) > parseFloat(pltb))
         {
          th_plt.innerHTML += "<b>" + plta + "&nbsp↑ </b>" 
         }
         else if (parseFloat(plta) < parseFloat(pltc))
         {
          th_plt.innerHTML += "<b>" + plta + "&nbsp↓ </b>" 
         }
         else 
         {
          th_plt.innerHTML += "<b>" + plta + "</b>"  
         }
      tr_plt.appendChild(th_plt);
      results1.appendChild(tr_plt);

      th_pltunit.innerHTML += "<b>" +  doc.data().PLTUNIT + "</b>"  ;
      tr_plt.appendChild(th_pltunit);
      results1.appendChild(tr_plt);

      th_pltnormal.innerHTML +=  "<b>" +   doc.data().PLTNORMAL  + "</b>" ;
      tr_plt.appendChild(th_pltnormal);
      results1.appendChild(tr_plt);
      
            //-----------------Blood Data--------------------/
      if (ad  == undefined)
      {
       th_blood.innerText = " "; 
      }
      else
      {
       th_blood.innerHTML += "<b>" + doc.data().BLOOD + "</b>"; 
      }
      tr_blood.appendChild(th_blood);
      results1.appendChild(tr_blood);
 
         }
}, false); 

function onClick() {
clicks += 1;
document.getElementById("clicks").innerHTML = clicks;

if (clicks >= 1) 
{
  document.getElementById("submitdata").disabled = true;
}
};

function myFunction3(){
firebase.firestore().enablePersistence()
.catch((err) => {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can o-nly be enabled
        // in one tab at a a time.
        console.log(err)
        // ...
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
        console.log(err)
    }
    else{
      console.log("yey")
    }
});


function getStories() {
    //--------------ID data---------------------//
var result = [];
db.collection("patientvalues").doc(username).collection("DATE").get().then(querySnapshot => {
  querySnapshot.forEach(doc => result.push(doc.id));
  result.forEach( function(item) { 
    const optionObj = document.createElement("option");
    optionObj.textContent = item;
    document.getElementById("dateselect").appendChild(optionObj);
  }); 
})
return result;
}
getStories();
}; 
function sidfunction() {
   //--------------ID data---------------------//

var result = [];
var x = document.getElementById("dateselect").value;
db.collection("patientvalues").doc(username).collection("DATE").doc(x).collection("SID").get().then(querySnapshot => {
  querySnapshot.forEach(doc => result.push(doc.id));
  result.forEach( function(item) { 
    const optionObj = document.createElement("option");
    optionObj.textContent = item;
    document.getElementById("sidselect").appendChild(optionObj);
  }); 
})
return result;

}
function printfunction() {
window.print();
}

function displayContinue() {
document.getElementById("button1").style.display = "none";

var contBtn = document.createElement("BUTTON");

contBtn.innerHTML = "Continue";

document.getElementById("button2").appendChild(contBtn);
var remove = document.getElementById("button2");

contBtn.onclick = function cont() {
  document.getElementById("button1").style.display = "inline";
  contBtn.parentNode.removeChild(contBtn);
}
}

