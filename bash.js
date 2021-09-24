process.stdout.write("promt >");

process.stdin.on("data", (data) => {
  let cmd = data.toString().trim();
  if (cmd === "pwd") {
    cmd = process.cwd();
  }
  process.stdout.write("You typed: " + cmd);

  process.stdout.write("\nprompt > ");
});

//process.cwd >> returns working directoryç
