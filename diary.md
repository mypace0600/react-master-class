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



///
CSS 초기화 : https://github.com/zacanger/styled-reset/blob/master/src/index.ts
폰트 : https://fonts.google.com/
색상 : https://flatuicolors.com/palette/gb

///
코인정보 : https://api.coinpaprika.com/v1/coins
코인아이콘 : https://coinicons-api.vercel.app/
코인가격 : https://api.coinpaprika.com/v1/ticker

///
Link에 state를 넣어서 정보를 넘기는 경우 useLocation을 통해서 interface에 해당하는 정보를 가져올 수 있는데, 이럴 경우 링크의 url에 직접 접근하게 되면 에러가 난다. 이유는 state를 공유받지 않았기 때문이다.
그래서 이러한 점을 해소하기 위한 방법이 필요해보인다.

///
useEffect 를 사용하면 fetch로 데이터를 가지고 와서 useState로 만들어둔 state에 setting을 할 수 있다.

///
Nested Router는 말 그대로 중첩된 Router이다.
Router로 불러온 컴포넌트 내부에 Router가 하나 더 존재하는 형태인 것이다. 
다만, 상위 컴포넌트의 URL값을 공유하고, 상태값을 주소값이 일부 대처하는 정도의 특징을 보인다.


///
react query
fetching, caching, 서버 데이터와의 동기화를 지원해주는 라이브러리
1. React Query는 React Application에서 서버 상태를 불러오고, 캐싱하며, 지속적으로 동기화하고 업데이트하는 작업을 도와주는 라이브러리입니다.
2. 복잡하고 장황한 코드가 필요한 다른 데이터 불러오기 방식과 달리 React Component 내부에서 간단하고 직관적으로 API를 사용할 수 있습니다.
3. 더 나아가 React Query에서 제공하는 캐싱, Window Focus Refetching 등 다양한 기능을 활용하여 API 요청과 관련된 번잡한 작업 없이 “핵심 로직”에 집중할 수 있습니다.

[npm i -D @tanstack/react-query-devtools]
ReactQueryDevtools를 통해서 화면에서 query를 확인할 수 있고 cache에 무엇을 저장했는지도 볼 수 있다.