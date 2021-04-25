let hasDocker: boolean;

const hasDockerEnv = () => {
	try {
		Deno.statSync('/.dockerenv');
		return true;
	} catch (_) {
		return false;
	}
}

const hasDockerCGroup = () => {
	try {
		const data = Deno.readFileSync("/proc/self/cgroup");
		return new TextDecoder("utf-8").decode(data).includes('docker')
	} catch (_) {
		return false;
	}
}

export function isDocker() {
  if (hasDocker === undefined) {
	  hasDocker = hasDockerEnv() || hasDockerCGroup();
  }
  return hasDocker;
}
