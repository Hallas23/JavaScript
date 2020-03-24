const outlook = "Anders Jensen (EAAAANJE) <eaaaanje@students.eaax.dk>; Bodil Pedersen (EAAABOPE) <eaaabope@students.eaax.dk>; Åse Andersen (EAAAIDAN) <eaaaasan@students.eaax.dk>; Mühl Svendsen (EAAAPESV) <eaaamusv@students.eaax.dk>";


let regex = /(^|; )(.+?) \(.+?<(.+?)>/g

let matched;

while ((matched = regex.exec(outlook)) !== null) {
    console.log(matched[2] + " - " + matched[3]);
}