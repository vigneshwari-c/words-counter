let input=document.getElementById('input');
let button=document.getElementById('button');
let button1=document.getElementById('button1');
button.addEventListener('click',()=>{
    let arr=input.value;
    let word_count=arr.split(" ");
    // let n=arr.length;
    // let count=1;
    // for(let i=0;i<n;i++){
    //     if(arr[i]==" " && arr[n-1]!=" ")
    //     count++;
    // }
    // document.getElementById('result').innerHTML="Total number of word counts:"+count;
    document.getElementById('result').innerHTML="Total number of word counts:"+word_count.length;
    input.value=' ';
})

button1.addEventListener('click',()=>{
    let arr=input.value;
    arr.split(" ");
    let n=arr.length;
    document.getElementById('result').innerHTML="Total number of characteres counts:"+n;
    input.value=' ';
})
