const mobileString = `
.bench{
    position: relative;
    width:9.4rem;
    height: 2.15rem;
    box-shadow: 0.1rem 0.1rem 0 #333;
    margin: 0.5rem auto;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items:flex-end;
    background-color:#FFFFFF ;
}

.head{
    position: relative;
    width:2rem;
    height: 1.5rem;
    border-radius: 50% 50% 0.55rem 0.55rem;
    overflow: hidden;
    z-index: 3;
}
.ear{
    z-index: 2;
}
.eye{
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    bottom: 0.45rem;
    left:0.85rem;
    border-radius: 50%;
    background-color: #444444;
}
.eye:nth-child(2n-1){
    left:0.35rem;
}
.eye:nth-child(2n){
    left:1.35rem;
}

.cheek{
    position: absolute;
    width: 0.3rem;
    height: 0.15rem;
    background-color: #DC88C2;
    border-radius: 50%;
    bottom: 0.25rem;
    left:0.03rem;
}
.cheek:nth-child(2n-1){
    left:1.67rem;
}

.mouth{
    position: absolute;
    width: 0.3rem;
    height: 0.1rem;
    bottom: 0.5rem;
    left:50%;
    transform: translateX(-50%);
    border-radius: 50%;
}
.mouth::before,.mouth::after{
    content: '';
    position: absolute;
    height: 100%;
    width: 50%;
    border-radius: 50%;
    border-bottom: solid 0.03rem #444;
}
.mouth::after{
    left:50%;
}

.arm:nth-child(2n-1){
    transform: rotate(-10deg);
    left:0.5rem;
    bottom:-0.3rem;
}
.arm:nth-child(2n){
    transform: rotate(10deg);
    left: 1.25rem;
    bottom:-0.3rem;
}
.electric{
    position: relative;
}
.electric .head{
    background-color: #FFF069;
}
.electric .cheek{
    position: absolute;
    width: 0.45rem;
    height: 0.45rem;
    background-color: #FF5757;
    border-radius: 50%;
    bottom: -0.02rem;
    left: -0.14rem;
}
.electric .cheek:nth-child(2){
    left: 1.7rem;
}
.electric .arm{
    position: absolute;
    width: 0.25rem;
    height: 0.4rem;
    border-bottom-left-radius: 50% 0.4rem;
    border-bottom-right-radius: 50% 0.4rem;
    background-color: #FFF069;
}
.electric .ear{
    position: absolute;
    width: 0.35rem;
    height: 0.8rem;
    transform: rotate(-15deg);
    top: -0.3rem;
    left: 0.05rem;
    border-radius:50%  50% 0 0;
    background-color: #FFF069;
    overflow: hidden;
    transform-origin: center bottom;
    transition: 0.3s;
}
.electric .ear:nth-child(2){
    left: 1.6rem;
    transform: rotate(15deg);
}
.electric .ear div{
    position: absolute;
    background-color: #444444;
    width: 1rem;
    height: 0.25rem;
}
.electric .tail{
    position: absolute;
    width: 0.2rem;
    height: 1rem;
    background-color: #FFE81D;
    left: 0.875rem;
    top: -0.5rem;
    border-radius: 0.06rem;
    transform: rotate(-25deg);
}
.electric .tail div{
    position: absolute;
    width: 0.5rem;
    height: 0.32rem;
    border-radius: 0.06rem;
    background-color: #FFE81D;
}
.electric:hover .tail{
    animation: waveTail 1.2s infinite linear;
}
.electric:hover .ear{
    transform: rotate(-30deg);
}
.electric:hover .ear:nth-child(2) {
    transform: rotate(30deg);
}
.water{
    position: relative;
}
.water .head{
    background-color: #4EE4FF;
}
.water .arm{
    position: absolute;
    width: 0.25rem;
    height: 0.4rem;
    border-bottom-left-radius: 50% 0.4rem;
    border-bottom-right-radius: 50% 0.4rem;
    background-color: #4EE4FF;
}
.water .tail {
    position: absolute;
    left: 0.6rem;
    top: -0.4rem;
    width: 0.6rem;
    height: 1rem;
    border-radius: 50% 0.5rem 0 0;
    border-left: 1rem solid #1bdcff;
    transform: rotate(20deg);
    transform-origin: center bottom;
    transition: 0.3s;
}
.water .tail div{
    position: absolute;
    width: 0.6rem;
    height: 0.6rem;
    left: -0.8rem;
    top: -0.05rem;
    border-radius: 50% 50% 50% 0;
    background-color: #1bdcff;
    border-left: 0.1rem solid #05C8EB ;
    border-top: 0.05rem solid #05C8EB ;
}
.water .tail div div{
    position: absolute;
    width: 0.6rem;
    height: 0.6rem;
    left: 0.15rem;
    top: -0.05rem;
    border-radius: 50% 50% 50% 0;
    background-color: #1bdcff;
    border-left: 0.1rem solid #05C8EB ;
    border-top: 0.05rem solid #05C8EB ;
}
.water:hover .tail{
    transform: rotate(10deg);
}


.fire{
    position: relative;
}
.fire .head{
    background-color: #FF9147;
}
.fire .arm{
    position: absolute;
    width: 0.25rem;
    height: 0.4rem;
    border-bottom-left-radius: 50% 0.4rem;
    border-bottom-right-radius: 50% 0.4rem;
    background-color: #FF9147;
}
.fire .tail{
    position: absolute;
    left: 0.8rem;
    top: -0.4rem;
    column-width: 0.6rem;
    height: 1rem;
    border-radius: 0.5rem;
    border-left: 0.4rem solid #ff7314;
}
.fire .tail>div{
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    background-color: #FFF069;
    top: -0.4rem;
    left: -0.1rem;
    border-radius: 50% 0 50% 50%;
}
.fire .tail>div>div{
    position: absolute;
    width: 0.2rem;
    height: 0.2rem;
    background-color: #FF5757;
    border-radius: 35% 0 35% 50%;
    left: 0.12rem;
    top: 0.2rem;
}
.fire:hover .tail{
    transform: rotate(-15deg);
    transition: 1s;
}
.fire:hover .tail div:first-child{
    animation: flicker 0.6s infinite linear;
}
.fire:hover .tail div:nth-child(2){
    animation: flicker 0.2s infinite linear;
}


.grass{
    position: relative;
}
.grass .head{
    background-color: #56FFE9;
}
.grass .head div:nth-child(6){
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    background-color: #00BCA4 ;
    border-radius: 20% 0.05rem 20% 100%;
    left: 0.55rem;
    top: 0.35rem;
    z-index:3;
    transform: rotate(-20deg);
}
.grass .head div:nth-child(7){
    position: absolute;
    width: 0.2rem;
    height: 0.2rem;
    background-color: #00BCA4 ;
    border-radius: 20% 0.05rem 20% 100%;
    left: 1.4rem;
    top: 0.2rem;
    z-index:3;
    transform: rotate(15deg);
}
.grass .arm{
    position: absolute;
    width: 0.25rem;
    height: 0.4rem;
    border-bottom-left-radius: 50% 0.4rem;
    border-bottom-right-radius: 50% 0.4rem;
    background-color: #56FFE9;
}
.grass .ear{
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    transform: rotate(-30deg);
    top: -0.1rem;
    left: 0.05rem;
    border-radius:50%  50% 0 0;
    background-color: #56FFE9;
    overflow: hidden;
    transform-origin: center bottom;
    transition: 0.3s;
}
.grass .ear:nth-child(2){
    left: 1.45rem;
    transform: rotate(30deg);
}
.grass .tail div:first-child{
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #00D6BA ;
    transform: rotate(45deg);
    top: -0.2rem;
    left: 0.25rem;
    border-radius:0 50% 100% 50%;
    z-index: 1;
}
.grass .tail div:nth-child(2){
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    background-color: #00BCA4 ;
    transform: rotate(60deg);
    border-radius:0 50% 100% 50%;
    top: -0.35rem;
    left: 0.3rem;
}
.grass .tail div:nth-child(3){
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    background-color: #00BCA4 ;
    transform: rotate(30deg);
    border-radius:0 50% 100% 50%;
    top: -0.35rem;
    left: 0.9rem;
}
.grass:hover .ear{
    transform: rotate(-40deg);
}
.grass:hover .ear:nth-child(2) {
    transform: rotate(40deg);
}
.grass:hover .tail div:nth-child(2){
    transform: rotate(50deg);
    transition: 1s;
}
.grass:hover .tail div:nth-child(3){
    transform: rotate(40deg);
    transition: 1s;
}
`

export default mobileString;