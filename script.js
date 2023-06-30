class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;

    const confirmation = prompt(
      `Do you want to perform the operation ${X} ${znak} ${Y}?`
    );
    if (confirmation === "yes" || confirmation === "y") {
      if (this.isValidOperator(znak)) {
        const result = this.calculate(X, Y, znak);
        console.log("Result: " + result);
      } else {
        console.log("Invalid operator!");
      }
    } else {
      this.input(obj);
    }
  }

  input(obj) {
    const X = parseFloat(prompt("Enter X:"));
    const Y = parseFloat(prompt("Enter Y:"));
    const znak = prompt("Enter operator:");

    const newObj = { X: X, Y: Y, znak };
    this.check(newObj);
  }

  isValidOperator(operator) {
    const isValidOperator = ["+", "-", "/", "*", "%"];
    return isValidOperator.includes(operator);
  }

  calculate(X, Y, znak) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "/":
        return X / Y;
      case "*":
        return X * Y;
      case "%":
        return X % Y;
      default:
        return NaN;
    }
  }
}
obj = { X: 12, Y: 3, znak: "-" };
p = new SuperMath();
p.check(obj);
