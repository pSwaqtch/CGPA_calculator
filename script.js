function calculateCGPA() {

    // Get the individual subject marks
    let a1 = parseInt(document.getElementById('a1').value ,10);
    let a2 = parseInt(document.getElementById('a2').value,10);
    let a3 = parseInt(document.getElementById('a3').value,10);
    let a4 = parseInt(document.getElementById('a4').value,10);
    let a5 = parseInt(document.getElementById('a5').value,10);
    let a6 = parseInt(document.getElementById('a6').value,10);
    let cr1=3  //cp


    let mm1=(a1+a3+ 0.6*a2)*0.3
    let mm2= (a4 + 0.6*a5)*0.3 
    let mm3 = (a6)*0.4

    let mm4= mm1+mm2+mm3
    console.log(mm4);

  let k1=  parseInt(displaySubjectGrade("CP",mm4),10);



    let b1 = parseInt(document.getElementById('b1').value ,10);
    let b2 = parseInt(document.getElementById('b2').value,10);
    let b3 = parseInt(document.getElementById('b3').value,10);
    let b4 = parseInt(document.getElementById('b4').value,10);
    let b5 = parseInt(document.getElementById('b5').value,10);
    let b6 = parseInt(document.getElementById('b6').value,10);
    let cr2=3  //iwp


    let mmm1=(b1+b3+ 0.6*b2)*0.3 
    let mmm2= (b4+ 0.6*b5)*0.3 
    let mmm3 = (b6)*0.4

    let mmm4= mmm1+mmm2+mmm3
    console.log(mmm4);

    let k2=  parseInt(displaySubjectGrade("IWP",mmm4),10);
    //console.log(k2+"pathakkkkk")




    let c1 = parseInt(document.getElementById('c1').value ,10);
    let c2 = parseInt(document.getElementById('c2').value,10);
    let c3 = parseInt(document.getElementById('c3').value,10);
    let c4 = parseInt(document.getElementById('c4').value,10);
    let c5 = parseInt(document.getElementById('c5').value,10);
    let c6 = parseInt(document.getElementById('c6').value,10);
    let cr3=3  //stats


    let i1=(c1+c3+ 0.6*c2)*0.3 
    let i2= (c4+ 0.6*c5)*0.3 
    let i3 = (c6)*0.4

    let i4= i1+i2+i3
    console.log(i4);
    let k3= parseInt(displaySubjectGrade("Statistics",i4),10);



    let d1 = parseInt(document.getElementById('d1').value ,10);
    let d2 = parseInt(document.getElementById('d2').value,10);
    let d3 = parseInt(document.getElementById('d3').value,10);
    let d4 = parseInt(document.getElementById('d4').value,10);
    let d5 = parseInt(document.getElementById('d5').value,10);
    let d6 = parseInt(document.getElementById('d6').value,10);
  
    let cr4=3  //ed

    let s1=(d1+d3+ 0.6*d2)*0.6
    let s2= (d4+ 0.6*(d5+d6))*0.4 
  

    let s3= s1+s2
    console.log(s3);
    let k4=  parseInt(displaySubjectGrade("ED",s3),10);


    let e1 = parseInt(document.getElementById('e1').value ,10);
    let e2 = parseInt(document.getElementById('e2').value,10);
    let e3 = parseInt(document.getElementById('e3').value,10);
    let e4 = parseInt(document.getElementById('e4').value,10);
    let cr5=3  // maths

    let m1=(e1+e3+ 0.6*e2)*0.6 + (e4)*0.4

console.log(m1);
let k5= parseInt(displaySubjectGrade("Maths",m1),10);

let f1 = parseInt(document.getElementById('f1').value ,10);
let f2 = parseInt(document.getElementById('f2').value,10);
let f3 = parseInt(document.getElementById('f3').value,10);
let f4 = parseInt(document.getElementById('f4').value,10);
   
    let cr6=3  //written communication
   
    let m2=(f1+f3+ 0.6*f2)*0.6 + (f4)*0.4

    console.log(m2);
    let k6=  parseInt(displaySubjectGrade("WrittenCommunication",m2),10);


let g1 = parseInt(document.getElementById('g1').value ,10);
let g2 = parseInt(document.getElementById('g2').value,10);
let g3 = parseInt(document.getElementById('g3').value,10);
let g4 = parseInt(document.getElementById('g4').value,10);
  
    let cr7=3  // Contemporary India
 

    let m3=(g1+g3+ 0.6*g2)*0.6 + (g4)*0.4

    console.log(m3);
    

    let k7= parseInt(displaySubjectGrade("ContemporaryIndia",m3),10);

    // Display the result
    let cgpa = (((k1+k2+k3+k4+k5+k6+k7)/7)).toFixed(2)
    console.log(k7)

    document.getElementById('result').innerText =`CGPA : ${cgpa}`;
   
}


function displaySubjectGrade(subject, marks) {
    let grade, points;

    if (marks >= 91) {
        grade = 'O';
        points = '10';
    } else if (marks >= 81) {
        grade = 'A+';
        points = '9';
    } else if (marks >= 71) {
        grade = 'A';
        points = '8';
    } else if (marks >= 61) {
        grade = 'B+';
        points = '7';
    } else if (marks >= 51) {
        grade = 'B';
        points = '6';
    } else if (marks >= 41) {
        grade = 'C+';
        points = '5';
    } else if (marks >= 31) {
        grade = 'C';
        points = '4';
    } else {
        grade = 'IF';
        points = '0';
    }
   
    mark = marks.toFixed(2)
   // console.log(`Grade in ${subject}: ${grade}`);
   document.getElementById(`${subject}`).value = `${grade}`;
   document.getElementById(`${subject}i`).value = `${points} : ${mark}`;

   return points;
}
