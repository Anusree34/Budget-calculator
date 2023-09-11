
    // var owner=JSON.parse(window.localStorage.getItem(housenum))
            // console.log(owner);
           


function signup()
{
    housenum= hnum.value
    owner=oname.value
    mem=members.value
    password1= pass1.value
    password2= pass2.value
    var house={
       housenum,
       owner,
       mem,
       password1,password2
    }
    console.log(house);
    if(housenum.length==0 ||owner.length==0||mem.length==0||password1.length==0||password2.length==0)
    {
        alert("Please fill all fields before submitting your form.")
    }
    else{
        if(password1!=password2){
            alert("password should be same")
        }
        else{
        alert("successfully completed registration")
        window.localStorage.setItem('housenum',JSON.stringify(house))
        window.localStorage.setItem(housenum,JSON.stringify(house))
        window.location="./index.html"
        }
    }
}



function login()
{
    Hnumber=houseNum.value
    loginPassword=pass.value
    console.log(Hnumber,loginPassword);
    if(Hnumber in window.localStorage)
    {
        house1=JSON.parse(localStorage.getItem(Hnumber));
        if(loginPassword==house1.password1)

        {
            alert("Login successful")  
            window.location="./home.html";   
        }
        else{
            alert("Incorrect password")
        }      
    }
    else{
        alert("Invalid User")
    }

}


var house1=JSON.parse(localStorage.getItem('housenum'))
rolling.innerHTML=`<marquee behavior="" direction="right" ><h3>welcome ${house1.owner}  and family</h3></marquee>`
text.innerHTML=`<h2>Hai ${house1.owner} ,Track your spending...</h2>`


function logout()
{
    window.location="./index.html"
}

var balance=0;
function add()
{
    description=desc.value
    uincome=parseFloat(income.value)
    // const income=parseFloat(uincome.value)
    console.log(balance);
    if(uincome>0)
    {
        balance+=uincome;
        console.log(balance);

        htmlData=`<tr><td class="border border-2">${description}</td>
        <td class="border border-2 ">${uincome}</td>
        <td class="border border-2">${balance}</td>
        </tr>`
        tbody.innerHTML+=htmlData

        exp1=window.localStorage.getItem('expense')
        if(exp1){
            result.innerHTML=`${balance-exp1}`
        }
        else{
        result.innerHTML=`${balance}`
        }

        usaving=balance-exp
        if(usaving<10000)
        {
            bal.style.color="red"
        }
        else{
            bal.style.color="green"
        }
        window.localStorage.setItem('balance',balance)
    }

    else{
        alert("Please enter a valid income")
    }
    
}

var balance1=0
function expense()
{
    description=descri.value
    uexpense=parseFloat(exp.value)
    // const income=parseFloat(uincome.value)
    console.log(balance1);
    if(uexpense>0)
    {
        balance1+=uexpense;
        console.log(balance1);

        htmlData=`<tr><td class="border border-2">${description}</td>
        <td class="border border-2 ">${uexpense}</td>
        <td class="border border-2">${balance1}</td>
        </tr>`
        tbody2.innerHTML+=htmlData
        
        ubalance= window.localStorage.getItem('balance')
        result.innerHTML=`${ubalance-balance1}`
        usaving=ubalance-balance1
        if(usaving<10000)
        {
            bal.style.color="red"
        }
        else{
            bal.style.color="green"
        }
       window.localStorage.setItem('expense',balance1)
    }

    else{
        alert("Please enter a valid amount")
    }
    
}

