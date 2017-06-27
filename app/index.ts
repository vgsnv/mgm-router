import * as css from './main.less';

console.log(`<button class="${css.button}" >click me</button>`);

interface HelloWorld{
  hello: string;
  world: string;
}

const Hello = (props: HelloWorld)=>{
  console.log(`${props.hello} ${props.world}`);
}

Hello({
  hello: 'Hello',
  world: 'world!!!'
});