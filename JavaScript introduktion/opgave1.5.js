
function primeFactorsTo(max)
{
    let store  = [];
    let primes = [];

    for (let i = 2; i <= max; ++i)
    {
        if (!store [i])
        {
            primes.push(i);
            for (let j = i; j <= max; j += i)
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

console.log(primeFactorsTo(113));