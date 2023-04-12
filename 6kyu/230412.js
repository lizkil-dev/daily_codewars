/* DESCRIPTION:
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck! */


function dup(s) {

let result = s.map(word => word.split('').filter((el, i, a) => el != a[i-1]).join(''))
console.log(result);

};

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"])//,['codewars','picaniny','hubububo']);
dup(["abracadabra","allottee","assessee"])//,['abracadabra','alote','asese']);
dup(["kelless","keenness"])//, ['keles','kenes']);
dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"])//, ['Wolomolo','flodoromonlighters','chuchchi']);
dup(["adanac","soonness","toolless","ppellee"])//, ['adanac','sones','toles','pele']);
dup(["callalloo","feelless","heelless"])//, ['calalo','feles','heles']);
dup(["putteellinen","keenness"])//, ['putelinen','kenes']);