function miniCompiler(code) {
  let number = 0;
  let output = [];
  const codeA = code.split("");

  codeA.forEach((el) => {
    if (el === "&") output.push(number);
    if (el === "#") number++;
    if (el === "@") number--;
    if (el === "*") number = number * number;
  });

  return output.join("");
}
