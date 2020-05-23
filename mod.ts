let hasDocker: boolean;

const hasDockerEnv = async () => {
	try {
		Deno.statSync('/.dockerenv');
		return true;
	} catch (_) {
		return false;
	}
}

const hasDockerCGroup = async () => {
	try {
    const data = Deno.readFileSync("/proc/self/cgroup");
		return new TextDecoder("utf-8").decode(data).includes('docker')
	} catch (_) {
		return false;
	}
}

export async function isDocker() {
  if (hasDocker === undefined) {
	  hasDocker = await hasDockerEnv() || await hasDockerCGroup();
  }
  return hasDocker;
}
