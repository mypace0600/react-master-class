//styled component에 대해서 

html 태그를 생성하고 바로 css를 처리할 수 있음. 
${(props)=>props.SOMETHING} 을 사용하면 같은 태그를 중복적으로 사용하지 않아도 됨. 
styled(TAG) 를 사용하면 TAG의 모든 속성을 그대로 가져와서 사용 가능 as="TAG" 를 사용하면 TAG로 변경해서 사용할 수 있다. 
.attrs를 사용하면 atrribute를 추가할 수 있다. 
animation 도 따로 객체로 선언하고 설정할 수 있다. 
객체 내부에 따로 html tag를 따로 추가로 select 해서 스타일을 줄 수 있다. 
ThemeProvider 를 활용해서 해당 프로퍼티를 전체에 영향을 줄 수 있다. 
theme을 전체적으로 변경하기 위해서는 프로퍼티가 동일해야 한다.

//typescript에 대해서 
typescript 는 strongly-typed 라는 특징을 가지고 있다. 
실행하기 전 type을 확인하는 것이 특징임. 
javascript : const plus = (a,b) => a+b; 
typescript : const plus = (a:number,b:number) => a+b; 
console.log(plus(1,1)) => 2; 
console.log(plus("a",1)) => error; 
console.log(plus("1",1)) => error; 

browser 는 typescript를 이해하지 못한다. 다만 javascript만 이해할 수 있다. 
다행이도 typescript가 평범한 자바스크립트로 변환해서 실행해준다. 
그래서 실행 전에 type을 확인하고 실행하는 것이다.

npx create-react-app 내 앱 이름 --template typescript 
npm i --save-dev @types/styled-components 
npm i styled-components

interface를 통해서 안전하게 properties를 받을 수 있음.

optional을 적용시키고 싶으면 ? 를 뒤에 붙이면 된다.

const [count,setCount] = useState(1);
이렇게 하면 count의 타입은 number가 된다. 그리고 count에 값을 세팅할 때는 setCount(2); 이런식으로 작성할 수 있다.