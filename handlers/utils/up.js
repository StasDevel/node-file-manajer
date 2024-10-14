function up() {
  try {
    if (process.env.HOME !== process.cwd()) {
      process.chdir("..");
    }
    console.log(`You are currently in ${process.cwd()}`);
  } catch (err) {
    console.error(`Operation failed`);
  }
}

exports.up = up;
