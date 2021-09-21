const spinnerChar = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

const spinner = function (input) {
  for (let i = 0; i < input.length; i++) {
    setTimeout(() => {
      process.stdout.write('\r' + input[i] + '   ')
    }, 200 * i);
  }
}

spinner(spinnerChar);