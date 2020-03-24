const outlook = "Anders Ole Jensen (EAAAANJE) <eaaaanje@students.eaax.dk>; Bodil Pedersen (EAAABOPE) <eaaabope@students.eaax.dk>; Åse Andersen (EAAAIDAN) <eaaaasan@students.eaax.dk>; Mühl Svendsen (EAAAPESV) <eaaamusv@students.eaax.dk>";
let passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
let password = "12Hj";

console.log(passwordregex.test(password))

// var regex = /(?:^|; )(.+?) \(.+?<(.+?)>/g; // ?: er en 'non-capturing group'
const regex = /(^|; )(.+?) \(.+?<(.+?)>/g;
let matched;
while ((matched = regex.exec(outlook)) !== null){
    // console.log(matched[1] + " - " + matched[2]);
    console.log(matched[2] + " - " + matched[3]);
}
