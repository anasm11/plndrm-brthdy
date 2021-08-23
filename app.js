const date=document.querySelector('#date');
const output=document.querySelector('#output');
const btn=document.querySelector('button');

function dateAllFormats(dateArr){
    var ddmmyyyy=dateArr[2]+dateArr[1]+dateArr[0];
    var mmddyyyy=dateArr[1]+dateArr[2]+dateArr[0];
    var yyyyddmm=dateArr[0]+dateArr[2]+dateArr[1];
    var yyyymmdd=dateArr[0]+dateArr[1]+dateArr[2];

    return [ddmmyyyy,mmddyyyy,yyyyddmm,yyyymmdd];
}

function isPal(dFA){

    for(let i=0;i<dFA.length;i++){
        let lo=0,hi=dFA[i].length-1;
        while(lo<hi){
            if(dFA[i][lo]!=dFA[i][hi])
                break;
            lo++;hi--;
        }
        if(lo==hi || lo>hi)return true;
    }
    return false;
}



btn.addEventListener('click',()=>{
    const dateArr=date.value.split('-');
    const dateFormatsArr=dateAllFormats(dateArr);

if(Number(dateArr[0])==0 || Number(dateArr[1])==0 || Number(dateArr[2])==0)output.innerHTML='pls enter date of birth'

else{
    let res= isPal(dateFormatsArr);

    if(res==true){
        output.innerHTML='🥳 Yaay! Your birthday is palindrome!';
    }
    else{
        output.innerHTML='No. Your birthday is not palindrome.';
    }
    }
})
