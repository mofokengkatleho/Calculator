function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Calculator extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      previous: undefined,
      current: '0',
      operation: undefined });_defineProperty(this, "handleClick",



    e => {
      const { current, previous } = this.state;
      const { innerText } = e.target;

      switch (innerText) {
        case 'AC':{
            this.setState({
              current: '0' });

            break;
          }

        case '=':{
            const evaluated = eval(current);
            this.setState({
              current: evaluated });

            break;
          }

        case '.':{
            const splitted = current.split(/[\+\-\*\/]/);
            const last = splitted.slice(-1)[0];

            if (!last.includes('.')) {
              this.setState({
                current: current + '.' });

            }

            break;
          }

        default:{
            let e = undefined;
            if (ops.includes(innerText)) {
              if (ops.includes(previous) && innerText !== '-') {
                const lastNumberIdx = current.split('').reverse().
                findIndex(char => char !== ' ' && nums.includes(+char));
                e = current.slice(0, current.length - lastNumberIdx) + ` ${innerText} `;
              } else {
                e = `${current} ${innerText} `;
              }
            } else {
              e = current === '0' ? innerText : current + innerText;
            }

            this.setState({
              current: e });

          }}


      this.setState({
        previous: innerText });


    });}

  render() {
    const { currentNumber, current } = this.state;

    return /*#__PURE__*/(
      React.createElement("div", { className: "calculator" }, /*#__PURE__*/
      React.createElement("div", { id: "display", className: "display" },
      current), /*#__PURE__*/


      React.createElement("div", { className: "keys-container" }, /*#__PURE__*/
      React.createElement("button", {
        className: "big-h light-grey ac",
        onClick: this.handleClick,
        id: "clear" }, "AC"),




      nums.map((num) => /*#__PURE__*/
      React.createElement("button", {
        className: `dark-grey ${num === 0 && 'big-h'}`,
        key: num,
        onClick: this.handleClick,
        id: ids[num] },

      num)), /*#__PURE__*/



      React.createElement("button", {
        className: "light-grey",
        onClick: this.handleClick,
        id: "decimal" }, ".")), /*#__PURE__*/




      React.createElement("div", { className: "operations-container" },
      ops.map((op) => /*#__PURE__*/
      React.createElement("button", {
        className: "mint",
        key: op,
        onClick: this.handleClick,
        id: ids[op] },

      op)), /*#__PURE__*/



      React.createElement("button", {
        className: "mint",
        onClick: this.handleClick,
        id: "equals" }, "="))));






  }}


const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ['/', '*', '-', '+'];
const ids = {
  7: 'seven',
  8: 'eight',
  9: 'nine',
  4: 'four',
  5: 'five',
  6: 'six',
  1: 'one',
  2: 'two',
  3: 'three',
  0: 'zero',
  '/': 'divide',
  '*': 'multiply',
  '-': 'subtract',
  '+': 'add' };


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById('root'));