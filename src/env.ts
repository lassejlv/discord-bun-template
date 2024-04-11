async function EnvChecker() {
  const requiredEnv = [process.env.TOKEN];
  const missingEnv = requiredEnv.filter((env) => !env);

  if (missingEnv.length) {
    console.error(`Missing environment variables!`);
    process.exit(1);
  }

  return true;
}

export { EnvChecker };
