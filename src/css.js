const string = `/*把精灵宝贝放置的位置安排好*/
.bench{
    position: relative;
    width:940px;
    height: 215px;
    box-shadow: 5px 5px 0 #333;
    margin: 50px auto;
    padding-left: 60px;
    padding-right: 60px;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items:flex-end;
}
/*先画好精灵们的眼睛嘴巴和脸颊*/
.head{
    position: relative;
    width:200px;
    height: 155px;
    border-radius: 50% 50% 55px 55px;
    overflow: hidden;
    z-index: 3;
}
.ear{
    z-index: 2;
}
.eye{
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 45px;
    left:85px;
    border-radius: 50%;
    background-color: #444444;
}
.eye:nth-child(2n-1){
    left:35px;
}
.eye:nth-child(2n){
    left:135px;
}

.cheek{
    position: absolute;
    width: 30px;
    height: 15px;
    background-color: #DC88C2;
    border-radius: 50%;
    bottom: 25px;
    left:3px;
}
.cheek:nth-child(2n-1){
    left:167px;
}

.mouth{
    position: absolute;
    width: 30px;
    height: 10px;
    bottom: 50px;
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
    border-bottom: solid 3px #444;
}
.mouth::after{
    left:50%;
}

.arm:nth-child(2n-1){
    transform: rotate(-10deg);
    left:50px;
    bottom:-30px;
}
.arm:nth-child(2n){
    transform: rotate(10deg);
    left:125px;
    bottom:-30px;
}
.electric{
    position: relative;
}
.electric .head{
    background-color: #FFF069;
}
.electric .cheek{
    position: absolute;
    width: 45px;
    height: 45px;
    background-color: #FF5757;
    border-radius: 50%;
    bottom: -2px;
    left:-14px;
}
.electric .cheek:nth-child(2){
    left:170px;
}
.electric .arm{
    position: absolute;
    width: 25px;
    height: 40px;
    border-bottom-left-radius: 50% 40px;
    border-bottom-right-radius: 50% 40px;
    background-color: #FFF069;
}
.electric .ear{
    position: absolute;
    width: 35px;
    height: 80px;
    transform: rotate(-15deg);
    top:-30px;
    left:5px;
    border-radius:50%  50% 0 0;
    background-color: #FFF069;
    overflow: hidden;
    transform-origin: center bottom;
    transition: 0.3s;
}
.electric .ear:nth-child(2){
    left:160px;
    transform: rotate(15deg);
}
.electric .ear div{
    position: absolute;
    background-color: #444444;
    width: 100px;
    height: 25px;
}
.electric .tail{
    position: absolute;
    width: 20px;
    height: 100px;
    background-color: #FFE81D;
    left:87.5px;
    top:-50px;
    border-radius: 6px;
    transform: rotate(-25deg);
}
.electric .tail div{
    position: absolute;
    width:50px;
    height: 32px;
    border-radius: 6px;
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
    width: 25px;
    height: 40px;
    border-bottom-left-radius: 50% 40px;
    border-bottom-right-radius: 50% 40px;
    background-color: #4EE4FF;
}
.water .tail {
    position: absolute;
    left: 60px;
    top: -40px;
    width: 60px;
    height: 100px;
    border-radius: 50% 50px 0 0;
    border-left: 100px solid #1bdcff;
    transform: rotate(20deg);
    transform-origin: center bottom;
    transition: 0.3s;
}
.water .tail div{
    position: absolute;
    width: 60px;
    height: 60px;
    left: -80px;
    top:-5px;
    border-radius: 50% 50% 50% 0;
    background-color: #1bdcff;
    border-left:10px solid #05C8EB ;
    border-top:5px solid #05C8EB ;
}
.water .tail div div{
    position: absolute;
    width: 60px;
    height: 60px;
    left: 15px;
    top:-5px;
    border-radius: 50% 50% 50% 0;
    background-color: #1bdcff;
    border-left:10px solid #05C8EB ;
    border-top:5px solid #05C8EB ;
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
    width: 25px;
    height: 40px;
    border-bottom-left-radius: 50% 40px;
    border-bottom-right-radius: 50% 40px;
    background-color: #FF9147;
}
.fire .tail{
    position: absolute;
    left: 80px;
    top: -40px;
    column-width: 60px;
    height: 100px;
    border-radius: 50px;
    border-left: 40px solid #ff7314;
}
.fire .tail>div{
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #FFF069; 
    top:-40px;
    left:-10px;
    border-radius: 50% 0 50% 50%;
}
.fire .tail>div>div{
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #FF5757;
    border-radius: 35% 0 35% 50%;
    left:12px;
    top:20px;
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
    width: 30px;
    height: 30px;
    background-color: #00BCA4 ;
    border-radius: 20% 5px 20% 100%;
    left:55px;
    top:35px;
    z-index:3;
    transform: rotate(-20deg);
}
.grass .head div:nth-child(7){
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #00BCA4 ;
    border-radius: 20% 5px 20% 100%;
    left:140px;
    top:20px;
    z-index:3;
    transform: rotate(15deg);
}
.grass .arm{
    position: absolute;
    width: 25px;
    height: 40px;
    border-bottom-left-radius: 50% 40px;
    border-bottom-right-radius: 50% 40px;
    background-color: #56FFE9;
}
.grass .ear{
    position: absolute;
    width: 50px;
    height: 50px;
    transform: rotate(-30deg);
    top:-10px;
    left: 5px;
    border-radius:50%  50% 0 0;
    background-color: #56FFE9;
    overflow: hidden;
    transform-origin: center bottom;
    transition: 0.3s;
}
.grass .ear:nth-child(2){
    left:145px;
    transform: rotate(30deg);
}
.grass .tail div:first-child{
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: #00D6BA ;
    transform: rotate(45deg);
    top:-20px;
    left: 25px;
    border-radius:0 50% 100% 50%;
    z-index: 1;
}
.grass .tail div:nth-child(2){
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: #00BCA4 ;
    transform: rotate(60deg);
    border-radius:0 50% 100% 50%;
    top:-35px;
    left: 30px;
}
.grass .tail div:nth-child(3){
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: #00BCA4 ;
    transform: rotate(30deg);
    border-radius:0 50% 100% 50%;
    top:-35px;
    left: 90px;
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

export default string;