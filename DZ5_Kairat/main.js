const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const restart = document.querySelector('.restart')
const rez = document.getElementById('count')
let c = 0;
plus.onclick = (e) =>
{
    c++
    if (c > 0) {
        rez.textContent = c
        rez.style.color = 'green'
    }
}
minus.onclick = (e) =>
{
    if (c > 0) {
        c--
        rez.textContent = c
        rez.style.color = 'red'
    }
}
restart.onclick = () =>
{
    c = 0;
    rez.textContent = c;
    rez.style.color = 'rgb(47, 78, 132)'
}