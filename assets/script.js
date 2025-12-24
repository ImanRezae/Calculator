const equal = document.querySelector("#equal");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const persent = document.querySelector("#per");
const del = document.querySelector("#del");
const clear = document.querySelector("#C");
const ded = document.querySelector("#de");
const multiPlication = document.querySelector("#mp");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const zero = document.querySelector("#zero");
const auditor = document.querySelector("#aud");
const input = document.querySelector("#input");
const negative = document.querySelector("#neg");


function type() {

  one.addEventListener("click", () => {
    append("1");
    one.classList.remove('scale');
    setTimeout(() => {
  one.classList.add('scale')
  } , 0);
  });

  two.addEventListener("click", () => {
    append("2");
    two.classList.remove('scale');
    setTimeout(() => {
  two.classList.add('scale')
  } , 0);
  });

  three.addEventListener("click", () => {
    append("3");
    three.classList.remove('scale');
    setTimeout(() => {
  three.classList.add('scale')
  } , 0);
  });

  four.addEventListener("click", () => {
    append("4");
    four.classList.remove('scale');
    setTimeout(() => {
  four.classList.add('scale')
  } , 0);
  });

  five.addEventListener("click", () => {
    append("5");
    five.classList.remove('scale');
    setTimeout(() => {
  five.classList.add('scale')
  } , 0);
  });

  six.addEventListener("click", () => {
    append("6");
    six.classList.remove('scale');
    setTimeout(() => {
  six.classList.add('scale')
  } , 0);
  });

  seven.addEventListener("click", () => {
    append("7");
    seven.classList.remove('scale');
    setTimeout(() => {
  seven.classList.add('scale')
  } , 0);
  });

  eight.addEventListener("click", () => {
    append("8");
    eight.classList.remove('scale');
    setTimeout(() => {
  eight.classList.add('scale')
  } , 0);
  });

  nine.addEventListener("click", () => {
    append("9");
    nine.classList.remove('scale');
    setTimeout(() => {
  nine.classList.add('scale')
  } , 0);
  });

  plus.addEventListener("click", () => {
    append("+");
    plus.classList.remove('scale');
    setTimeout(() => {
  plus.classList.add('scale')
  } , 0);
  });

  minus.addEventListener("click", () => {
    append("-");
    minus.classList.remove('scale');
    setTimeout(() => {
  minus.classList.add('scale')
  } , 0);
  });

  multiPlication.addEventListener("click", () => {
    append("*");
    multiPlication.classList.remove('scale');
    setTimeout(() => {
  multiPlication.classList.add('scale')
  } , 0);
  });

  ded.addEventListener("click", () => {
    append("/");
    ded.classList.remove('scale');
    setTimeout(() => {
  ded.classList.add('scale')
  } , 0);
  });

  auditor.addEventListener("click", () => {
    setAudator(".");
    auditor.classList.remove('scale');
    setTimeout(() => {
  auditor.classList.add('scale')
  } , 0);
  });

  clear.addEventListener("click", () => {
    input.value = "";
    clear.classList.remove('scale');
    setTimeout(() => {
  clear.classList.add('scale')
  } , 0);
  });

  del.addEventListener("click" , ()=> {
        deleteChar();
        del.classList.remove('scale');
    setTimeout(() => {
  del.classList.add('scale')
  } , 0);
  });

  persent.addEventListener("click" , ()=> {
    append("%");
    persent.classList.remove('scale');
    setTimeout(() => {
  persent.classList.add('scale')
  } , 0);
  })

  zero.addEventListener("click", () => {
    append("0");
    zero.classList.remove('scale');
    setTimeout(() => {
  zero.classList.add('scale')
  } , 0);
  });
  if (equal) {
    equal.addEventListener('click' , ()=> {
        try {
            const expression = input.value;
            let result = eval(expression);
            input.value = result;
            equal.classList.remove('scale');
    setTimeout(() => {
  equal.classList.add('scale')
  } , 0);
        } catch (error) {
            input.value = error;
        }
        
    })
  }

  negative.addEventListener("click" , ()=> {
    semmetrical();
    negative.classList.remove('scale');
    setTimeout(() => {
  negative.classList.add('scale')
  } , 0);
  })
}

function append(char) {
  const oprators = "+-/*%";
  if (input.value.length >= 15) return;

  const lastChar = input.value.slice(-1);
  if (oprators.includes(char) && oprators.includes(lastChar) ) {
    return;
  }
  input.value += char;
}

function deleteChar() {
  let charLen = [...input.value];
  
  let char = charLen.pop();
  input.value = charLen.join("");
  
}

function semmetrical() {
  if (input.value <= 0) {
    input.value = -input.value;
  }else if (input.value >= 0) {
    input.value = -input.value;
  }
}

function setAudator(char) {
  const aud = ".";
  let lastChar = input.value.slice(-1);
  if (aud.includes(char) && aud.includes(lastChar)) {
    return;
  }
  input.value += char;
}


type();
